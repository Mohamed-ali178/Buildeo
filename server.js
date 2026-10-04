const http = require("http");
const https = require("https");
const fs = require("fs");
const net = require("net");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const tls = require("tls");

const PORT = Number(process.env.PORT || 5173);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const DATA = path.resolve(process.env.DATA_DIR || path.join(ROOT, "data"));
const AVATARS = path.join(DATA, "avatars");
const USERS_FILE = path.join(DATA, "users.json");
const SESSIONS_FILE = path.join(DATA, "sessions.json");
const WORKSPACES = path.join(DATA, "workspaces");
const CONFIG_FILE = path.join(ROOT, "email-config.json");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
};

fs.mkdirSync(AVATARS, { recursive: true });
fs.mkdirSync(WORKSPACES, { recursive: true });

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2));
}

function loadUsers() {
  return readJson(USERS_FILE, []);
}

function saveUsers(users) {
  writeJson(USERS_FILE, users);
}

function loadSessions() {
  const now = Date.now();
  const sessions = readJson(SESSIONS_FILE, []).filter((s) => s.expires > now);
  writeJson(SESSIONS_FILE, sessions);
  return sessions;
}

function saveSessions(sessions) {
  writeJson(SESSIONS_FILE, sessions);
}

function loadConfig() {
  const file = readJson(CONFIG_FILE, { smtp: {}, resendApiKey: "", brevoApiKey: "" });
  const smtp = file.smtp || {};
  return {
    smtp: {
      host: process.env.SMTP_HOST || smtp.host || "",
      port: Number(process.env.SMTP_PORT || smtp.port || 465),
      user: process.env.SMTP_USER || smtp.user || "",
      pass: process.env.SMTP_PASS || smtp.pass || "",
      from: process.env.SMTP_FROM || smtp.from || "",
      fromName: process.env.SMTP_FROM_NAME || smtp.fromName || "Buildeo Site Management",
    },
    resendApiKey: process.env.RESEND_API_KEY || file.resendApiKey || "",
    brevoApiKey: process.env.BREVO_API_KEY || file.brevoApiKey || "",
  };
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

function checkPassword(password, stored) {
  const [salt, hash] = String(stored || "").split(":");
  if (!salt || !hash) return false;
  const check = crypto.scryptSync(password, salt, 32).toString("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(check, "hex"));
  } catch {
    return false;
  }
}

function sha(value) {
  return crypto.createHash("sha256").update(String(value)).digest("hex");
}

function newCode() {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
}

function publicUser(user) {
  return {
    id: user.id,
    prenom: user.prenom,
    nom: user.nom,
    username: user.username || "",
    email: user.email,
    telephone: user.telephone,
    countryCode: user.countryCode || "+33",
    poste: user.poste,
    entreprise: user.entreprise,
    emailVerified: !!user.emailVerified,
    photo: user.hasPhoto ? `/avatars/${user.id}.jpg?t=${user.photoStamp || 0}` : "",
  };
}

function savePhoto(id, dataUrl) {
  const match = String(dataUrl || "").match(/^data:image\/\w+;base64,(.+)$/);
  if (!match) return false;
  fs.writeFileSync(path.join(AVATARS, `${id}.jpg`), Buffer.from(match[1], "base64"));
  return true;
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const sessions = loadSessions();
  sessions.push({ tokenHash: sha(token), userId, expires: Date.now() + 30 * 24 * 60 * 60 * 1000 });
  saveSessions(sessions);
  return token;
}

function userFromRequest(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return null;
  const session = loadSessions().find((s) => s.tokenHash === sha(token));
  if (!session) return null;
  return loadUsers().find((u) => u.id === session.userId) || null;
}

function workspacePath(userId) {
  const id = String(userId || "").replace(/[^a-zA-Z0-9-]/g, "");
  if (!id) return null;
  return path.join(WORKSPACES, `${id}.json`);
}

function loadWorkspace(userId) {
  const file = workspacePath(userId);
  if (!file || !fs.existsSync(file)) return null;
  const data = readJson(file, null);
  if (!data || typeof data !== "object") return null;
  return data;
}

function saveWorkspace(userId, payload) {
  const file = workspacePath(userId);
  if (!file) return false;
  const tmp = `${file}.tmp`;
  writeJson(tmp, payload);
  fs.renameSync(tmp, file);
  return true;
}

function json(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > 20_000_000) {
        reject(new Error("too large"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPhone(phone) {
  return String(phone || "").replace(/\D/g, "").length >= 8;
}

function validPassword(password) {
  return String(password || "").length >= 8 && /[a-zA-ZÀ-ÿ]/.test(password) && /\d/.test(password);
}

function mailCopy(lang, prenom, code) {
  const texts = {
    fr: {
      subject: "Buildeo — code de vérification",
      text: `Bonjour ${prenom},\n\nVotre code de vérification Buildeo est : ${code}\n\nIl est valable 15 minutes.\nSi vous n'avez pas créé de compte, ignorez cet e-mail.\n`,
    },
    en: {
      subject: "Buildeo — verification code",
      text: `Hello ${prenom},\n\nYour Buildeo verification code is: ${code}\n\nIt expires in 15 minutes.\nIf you did not create an account, ignore this email.\n`,
    },
    de: {
      subject: "Buildeo — Bestätigungscode",
      text: `Hallo ${prenom},\n\nIhr Buildeo-Bestätigungscode lautet: ${code}\n\nEr ist 15 Minuten gültig.\nWenn Sie kein Konto erstellt haben, ignorieren Sie diese E-Mail.\n`,
    },
  };
  return texts[lang] || texts.fr;
}

const insecureAgent = new https.Agent({ rejectUnauthorized: false });

function httpsJson(url, payload, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: "POST",
        agent: insecureAgent,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": Buffer.byteLength(data),
          "User-Agent": "Buildeo/1.0",
          ...headers,
        },
      },
      (res) => {
        let body = "";
        res.on("data", (c) => (body += c));
        res.on("end", () => resolve({ status: res.statusCode, body }));
      }
    );
    req.on("error", reject);
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error("timeout"));
    });
    req.write(data);
    req.end();
  });
}

function attachSmtp(socket) {
  let buf = "";
  const waiters = [];
  socket.on("data", (chunk) => {
    buf += chunk.toString("utf8");
    drain();
  });
  function takeReply() {
    let i = 0;
    while (i < buf.length) {
      const nl = buf.indexOf("\n", i);
      if (nl === -1) return null;
      const line = buf.slice(i, nl).replace(/\r$/, "");
      i = nl + 1;
      if (!/^\d{3}[ -]/.test(line)) continue;
      if (line[3] === " ") {
        const raw = buf.slice(0, i);
        buf = buf.slice(i);
        return { code: line.slice(0, 3), buf: raw };
      }
    }
    return null;
  }
  function drain() {
    while (waiters.length) {
      const reply = takeReply();
      if (!reply) return;
      const waiter = waiters.shift();
      clearTimeout(waiter.timer);
      waiter.resolve(reply);
    }
  }
  function expect() {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("smtp timeout")), 20000);
      waiters.push({ resolve, reject, timer });
      drain();
    });
  }
  return { expect };
}

function encodeSubject(subject) {
  return `=?UTF-8?B?${Buffer.from(String(subject), "utf8").toString("base64")}?=`;
}

function rfcDate() {
  return new Date().toUTCString().replace(/GMT$/, "+0000");
}

function dotStuff(text) {
  return String(text)
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "\r\n")
    .replace(/^\./gm, "..");
}

function smtpFromEmail(config) {
  const raw = String(config.from || config.user || "");
  const m = raw.match(/<([^>]+)>/);
  return (m ? m[1] : raw).trim();
}

function smtpFromHeader(config) {
  const email = smtpFromEmail(config);
  const name = String(config.fromName || "Buildeo Site Management").replace(/[\r\n"]/g, "");
  return `"${name}" <${email}>`;
}

function openSmtpSocket(host, port) {
  if (Number(port) === 587) {
    return new Promise((resolve, reject) => {
      const raw = net.connect(587, host);
      raw.setTimeout(20000);
      raw.once("connect", () => resolve(raw));
      raw.once("error", reject);
      raw.once("timeout", () => {
        raw.destroy();
        reject(new Error("smtp timeout"));
      });
    });
  }
  return new Promise((resolve, reject) => {
    const socket = tls.connect(Number(port) || 465, host, { servername: host });
    socket.setTimeout(20000);
    socket.once("secureConnect", () => resolve(socket));
    socket.once("error", reject);
    socket.once("timeout", () => {
      socket.destroy();
      reject(new Error("smtp timeout"));
    });
  });
}

async function upgradeToTls(socket, host) {
  return new Promise((resolve, reject) => {
    const secure = tls.connect({ socket, servername: host });
    secure.setTimeout(20000);
    secure.once("secureConnect", () => resolve(secure));
    secure.once("error", reject);
    secure.once("timeout", () => {
      secure.destroy();
      reject(new Error("smtp timeout"));
    });
  });
}

async function sendSmtp(config, to, subject, text, port = config.port) {
  const host = config.host;
  const user = String(config.user || "").trim();
  const pass = String(config.pass || "").replace(/\s+/g, "");
  const fromEmail = smtpFromEmail(config);
  if (!host || !user || !pass) throw new Error("smtp missing");
  let socket = await openSmtpSocket(host, port);
  let smtp = attachSmtp(socket);
  const greet = await smtp.expect();
  if (greet.code !== "220") throw new Error(greet.buf);
  socket.write("EHLO buildeo.app\r\n");
  const ehlo = await smtp.expect();
  if (ehlo.code !== "250") throw new Error(ehlo.buf);
  if (Number(port) === 587) {
    socket.write("STARTTLS\r\n");
    const start = await smtp.expect();
    if (start.code !== "220") throw new Error(start.buf);
    socket = await upgradeToTls(socket, host);
    smtp = attachSmtp(socket);
    socket.write("EHLO buildeo.app\r\n");
    const ehlo2 = await smtp.expect();
    if (ehlo2.code !== "250") throw new Error(ehlo2.buf);
  }
  socket.write("AUTH LOGIN\r\n");
  const auth = await smtp.expect();
  if (auth.code !== "334") throw new Error(auth.buf);
  socket.write(`${Buffer.from(user).toString("base64")}\r\n`);
  const userRes = await smtp.expect();
  if (userRes.code !== "334") throw new Error(userRes.buf);
  socket.write(`${Buffer.from(pass).toString("base64")}\r\n`);
  const passRes = await smtp.expect();
  if (passRes.code !== "235") throw new Error(passRes.buf.slice(0, 80));
  socket.write(`MAIL FROM:<${fromEmail}>\r\n`);
  const mailFrom = await smtp.expect();
  if (mailFrom.code !== "250") throw new Error(mailFrom.buf);
  socket.write(`RCPT TO:<${to}>\r\n`);
  const rcpt = await smtp.expect();
  if (rcpt.code !== "250") throw new Error(rcpt.buf);
  socket.write("DATA\r\n");
  const data = await smtp.expect();
  if (data.code !== "354") throw new Error(data.buf);
  const messageId = `<${crypto.randomUUID()}@buildeo.app>`;
  const body = dotStuff(text);
  socket.write(
    `From: ${smtpFromHeader(config)}\r\n` +
      `To: ${to}\r\n` +
      `Reply-To: ${fromEmail}\r\n` +
      `Subject: ${encodeSubject(subject)}\r\n` +
      `Date: ${rfcDate()}\r\n` +
      `Message-ID: ${messageId}\r\n` +
      `MIME-Version: 1.0\r\n` +
      `Content-Type: text/plain; charset=utf-8\r\n` +
      `Content-Transfer-Encoding: 8bit\r\n` +
      `\r\n${body}\r\n.\r\n`
  );
  const done = await smtp.expect();
  socket.write("QUIT\r\n");
  socket.end();
  if (done.code !== "250") throw new Error(done.buf);
}

async function sendVerificationEmail(user, code, lang) {
  const { subject, text } = mailCopy(lang, user.prenom, code);
  const config = loadConfig();
  const errors = [];

  if (config.smtp?.host && config.smtp?.user && config.smtp?.pass) {
    const ports = [Number(config.smtp.port || 465), 587];
    for (const port of [...new Set(ports)]) {
      try {
        await sendSmtp(config.smtp, user.email, subject, text, port);
        return "smtp";
      } catch (err) {
        errors.push(`smtp:${port}:${String(err.message || err).slice(0, 120)}`);
      }
    }
  } else {
    errors.push("smtp:not-configured");
  }

  if (config.resendApiKey) {
    try {
      const from = smtpFromHeader(config.smtp || {});
      const res = await httpsJson(
        "https://api.resend.com/emails",
        { from, to: [user.email], subject, text },
        { Authorization: `Bearer ${config.resendApiKey}` }
      );
      if (res.status >= 200 && res.status < 300) return "resend";
      errors.push(`resend:${res.status}:${res.body}`);
    } catch (err) {
      errors.push(`resend:${err.message}`);
    }
  }

  if (config.brevoApiKey) {
    try {
      const res = await httpsJson(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { name: "Buildeo", email: config.smtp?.from || "noreply@buildeo.app" },
          to: [{ email: user.email, name: user.prenom }],
          subject,
          textContent: text,
        },
        { "api-key": config.brevoApiKey }
      );
      if (res.status >= 200 && res.status < 300) return "brevo";
      errors.push(`brevo:${res.status}:${res.body}`);
    } catch (err) {
      errors.push(`brevo:${err.message}`);
    }
  }

  throw new Error(errors.join(" | ") || "send failed");
}

function assignCode(user) {
  const code = newCode();
  user.codeHash = sha(code);
  user.codeExpires = Date.now() + 15 * 60 * 1000;
  user.codeTries = 0;
  return code;
}

async function issueCode(user, lang) {
  if (user.lastSent && Date.now() - user.lastSent < 60 * 1000 && user.codeHash) {
    const err = new Error("auth.error.wait");
    err.key = "auth.error.wait";
    throw err;
  }
  const code = assignCode(user);
  try {
    const via = await sendVerificationEmail(user, code, lang);
    user.lastSent = Date.now();
    console.log(`Verification email sent to ${user.email} via ${via}`);
  } catch (err) {
    delete user.codeHash;
    delete user.codeExpires;
    delete user.codeTries;
    console.error("Email send failed:", err.message);
    const fail = new Error("auth.error.send");
    fail.key = "auth.error.send";
    throw fail;
  }
}

function findUser(login) {
  const q = String(login || "").trim().toLowerCase();
  if (!q) return null;
  return loadUsers().find((u) => u.email === q || (u.username && u.username.toLowerCase() === q)) || null;
}

function consumeCode(user, code) {
  if (!user || !user.codeHash) return "auth.error.code";
  if (Date.now() > user.codeExpires) return "auth.error.expired";
  user.codeTries = (user.codeTries || 0) + 1;
  if (user.codeTries > 8) return "auth.error.expired";
  if (sha(String(code || "").trim()) !== user.codeHash) return "auth.error.code";
  delete user.codeHash;
  delete user.codeExpires;
  delete user.codeTries;
  return null;
}

async function handleApi(req, res, url) {
  if (url.pathname === "/api/health" && req.method === "GET") {
    const smtp = loadConfig().smtp || {};
    return json(res, 200, {
      ok: true,
      smtp: {
        host: !!smtp.host,
        user: !!smtp.user,
        pass: !!smtp.pass,
        from: !!smtpFromEmail(smtp),
      },
    });
  }
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    });
    return res.end();
  }

  if (req.method === "GET" && url.pathname === "/api/me") {
    const user = userFromRequest(req);
    if (!user) return json(res, 401, { error: "auth.error.bad" });
    return json(res, 200, { user: publicUser(user) });
  }

  if (req.method === "GET" && url.pathname === "/api/workspace") {
    const user = userFromRequest(req);
    if (!user?.emailVerified) return json(res, 401, { error: "auth.error.bad" });
    const stored = loadWorkspace(user.id);
    if (!stored) return json(res, 200, { workspace: null });
    return json(res, 200, { workspace: stored.state || stored.workspace || null, prefs: stored.prefs || null, updatedAt: stored.updatedAt || 0 });
  }

  let body = {};
  if (req.method === "POST") {
    try {
      body = JSON.parse((await readBody(req)) || "{}");
    } catch {
      return json(res, 400, { error: "auth.error.server" });
    }
  }

  const email = String(body.email || "").trim().toLowerCase();
  const login = String(body.login || body.email || "").trim();
  const lang = body.lang || "fr";

  if (url.pathname === "/api/register" && req.method === "POST") {
    const prenom = String(body.prenom || "").trim();
    const nom = String(body.nom || "").trim();
    const username = String(body.username || "").trim();
    const telephone = String(body.telephone || "").trim();
    const countryCode = String(body.countryCode || "+33").trim();
    const poste = String(body.poste || "").trim();
    const entreprise = String(body.entreprise || "").trim();
    const password = String(body.password || "");
    if (!prenom || !nom || !username || !poste || !entreprise) return json(res, 400, { error: "auth.error.required" });
    if (username.length < 3) return json(res, 400, { error: "auth.error.required" });
    if (!validEmail(email)) return json(res, 400, { error: "auth.error.email" });
    if (!validPhone(telephone)) return json(res, 400, { error: "auth.error.phone" });
    if (!validPassword(password)) return json(res, 400, { error: "auth.error.weak" });

    const users = loadUsers();
    if (users.some((u) => u.email === email)) return json(res, 409, { error: "auth.error.exists" });
    if (users.some((u) => u.username && u.username.toLowerCase() === username.toLowerCase())) {
      return json(res, 409, { error: "auth.error.user" });
    }
    const user = {
      id: crypto.randomUUID(),
      emailVerified: false,
      prenom,
      nom,
      username,
      email,
      telephone,
      countryCode,
      poste,
      entreprise,
      passwordHash: hashPassword(password),
      photoStamp: Date.now(),
      hasPhoto: false,
    };
    if (String(body.photo || "").startsWith("data:image/")) {
      user.hasPhoto = savePhoto(user.id, body.photo);
    }
    try {
      await issueCode(user, lang);
    } catch (err) {
      return json(res, 502, { error: err.key || "auth.error.send" });
    }
    users.push(user);
    saveUsers(users);
    return json(res, 200, { ok: true, needsVerify: true, email });
  }

  if (url.pathname === "/api/login" && req.method === "POST") {
    const password = String(body.password || "");
    const user = findUser(login);
    if (!user || !checkPassword(password, user.passwordHash)) return json(res, 401, { error: "auth.error.bad" });
    if (!user.emailVerified) {
      const users = loadUsers();
      const live = users.find((u) => u.id === user.id);
      try {
        await issueCode(live, lang);
        saveUsers(users);
      } catch (err) {
        saveUsers(users);
        if (err.key !== "auth.error.wait") return json(res, 502, { error: err.key || "auth.error.send" });
      }
      return json(res, 200, { needsVerify: true, email: user.email });
    }
    return json(res, 200, { token: createSession(user.id), user: publicUser(user) });
  }

  if (url.pathname === "/api/verify" && req.method === "POST") {
    const users = loadUsers();
    const user = users.find((u) => u.email === email);
    const error = consumeCode(user, body.code);
    if (error) {
      saveUsers(users);
      return json(res, 400, { error });
    }
    user.emailVerified = true;
    saveUsers(users);
    return json(res, 200, { token: createSession(user.id), user: publicUser(user) });
  }

  if (url.pathname === "/api/resend" && req.method === "POST") {
    const users = loadUsers();
    const user = users.find((u) => u.email === email);
    if (!user) return json(res, 404, { error: "auth.error.bad" });
    if (user.emailVerified) return json(res, 200, { ok: true });
    try {
      await issueCode(user, lang);
    } catch (err) {
      saveUsers(users);
      return json(res, 502, { error: err.key || "auth.error.send" });
    }
    saveUsers(users);
    return json(res, 200, { ok: true, email });
  }

  if (url.pathname === "/api/forgot" && req.method === "POST") {
    if (!validEmail(email)) return json(res, 400, { error: "auth.error.email" });
    const users = loadUsers();
    const user = users.find((u) => u.email === email);
    if (!user) return json(res, 404, { error: "auth.error.email" });
    try {
      await issueCode(user, lang);
    } catch (err) {
      saveUsers(users);
      return json(res, 502, { error: err.key || "auth.error.send" });
    }
    saveUsers(users);
    return json(res, 200, { ok: true, email });
  }

  if (url.pathname === "/api/reset" && req.method === "POST") {
    const password = String(body.password || "");
    if (!validPassword(password)) return json(res, 400, { error: "auth.error.weak" });
    const users = loadUsers();
    const user = users.find((u) => u.email === email);
    const error = consumeCode(user, body.code);
    if (error) {
      saveUsers(users);
      return json(res, 400, { error });
    }
    user.passwordHash = hashPassword(password);
    user.emailVerified = true;
    saveUsers(users);
    return json(res, 200, { token: createSession(user.id), user: publicUser(user) });
  }

  if (url.pathname === "/api/logout" && req.method === "POST") {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (token) saveSessions(loadSessions().filter((s) => s.tokenHash !== sha(token)));
    return json(res, 200, { ok: true });
  }

  if (url.pathname === "/api/workspace" && req.method === "POST") {
    const user = userFromRequest(req);
    if (!user?.emailVerified) return json(res, 401, { error: "auth.error.bad" });
    const nextState = body.state;
    if (!nextState || typeof nextState !== "object" || Array.isArray(nextState)) {
      return json(res, 400, { error: "auth.error.server" });
    }
    const prefs = body.prefs && typeof body.prefs === "object" ? {
      lang: ["fr", "en", "de"].includes(body.prefs.lang) ? body.prefs.lang : "fr",
      theme: body.prefs.theme === "light" ? "light" : "dark",
      sound: String(body.prefs.sound || "chime").slice(0, 32),
      notifs: !!body.prefs.notifs,
    } : undefined;
    saveWorkspace(user.id, { state: nextState, prefs, updatedAt: Date.now() });
    return json(res, 200, { ok: true });
  }

  return json(res, 404, { error: "not found" });
}

function safeJoin(root, pathname) {
  const file = path.normalize(path.join(root, pathname));
  const base = path.normalize(root);
  if (!file.toLowerCase().startsWith(base.toLowerCase())) return null;
  return file;
}

function isPublicAsset(pathname) {
  const p = pathname.replace(/\\/g, "/");
  if (p === "/index.html" || p === "/app.js" || p === "/styles.css" || p === "/sw.js" || p === "/manifest.json") return true;
  if (p.startsWith("/icons/") && !p.includes("..")) return true;
  return false;
}

function lanUrls() {
  const urls = [`http://127.0.0.1:${PORT}`];
  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const a of addrs || []) {
      const v4 = a.family === "IPv4" || a.family === 4;
      if (v4 && !a.internal) urls.push(`http://${a.address}:${PORT}`);
    }
  }
  return urls;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url);

    if (url.pathname.startsWith("/avatars/")) {
      const id = path.basename(url.pathname).replace(/\.jpg$/i, "").replace(/[^a-zA-Z0-9-]/g, "");
      const file = path.join(AVATARS, `${id}.jpg`);
      if (!fs.existsSync(file)) {
        res.writeHead(404);
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "image/jpeg", "Cache-Control": "no-store" });
      return fs.createReadStream(file).pipe(res);
    }

    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";
    if (!isPublicAsset(pathname)) {
      res.writeHead(404);
      return res.end("Not found");
    }
    const file = safeJoin(ROOT, pathname);
    if (!file) {
      res.writeHead(403);
      return res.end();
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Not found");
      }
      const ext = path.extname(file);
      res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
      res.end(data);
    });
  } catch (err) {
    console.error(err);
    if (!res.headersSent) json(res, 500, { error: "auth.error.server" });
  }
});

server.listen(PORT, HOST, () => {
  for (const url of lanUrls()) console.log(url);
  const cfg = loadConfig();
  const smtp = cfg.smtp || {};
  console.log(`SMTP host=${smtp.host ? "yes" : "no"} user=${smtp.user ? "yes" : "no"} pass=${smtp.pass ? "yes" : "no"}`);
  if (!smtp.host || !smtp.user || !smtp.pass) {
    console.warn("Buildeo: SMTP incomplet — remplis SMTP_HOST, SMTP_USER, SMTP_PASS sur l’hébergeur.");
  }
});
