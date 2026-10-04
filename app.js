const STORAGE_KEY = "conducteur-v1";
const PREFS_KEY = "conducteur-prefs-v1";
const AUTH_KEY = "conducteur-auth-v1";
const SESSION_KEY = "conducteur-session-v1";
const REMEMBER_KEY = "conducteur-remember-v1";
const WORKSPACE_OWNER_KEY = "conducteur-workspace-owner-v1";
const DAY_FIRED_KEY = "buildeo-day-fired-v1";

const I18N = {
  fr: {
    "brand.subtitle": "Gestion de chantiers",
    "nav.home": "Accueil",
    "nav.chantier": "Mes chantiers",
    "nav.dashboard": "Tableau de bord",
    "nav.chantiers": "Mes chantiers",
    "nav.taches": "Tâches",
    "nav.calendrier": "Planning",
    "nav.historique": "Historique",
    "nav.devis": "Devis",
    "nav.livraison": "Livraison",
    "nav.cr": "Compte rendu",
    "nav.finance": "Suivi financier",
    "nav.galerie": "Galerie",
    "nav.sousTraitants": "Sous-traitants",
    "nav.equipe": "Équipe",
    "title.dashboard": "Accueil",
    "title.chantiers": "Mes chantiers",
    "title.taches": "Tâches",
    "title.calendrier": "Planning",
    "title.historique": "Historique",
    "title.devis": "Devis",
    "nav.suivi": "Suivi / avancement",
    "title.suivi": "Suivi / avancement des travaux",
    "title.livraison": "Livraison",
    "title.cr": "Compte rendu",
    "title.finance": "Suivi financier",
    "title.galerie": "Galerie photos",
    "title.sousTraitants": "Entreprises sous-traitantes",
    "title.historiqueSite": "Historique — {name}",
    "title.equipe": "Équipe",
    "title.detail": "Fiche chantier",
    "search.placeholder": "Rechercher un chantier, un client…",
    "prefs.language": "Langue",
    "prefs.theme": "Interface",
    "prefs.themeDark": "Sombre (actuel)",
    "prefs.themeLight": "Clair (blanc)",
    "prefs.notifs": "Notifications",
    "prefs.notifsOn": "On",
    "prefs.notifsOff": "Off",
    "prefs.sound": "Son de rappel",
    "sound.chime": "Carillon",
    "sound.beep": "Bip",
    "sound.urgent": "Urgent",
    "sound.off": "Sans son",
    "btn.testSound": "Tester le son",
    "btn.close": "Fermer",
    "field.eventSound": "Son de la notification",
    "visit.siteOf": "Chantier : {name}",
    "visit.sent": "Envoyé",
    "visit.view": "Consulter",
    "visit.edit": "Modifier",
    "visit.locked": "Compte rendu envoyé — consultation uniquement",
    "btn.newSite": "+ Nouveau chantier",
    "btn.newTask": "+ Nouvelle tâche",
    "btn.newMember": "+ Nouveau membre",
    "btn.newEvent": "+ Événement",
    "btn.newIssue": "+ Problème / blocage",
    "btn.newContact": "+ Contact",
    "btn.newVisit": "+ Visite",
    "btn.newLivraison": "+ Livraison",
    "btn.newFinance": "+ Ligne financière",
    "btn.newSt": "+ Sous-traitant",
    "btn.addAlert": "+ Ajouter une alerte",
    "btn.addPresent": "+ Ajouter une personne",
    "btn.uploadPhoto": "Télécharger",
    "btn.takePhoto": "Prendre une photo",
    "btn.pdf": "Télécharger PDF",
    "btn.notif": "Activer les notifications",
    "btn.cancel": "Annuler",
    "btn.save": "Enregistrer",
    "btn.add": "Ajouter",
    "btn.edit": "Modifier",
    "btn.delete": "Supprimer",
    "btn.back": "← Retour",
    "btn.remove": "Retirer",
    "btn.resolve": "Marquer résolu",
    "btn.logout": "Déconnexion",
    "auth.login": "Connexion",
    "auth.register": "S’enregistrer",
    "auth.enter": "Entrer",
    "auth.create": "Créer le compte",
    "auth.email": "E-mail",
    "auth.username": "Nom d’utilisateur",
    "auth.loginId": "E-mail ou nom d’utilisateur",
    "auth.forgot": "Mot de passe oublié ?",
    "auth.showPass": "Afficher le mot de passe",
    "auth.hidePass": "Masquer le mot de passe",
    "auth.forgot.submit": "Envoyer le code",
    "auth.newPassword": "Nouveau mot de passe",
    "auth.reset.submit": "Changer le mot de passe",
    "auth.password": "Mot de passe",
    "auth.confirm": "Confirmer le mot de passe",
    "auth.poste": "Poste",
    "auth.company": "Entreprise",
    "auth.firstname": "Prénom",
    "auth.lastname": "Nom",
    "auth.phone": "Téléphone",
    "auth.photo": "Photo de profil (facultatif)",
    "auth.photoHint": "Sans photo, tes initiales s’affichent",
    "auth.remember": "Enregistrer ce compte sur cet appareil",
    "auth.code": "Code à 6 chiffres",
    "auth.verify.lead": "Un e-mail a été envoyé à {email}. Saisis uniquement le code reçu par mail pour activer le compte (regarde aussi les spams). Sans ce mail, le compte reste bloqué.",
    "auth.verify.submit": "Vérifier l’e-mail",
    "auth.resend": "Renvoyer le code",
    "auth.back": "Retour",
    "auth.sent": "Nouveau code envoyé",
    "auth.error.bad": "E-mail ou mot de passe incorrect",
    "auth.error.exists": "Un compte existe déjà avec cet e-mail",
    "auth.error.mismatch": "Les mots de passe ne correspondent pas",
    "auth.error.short": "Le mot de passe doit contenir au moins 8 caractères",
    "auth.error.weak": "Le mot de passe doit contenir une lettre et un chiffre",
    "auth.error.email": "E-mail invalide",
    "auth.error.phone": "Numéro de téléphone invalide",
    "auth.error.photo": "Ajoute une photo de profil",
    "auth.error.send": "Impossible d’envoyer l’e-mail de vérification. Réessaie.",
    "auth.error.code": "Code incorrect",
    "auth.error.expired": "Code expiré. Renvoie un nouveau code.",
    "auth.error.unverified": "Vérifie d’abord ton e-mail",
    "auth.error.server": "Serveur indisponible. Relance l’application.",
    "auth.error.wait": "Attends une minute avant de renvoyer le code",
    "auth.error.required": "Remplis tous les champs",
    "auth.error.user": "Ce nom d’utilisateur existe déjà",
    "stat.sites": "Chantiers",
    "stat.active": "En cours",
    "stat.openTasks": "Tâches du jour / par chantier",
    "stat.critical": "Priorité critique",
    "stat.blocked": "Blocages ouverts",
    "stat.weekLiv": "Livraison cette semaine",
    "stat.livToday": "Livraisons aujourd’hui",
    "stat.livTodayMsg": "Vous avez {n} livraison aujourd’hui",
    "stat.livTodayMsgMany": "Vous avez {n} livraisons aujourd’hui",
    "hello": "Bonjour {name},",
    "hello.role": "{poste} chez {entreprise}",
    "h.todayTodo": "À venir aujourd’hui",
    "h.seeAll": "Voir tout →",
    "h.todayTasks": "Tâches du jour",
    "empty.todayTasks": "Aucune tâche pour aujourd’hui",
    "weather.title": "Météo aujourd’hui",
    "weather.unavailable": "Météo indisponible",
    "weather.place": "{place}",
    "weather.clear": "Soleil",
    "weather.cloud": "Nuageux",
    "weather.fog": "Brouillard",
    "weather.rain": "Pluie",
    "weather.snow": "Neige",
    "weather.storm": "Orage",
    "h.photos": "Photos du projet",
    "btn.sitePhoto": "+ Ajouter des photos",
    "btn.changePhoto": "Ajouter des photos",
    "empty.photos": "Aucune photo de projet",
    "galerie.pickSite": "Choisis un chantier",
    "galerie.open": "Ouvrir la galerie",
    "field.email": "E-mail",
    "noEmail": "Pas d’e-mail",
    "field.orderDate": "Commande à faire pour le",
    "field.arrivalDate": "Date de livraison prévue",
    "dialog.livArrivee": "Date de livraison prévue",
    "liv.arriveeLead": "La commande « {title} » est passée. Indique la date de livraison prévue.",
    "liv.commandee": "Commandé",
    "liv.toOrder": "À commander",
    "liv.orderFor": "À commander pour le {date}",
    "liv.arriveOn": "Livraison prévue le {date}",
    "field.detail": "Détail de la commande",
    "field.responsables": "Responsables",
    "btn.addResp": "+ Ajouter une personne",
    "field.logo": "Logo de l’entreprise (optionnel)",
    "empty.resp": "Aucun responsable",
    "h.activeSites": "Chantiers actifs",
    "site.end": "Fin prévue : {date}",
    "site.openCount": "{n} tâche(s)",
    "h.team": "Équipe du chantier",
    "h.chef": "Chef de chantier",
    "h.teamMembers": "Membres d’équipe",
    "h.debrief": "Débrief des absences",
    "empty.today": "Rien de prévu aujourd’hui",
    "empty.chef": "Aucun chef de chantier",
    "empty.debrief": "Aucune absence enregistrée",
    "poste.chef": "Chef de chantier",
    "poste.membre": "Membre d’équipe",
    "field.poste": "Poste",
    "presence.date": "Présence du",
    "presence.present": "Présent",
    "presence.absent": "Absent",
    "presence.day": "JJ",
    "presence.month": "MM",
    "presence.year": "AAAA",
    "presence.pick": "Choisir une date",
    "debrief.line": "{name} est absent {n} jour(s)",
    "btn.setChef": "Définir comme chef",
    "h.siteTasks": "Tâches du chantier",
    "h.issues": "Problèmes / tâches bloquées",
    "h.contacts": "Personnes à contacter",
    "h.visits": "Visites de chantier",
    "h.dayEvents": "Événements du jour",
    "empty.sites": "Aucun chantier",
    "empty.tasks": "Aucune tâche",
    "empty.history": "Aucune tâche faite pour ce chantier",
    "empty.histCommandes": "Aucune commande pour ce chantier",
    "empty.histDevis": "Aucun devis validé pour ce chantier",
    "empty.devis": "Aucun devis",
    "devis.col.designation": "Désignation",
    "devis.col.qty": "Qté",
    "devis.col.unit": "Unité",
    "devis.col.pu": "Pu HT €",
    "devis.col.total": "Total HT €",
    "devis.totalHt": "Total HT",
    "devis.addLine": "+ Ligne",
    "devis.addTitle": "+ Titre de lot",
    "hist.pickSite": "Choisis un chantier",
    "hist.pickCat": "Choisis une catégorie",
    "hist.commandes": "Historique des commandes",
    "hist.taches": "Tâches gérées",
    "hist.devis": "Historique des devis",
    "hist.nCommandes": "{n} commande(s)",
    "hist.nTaches": "{n} tâche(s) gérée(s)",
    "hist.nDevis": "{n} devis validé(s)",
    "btn.newDevis": "+ Devis",
    "btn.validate": "Valider",
    "dialog.devisNew": "Nouveau devis",
    "dialog.devisEdit": "Modifier le devis",
    "devis.draft": "Brouillon",
    "devis.sent": "Envoyé au client",
    "devis.validated": "Validé par le client",
    "devis.sentOn": "Envoyé le {date}",
    "devis.validatedOn": "Validé par le client le {date}",
    "devis.preuve": "Preuve de validation",
    "devis.preuveFile": "Devis signé / retour du client (photo ou PDF)",
    "devis.preuveNote": "Comment tu l’as reçu",
    "devis.dialogPreuve": "Classer la validation client",
    "devis.openPreuve": "Voir la preuve",
    "devis.needPreuve": "Ajoute la photo ou le PDF que le client t’a renvoyé.",
    "btn.sendDevis": "Envoyer au client",
    "btn.clientOk": "Joindre la validation",
    "btn.applyDevis": "Créer commande / tâches / finance",
    "devis.nextHint": "Quand le client a validé : clique « Joindre la validation », puis tu pourras créer la commande, les tâches et la recette.",
    "devis.apply.title": "Créer à partir du devis",
    "devis.apply.lead": "Le client a validé « {title} ». Coche ce qui doit être créé, sans retaper.",
    "devis.apply.commande": "Créer une commande / livraison (titre, détail des lignes, chantier)",
    "devis.apply.tasks": "Créer {n} tâche(s) à partir des lignes",
    "devis.apply.finance": "Créer une recette de {money}",
    "devis.apply.done": "Déjà créé",
    "devis.apply.submit": "Créer",
    "devis.apply.none": "Coche au moins une action.",
    "devis.apply.noLines": "Aucune ligne de travaux à transformer en tâches.",
    "devis.apply.taskDate": "Planifier les tâches pour le",
    "devis.apply.needDate": "Choisis la date à laquelle tu veux planifier les tâches.",
    "devis.apply.commandeDate": "Planifier la commande pour le",
    "devis.apply.needCommandeDate": "Choisis la date à laquelle tu veux planifier la commande.",
    "devis.nSite": "{n} devis",
    "suivi.pickSite": "Choisis un chantier",
    "suivi.planning": "Planning des travaux",
    "suivi.expected": "Avancement prévu : {n}%",
    "suivi.actual": "Avancement réel : {n}%",
    "suivi.overdue": "{n} tâche(s) en retard",
    "suivi.pace.onTime": "En date",
    "suivi.pace.late": "En retard",
    "suivi.pace.ahead": "En avance",
    "empty.suiviTasks": "Aucune tâche planifiée",
    "empty.members": "Aucun membre",
    "empty.events": "Aucun événement ce jour",
    "empty.issues": "Aucun problème signalé",
    "empty.contacts": "Aucun contact",
    "empty.visits": "Aucune visite enregistrée",
    "empty.livraisons": "Aucune livraison",
    "empty.cr": "Aucun compte rendu",
    "empty.finances": "Aucune ligne financière",
    "empty.sousTraitants": "Aucune entreprise sous-traitante",
    "count.sites": "{n} chantier(s)",
    "count.openTasks": "{n} tâche(s) ouverte(s)",
    "count.members": "{n} membre(s)",
    "count.events": "{n} événement(s)",
    "progress": "{n}% des tâches · budget {money}",
    "progressDone": "{n}% des tâches réalisées",
    "noAddress": "Adresse non renseignée",
    "noSite": "Sans chantier",
    "noRole": "Rôle non renseigné",
    "noPhone": "Pas de téléphone",
    "due": "échéance",
    "fromTo": "Du {start} au {end} · {money}",
    "dialog.siteNew": "Nouveau chantier",
    "dialog.siteEdit": "Modifier le chantier",
    "dialog.taskNew": "Nouvelle tâche",
    "dialog.taskEdit": "Modifier la tâche",
    "dialog.memberNew": "Nouveau membre",
    "dialog.eventNew": "Nouvel événement",
    "dialog.issueNew": "Problème / tâche bloquée",
    "dialog.contactNew": "Personne à contacter",
    "dialog.visitNew": "Visite de chantier",
    "field.siteName": "Nom du chantier",
    "field.client": "Client",
    "field.address": "Adresse",
    "field.start": "Début",
    "field.end": "Fin prévue",
    "field.status": "Statut",
    "field.budget": "Budget (€)",
    "field.notes": "Notes",
    "field.title": "Titre",
    "field.site": "Chantier",
    "field.fournisseur": "Fournisseur",
    "field.montant": "Montant (€)",
    "field.libelle": "Libellé",
    "field.metier": "Métier / lot",
    "field.company": "Entreprise",
    "field.type": "Type",
    "liv.attendue": "Attendue",
    "liv.livree": "Livrée",
    "liv.retard": "En retard",
    "fin.depense": "Dépense",
    "fin.recette": "Recette",
    "fin.solde": "Solde",
    "dialog.livraisonNew": "Nouvelle livraison",
    "dialog.financeNew": "Nouvelle ligne financière",
    "dialog.stNew": "Entreprise sous-traitante",
    "field.siteOptional": "Chantier (optionnel)",
    "field.due": "Échéance",
    "field.priority": "Priorité",
    "field.name": "Nom",
    "field.role": "Rôle",
    "field.phone": "Téléphone",
    "field.eventType": "Type",
    "field.date": "Date",
    "field.time": "Heure",
    "field.description": "Description",
    "field.action": "Action prévue",
    "field.photo": "Photo",
    "field.photos": "Photos",
    "field.contact": "Personne à contacter",
    "field.presents": "Personnes présentes",
    "field.alerts": "Alertes",
    "field.alertN": "Alerte {n}",
    "field.customDelay": "Délai",
    "field.report": "Compte rendu généré (modifiable)",
    "alert.min": "{n} min",
    "alert.h": "{n} h",
    "alert.d": "{n} j",
    "alert.custom": "Personnalisé",
    "unit.min": "minutes",
    "unit.h": "heures",
    "unit.d": "jours",
    "notif.body": "{title} dans {when}",
    "notif.now": "{title} commence maintenant",
    "notif.orderDay": "Commande à passer aujourd’hui",
    "notif.livraisonDay": "Livraison prévue aujourd’hui",
    "notif.visitDay": "Visite de chantier aujourd’hui",
    "notif.dueDay": "Échéance aujourd’hui",
    "q.securite": "Accès et sécurité conformes ?",
    "q.epi": "Port des EPI respecté ?",
    "q.planning": "Avancement conforme au planning ?",
    "q.qualite": "Qualité d’exécution acceptable ?",
    "q.proprete": "Propreté et stockage OK ?",
    "q.materiel": "Matériel / livraisons OK ?",
    "q.entreprises": "Entreprises présentes",
    "q.meteo": "Conditions météo",
    "q.constats": "Problèmes constatés",
    "q.actions": "Décisions / actions à suivre",
    "ans.yes": "Oui",
    "ans.no": "Non",
    "ans.partial": "Partiel",
    "visit.questions": "Compte rendu — questions",
    "visit.header": "Visite du {date} à {heure}",
    "visit.presents": "Personnes présentes",
    "status.preparation": "Préparation",
    "status.en_cours": "En cours",
    "status.pause": "En pause",
    "status.termine": "Terminé",
    "priority.normale": "Normale",
    "priority.haute": "Haute",
    "priority.critique": "Critique",
    "event.reunion": "Réunion de chantier",
    "event.commande": "Commande de matériel",
    "event.mail": "Envoi d’e-mail",
    "event.visite": "Visite de chantier",
    "event.autre": "Autre",
    "issue.ouvert": "Ouvert",
    "issue.resolu": "Résolu",
    "issue.action": "Action",
    "field.hasDue": "Y a-t-il une échéance ?",
    "due.yes": "Oui",
    "due.no": "Non",
    "issue.due": "Échéance : {date}",
    "issue.noDue": "Sans échéance",
    "todo.task": "Tâche",
    "todo.issue": "Blocage",
    "none": "Aucun",
    "confirm.deleteSite": "Supprimer ce chantier, ses tâches et ses blocages ?",
    "confirm.deleteTask": "Supprimer cette tâche ?",
    "task.managed": "Faite",
    "task.managedOn": "Faite le {date}",
    "history.count": "{n} tâche(s) gérée(s)",
    "dow.0": "Lun", "dow.1": "Mar", "dow.2": "Mer", "dow.3": "Jeu", "dow.4": "Ven", "dow.5": "Sam", "dow.6": "Dim",
  },
  en: {
    "brand.subtitle": "Site management",
    "nav.home": "Home",
    "nav.chantier": "My sites",
    "nav.dashboard": "Dashboard",
    "nav.chantiers": "My sites",
    "nav.taches": "Tasks",
    "nav.calendrier": "Planning",
    "nav.historique": "History",
    "nav.devis": "Quotes",
    "nav.livraison": "Deliveries",
    "nav.cr": "Reports",
    "nav.finance": "Financial tracking",
    "nav.galerie": "Gallery",
    "nav.sousTraitants": "Subcontractors",
    "nav.equipe": "Team",
    "title.dashboard": "Home",
    "title.chantiers": "My sites",
    "title.taches": "Tasks",
    "title.calendrier": "Planning",
    "title.historique": "History",
    "title.devis": "Quotes",
    "nav.suivi": "Progress tracking",
    "title.suivi": "Works progress tracking",
    "title.livraison": "Deliveries",
    "title.cr": "Reports",
    "title.finance": "Financial tracking",
    "title.galerie": "Photo gallery",
    "title.sousTraitants": "Subcontractors",
    "title.historiqueSite": "History — {name}",
    "title.equipe": "Team",
    "title.detail": "Site file",
    "search.placeholder": "Search a site, a client…",
    "prefs.language": "Language",
    "prefs.theme": "Interface",
    "prefs.themeDark": "Dark (current)",
    "prefs.themeLight": "Light (white)",
    "prefs.notifs": "Notifications",
    "prefs.notifsOn": "On",
    "prefs.notifsOff": "Off",
    "prefs.sound": "Reminder sound",
    "sound.chime": "Chime",
    "sound.beep": "Beep",
    "sound.urgent": "Urgent",
    "sound.off": "No sound",
    "btn.testSound": "Test sound",
    "btn.close": "Close",
    "field.eventSound": "Notification sound",
    "visit.siteOf": "Site: {name}",
    "visit.sent": "Sent",
    "visit.view": "View",
    "visit.edit": "Edit",
    "visit.locked": "Report sent — view only",
    "btn.newSite": "+ New site",
    "btn.newTask": "+ New task",
    "btn.newMember": "+ New member",
    "btn.newEvent": "+ Event",
    "btn.newIssue": "+ Problem / blocker",
    "btn.newContact": "+ Contact",
    "btn.newVisit": "+ Visit",
    "btn.newLivraison": "+ Delivery",
    "btn.newFinance": "+ Finance line",
    "btn.newSt": "+ Subcontractor",
    "btn.addAlert": "+ Add alert",
    "btn.addPresent": "+ Add person",
    "btn.uploadPhoto": "Upload",
    "btn.takePhoto": "Take a photo",
    "btn.pdf": "Download PDF",
    "btn.notif": "Enable notifications",
    "btn.cancel": "Cancel",
    "btn.save": "Save",
    "btn.add": "Add",
    "btn.edit": "Edit",
    "btn.delete": "Delete",
    "btn.back": "← Back",
    "btn.remove": "Remove",
    "btn.resolve": "Mark resolved",
    "btn.logout": "Log out",
    "auth.login": "Sign in",
    "auth.register": "Register",
    "auth.enter": "Enter",
    "auth.create": "Create account",
    "auth.email": "Email",
    "auth.username": "Username",
    "auth.loginId": "Email or username",
    "auth.forgot": "Forgot password?",
    "auth.showPass": "Show password",
    "auth.hidePass": "Hide password",
    "auth.forgot.submit": "Send code",
    "auth.newPassword": "New password",
    "auth.reset.submit": "Change password",
    "auth.password": "Password",
    "auth.confirm": "Confirm password",
    "auth.poste": "Job title",
    "auth.company": "Company",
    "auth.firstname": "First name",
    "auth.lastname": "Last name",
    "auth.phone": "Phone",
    "auth.photo": "Profile photo (optional)",
    "auth.photoHint": "Without a photo, your initials are shown",
    "auth.remember": "Save this account on this device",
    "auth.code": "6-digit code",
    "auth.verify.lead": "An email was sent to {email}. Enter only the code from that email (check spam too). Without it, the account stays locked.",
    "auth.verify.submit": "Verify email",
    "auth.resend": "Resend code",
    "auth.back": "Back",
    "auth.sent": "New code sent",
    "auth.error.bad": "Incorrect email or password",
    "auth.error.exists": "An account already exists with this email",
    "auth.error.mismatch": "Passwords do not match",
    "auth.error.short": "Password must be at least 8 characters",
    "auth.error.weak": "Password must include a letter and a number",
    "auth.error.email": "Invalid email",
    "auth.error.phone": "Invalid phone number",
    "auth.error.photo": "Add a profile photo",
    "auth.error.send": "Could not send the verification email. Try again.",
    "auth.error.code": "Incorrect code",
    "auth.error.expired": "Code expired. Request a new one.",
    "auth.error.unverified": "Verify your email first",
    "auth.error.server": "Server unavailable. Restart the app.",
    "auth.error.wait": "Wait a minute before requesting another code",
    "auth.error.required": "Fill in all fields",
    "auth.error.user": "This username already exists",
    "stat.sites": "Sites",
    "stat.active": "In progress",
    "stat.openTasks": "Today’s tasks / per site",
    "stat.critical": "Critical priority",
    "stat.blocked": "Open blockers",
    "stat.weekLiv": "Deliveries this week",
    "stat.livToday": "Deliveries today",
    "stat.livTodayMsg": "You have {n} delivery today",
    "stat.livTodayMsgMany": "You have {n} deliveries today",
    "hello": "Hello {name},",
    "hello.role": "{poste} at {entreprise}",
    "h.todayTodo": "Coming up today",
    "h.seeAll": "See all →",
    "h.todayTasks": "Today’s tasks",
    "empty.todayTasks": "No tasks for today",
    "weather.title": "Today’s weather",
    "weather.unavailable": "Weather unavailable",
    "weather.place": "{place}",
    "weather.clear": "Sunny",
    "weather.cloud": "Cloudy",
    "weather.fog": "Fog",
    "weather.rain": "Rain",
    "weather.snow": "Snow",
    "weather.storm": "Storm",
    "h.photos": "Project photos",
    "btn.sitePhoto": "+ Add photos",
    "btn.changePhoto": "Add photos",
    "empty.photos": "No project photos",
    "galerie.pickSite": "Choose a site",
    "galerie.open": "Open gallery",
    "field.email": "Email",
    "noEmail": "No email",
    "field.orderDate": "Order to place by",
    "field.arrivalDate": "Expected delivery date",
    "dialog.livArrivee": "Expected delivery date",
    "liv.arriveeLead": "The order “{title}” is placed. Enter the expected delivery date.",
    "liv.commandee": "Ordered",
    "liv.toOrder": "To order",
    "liv.orderFor": "To order by {date}",
    "liv.arriveOn": "Expected delivery {date}",
    "field.detail": "Order details",
    "field.responsables": "Contacts",
    "btn.addResp": "+ Add a person",
    "field.logo": "Company logo (optional)",
    "empty.resp": "No contacts",
    "h.activeSites": "Active sites",
    "site.end": "Planned end: {date}",
    "site.openCount": "{n} open task(s)",
    "h.team": "Site team",
    "h.chef": "Site manager",
    "h.teamMembers": "Team members",
    "h.debrief": "Absence debrief",
    "empty.today": "Nothing planned today",
    "empty.chef": "No site manager",
    "empty.debrief": "No absences recorded",
    "poste.chef": "Site manager",
    "poste.membre": "Team member",
    "field.poste": "Role",
    "presence.date": "Attendance on",
    "presence.present": "Present",
    "presence.absent": "Absent",
    "presence.day": "DD",
    "presence.month": "MM",
    "presence.year": "YYYY",
    "presence.pick": "Pick a date",
    "debrief.line": "{name} is absent {n} day(s)",
    "btn.setChef": "Set as manager",
    "h.siteTasks": "Site tasks",
    "h.issues": "Problems / blocked tasks",
    "h.contacts": "People to contact",
    "h.visits": "Site visits",
    "h.dayEvents": "Events on this day",
    "empty.sites": "No sites",
    "empty.tasks": "No tasks",
    "empty.history": "No completed tasks for this site",
    "empty.histCommandes": "No orders for this site",
    "empty.histDevis": "No validated quotes for this site",
    "empty.devis": "No quotes",
    "devis.col.designation": "Description",
    "devis.col.qty": "Qty",
    "devis.col.unit": "Unit",
    "devis.col.pu": "Unit price excl. tax €",
    "devis.col.total": "Total excl. tax €",
    "devis.totalHt": "Total excl. tax",
    "devis.addLine": "+ Line",
    "devis.addTitle": "+ Section title",
    "hist.pickSite": "Choose a site",
    "hist.pickCat": "Choose a category",
    "hist.commandes": "Order history",
    "hist.taches": "Managed tasks",
    "hist.devis": "Quote history",
    "hist.nCommandes": "{n} order(s)",
    "hist.nTaches": "{n} managed task(s)",
    "hist.nDevis": "{n} validated quote(s)",
    "btn.newDevis": "+ Quote",
    "btn.validate": "Validate",
    "dialog.devisNew": "New quote",
    "dialog.devisEdit": "Edit quote",
    "devis.draft": "Draft",
    "devis.sent": "Sent to client",
    "devis.validated": "Client-approved",
    "devis.sentOn": "Sent on {date}",
    "devis.validatedOn": "Client-approved on {date}",
    "devis.preuve": "Proof of approval",
    "devis.preuveFile": "Signed quote / client return (photo or PDF)",
    "devis.preuveNote": "How you received it",
    "devis.dialogPreuve": "File client approval",
    "devis.openPreuve": "View proof",
    "devis.needPreuve": "Add the photo or PDF the client sent back.",
    "btn.sendDevis": "Send to client",
    "btn.clientOk": "Attach approval",
    "btn.applyDevis": "Create order / tasks / finance",
    "devis.nextHint": "When the client has approved: click “Attach approval”, then you can create the order, tasks and income line.",
    "devis.apply.title": "Create from quote",
    "devis.apply.lead": "The client approved “{title}”. Choose what to create, without retyping.",
    "devis.apply.commande": "Create an order / delivery (title, line details, site)",
    "devis.apply.tasks": "Create {n} task(s) from the lines",
    "devis.apply.finance": "Create income of {money}",
    "devis.apply.done": "Already created",
    "devis.apply.submit": "Create",
    "devis.apply.none": "Tick at least one action.",
    "devis.apply.noLines": "No work lines to turn into tasks.",
    "devis.apply.taskDate": "Schedule the tasks for",
    "devis.apply.needDate": "Choose the date when you want to plan the tasks.",
    "devis.apply.commandeDate": "Schedule the order for",
    "devis.apply.needCommandeDate": "Choose the date when you want to plan the order.",
    "devis.nSite": "{n} quote(s)",
    "suivi.pickSite": "Choose a site",
    "suivi.planning": "Works schedule",
    "suivi.expected": "Planned progress: {n}%",
    "suivi.actual": "Actual progress: {n}%",
    "suivi.overdue": "{n} overdue task(s)",
    "suivi.pace.onTime": "On schedule",
    "suivi.pace.late": "Behind",
    "suivi.pace.ahead": "Ahead",
    "empty.suiviTasks": "No scheduled tasks",
    "empty.members": "No members",
    "empty.events": "No events on this day",
    "empty.issues": "No reported problems",
    "empty.contacts": "No contacts",
    "empty.visits": "No visits recorded",
    "empty.livraisons": "No deliveries",
    "empty.cr": "No reports",
    "empty.finances": "No finance lines",
    "empty.sousTraitants": "No subcontractors",
    "count.sites": "{n} site(s)",
    "count.openTasks": "{n} open task(s)",
    "count.members": "{n} member(s)",
    "count.events": "{n} event(s)",
    "progress": "{n}% of tasks · budget {money}",
    "progressDone": "{n}% of tasks done",
    "noAddress": "No address",
    "noSite": "No site",
    "noRole": "No role",
    "noPhone": "No phone",
    "due": "due",
    "fromTo": "From {start} to {end} · {money}",
    "dialog.siteNew": "New site",
    "dialog.siteEdit": "Edit site",
    "dialog.taskNew": "New task",
    "dialog.taskEdit": "Edit task",
    "dialog.memberNew": "New member",
    "dialog.eventNew": "New event",
    "dialog.issueNew": "Problem / blocked task",
    "dialog.contactNew": "Contact person",
    "dialog.visitNew": "Site visit",
    "field.siteName": "Site name",
    "field.client": "Client",
    "field.address": "Address",
    "field.start": "Start",
    "field.end": "Planned end",
    "field.status": "Status",
    "field.budget": "Budget (€)",
    "field.notes": "Notes",
    "field.title": "Title",
    "field.site": "Site",
    "field.fournisseur": "Supplier",
    "field.montant": "Amount (€)",
    "field.libelle": "Label",
    "field.metier": "Trade / lot",
    "field.company": "Company",
    "field.type": "Type",
    "liv.attendue": "Expected",
    "liv.livree": "Delivered",
    "liv.retard": "Late",
    "fin.depense": "Expense",
    "fin.recette": "Income",
    "fin.solde": "Balance",
    "dialog.livraisonNew": "New delivery",
    "dialog.financeNew": "New finance line",
    "dialog.stNew": "Subcontractor",
    "field.siteOptional": "Site (optional)",
    "field.due": "Due date",
    "field.priority": "Priority",
    "field.name": "Name",
    "field.role": "Role",
    "field.phone": "Phone",
    "field.eventType": "Type",
    "field.date": "Date",
    "field.time": "Time",
    "field.description": "Description",
    "field.action": "Planned action",
    "field.photo": "Photo",
    "field.photos": "Photos",
    "field.contact": "Contact person",
    "field.presents": "People present",
    "field.alerts": "Alerts",
    "field.alertN": "Alert {n}",
    "field.customDelay": "Delay",
    "field.report": "Generated report (editable)",
    "alert.min": "{n} min",
    "alert.h": "{n} h",
    "alert.d": "{n} d",
    "alert.custom": "Custom",
    "unit.min": "minutes",
    "unit.h": "hours",
    "unit.d": "days",
    "notif.body": "{title} in {when}",
    "notif.now": "{title} starts now",
    "notif.orderDay": "Order to place today",
    "notif.livraisonDay": "Delivery expected today",
    "notif.visitDay": "Site visit today",
    "notif.dueDay": "Deadline today",
    "q.securite": "Access and safety compliant?",
    "q.epi": "PPE worn correctly?",
    "q.planning": "Progress in line with the schedule?",
    "q.qualite": "Workmanship acceptable?",
    "q.proprete": "Cleanliness and storage OK?",
    "q.materiel": "Materials / deliveries OK?",
    "q.entreprises": "Companies present",
    "q.meteo": "Weather conditions",
    "q.constats": "Issues observed",
    "q.actions": "Decisions / follow-up actions",
    "ans.yes": "Yes",
    "ans.no": "No",
    "ans.partial": "Partial",
    "visit.questions": "Report — questions",
    "visit.header": "Visit on {date} at {heure}",
    "visit.presents": "People present",
    "status.preparation": "Preparation",
    "status.en_cours": "In progress",
    "status.pause": "On hold",
    "status.termine": "Completed",
    "priority.normale": "Normal",
    "priority.haute": "High",
    "priority.critique": "Critical",
    "event.reunion": "Site meeting",
    "event.commande": "Material order",
    "event.mail": "Send email",
    "event.visite": "Site visit",
    "event.autre": "Other",
    "issue.ouvert": "Open",
    "issue.resolu": "Resolved",
    "issue.action": "Action",
    "field.hasDue": "Is there a due date?",
    "due.yes": "Yes",
    "due.no": "No",
    "issue.due": "Due: {date}",
    "issue.noDue": "No due date",
    "todo.task": "Task",
    "todo.issue": "Blocker",
    "none": "None",
    "confirm.deleteSite": "Delete this site, its tasks and blockers?",
    "confirm.deleteTask": "Delete this task?",
    "task.managed": "Done",
    "task.managedOn": "Done on {date}",
    "history.count": "{n} managed task(s)",
    "dow.0": "Mon", "dow.1": "Tue", "dow.2": "Wed", "dow.3": "Thu", "dow.4": "Fri", "dow.5": "Sat", "dow.6": "Sun",
  },
  de: {
    "brand.subtitle": "Baustellenverwaltung",
    "nav.home": "Start",
    "nav.chantier": "Meine Baustellen",
    "nav.dashboard": "Übersicht",
    "nav.chantiers": "Meine Baustellen",
    "nav.taches": "Aufgaben",
    "nav.calendrier": "Planung",
    "nav.historique": "Verlauf",
    "nav.devis": "Angebote",
    "nav.livraison": "Lieferungen",
    "nav.cr": "Berichte",
    "nav.finance": "Finanzüberwachung",
    "nav.galerie": "Galerie",
    "nav.sousTraitants": "Nachunternehmer",
    "nav.equipe": "Team",
    "title.dashboard": "Start",
    "title.chantiers": "Meine Baustellen",
    "title.taches": "Aufgaben",
    "title.calendrier": "Planung",
    "title.historique": "Verlauf",
    "title.devis": "Angebote",
    "nav.suivi": "Fortschritt",
    "title.suivi": "Baufortschritt / Überwachung",
    "title.livraison": "Lieferungen",
    "title.cr": "Berichte",
    "title.finance": "Finanzüberwachung",
    "title.galerie": "Fotogalerie",
    "title.sousTraitants": "Nachunternehmer",
    "title.historiqueSite": "Verlauf — {name}",
    "title.equipe": "Team",
    "title.detail": "Baustellenakte",
    "search.placeholder": "Baustelle oder Kunde suchen…",
    "prefs.language": "Sprache",
    "prefs.theme": "Oberfläche",
    "prefs.themeDark": "Dunkel (aktuell)",
    "prefs.themeLight": "Hell (weiß)",
    "prefs.notifs": "Benachrichtigungen",
    "prefs.notifsOn": "An",
    "prefs.notifsOff": "Aus",
    "prefs.sound": "Erinnerungston",
    "sound.chime": "Glocke",
    "sound.beep": "Piepton",
    "sound.urgent": "Dringend",
    "sound.off": "Kein Ton",
    "btn.testSound": "Ton testen",
    "btn.close": "Schließen",
    "field.eventSound": "Benachrichtigungston",
    "visit.siteOf": "Baustelle: {name}",
    "visit.sent": "Gesendet",
    "visit.view": "Ansehen",
    "visit.edit": "Bearbeiten",
    "visit.locked": "Bericht gesendet — nur Ansicht",
    "btn.newSite": "+ Neue Baustelle",
    "btn.newTask": "+ Neue Aufgabe",
    "btn.newMember": "+ Neues Mitglied",
    "btn.newEvent": "+ Ereignis",
    "btn.newIssue": "+ Problem / Blockade",
    "btn.newContact": "+ Kontakt",
    "btn.newVisit": "+ Besuch",
    "btn.newLivraison": "+ Lieferung",
    "btn.newFinance": "+ Finanzzeile",
    "btn.newSt": "+ Nachunternehmer",
    "btn.addAlert": "+ Alarm hinzufügen",
    "btn.addPresent": "+ Person hinzufügen",
    "btn.uploadPhoto": "Hochladen",
    "btn.takePhoto": "Foto aufnehmen",
    "btn.pdf": "PDF herunterladen",
    "btn.notif": "Benachrichtigungen aktivieren",
    "btn.cancel": "Abbrechen",
    "btn.save": "Speichern",
    "btn.add": "Hinzufügen",
    "btn.edit": "Bearbeiten",
    "btn.delete": "Löschen",
    "btn.back": "← Zurück",
    "btn.remove": "Entfernen",
    "btn.resolve": "Als gelöst markieren",
    "btn.logout": "Abmelden",
    "auth.login": "Anmelden",
    "auth.register": "Registrieren",
    "auth.enter": "Eintreten",
    "auth.create": "Konto erstellen",
    "auth.email": "E-Mail",
    "auth.username": "Benutzername",
    "auth.loginId": "E-Mail oder Benutzername",
    "auth.forgot": "Passwort vergessen?",
    "auth.showPass": "Passwort anzeigen",
    "auth.hidePass": "Passwort verbergen",
    "auth.forgot.submit": "Code senden",
    "auth.newPassword": "Neues Passwort",
    "auth.reset.submit": "Passwort ändern",
    "auth.password": "Passwort",
    "auth.confirm": "Passwort bestätigen",
    "auth.poste": "Funktion",
    "auth.company": "Unternehmen",
    "auth.firstname": "Vorname",
    "auth.lastname": "Nachname",
    "auth.phone": "Telefon",
    "auth.photo": "Profilfoto (optional)",
    "auth.photoHint": "Ohne Foto werden deine Initialen angezeigt",
    "auth.remember": "Dieses Konto auf diesem Gerät speichern",
    "auth.code": "6-stelliger Code",
    "auth.verify.lead": "Eine E-Mail wurde an {email} gesendet. Gib nur den Code aus der Mail ein (auch Spam prüfen). Ohne Mail bleibt das Konto gesperrt.",
    "auth.verify.submit": "E-Mail bestätigen",
    "auth.resend": "Code erneut senden",
    "auth.back": "Zurück",
    "auth.sent": "Neuer Code gesendet",
    "auth.error.bad": "E-Mail oder Passwort falsch",
    "auth.error.exists": "Ein Konto mit dieser E-Mail existiert bereits",
    "auth.error.mismatch": "Die Passwörter stimmen nicht überein",
    "auth.error.short": "Das Passwort muss mindestens 8 Zeichen haben",
    "auth.error.weak": "Das Passwort braucht einen Buchstaben und eine Zahl",
    "auth.error.email": "Ungültige E-Mail",
    "auth.error.phone": "Ungültige Telefonnummer",
    "auth.error.photo": "Profilfoto hinzufügen",
    "auth.error.send": "Bestätigungs-E-Mail konnte nicht gesendet werden.",
    "auth.error.code": "Falscher Code",
    "auth.error.expired": "Code abgelaufen. Bitte neu anfordern.",
    "auth.error.unverified": "Bitte zuerst die E-Mail bestätigen",
    "auth.error.server": "Server nicht erreichbar. App neu starten.",
    "auth.error.wait": "Eine Minute warten vor einem neuen Code",
    "auth.error.required": "Alle Felder ausfüllen",
    "auth.error.user": "Dieser Benutzername existiert bereits",
    "stat.sites": "Baustellen",
    "stat.active": "Laufend",
    "stat.openTasks": "Aufgaben heute / je Baustelle",
    "stat.critical": "Kritische Priorität",
    "stat.blocked": "Offene Blockaden",
    "stat.weekLiv": "Lieferungen diese Woche",
    "stat.livToday": "Lieferungen heute",
    "stat.livTodayMsg": "Sie haben heute {n} Lieferung",
    "stat.livTodayMsgMany": "Sie haben heute {n} Lieferungen",
    "hello": "Guten Tag {name},",
    "hello.role": "{poste} bei {entreprise}",
    "h.todayTodo": "Heute anstehend",
    "h.seeAll": "Alle anzeigen →",
    "h.todayTasks": "Aufgaben heute",
    "empty.todayTasks": "Keine Aufgaben für heute",
    "weather.title": "Wetter heute",
    "weather.unavailable": "Wetter nicht verfügbar",
    "weather.place": "{place}",
    "weather.clear": "Sonnig",
    "weather.cloud": "Bewölkt",
    "weather.fog": "Nebel",
    "weather.rain": "Regen",
    "weather.snow": "Schnee",
    "weather.storm": "Gewitter",
    "h.photos": "Projektfotos",
    "btn.sitePhoto": "+ Fotos hinzufügen",
    "btn.changePhoto": "Fotos hinzufügen",
    "empty.photos": "Keine Projektfotos",
    "galerie.pickSite": "Baustelle wählen",
    "galerie.open": "Galerie öffnen",
    "field.email": "E-Mail",
    "noEmail": "Keine E-Mail",
    "field.orderDate": "Bestellung zu tätigen bis",
    "field.arrivalDate": "Geplantes Lieferdatum",
    "dialog.livArrivee": "Geplantes Lieferdatum",
    "liv.arriveeLead": "Die Bestellung „{title}“ ist aufgegeben. Gib das geplante Lieferdatum ein.",
    "liv.commandee": "Bestellt",
    "liv.toOrder": "Zu bestellen",
    "liv.orderFor": "Zu bestellen bis {date}",
    "liv.arriveOn": "Lieferung geplant am {date}",
    "field.detail": "Bestelldetails",
    "field.responsables": "Ansprechpartner",
    "btn.addResp": "+ Person hinzufügen",
    "field.logo": "Firmenlogo (optional)",
    "empty.resp": "Keine Ansprechpartner",
    "h.activeSites": "Aktive Baustellen",
    "site.end": "Geplantes Ende: {date}",
    "site.openCount": "{n} offene Aufgabe(n)",
    "h.team": "Baustellenteam",
    "h.chef": "Bauleiter",
    "h.teamMembers": "Teammitglieder",
    "h.debrief": "Abwesenheitsbericht",
    "empty.today": "Heute nichts geplant",
    "empty.chef": "Kein Bauleiter",
    "empty.debrief": "Keine Abwesenheiten erfasst",
    "poste.chef": "Bauleiter",
    "poste.membre": "Teammitglied",
    "field.poste": "Funktion",
    "presence.date": "Anwesenheit am",
    "presence.present": "Anwesend",
    "presence.absent": "Abwesend",
    "presence.day": "TT",
    "presence.month": "MM",
    "presence.year": "JJJJ",
    "presence.pick": "Datum wählen",
    "debrief.line": "{name} ist {n} Tag(e) abwesend",
    "btn.setChef": "Als Bauleiter festlegen",
    "h.siteTasks": "Aufgaben der Baustelle",
    "h.issues": "Probleme / blockierte Aufgaben",
    "h.contacts": "Ansprechpersonen",
    "h.visits": "Baustellenbesuche",
    "h.dayEvents": "Ereignisse des Tages",
    "empty.sites": "Keine Baustellen",
    "empty.tasks": "Keine Aufgaben",
    "empty.history": "Keine erledigten Aufgaben für diese Baustelle",
    "empty.histCommandes": "Keine Bestellungen für diese Baustelle",
    "empty.histDevis": "Keine validierten Angebote für diese Baustelle",
    "empty.devis": "Keine Angebote",
    "devis.col.designation": "Bezeichnung",
    "devis.col.qty": "Menge",
    "devis.col.unit": "Einheit",
    "devis.col.pu": "EP netto €",
    "devis.col.total": "Gesamt netto €",
    "devis.totalHt": "Gesamt netto",
    "devis.addLine": "+ Zeile",
    "devis.addTitle": "+ Los-Titel",
    "hist.pickSite": "Baustelle wählen",
    "hist.pickCat": "Kategorie wählen",
    "hist.commandes": "Bestellhistorie",
    "hist.taches": "Erledigte Aufgaben",
    "hist.devis": "Angebotshistorie",
    "hist.nCommandes": "{n} Bestellung(en)",
    "hist.nTaches": "{n} erledigte Aufgabe(n)",
    "hist.nDevis": "{n} validierte(s) Angebot(e)",
    "btn.newDevis": "+ Angebot",
    "btn.validate": "Validieren",
    "dialog.devisNew": "Neues Angebot",
    "dialog.devisEdit": "Angebot bearbeiten",
    "devis.draft": "Entwurf",
    "devis.sent": "An Kunden gesendet",
    "devis.validated": "Vom Kunden bestätigt",
    "devis.sentOn": "Gesendet am {date}",
    "devis.validatedOn": "Vom Kunden bestätigt am {date}",
    "devis.preuve": "Nachweis der Bestätigung",
    "devis.preuveFile": "Unterschriebenes Angebot / Rücksendung (Foto oder PDF)",
    "devis.preuveNote": "Wie du es erhalten hast",
    "devis.dialogPreuve": "Kundenbestätigung ablegen",
    "devis.openPreuve": "Nachweis ansehen",
    "devis.needPreuve": "Füge das Foto oder PDF hinzu, das der Kunde zurückgeschickt hat.",
    "btn.sendDevis": "An Kunden senden",
    "btn.clientOk": "Bestätigung anhängen",
    "btn.applyDevis": "Bestellung / Aufgaben / Finanzen erstellen",
    "devis.nextHint": "Wenn der Kunde bestätigt hat: auf „Bestätigung anhängen“ klicken, danach Bestellung, Aufgaben und Einnahme erstellen.",
    "devis.apply.title": "Aus dem Angebot erstellen",
    "devis.apply.lead": "Der Kunde hat „{title}“ bestätigt. Wähle, was erstellt wird, ohne neu zu tippen.",
    "devis.apply.commande": "Bestellung / Lieferung erstellen (Titel, Positionen, Baustelle)",
    "devis.apply.tasks": "{n} Aufgabe(n) aus den Positionen erstellen",
    "devis.apply.finance": "Einnahme von {money} erstellen",
    "devis.apply.done": "Bereits erstellt",
    "devis.apply.submit": "Erstellen",
    "devis.apply.none": "Mindestens eine Aktion ankreuzen.",
    "devis.apply.noLines": "Keine Leistungspositionen für Aufgaben.",
    "devis.apply.taskDate": "Aufgaben planen für den",
    "devis.apply.needDate": "Wähle das Datum, an dem die Aufgaben geplant werden.",
    "devis.apply.commandeDate": "Bestellung planen für den",
    "devis.apply.needCommandeDate": "Wähle das Datum, an dem die Bestellung geplant wird.",
    "devis.nSite": "{n} Angebot(e)",
    "suivi.pickSite": "Baustelle wählen",
    "suivi.planning": "Bauablauf",
    "suivi.expected": "Geplanter Fortschritt: {n}%",
    "suivi.actual": "Tatsächlicher Fortschritt: {n}%",
    "suivi.overdue": "{n} überfällige Aufgabe(n)",
    "suivi.pace.onTime": "Im Zeitplan",
    "suivi.pace.late": "Verspätet",
    "suivi.pace.ahead": "Im Voraus",
    "empty.suiviTasks": "Keine geplanten Aufgaben",
    "empty.members": "Keine Mitglieder",
    "empty.events": "Keine Ereignisse an diesem Tag",
    "empty.issues": "Keine gemeldeten Probleme",
    "empty.contacts": "Keine Kontakte",
    "empty.visits": "Keine Besuche erfasst",
    "empty.livraisons": "Keine Lieferungen",
    "empty.cr": "Keine Berichte",
    "empty.finances": "Keine Finanzzeilen",
    "empty.sousTraitants": "Keine Nachunternehmer",
    "count.sites": "{n} Baustelle(n)",
    "count.openTasks": "{n} offene Aufgabe(n)",
    "count.members": "{n} Mitglied(er)",
    "count.events": "{n} Ereignis(se)",
    "progress": "{n}% der Aufgaben · Budget {money}",
    "progressDone": "{n}% der Aufgaben erledigt",
    "noAddress": "Keine Adresse",
    "noSite": "Keine Baustelle",
    "noRole": "Keine Rolle",
    "noPhone": "Kein Telefon",
    "due": "fällig",
    "fromTo": "Von {start} bis {end} · {money}",
    "dialog.siteNew": "Neue Baustelle",
    "dialog.siteEdit": "Baustelle bearbeiten",
    "dialog.taskNew": "Neue Aufgabe",
    "dialog.taskEdit": "Aufgabe bearbeiten",
    "dialog.memberNew": "Neues Mitglied",
    "dialog.eventNew": "Neues Ereignis",
    "dialog.issueNew": "Problem / blockierte Aufgabe",
    "dialog.contactNew": "Ansprechperson",
    "dialog.visitNew": "Baustellenbesuch",
    "field.siteName": "Name der Baustelle",
    "field.client": "Kunde",
    "field.address": "Adresse",
    "field.start": "Beginn",
    "field.end": "Geplantes Ende",
    "field.status": "Status",
    "field.budget": "Budget (€)",
    "field.notes": "Notizen",
    "field.title": "Titel",
    "field.site": "Baustelle",
    "field.fournisseur": "Lieferant",
    "field.montant": "Betrag (€)",
    "field.libelle": "Bezeichnung",
    "field.metier": "Gewerk",
    "field.company": "Unternehmen",
    "field.type": "Typ",
    "liv.attendue": "Erwartet",
    "liv.livree": "Geliefert",
    "liv.retard": "Verspätet",
    "fin.depense": "Ausgabe",
    "fin.recette": "Einnahme",
    "fin.solde": "Saldo",
    "dialog.livraisonNew": "Neue Lieferung",
    "dialog.financeNew": "Neue Finanzzeile",
    "dialog.stNew": "Nachunternehmer",
    "field.siteOptional": "Baustelle (optional)",
    "field.due": "Fälligkeit",
    "field.priority": "Priorität",
    "field.name": "Name",
    "field.role": "Rolle",
    "field.phone": "Telefon",
    "field.eventType": "Typ",
    "field.date": "Datum",
    "field.time": "Uhrzeit",
    "field.description": "Beschreibung",
    "field.action": "Geplante Maßnahme",
    "field.photo": "Foto",
    "field.photos": "Fotos",
    "field.contact": "Ansprechperson",
    "field.presents": "Anwesende Personen",
    "field.alerts": "Alarme",
    "field.alertN": "Alarm {n}",
    "field.customDelay": "Vorlauf",
    "field.report": "Generierter Bericht (änderbar)",
    "alert.min": "{n} Min.",
    "alert.h": "{n} Std.",
    "alert.d": "{n} T.",
    "alert.custom": "Benutzerdefiniert",
    "unit.min": "Minuten",
    "unit.h": "Stunden",
    "unit.d": "Tage",
    "notif.body": "{title} in {when}",
    "notif.now": "{title} beginnt jetzt",
    "notif.orderDay": "Heute Bestellung aufgeben",
    "notif.livraisonDay": "Lieferung heute geplant",
    "notif.visitDay": "Baustellenbesuch heute",
    "notif.dueDay": "Frist heute",
    "q.securite": "Zugang und Sicherheit in Ordnung?",
    "q.epi": "PSA korrekt getragen?",
    "q.planning": "Fortschritt gemäß Terminplan?",
    "q.qualite": "Ausführungsqualität akzeptabel?",
    "q.proprete": "Sauberkeit und Lagerung OK?",
    "q.materiel": "Material / Lieferungen OK?",
    "q.entreprises": "Anwesende Firmen",
    "q.meteo": "Wetterbedingungen",
    "q.constats": "Festgestellte Probleme",
    "q.actions": "Entscheidungen / Folgeaktionen",
    "ans.yes": "Ja",
    "ans.no": "Nein",
    "ans.partial": "Teilweise",
    "visit.questions": "Bericht — Fragen",
    "visit.header": "Besuch am {date} um {heure}",
    "visit.presents": "Anwesende Personen",
    "status.preparation": "Vorbereitung",
    "status.en_cours": "Laufend",
    "status.pause": "Pausiert",
    "status.termine": "Abgeschlossen",
    "priority.normale": "Normal",
    "priority.haute": "Hoch",
    "priority.critique": "Kritisch",
    "event.reunion": "Baubesprechung",
    "event.commande": "Materialbestellung",
    "event.mail": "E-Mail senden",
    "event.visite": "Baustellenbesuch",
    "event.autre": "Sonstiges",
    "issue.ouvert": "Offen",
    "issue.resolu": "Gelöst",
    "issue.action": "Maßnahme",
    "field.hasDue": "Gibt es eine Fälligkeit?",
    "due.yes": "Ja",
    "due.no": "Nein",
    "issue.due": "Fällig: {date}",
    "issue.noDue": "Ohne Fälligkeit",
    "todo.task": "Aufgabe",
    "todo.issue": "Blockade",
    "none": "Keine",
    "confirm.deleteSite": "Diese Baustelle, ihre Aufgaben und Blockaden löschen?",
    "confirm.deleteTask": "Diese Aufgabe löschen?",
    "task.managed": "Erledigt",
    "task.managedOn": "Erledigt am {date}",
    "history.count": "{n} archivierte Aufgabe(n)",
    "dow.0": "Mo", "dow.1": "Di", "dow.2": "Mi", "dow.3": "Do", "dow.4": "Fr", "dow.5": "Sa", "dow.6": "So",
  },
};

const VISIT_CHOICES = ["q_securite", "q_epi", "q_planning", "q_qualite", "q_proprete", "q_materiel"];
const VISIT_TEXTS = ["q_entreprises", "q_meteo", "q_constats", "q_actions"];
const VISIT_LABELS = {
  q_securite: "q.securite",
  q_epi: "q.epi",
  q_planning: "q.planning",
  q_qualite: "q.qualite",
  q_proprete: "q.proprete",
  q_materiel: "q.materiel",
  q_entreprises: "q.entreprises",
  q_meteo: "q.meteo",
  q_constats: "q.constats",
  q_actions: "q.actions",
};

const prefs = loadPrefs();
const state = load();
let currentUser = null;
let authMode = "login";
let pendingAuthPhoto = "";
let pendingRemember = true;
let pendingVerifyEmail = "";
let resetMode = false;
let currentView = "dashboard";
let selectedChantierId = null;
let selectedHistoriqueId = null;
let selectedHistoriqueCat = null;
let selectedDevisSiteId = null;
let selectedSuiviId = null;
let selectedGalerieId = null;
let calCursor = startOfMonth(new Date());
let selectedDay = toDateKey(new Date());
let presenceDay = toDateKey(new Date());
let pendingPhoto = "";
let pendingVisitPhotos = [];
let viewingVisit = null;
let alertTimers = [];
let selectedCrSiteId = null;
let pendingStLogo = "";
let weatherState = { loading: false, loaded: false, at: 0, temp: null, label: "", icon: "⛅", place: "" };
let cloudTimer = 0;

function t(key, vars = {}) {
  const table = I18N[prefs.lang] || I18N.fr;
  let s = table[key] || I18N.fr[key] || key;
  for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
  return s;
}

function locale() {
  return { fr: "fr-FR", en: "en-GB", de: "de-DE" }[prefs.lang] || "fr-FR";
}

function uid() {
  return crypto.randomUUID();
}

function loadPrefs() {
  try {
    const p = { lang: "fr", theme: "dark", sound: "chime", notifs: true, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") };
    if (p.theme === "green" || p.theme === "blue") p.theme = "dark";
    p.theme = p.theme === "light" ? "light" : "dark";
    p.notifs = p.notifs !== false;
    return p;
  } catch {
    return { lang: "fr", theme: "dark", sound: "chime", notifs: true };
  }
}

function savePrefs() {
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  applyChrome();
  if (!currentUser) return;
  clearTimeout(cloudTimer);
  cloudTimer = setTimeout(() => { pushWorkspace(); }, 400);
}

function wantRemember() {
  return localStorage.getItem(REMEMBER_KEY) !== "0";
}

function sessionToken() {
  return localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY) || "";
}

function setSessionToken(token, remember = wantRemember()) {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  if (remember) localStorage.setItem(REMEMBER_KEY, "1");
  else localStorage.setItem(REMEMBER_KEY, "0");
  if (!token) return;
  if (remember) localStorage.setItem(SESSION_KEY, token);
  else sessionStorage.setItem(SESSION_KEY, token);
}

function syncRememberBox() {
  const box = qs("#auth-remember");
  if (box) box.checked = wantRemember();
}

async function api(path, { method = "POST", body } = {}) {
  const token = sessionToken();
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  let res;
  try {
    res = await fetch(path, { method, headers, body: body ? JSON.stringify(body) : undefined });
  } catch {
    const err = new Error("auth.error.server");
    err.key = "auth.error.server";
    throw err;
  }
  let data = {};
  try { data = await res.json(); } catch { data = {}; }
  if (!res.ok) {
    const err = new Error(data.error || "auth.error.server");
    err.key = data.error || "auth.error.server";
    throw err;
  }
  return data;
}

async function restoreSession() {
  const token = sessionToken();
  if (!token) return false;
  try {
    const data = await api("/api/me", { method: "GET" });
    if (!data.user?.emailVerified) {
      setSessionToken("", wantRemember());
      return false;
    }
    currentUser = data.user;
    return true;
  } catch {
    setSessionToken("", wantRemember());
    return false;
  }
}

function showAuthError(key) {
  const el = qs("#auth-error");
  el.textContent = t(key);
  el.classList.remove("hidden");
}

function showAuthInfo(key) {
  const el = qs("#auth-error");
  el.textContent = t(key);
  el.classList.remove("hidden");
}

function showVerify(email, isReset = false) {
  pendingVerifyEmail = email;
  resetMode = isReset;
  setAuthMode("verify");
}

function setAuthMode(mode) {
  authMode = mode;
  const isReg = mode === "register";
  const isVerify = mode === "verify";
  const isForgot = mode === "forgot";
  qs("#auth-tabs").classList.toggle("hidden", isVerify || isForgot);
  qs("#form-auth").classList.toggle("hidden", isVerify || isForgot);
  qs("#form-forgot").classList.toggle("hidden", !isForgot);
  qs("#auth-verify").classList.toggle("hidden", !isVerify);
  qs("#auth-register-fields").classList.toggle("hidden", !isReg);
  qs("#auth-login-wrap").classList.toggle("hidden", isReg);
  qs("#auth-confirm-wrap").classList.toggle("hidden", !isReg);
  qs("#btn-forgot").classList.toggle("hidden", isReg);
  qs("#form-auth [name=login]").required = !isReg;
  qs("#form-auth [name=password]").required = !isForgot;
  qs("#form-auth [name=confirm]").required = isReg;
  qs("#form-auth [name=prenom]").required = isReg;
  qs("#form-auth [name=nom]").required = isReg;
  qs("#form-auth [name=username]").required = isReg;
  qs("#form-auth [name=telephone]").required = isReg;
  qs("#form-auth [name=poste]").required = isReg;
  qs("#form-auth [name=entreprise]").required = isReg;
  qs("#form-auth [name=email]").required = isReg;
  qs("#auth-submit").textContent = t(isReg ? "auth.create" : "auth.enter");
  qs("#auth-tab-login").classList.toggle("primary", !isReg);
  qs("#auth-tab-register").classList.toggle("primary", isReg);
  qs("#auth-error").classList.add("hidden");
  qs("#auth-reset-fields").classList.toggle("hidden", !resetMode);
  qs("#btn-verify").textContent = t(resetMode ? "auth.reset.submit" : "auth.verify.submit");
  syncRememberBox();
  updateAuthInitials();
  if (isVerify) {
    qs("#auth-verify-lead").textContent = t("auth.verify.lead", { email: pendingVerifyEmail });
    qs("#auth-display-code").classList.add("hidden");
    qs("#auth-code").value = "";
    qs("#auth-code").focus();
  }
}

function showAuth() {
  currentUser = null;
  resetMode = false;
  qs("#auth-screen").classList.remove("hidden");
  qs(".app").classList.add("hidden");
  setAuthMode("login");
}

function enterApp() {
  pullWorkspace()
    .catch(() => {})
    .finally(() => {
      qs("#auth-screen").classList.add("hidden");
      qs(".app").classList.remove("hidden");
      applyChrome();
      go("dashboard");
      if (prefs.notifs) {
        requestNotifs().then((ok) => {
          if (!ok) {
            prefs.notifs = false;
            savePrefs();
            if (currentView === "dashboard") render();
          } else scheduleAlerts();
        });
      }
      scheduleAlerts();
    });
}

async function logout() {
  clearTimeout(cloudTimer);
  try { await pushWorkspace(); } catch { /* ignore */ }
  try { await api("/api/logout"); } catch { /* ignore */ }
  setSessionToken("", wantRemember());
  currentUser = null;
  pendingAuthPhoto = "";
  pendingVerifyEmail = "";
  resetMode = false;
  applyWorkspace(emptyWorkspace());
  qs("#form-auth").reset();
  qs("#form-forgot").reset();
  qs("#auth-photo-preview").removeAttribute("src");
  qs("#auth-photo-preview").classList.add("hidden");
  updateAuthInitials();
  showAuth();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPhone(phone) {
  return phone.replace(/\D/g, "").length >= 8;
}

function validPassword(password) {
  return password.length >= 8 && /[a-zA-ZÀ-ÿ]/.test(password) && /\d/.test(password);
}

async function setAuthPhoto(file) {
  if (!file) return;
  pendingAuthPhoto = await compressImage(file, 360);
  const img = qs("#auth-photo-preview");
  img.src = pendingAuthPhoto;
  img.classList.remove("hidden");
  qs("#auth-photo-initials").classList.add("hidden");
}

function userInitials(user = {}) {
  const a = String(user.prenom || "").trim();
  const b = String(user.nom || "").trim();
  const letters = `${a.charAt(0)}${b.charAt(0)}`.toUpperCase();
  if (letters.length >= 2) return letters;
  const one = (a || b || user.username || "?").slice(0, 2).toUpperCase();
  return one || "?";
}

function updateAuthInitials() {
  const form = qs("#form-auth");
  const initials = qs("#auth-photo-initials");
  if (!form || !initials) return;
  initials.textContent = userInitials({
    prenom: form.prenom?.value,
    nom: form.nom?.value,
  });
  if (pendingAuthPhoto) {
    qs("#auth-photo-preview").classList.remove("hidden");
    initials.classList.add("hidden");
  } else {
    qs("#auth-photo-preview").classList.add("hidden");
    initials.classList.remove("hidden");
  }
}

function applyChrome() {
  document.documentElement.lang = prefs.lang;
  document.documentElement.dataset.theme = prefs.theme;
  document.documentElement.removeAttribute("data-nav");
  document.querySelector('meta[name="theme-color"]').content = prefs.theme === "light" ? "#ffffff" : "#1a2332";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  qs("#select-lang").value = prefs.lang;
  qs("#select-theme").value = prefs.theme;
}

function emptyWorkspace() {
  return {
    chantiers: [],
    taches: [],
    equipe: [],
    presences: [],
    evenements: [],
    problemes: [],
    livraisons: [],
    finances: [],
    devis: [],
    sousTraitants: [],
  };
}

function normalizeState(data) {
  if (!data || typeof data !== "object") data = emptyWorkspace();
  data.evenements ||= [];
  data.evenements.forEach((ev) => {
    ev.alertes ||= [];
    ev.fired ||= [];
  });
  data.presences ||= [];
  data.equipe ||= [];
  data.equipe.forEach((m) => {
    if (!m.poste) m.poste = /chef/i.test(m.role || "") ? "chef" : "membre";
  });
  data.chantiers = Array.isArray(data.chantiers) ? data.chantiers : [];
  data.chantiers.forEach((c) => {
    c.contacts ||= [];
    c.visites ||= [];
    c.equipe ||= [];
    c.presences ||= [];
    c.photos ||= [];
    if (c.photo && !c.photos.includes(c.photo)) c.photos.unshift(c.photo);
    c.photos = c.photos.filter(Boolean);
    c.photo = c.photos[0] || "";
    if (!c.equipe.length && data.equipe.length) {
      c.equipe = data.equipe.map((m) => ({ ...m, id: uid() }));
    }
    c.equipe.forEach((m) => {
      if (!m.poste) m.poste = /chef/i.test(m.role || "") ? "chef" : "membre";
    });
  });
  data.problemes ||= [];
  data.problemes.forEach((p) => {
    p.echeance ||= "";
  });
  data.taches ||= [];
  data.taches.forEach((x) => {
    x.faite = !!x.faite || !!x.geree;
    x.geree = x.faite;
    if (x.geree) x.gereeLe ||= toDateKey(new Date());
    else x.gereeLe = "";
  });
  data.livraisons ||= [];
  data.evenements ||= [];
  data.livraisons.forEach((l) => {
    l.dateCommande ||= l.date || "";
    l.notes ||= "";
    l.commandee = !!l.commandee;
    l.dateArrivee = l.commandee ? (l.dateArrivee || l.date || "") : (l.dateArrivee || "");
  });
  data.evenements = data.evenements.filter((ev) => {
    if (!ev.livraisonId) return true;
    const l = data.livraisons.find((x) => x.id === ev.livraisonId);
    return !!(l && l.commandee);
  });
  data.livraisons.forEach((l) => {
    if (l.commandee && l.dateArrivee && !data.evenements.some((ev) => ev.livraisonId === l.id)) {
      data.evenements.unshift({
        id: uid(),
        titre: `${t("nav.livraison")} : ${l.titre}`,
        type: "commande",
        date: l.dateArrivee,
        heure: "08:00",
        chantierId: l.chantierId,
        notes: l.notes || l.fournisseur || "",
        livraisonId: l.id,
        alertes: [],
        fired: [],
      });
    }
  });
  data.finances ||= [];
  data.devis ||= [];
  data.devis.forEach(normalizeDevis);
  data.sousTraitants ||= [];
  data.sousTraitants.forEach((s) => {
    s.responsables ||= [];
    s.logo ||= "";
  });
  return data;
}

function applyWorkspace(data) {
  const next = normalizeState(JSON.parse(JSON.stringify(data || emptyWorkspace())));
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, next);
}

function persistLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota */
  }
}

function workspacePrefs() {
  return { lang: prefs.lang, theme: prefs.theme, sound: prefs.sound, notifs: !!prefs.notifs };
}

async function pushWorkspace() {
  if (!currentUser) return;
  try {
    await api("/api/workspace", { body: { state, prefs: workspacePrefs() } });
  } catch {
    /* keep local copy */
  }
}

async function pullWorkspace() {
  if (!currentUser) return;
  const data = await api("/api/workspace", { method: "GET" });
  const owner = localStorage.getItem(WORKSPACE_OWNER_KEY);
  const hadLocal = !!localStorage.getItem(STORAGE_KEY);
  if (data.workspace) {
    applyWorkspace(data.workspace);
    if (data.prefs && typeof data.prefs === "object") {
      if (["fr", "en", "de"].includes(data.prefs.lang)) prefs.lang = data.prefs.lang;
      prefs.theme = data.prefs.theme === "light" ? "light" : "dark";
      if (data.prefs.sound) prefs.sound = data.prefs.sound;
      prefs.notifs = data.prefs.notifs !== false;
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    }
  } else if (!(hadLocal && (!owner || owner === currentUser.id))) {
    applyWorkspace(emptyWorkspace());
  }
  localStorage.setItem(WORKSPACE_OWNER_KEY, currentUser.id);
  persistLocal();
  await pushWorkspace();
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalizeState(JSON.parse(raw));
  } catch {}
  return seed();
}

function save() {
  persistLocal();
  if (!currentUser) return;
  clearTimeout(cloudTimer);
  cloudTimer = setTimeout(() => { pushWorkspace(); }, 400);
}

function seed() {
  const c1 = uid();
  const c2 = uid();
  return {
    chantiers: [
      {
        id: c1, nom: "Résidence Les Oliviers", client: "SCI Méditerranée",
        adresse: "12 rue des Pins, Nice", debut: "2026-08-04", fin: "2027-03-30",
        statut: "en_cours", budget: 420000, notes: "Accès camion par la rue arrière.",
        contacts: [
          { id: uid(), nom: "Karim Benali", role: "Chef de chantier", tel: "06 12 34 56 78" },
          { id: uid(), nom: "SCI Méditerranée", role: "Maître d’ouvrage", tel: "04 93 00 00 00" },
        ],
        visites: [],
        photos: [],
        equipe: [
          { id: uid(), nom: "Karim Benali", poste: "chef", role: "Chef de chantier", tel: "06 12 34 56 78" },
          { id: uid(), nom: "Yanis Petit", poste: "membre", role: "Ouvrier", tel: "06 11 22 33 44" },
        ],
        presences: [],
      },
      {
        id: c2, nom: "Rénovation mairie — aile est", client: "Ville de Grasse",
        adresse: "Place du Cours, Grasse", debut: "2026-09-15", fin: "2026-12-20",
        statut: "preparation", budget: 185000, notes: "Bâtiment classé, coordination ABF.",
        contacts: [{ id: uid(), nom: "Léa Moreau", role: "Conductrice de travaux", tel: "06 98 76 54 32" }],
        visites: [],
        photos: [],
        equipe: [
          { id: uid(), nom: "Léa Moreau", poste: "chef", role: "Chef de chantier", tel: "06 98 76 54 32" },
        ],
        presences: [],
      },
    ],
    taches: [
      { id: uid(), chantierId: c1, titre: "Coulage dalle R+1", echeance: "2026-09-25", priorite: "haute", faite: false },
      { id: uid(), chantierId: c1, titre: "Livraison ferraillage", echeance: "2026-09-22", priorite: "normale", faite: true },
      { id: uid(), chantierId: c2, titre: "Diagnostic amiante", echeance: "2026-09-28", priorite: "critique", faite: false },
    ],
    equipe: [
      { id: uid(), nom: "Karim Benali", poste: "chef", role: "Chef de chantier", tel: "06 12 34 56 78" },
      { id: uid(), nom: "Léa Moreau", poste: "membre", role: "Conductrice de travaux", tel: "06 98 76 54 32" },
    ],
    presences: [],
    evenements: [
      { id: uid(), titre: "Réunion hebdo", type: "reunion", date: "2026-09-22", heure: "09:00", chantierId: c1, notes: "" },
      { id: uid(), titre: "Commande béton", type: "commande", date: "2026-09-23", heure: "14:30", chantierId: c1, notes: "" },
      { id: uid(), titre: "Mail ABF", type: "mail", date: "2026-09-22", heure: "16:00", chantierId: c2, notes: "" },
    ],
    problemes: [
      {
        id: uid(), chantierId: c1, titre: "Fuite réseau provisoire",
        description: "Eau au pied de la grue, zone glissante.",
        action: "Isoler la vanne et faire intervenir le plombier demain matin.",
        photo: "", statut: "ouvert", echeance: "2026-09-21",
      },
    ],
    livraisons: [
      { id: uid(), chantierId: c1, titre: "Ferraillage R+1", fournisseur: "Acier Sud", dateCommande: "2026-09-22", dateArrivee: "", date: "", notes: "Laine de roche / ferraillage", statut: "attendue", commandee: false },
    ],
    finances: [
      { id: uid(), chantierId: c1, type: "depense", libelle: "Béton C25/30", montant: 8400, date: "2026-09-18" },
    ],
    devis: [],
    sousTraitants: [
      { id: uid(), nom: "Elec Méditerranée", metier: "Électricité", tel: "04 93 11 22 33", chantierId: c1, logo: "", responsables: [{ id: uid(), nom: "Paul Ricci", role: "Conducteur", poste: "Chef d’équipe", mail: "paul@elec.fr" }] },
    ],
  };
}

function qs(sel) {
  return document.querySelector(sel);
}
function searchQuery() {
  return qs("#search").value.trim().toLowerCase();
}

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function toDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function currentSite() {
  return state.chantiers.find((x) => x.id === selectedChantierId);
}

function go(view, extraId = null) {
  currentView = view;
  if (view === "detail") selectedChantierId = extraId;
  if (view === "historique") {
    selectedHistoriqueId = extraId || null;
    selectedHistoriqueCat = null;
  }
  if (view === "devis" && extraId) selectedDevisSiteId = extraId;
  if (view === "suivi" && extraId) selectedSuiviId = extraId;
  if (view === "galerie" && extraId) selectedGalerieId = extraId;
  if (view === "finance") view = currentView = "dashboard";
  const tab = view === "detail" ? "chantiers" : view;
  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === tab);
  });
  qs("#page-title").textContent = t(`title.${view}`);
  render();
}

function filteredChantiers() {
  const q = searchQuery();
  return state.chantiers.filter((c) => [c.nom, c.client, c.adresse].join(" ").toLowerCase().includes(q));
}

function activeTasks(list = state.taches) {
  return list.filter((x) => !x.faite);
}

function avancement(chantierId) {
  const taches = state.taches.filter((x) => x.chantierId === chantierId);
  if (!taches.length) return 0;
  return Math.round((taches.filter((x) => x.faite).length / taches.length) * 100);
}

function money(n) {
  return new Intl.NumberFormat(locale(), { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n || 0);
}

function moneyHt(n) {
  return new Intl.NumberFormat(locale(), { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);
}

function parseDec(v) {
  const n = Number(String(v ?? "").replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function devisLineTotal(l) {
  if ((l.type || "ligne") === "titre") return 0;
  return parseDec(l.qte) * parseDec(l.puHt);
}

function devisTotal(d) {
  return (d.lignes || []).reduce((s, l) => s + devisLineTotal(l), 0);
}

function devisEtat(d) {
  if (d.validee) return "validated";
  if (d.envoyeLe) return "sent";
  return "draft";
}

function devisEtatLabel(d) {
  const e = devisEtat(d);
  return e === "validated" ? t("devis.validated") : e === "sent" ? t("devis.sent") : t("devis.draft");
}

function devisTraceHtml(d) {
  if (!d.envoyeLe && !d.validee && !d.preuve) return "";
  return `
    <div class="devis-trace">
      ${d.envoyeLe ? `<p>${t("devis.sentOn", { date: fmtDay(d.envoyeLe) })}</p>` : ""}
      ${d.envoyeLe && !d.validee ? `<p>${t("devis.nextHint")}</p>` : ""}
      ${d.validee ? `<p>${t("devis.validatedOn", { date: d.valideeLe ? fmtDay(d.valideeLe) : "—" })}</p>` : ""}
      ${d.preuveNote ? `<p>${escapeHtml(d.preuveNote)}</p>` : ""}
      ${d.preuve ? `<button type="button" class="btn ghost" data-open-preuve="${d.id}">${t("devis.openPreuve")}${d.preuveNom ? " · " + escapeHtml(d.preuveNom) : ""}</button>` : ""}
    </div>`;
}

function devisWorkLines(d) {
  return (d.lignes || []).filter((l) => (l.type || "ligne") !== "titre" && String(l.designation || "").trim());
}

function devisCommandeNotes(d) {
  const rows = devisWorkLines(d).map((l) => {
    const qty = [l.qte || "", l.unite || ""].join(" ").trim();
    return [qty, l.designation].filter(Boolean).join(" — ");
  });
  return [d.notes, ...rows].filter(Boolean).join("\n");
}

function openDevisApplyDialog(id) {
  const d = (state.devis || []).find((x) => x.id === id);
  if (!d?.validee) return;
  normalizeDevis(d);
  const form = qs("#form-devis-apply");
  form.elements.id.value = d.id;
  qs("#devis-apply-lead").textContent = t("devis.apply.lead", { title: d.titre });
  qs("#devis-apply-error").classList.add("hidden");
  const nLines = devisWorkLines(d).length;
  const total = devisTotal(d);
  const cmdDone = !!(d.apply.commandeId && (state.livraisons || []).some((l) => l.id === d.apply.commandeId));
  const tasksDone = (d.apply.tacheIds || []).some((tid) => state.taches.some((x) => x.id === tid));
  const finDone = !!(d.apply.financeId && (state.finances || []).some((f) => f.id === d.apply.financeId));
  const cmd = form.elements.wantCommande;
  const tasks = form.elements.wantTasks;
  const fin = form.elements.wantFinance;
  cmd.disabled = false;
  cmd.checked = !cmdDone;
  qs("#devis-apply-commande-label").textContent = t("devis.apply.commande") + (cmdDone ? ` (${t("devis.apply.done")})` : "");
  tasks.disabled = nLines === 0;
  tasks.checked = !tasksDone && nLines > 0;
  qs("#devis-apply-tasks-label").textContent = nLines
    ? t("devis.apply.tasks", { n: nLines }) + (tasksDone ? ` (${t("devis.apply.done")})` : "")
    : t("devis.apply.noLines");
  fin.checked = false;
  fin.disabled = true;
  qs("#devis-apply-finance-label").textContent = t("devis.apply.finance", { money: moneyHt(total) }) + (finDone ? ` (${t("devis.apply.done")})` : "");
  form.elements.tacheDate.value = "";
  form.elements.commandeDate.value = "";
  qs("#devis-apply-date-wrap").classList.toggle("hidden", nLines === 0 || !tasks.checked);
  qs("#devis-apply-commande-date-wrap").classList.toggle("hidden", !cmd.checked);
  qs("#dialog-devis-apply").showModal();
}

function normalizeDevis(d) {
  d.validee = !!d.validee;
  d.valideeLe ||= "";
  d.envoyeLe ||= "";
  d.preuve ||= "";
  d.preuveNom ||= "";
  d.preuveType ||= "";
  d.preuveNote ||= "";
  d.notes ||= "";
  d.client ||= "";
  d.apply ||= {};
  d.apply.commandeId ||= "";
  d.apply.tacheIds = Array.isArray(d.apply.tacheIds) ? d.apply.tacheIds : [];
  d.apply.financeId ||= "";
  d.lignes ||= [];
  if (!d.lignes.length && (d.titre || d.montant)) {
    d.lignes = [{ id: uid(), type: "ligne", designation: "", qte: 1, unite: "", puHt: Number(d.montant || 0) }];
  }
  d.lignes.forEach((l) => {
    l.id ||= uid();
    l.type = l.type === "titre" ? "titre" : "ligne";
    l.designation ||= "";
    l.qte = parseDec(l.qte);
    l.unite ||= "";
    l.puHt = parseDec(l.puHt);
  });
  d.montant = devisTotal(d);
  return d;
}

function monthLabel(d) {
  return new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(d);
}

function longDate(d = new Date()) {
  const s = new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function fmtDay(key) {
  return new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short", year: "numeric" }).format(new Date(key + "T00:00:00"));
}

function splitDateKey(key) {
  const [y, m, d] = (key || toDateKey(new Date())).split("-");
  return { y, m, d };
}

function parseDmy(d, m, y) {
  const day = Number(d);
  const month = Number(m);
  const year = Number(y);
  if (!day || !month || year < 2000) return null;
  const dt = new Date(year, month - 1, day);
  if (dt.getFullYear() !== year || dt.getMonth() !== month - 1 || dt.getDate() !== day) return null;
  return toDateKey(dt);
}

function nextDateKey(key) {
  const dt = new Date(key + "T00:00:00");
  dt.setDate(dt.getDate() + 1);
  return toDateKey(dt);
}

function absenceRanges(days) {
  const sorted = [...new Set(days)].sort();
  const ranges = [];
  for (const key of sorted) {
    const prev = ranges[ranges.length - 1];
    if (prev && nextDateKey(prev.end) === key) prev.end = key;
    else ranges.push({ start: key, end: key });
  }
  const parts = [];
  for (const range of ranges) {
    let start = range.start;
    let cur = range.start;
    while (cur < range.end) {
      const nxt = nextDateKey(cur);
      if (nxt.slice(0, 7) !== cur.slice(0, 7)) {
        parts.push({ start, end: cur });
        start = nxt;
      }
      cur = nxt;
    }
    parts.push({ start, end: range.end });
  }
  const byMonth = new Map();
  for (const part of parts) {
    const mk = part.start.slice(0, 7);
    if (!byMonth.has(mk)) byMonth.set(mk, []);
    byMonth.get(mk).push(part);
  }
  return [...byMonth.entries()].map(([mk, items]) => {
    const label = new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(new Date(`${mk}-01T00:00:00`));
    const chips = items.map((p) => {
      const a = Number(p.start.slice(8));
      const b = Number(p.end.slice(8));
      return a === b ? String(a) : `${a}–${b}`;
    });
    return { label: label.charAt(0).toUpperCase() + label.slice(1), chips };
  });
}

function absenceDebriefHtml(d) {
  const months = absenceRanges(d.days);
  return `
    <article class="item static absence-card">
      <div class="absence-head">
        <h3>${t("debrief.line", { name: d.m.nom, n: d.n })}</h3>
      </div>
      ${months.map((mo) => `
        <div class="absence-month">
          <p class="absence-month-label">${escapeHtml(mo.label)}</p>
          <div class="absence-chips">${mo.chips.map((c) => `<span class="absence-chip">${escapeHtml(c)}</span>`).join("")}</div>
        </div>
      `).join("")}
    </article>
  `;
}

function memberStatus(id, dateKey, site) {
  return (site?.presences || []).find((p) => p.memberId === id && p.date === dateKey)?.statut || "";
}

function absenceDebrief(member, site) {
  const days = [...new Set((site?.presences || []).filter((p) => p.memberId === member.id && p.statut === "absent").map((p) => p.date))].sort();
  return { days, n: days.length };
}

function renderHello() {
  if (!currentUser) {
    qs("#sidebar-hello").innerHTML = "";
    return;
  }
  const name = currentUser.prenom || currentUser.username || "";
  const photo = currentUser.photo
    ? `<img class="hello-avatar" src="${currentUser.photo}" alt="">`
    : `<span class="hello-avatar avatar-initials">${escapeHtml(userInitials(currentUser))}</span>`;
  qs("#sidebar-hello").innerHTML = `
    <div class="hello-user">
      ${photo}
      <div>
        <p class="hello">${t("hello", { name })}</p>
        <p class="hello-role">${t("hello.role", { poste: currentUser.poste, entreprise: currentUser.entreprise })}</p>
        <p class="hello-date">${longDate()}</p>
      </div>
    </div>
  `;
}

function weekBounds(d = new Date()) {
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - day);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  return { start: toDateKey(start), end: toDateKey(end) };
}

function livDate(l) {
  return l.dateArrivee || l.date || "";
}

function weatherHtml() {
  if (!weatherState.loaded) {
    return `<div class="card weather-card" id="weather-box"><div class="label">${t("weather.title")}</div><div class="value">…</div></div>`;
  }
  return `<div class="card weather-card" id="weather-box">
    <div class="weather-icon">${weatherState.icon}</div>
    <div>
      <div class="label">${t("weather.title")}</div>
      <div class="value">${weatherState.temp != null ? Math.round(weatherState.temp) + "°C" : "—"}</div>
      <p>${escapeHtml(weatherState.label)}</p>
      ${weatherState.place ? `<p class="weather-place">${escapeHtml(weatherState.place)}</p>` : ""}
    </div>
  </div>`;
}

function weatherFromCode(code) {
  if (code === 0) return { icon: "☀️", label: t("weather.clear") };
  if (code <= 3) return { icon: "⛅", label: t("weather.cloud") };
  if (code <= 48) return { icon: "🌫️", label: t("weather.fog") };
  if (code <= 67 || (code >= 80 && code <= 82)) return { icon: "🌧️", label: t("weather.rain") };
  if (code <= 77 || code === 85 || code === 86) return { icon: "❄️", label: t("weather.snow") };
  if (code >= 95) return { icon: "⛈️", label: t("weather.storm") };
  return { icon: "⛅", label: t("weather.cloud") };
}

async function refreshWeather() {
  if (weatherState.loading) return;
  if (weatherState.loaded && Date.now() - weatherState.at < 30 * 60 * 1000) return;
  weatherState.loading = true;
  const lang = prefs.lang || "fr";
  const apply = (lat, lon) => Promise.all([
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`).then((r) => r.json()),
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${lang}`).then((r) => r.json()).catch(() => ({})),
  ]).then(([data, geo]) => {
    const w = weatherFromCode(data.current?.weather_code);
    const place = [geo.city || geo.locality, geo.principalSubdivision, geo.countryName].filter(Boolean).join(", ");
    weatherState = {
      loading: false,
      loaded: true,
      at: Date.now(),
      temp: data.current?.temperature_2m,
      label: w.label,
      icon: w.icon,
      place,
    };
    const box = qs("#weather-box");
    if (box) box.outerHTML = weatherHtml();
  });
  const fallback = () => apply(48.8566, 2.3522).catch(() => {
    weatherState = { loading: false, loaded: true, at: Date.now(), temp: null, label: t("weather.unavailable"), icon: "⛅", place: "" };
    const box = qs("#weather-box");
    if (box) box.outerHTML = weatherHtml();
  });
  if (!navigator.geolocation) return fallback();
  navigator.geolocation.getCurrentPosition(
    (pos) => apply(pos.coords.latitude, pos.coords.longitude).catch(fallback),
    fallback,
    { timeout: 8000, maximumAge: 600000 }
  );
}

function sitePhotos(c) {
  const list = Array.isArray(c?.photos) ? c.photos.filter(Boolean) : [];
  if (c?.photo && !list.includes(c.photo)) list.unshift(c.photo);
  return list;
}

function setSitePhotos(c, list) {
  c.photos = list.filter(Boolean);
  c.photo = c.photos[0] || "";
}

function sitePhoto(c) {
  return sitePhotos(c)[0] || "";
}

function livraisonsDuJour(dateKey = toDateKey(new Date())) {
  return (state.livraisons || []).filter((l) => {
    if (l.commandee) return livDate(l) === dateKey;
    return l.dateCommande === dateKey;
  });
}

function renderDashboard() {
  const enCours = state.chantiers.filter((c) => c.statut === "en_cours").length;
  const today = toDateKey(new Date());
  const tachesJour = activeTasks().filter((x) => x.echeance === today && !x.faite);
  const critiques = activeTasks().filter((x) => !x.faite && x.priorite === "critique").length;
  const blocked = state.problemes.filter((p) => p.statut === "ouvert").length;
  const coming = dayItems(today);
  const todayLivs = livraisonsDuJour(today);
  qs("#accueil-body").innerHTML = `
    <div class="cards">
      <div class="card"><div class="label">${t("stat.sites")}</div><div class="value">${state.chantiers.length}</div></div>
      <div class="card"><div class="label">${t("stat.active")}</div><div class="value">${enCours}</div></div>
      <div class="card"><div class="label">${t("stat.openTasks")}</div><div class="value">${tachesJour.length}</div></div>
      <div class="card"><div class="label">${t("stat.blocked")}</div><div class="value">${blocked}</div></div>
      <div class="card">
        <div class="label">${t("stat.livToday")}</div>
        <div class="value">${todayLivs.length}</div>
        <p class="card-sub">${t(todayLivs.length > 1 ? "stat.livTodayMsgMany" : "stat.livTodayMsg", { n: todayLivs.length })}</p>
      </div>
    </div>
    <p class="label" style="margin-top:8px">${t("stat.critical")}: ${critiques}</p>
    <div class="home-layout">
      <div>
        <h2>${t("nav.chantiers")}</h2>
        <div class="site-grid">${filteredChantiers().map((c) => chantierCard(c, false)).join("") || empty(t("empty.sites"))}</div>
      </div>
      <aside class="home-side">
        ${weatherHtml()}
        <div class="coming-box">
          <label class="notif-switch">
            <span>${t("prefs.notifs")}</span>
            <span class="switch">
              <input type="checkbox" id="toggle-notifs" ${prefs.notifs ? "checked" : ""} />
              <span class="slider"></span>
            </span>
            <span id="notif-state">${t(prefs.notifs ? "prefs.notifsOn" : "prefs.notifsOff")}</span>
          </label>
          <div class="coming-head">
            <h2>${t("h.todayTodo")}</h2>
            <button type="button" class="coming-all" data-go-view="calendrier">${t("h.seeAll")}</button>
          </div>
          ${coming.length
            ? `<ul class="coming-list">${coming.map(comingLine).join("")}</ul>`
            : `<p class="coming-empty">${t("empty.today")}</p>`}
        </div>
      </aside>
    </div>
  `;
  refreshWeather();
}

function monthYear(key) {
  if (!key) return "—";
  const d = new Date(key + "T00:00:00");
  if (Number.isNaN(d.getTime())) return "—";
  return new Intl.DateTimeFormat(locale(), { month: "short", year: "numeric" }).format(d);
}

function chantierCard(c, openable = true) {
  const pct = avancement(c.id);
  const photo = sitePhoto(c);
  const photoBtn = photo ? t("btn.changePhoto") : t("btn.sitePhoto");
  const openCount = activeTasks().filter((x) => x.chantierId === c.id).length;
  return `
    <article class="item ${openable ? "" : "static"} site-card ${photo ? "has-photo" : ""}" ${openable ? `data-open="${c.id}"` : ""}>
      <div class="site-media">
        ${photo ? `<img class="site-thumb" src="${photo}" alt="">` : `<div class="site-thumb placeholder" aria-hidden="true"></div>`}
        <span class="badge ${c.statut}">${t("status." + c.statut)}</span>
      </div>
      <div class="site-body">
        <h3>${escapeHtml(c.nom)}</h3>
        <p class="site-loc">${escapeHtml(c.adresse || t("noAddress"))}</p>
        <div class="site-progress-row">
          <div class="progress"><span style="width:${pct}%"></span></div>
          <span class="site-pct">${pct}%</span>
        </div>
        <p class="site-foot">
          <span>${t("site.openCount", { n: openCount })}</span>
          <span>${t("site.end", { date: monthYear(c.fin) })}</span>
        </p>
        ${openable ? `
          <label class="btn ghost site-photo-btn" data-stop>
            <input type="file" accept="image/*" multiple hidden data-site-photo="${c.id}" />
            ${photoBtn}
          </label>` : ""}
      </div>
    </article>
  `;
}

function equipeBlock(c) {
  const equipe = c.equipe || [];
  const chef = equipe.find((m) => m.poste === "chef");
  const membres = equipe.filter((m) => m.poste !== "chef");
  const debriefs = equipe.map((m) => ({ m, ...absenceDebrief(m, c) })).filter((d) => d.n > 0);
  const dmy = splitDateKey(presenceDay);
  return `
    <div class="card team-box">
      <div class="toolbar">
        <h2>${t("h.team")}</h2>
        <button class="btn primary" id="btn-nouveau-membre">${t("btn.newMember")}</button>
      </div>
      <label class="presence-date"><span>${t("presence.date")}</span>
        <div class="dmy-picker" id="presence-dmy">
          <input data-dmy="d" inputmode="numeric" maxlength="2" value="${dmy.d}" placeholder="${t("presence.day")}" aria-label="${t("presence.day")}" />
          <span>/</span>
          <input data-dmy="m" inputmode="numeric" maxlength="2" value="${dmy.m}" placeholder="${t("presence.month")}" aria-label="${t("presence.month")}" />
          <span>/</span>
          <input data-dmy="y" class="year" inputmode="numeric" maxlength="4" value="${dmy.y}" placeholder="${t("presence.year")}" aria-label="${t("presence.year")}" />
          <button type="button" class="cal-icon-btn" title="${t("presence.pick")}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
            <input id="presence-date-native" type="date" value="${presenceDay}" tabindex="-1" aria-label="${t("presence.pick")}" />
          </button>
        </div>
      </label>
      <h3 class="team-sub">${t("h.chef")}</h3>
      <div class="list tight">
        ${chef ? `
          <article class="item static member-row">
            <div>
              <h3>${escapeHtml(chef.nom)}</h3>
              <p>${escapeHtml(chef.tel || t("noPhone"))}</p>
            </div>
            <button class="btn ${memberStatus(chef.id, presenceDay, c) === "present" ? "primary" : "ghost"}" data-presence="${chef.id}" data-statut="present">${t("presence.present")}</button>
            <button class="btn ${memberStatus(chef.id, presenceDay, c) === "absent" ? "danger" : "ghost"}" data-presence="${chef.id}" data-statut="absent">${t("presence.absent")}</button>
          </article>` : empty(t("empty.chef"))}
      </div>
      <h3 class="team-sub">${t("h.teamMembers")}</h3>
      <div class="list tight">
        ${membres.map((m) => {
          const st = memberStatus(m.id, presenceDay, c);
          return `
          <article class="item static member-row">
            <div>
              <h3>${escapeHtml(m.nom)}</h3>
              <p>${escapeHtml(m.tel || t("noPhone"))}</p>
            </div>
            <button class="btn ${st === "present" ? "primary" : "ghost"}" data-presence="${m.id}" data-statut="present">${t("presence.present")}</button>
            <button class="btn ${st === "absent" ? "danger" : "ghost"}" data-presence="${m.id}" data-statut="absent">${t("presence.absent")}</button>
            <button class="btn ghost" data-set-chef="${m.id}">${t("btn.setChef")}</button>
            <button class="btn ghost" data-del-membre="${m.id}">${t("btn.remove")}</button>
          </article>`;
        }).join("") || empty(t("empty.members"))}
      </div>
      <h3 class="team-sub">${t("h.debrief")}</h3>
      <div class="list tight">
        ${debriefs.map(absenceDebriefHtml).join("") || empty(t("empty.debrief"))}
      </div>
    </div>
  `;
}

function renderChantiers() {
  qs("#view-chantiers").innerHTML = `
    <div class="toolbar">
      <p class="label">${t("count.sites", { n: filteredChantiers().length })}</p>
      <button class="btn primary" id="btn-nouveau-chantier-2">${t("btn.newSite")}</button>
    </div>
    <div class="site-grid">${filteredChantiers().map((c) => chantierCard(c, true)).join("") || empty(t("empty.sites"))}</div>
  `;
}

function siteName(id) {
  return state.chantiers.find((c) => c.id === id)?.nom || t("noSite");
}

function fillChantierSelect(selector, includeEmpty = false) {
  const el = qs(selector);
  if (!el) return;
  el.innerHTML = (includeEmpty ? `<option value="">—</option>` : "") +
    state.chantiers.map((c) => `<option value="${c.id}">${escapeHtml(c.nom)}</option>`).join("");
}

function renderLivraison() {
  const q = searchQuery();
  const rows = (state.livraisons || []).filter((l) =>
    !l.commandee &&
    [l.titre, l.fournisseur, l.notes, siteName(l.chantierId)].join(" ").toLowerCase().includes(q)
  );
  qs("#view-livraison").innerHTML = `
    <div class="toolbar">
      <p class="label">${rows.length} ${t("nav.livraison").toLowerCase()}</p>
      <button class="btn primary" id="btn-nouvelle-livraison">${t("btn.newLivraison")}</button>
    </div>
    <div class="list">${rows.map((l) => `
      <article class="item static visit-line">
        <div>
          <h3>${escapeHtml(l.titre)}</h3>
          <p>${escapeHtml(siteName(l.chantierId))} · ${escapeHtml(l.fournisseur || "—")}</p>
          <p>${t("liv.orderFor", { date: l.dateCommande ? fmtDay(l.dateCommande) : "—" })}</p>
          ${l.commandee && livDate(l) ? `<p>${t("liv.arriveOn", { date: fmtDay(livDate(l)) })}</p>` : ""}
          ${l.notes ? `<p>${escapeHtml(l.notes)}</p>` : ""}
        </div>
        <button type="button" class="sent-box ${l.commandee ? "on locked" : ""}" data-toggle-commande="${l.id}" ${l.commandee ? "disabled" : ""}>
          <span class="mark">${l.commandee ? "✓" : ""}</span>
          ${t("liv.commandee")}
        </button>
        <button class="btn ghost" data-del-livraison="${l.id}">${t("btn.delete")}</button>
      </article>
    `).join("") || empty(t("empty.livraisons"))}</div>
  `;
}

function renderDevis() {
  const q = searchQuery();
  const sites = filteredChantiers();
  const site = state.chantiers.find((c) => c.id === selectedDevisSiteId);
  if (selectedDevisSiteId && !site) selectedDevisSiteId = null;
  if (!site) {
    qs("#view-devis").innerHTML = `
      <div class="toolbar">
        <p class="label">${t("hist.pickSite")}</p>
        <p class="auth-sub">${t("devis.nextHint")}</p>
      </div>
      <div class="list">${sites.map((c) => {
        const n = (state.devis || []).filter((d) => d.chantierId === c.id).length;
        return `
        <article class="item" data-devis-site="${c.id}">
          <div>
            <h3>${escapeHtml(c.nom)}</h3>
            <p>${escapeHtml(c.client)} · ${t("devis.nSite", { n })}</p>
          </div>
        </article>`;
      }).join("") || empty(t("empty.sites"))}</div>
    `;
    return;
  }
  const rows = (state.devis || []).filter((d) =>
    d.chantierId === site.id &&
    [d.titre, d.client, d.notes, ...(d.lignes || []).map((l) => l.designation)].join(" ").toLowerCase().includes(q)
  );
  qs("#view-devis").innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn ghost" id="btn-devis-back">${t("btn.back")}</button>
      <button class="btn primary" id="btn-nouveau-devis">${t("btn.newDevis")}</button>
    </div>
    <div class="card">
      <h2>${escapeHtml(site.nom)}</h2>
      <p>${escapeHtml(site.client)}</p>
    </div>
    <div class="list">${rows.map((d) => `
      <article class="item static">
        <div>
          <h3>${escapeHtml(d.titre)}</h3>
          <p>${d.date ? fmtDay(d.date) : "—"}${d.client ? " · " + escapeHtml(d.client) : ""} · ${moneyHt(devisTotal(d))}</p>
        </div>
        <div class="devis-actions">
          <span class="badge ${d.validee ? "termine" : d.envoyeLe ? "chantier" : "preparation"}">${devisEtatLabel(d)}</span>
          ${d.validee
            ? `<button type="button" class="btn ghost" data-view-devis="${d.id}">${t("visit.view")}</button>
               <button type="button" class="btn primary" data-apply-devis="${d.id}">${t("btn.applyDevis")}</button>`
            : `<button type="button" class="btn ghost" data-edit-devis="${d.id}">${t("btn.edit")}</button>`}
          ${!d.envoyeLe && !d.validee ? `<button type="button" class="btn primary" data-envoyer-devis="${d.id}">${t("btn.sendDevis")}</button>` : ""}
          ${d.envoyeLe && !d.validee ? `<button type="button" class="btn primary" data-preuve-devis="${d.id}">${t("btn.clientOk")}</button>` : ""}
          <button type="button" class="btn ghost" data-pdf-devis="${d.id}">${t("btn.pdf")}</button>
          ${d.preuve ? `<button type="button" class="btn ghost" data-open-preuve="${d.id}">${t("devis.openPreuve")}</button>` : ""}
          <button type="button" class="btn ghost" data-del-devis="${d.id}">${t("btn.delete")}</button>
        </div>
        ${devisTraceHtml(d)}
      </article>
    `).join("") || empty(t("empty.devis"))}</div>
  `;
}

function sitePace(c) {
  const today = toDateKey(new Date());
  const actual = avancement(c.id);
  const overdue = activeTasks().filter((x) => x.chantierId === c.id && x.echeance && x.echeance < today && !x.faite).length;
  let expected = 0;
  if (c.debut && c.fin && c.debut < c.fin) {
    const t0 = new Date(c.debut + "T00:00:00").getTime();
    const t1 = new Date(c.fin + "T00:00:00").getTime();
    const now = new Date(today + "T00:00:00").getTime();
    expected = Math.round(((now - t0) / (t1 - t0)) * 100);
    expected = Math.max(0, Math.min(100, expected));
  }
  let pace = "onTime";
  if (overdue > 0 || (c.fin && today > c.fin && actual < 100) || (c.debut && c.fin && actual < expected - 5)) pace = "late";
  else if (c.debut && c.fin && actual > expected + 5) pace = "ahead";
  return { actual, expected, overdue, pace };
}

function renderSuivi() {
  const sites = filteredChantiers();
  const site = state.chantiers.find((c) => c.id === selectedSuiviId);
  if (selectedSuiviId && !site) selectedSuiviId = null;
  if (!site) {
    qs("#view-suivi").innerHTML = `
      <p class="label">${t("suivi.pickSite")}</p>
      <div class="list">${sites.map((c) => {
        const p = sitePace(c);
        return `
        <article class="item" data-suivi-site="${c.id}">
          <div>
            <h3>${escapeHtml(c.nom)}</h3>
            <p>${t("suivi.actual", { n: p.actual })}</p>
          </div>
          <span class="badge pace-${p.pace}">${t("suivi.pace." + p.pace)}</span>
        </article>`;
      }).join("") || empty(t("empty.sites"))}</div>
    `;
    return;
  }
  const p = sitePace(site);
  const today = toDateKey(new Date());
  const tasks = state.taches.filter((x) => x.chantierId === site.id)
    .sort((a, b) => (a.echeance || "9999").localeCompare(b.echeance || "9999"));
  qs("#view-suivi").innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn ghost" id="btn-suivi-back">${t("btn.back")}</button>
    </div>
    <div class="card">
      <div class="toolbar" style="margin:0">
        <div>
          <h2>${escapeHtml(site.nom)}</h2>
          <p>${t("fromTo", { start: site.debut || "—", end: site.fin || "—", money: money(site.budget) })}</p>
        </div>
        <span class="badge pace-${p.pace}">${t("suivi.pace." + p.pace)}</span>
      </div>
      <p>${t("suivi.expected", { n: p.expected })}</p>
      <div class="progress"><span style="width:${p.expected}%"></span></div>
      <p>${t("suivi.actual", { n: p.actual })}</p>
      <div class="progress"><span style="width:${p.actual}%"></span></div>
      ${p.overdue ? `<p>${t("suivi.overdue", { n: p.overdue })}</p>` : ""}
    </div>
    <h2 class="suivi-h">${t("suivi.planning")}</h2>
    <div class="list">${tasks.map((x) => {
      const late = x.echeance && x.echeance < today && !x.faite;
      const done = x.faite;
      return `
      <article class="item static">
        <div>
          <h3 class="${done ? "done" : ""}">${escapeHtml(x.titre)}</h3>
          <p>${x.echeance ? fmtDay(x.echeance) : "—"}</p>
        </div>
        <span class="badge ${late ? "ouvert" : done ? "termine" : "preparation"}">${late ? t("suivi.pace.late") : done ? t("task.managed") : t("suivi.pace.onTime")}</span>
      </article>`;
    }).join("") || empty(t("empty.suiviTasks"))}</div>
  `;
}

function renderCompteRendu() {
  const q = searchQuery();
  if (!selectedCrSiteId || !state.chantiers.some((c) => c.id === selectedCrSiteId)) {
    selectedCrSiteId = state.chantiers[0]?.id || null;
  }
  const site = state.chantiers.find((c) => c.id === selectedCrSiteId);
  const filtered = (site?.visites || [])
    .filter((v) => [v.date, v.heure, v.compteRendu].join(" ").toLowerCase().includes(q))
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  qs("#view-cr").innerHTML = `
    <div class="toolbar">
      <p class="label">${filtered.length}</p>
      <div class="toolbar" style="margin:0;gap:8px">
        <select id="cr-site-select">${state.chantiers.map((c) =>
          `<option value="${c.id}" ${c.id === selectedCrSiteId ? "selected" : ""}>${escapeHtml(c.nom)}</option>`
        ).join("")}</select>
        <button class="btn primary" id="btn-cr-new">${t("btn.newVisit")}</button>
      </div>
    </div>
    <div class="list">${filtered.map((v) => `
      <article class="item static visit-line">
        <div data-open-cr="${site.id}:${v.id}" style="cursor:pointer">
          <h3>${t("visit.siteOf", { name: site.nom })}</h3>
          <p>${escapeHtml(v.date)}${v.heure ? " · " + escapeHtml(v.heure) : ""}</p>
        </div>
        <span class="badge ${v.envoyee ? "termine" : "preparation"}">${v.envoyee ? t("visit.sent") : t("visit.edit")}</span>
        <button type="button" class="btn ghost" data-open-cr="${site.id}:${v.id}">${v.envoyee ? t("visit.view") : t("visit.edit")}</button>
      </article>
    `).join("") || empty(t("empty.cr"))}</div>
  `;
}

function renderFinance() {
  const q = searchQuery();
  const rows = (state.finances || []).filter((f) =>
    [f.libelle, siteName(f.chantierId), f.type].join(" ").toLowerCase().includes(q)
  );
  const recettes = rows.filter((f) => f.type === "recette").reduce((s, f) => s + Number(f.montant || 0), 0);
  const depenses = rows.filter((f) => f.type === "depense").reduce((s, f) => s + Number(f.montant || 0), 0);
  qs("#view-finance").innerHTML = `
    <div class="cards">
      <div class="card"><div class="label">${t("fin.recette")}</div><div class="value">${money(recettes)}</div></div>
      <div class="card"><div class="label">${t("fin.depense")}</div><div class="value">${money(depenses)}</div></div>
      <div class="card"><div class="label">${t("fin.solde")}</div><div class="value">${money(recettes - depenses)}</div></div>
    </div>
    <div class="toolbar" style="margin-top:18px">
      <p class="label">${rows.length}</p>
      <button class="btn primary" id="btn-nouvelle-finance">${t("btn.newFinance")}</button>
    </div>
    <div class="list">${rows.map((f) => `
      <article class="item static">
        <div>
          <h3>${escapeHtml(f.libelle)}</h3>
          <p>${escapeHtml(siteName(f.chantierId))} · ${escapeHtml(f.date || "")} · ${t("fin." + f.type)}</p>
        </div>
        <strong>${f.type === "depense" ? "−" : "+"}${money(f.montant)}</strong>
        <button class="btn ghost" data-del-finance="${f.id}">${t("btn.delete")}</button>
      </article>
    `).join("") || empty(t("empty.finances"))}</div>
  `;
}

function renderSousTraitants() {
  const q = searchQuery();
  const rows = (state.sousTraitants || []).filter((s) =>
    [s.nom, s.metier, s.tel, siteName(s.chantierId), ...(s.responsables || []).map((r) => `${r.nom} ${r.mail}`)].join(" ").toLowerCase().includes(q)
  );
  qs("#view-sousTraitants").innerHTML = `
    <div class="toolbar">
      <p class="label">${rows.length}</p>
      <button class="btn primary" id="btn-nouveau-st">${t("btn.newSt")}</button>
    </div>
    <div class="list">${rows.map((s) => `
      <article class="item static st-card">
        ${s.logo ? `<img class="st-logo" src="${s.logo}" alt="">` : ""}
        <div>
          <h3>${escapeHtml(s.nom)}</h3>
          <p>${escapeHtml(s.metier)} · ${escapeHtml(s.tel || t("noPhone"))} · ${escapeHtml(siteName(s.chantierId))}</p>
          ${(s.responsables || []).map((r) =>
            `<p>${escapeHtml(r.nom || "")} · ${escapeHtml(r.role || t("noRole"))} · ${escapeHtml(r.poste || t("field.poste"))} · ${escapeHtml(r.mail || t("noEmail"))}</p>`
          ).join("") || `<p>${t("empty.resp")}</p>`}
        </div>
        <button class="btn ghost" data-del-st="${s.id}">${t("btn.delete")}</button>
      </article>
    `).join("") || empty(t("empty.sousTraitants"))}</div>
  `;
}

function renderTaches() {
  const q = searchQuery();
  const taches = state.taches.filter((x) => {
    const c = state.chantiers.find((s) => s.id === x.chantierId);
    return [x.titre, c?.nom].join(" ").toLowerCase().includes(q);
  });
  qs("#view-taches").innerHTML = `
    <div class="toolbar">
      <p class="label">${t("count.openTasks", { n: taches.filter((x) => !x.faite).length })}</p>
      <button class="btn primary" id="btn-nouvelle-tache">${t("btn.newTask")}</button>
    </div>
    <div class="list">${taches.map(tacheRow).join("") || empty(t("empty.tasks"))}</div>
  `;
}

function tacheRow(item, { actions = false } = {}) {
  const c = state.chantiers.find((x) => x.id === item.chantierId);
  return `
    <article class="item static ${actions ? "task-line" : ""}">
      <label class="check">
        <input type="checkbox" data-toggle-tache="${item.id}" ${item.faite ? "checked" : ""} />
        <div>
          <h3 class="${item.faite ? "done" : ""}">${escapeHtml(item.titre)}</h3>
          <p>${escapeHtml(c?.nom || t("noSite"))} · ${t("due")} ${item.echeance || "—"}</p>
        </div>
      </label>
      <span class="badge ${item.priorite}">${t("priority." + item.priorite)}</span>
      ${actions ? `
        <button type="button" class="btn ghost" data-edit-tache="${item.id}">${t("btn.edit")}</button>
        <button type="button" class="btn ghost" data-del-tache="${item.id}">${t("btn.delete")}</button>
      ` : ""}
    </article>
  `;
}

function tacheHistoryRow(item) {
  const c = state.chantiers.find((x) => x.id === item.chantierId);
  return `
    <article class="item static">
      <div>
        <h3 class="done">${escapeHtml(item.titre)}</h3>
        <p>${escapeHtml(c?.nom || t("noSite"))} · ${t("due")} ${item.echeance || "—"}</p>
        <p>${item.gereeLe ? t("task.managedOn", { date: fmtDay(item.gereeLe) }) : t("task.managed")}</p>
      </div>
      <span class="badge ${item.priorite}">${t("priority." + item.priorite)}</span>
    </article>
  `;
}

function renderEquipe() {
  const q = searchQuery();
  const membres = state.equipe.filter((m) => [m.nom, m.role].join(" ").toLowerCase().includes(q));
  qs("#view-equipe").innerHTML = `
    <div class="toolbar">
      <p class="label">${t("count.members", { n: membres.length })}</p>
      <button class="btn primary" id="btn-nouveau-membre">${t("btn.newMember")}</button>
    </div>
    <div class="list">
      ${membres.map((m) => `
        <article class="item static">
          <div>
            <h3>${escapeHtml(m.nom)}</h3>
            <p>${escapeHtml(m.role || t("noRole"))} · ${escapeHtml(m.tel || t("noPhone"))}</p>
          </div>
          <button class="btn ghost" data-del-membre="${m.id}">${t("btn.remove")}</button>
        </article>
      `).join("") || empty(t("empty.members"))}
    </div>
  `;
}

function eventsOn(dateKey) {
  return state.evenements
    .filter((e) => e.date === dateKey)
    .sort((a, b) => (a.heure || "").localeCompare(b.heure || ""));
}

function dayItems(dateKey) {
  const events = eventsOn(dateKey).map((e) => ({
    kind: "event",
    sort: e.heure || "99:99",
    label: `${e.heure || ""} ${e.titre}`.trim(),
    raw: e,
  }));
  const tasks = activeTasks().filter((x) => !x.faite && x.echeance === dateKey).map((x) => ({
    kind: "task",
    sort: "50:00",
    label: x.titre,
    raw: x,
  }));
  const issues = state.problemes.filter((p) => p.echeance === dateKey).map((p) => ({
    kind: "issue",
    sort: "60:00",
    label: p.titre,
    raw: p,
  }));
  const orders = (state.livraisons || []).filter((l) => !l.commandee && l.dateCommande === dateKey).map((l) => ({
    kind: "livraison",
    sort: "35:00",
    label: l.titre,
    raw: l,
  }));
  return [...events, ...tasks, ...issues, ...orders].sort((a, b) => a.sort.localeCompare(b.sort));
}

function comingDot(item) {
  if (item.kind === "task") return "green";
  if (item.kind === "livraison" || item.kind === "issue") return "orange";
  const type = item.raw?.type;
  if (type === "visite" || type === "commande") return "orange";
  if (type === "reunion" || type === "mail") return "blue";
  return "blue";
}

function comingTime(item) {
  const h = String(item.raw?.heure || "").trim();
  const m = h.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return "";
  return `${m[1].padStart(2, "0")}:${m[2]}`;
}

function comingSub(item) {
  const raw = item.raw || {};
  const site = state.chantiers.find((c) => c.id === raw.chantierId);
  if (site?.nom) return site.nom;
  if (item.kind === "livraison" && raw.fournisseur) return raw.fournisseur;
  return "";
}

function comingLine(item) {
  const raw = item.raw || {};
  const time = comingTime(item);
  const title = raw.titre || item.label || "";
  const sub = comingSub(item);
  return `
    <li class="coming-item ${comingDot(item)}">
      <span class="coming-dot" aria-hidden="true"></span>
      <span class="coming-time">${escapeHtml(time)}</span>
      <div class="coming-text">
        <strong>${escapeHtml(title)}</strong>
        ${sub ? `<p>${escapeHtml(sub)}</p>` : ""}
      </div>
    </li>
  `;
}

function dayItemRow(item) {
  if (item.kind === "event") return eventRow(item.raw);
  if (item.kind === "task") return tacheRow(item.raw);
  if (item.kind === "livraison") {
    const l = item.raw;
    return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(l.titre)}</h3>
        <p>${escapeHtml(siteName(l.chantierId))} · ${t("liv.orderFor", { date: l.dateCommande ? fmtDay(l.dateCommande) : "—" })}</p>
      </div>
      <span class="badge commande">${t("liv.toOrder")}</span>
    </article>`;
  }
  const p = item.raw;
  const c = state.chantiers.find((x) => x.id === p.chantierId);
  return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(p.titre)}</h3>
        <p>${escapeHtml(c?.nom || t("noSite"))} · ${t("todo.issue")}${p.echeance ? " · " + fmtDay(p.echeance) : ""}</p>
      </div>
      <span class="badge ${p.statut}">${t("issue." + p.statut)}</span>
    </article>
  `;
}

function renderCalendrier() {
  const year = calCursor.getFullYear();
  const month = calCursor.getMonth();
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = toDateKey(new Date());
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push({ mute: true, date: null });
  for (let d = 1; d <= daysInMonth; d++) {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ mute: false, date, d });
  }
  while (cells.length % 7) cells.push({ mute: true, date: null });

  const dayEvents = dayItems(selectedDay);
  qs("#view-calendrier").innerHTML = `
    <div class="toolbar">
      <div class="cal-nav">
        <button class="btn ghost" id="cal-prev">‹</button>
        <strong>${monthLabel(calCursor)}</strong>
        <button class="btn ghost" id="cal-next">›</button>
      </div>
      <button class="btn primary" id="btn-nouvel-event">${t("btn.newEvent")}</button>
      <button class="btn ghost" data-enable-notif>${t("btn.notif")}</button>
    </div>
    <div class="cal-grid">
      ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<div class="cal-dow">${t("dow." + i)}</div>`).join("")}
      ${cells.map((cell) => {
        if (!cell.date) return `<div class="cal-day mute"></div>`;
        const evs = dayItems(cell.date).slice(0, 3);
        return `<button class="cal-day ${cell.date === today ? "today" : ""} ${cell.date === selectedDay ? "selected" : ""}" data-day="${cell.date}">
          <span class="num">${cell.d}</span>
          ${evs.map((e) => `<span class="cal-dot">${escapeHtml(e.label)}</span>`).join("")}
        </button>`;
      }).join("")}
    </div>
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.dayEvents")} — ${selectedDay}</h2>
      <p class="label">${t("count.events", { n: dayEvents.length })}</p>
    </div>
    <div class="list">${dayEvents.map(dayItemRow).join("") || empty(t("empty.events"))}</div>
  `;
}

function eventRow(e) {
  const c = state.chantiers.find((x) => x.id === e.chantierId);
  const alerts = (e.alertes || []).map((a, i) => `${t("field.alertN", { n: i + 1 })}: ${formatDelay(a.minutes)}`).join(" · ");
  return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(e.heure)} — ${escapeHtml(e.titre)}</h3>
        <p>${c ? escapeHtml(c.nom) : t("noSite")}${e.notes ? " · " + escapeHtml(e.notes) : ""}</p>
        ${alerts ? `<p>${escapeHtml(alerts)}</p>` : ""}
      </div>
      <div>
        <span class="badge ${e.type}">${t("event." + e.type)}</span>
        <button class="btn ghost" data-del-event="${e.id}">${t("btn.delete")}</button>
      </div>
    </article>
  `;
}

function renderDetail() {
  const c = state.chantiers.find((x) => x.id === selectedChantierId);
  if (!c) {
    go("chantiers");
    return;
  }
  const taches = activeTasks().filter((x) => x.chantierId === c.id);
  const issues = state.problemes.filter((p) => p.chantierId === c.id);
  const pct = avancement(c.id);
  qs("#view-detail").innerHTML = `
    <div class="toolbar">
      <button class="btn ghost" id="btn-retour">${t("btn.back")}</button>
      <div>
        <button class="btn" id="btn-edit-chantier">${t("btn.edit")}</button>
        <button class="btn danger" id="btn-del-chantier">${t("btn.delete")}</button>
      </div>
    </div>
    <div class="card">
      <h2>${escapeHtml(c.nom)}</h2>
      <p>${escapeHtml(c.client)} · ${escapeHtml(c.adresse || "—")}</p>
      <p>${t("fromTo", { start: c.debut || "—", end: c.fin || "—", money: money(c.budget) })}</p>
      <span class="badge ${c.statut}">${t("status." + c.statut)}</span>
      <div class="progress"><span style="width:${pct}%"></span></div>
      <p>${t("progressDone", { n: pct })}</p>
      <p>${escapeHtml(c.notes || "")}</p>
    </div>
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.photos")}</h2>
      <div>
        <label class="btn ghost" data-stop>
          <input type="file" accept="image/*" multiple hidden data-site-photo="${c.id}" />
          ${t("btn.sitePhoto")}
        </label>
        <button type="button" class="btn ghost" data-open-galerie="${c.id}">${t("galerie.open")}</button>
      </div>
    </div>
    <div class="photo-grid">${sitePhotos(c).length ? sitePhotos(c).slice(0, 4).map((src, i) => `
      <span class="thumb site-photo-one"><img src="${src}" alt=""><button type="button" class="btn ghost" data-del-site-photo="${i}" data-photo-site="${c.id}">×</button></span>
    `).join("") : empty(t("empty.photos"))}</div>
    ${equipeBlock(c)}
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.contacts")}</h2>
      <button class="btn primary" id="btn-nouveau-contact">${t("btn.newContact")}</button>
    </div>
    <div class="list">${(c.contacts || []).map(contactRow).join("") || empty(t("empty.contacts"))}</div>
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.siteTasks")}</h2>
      <button class="btn primary" id="btn-tache-chantier">${t("btn.newTask")}</button>
    </div>
    <div class="list">${taches.map((x) => tacheRow(x, { actions: true })).join("") || empty(t("empty.tasks"))}</div>
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.issues")}</h2>
      <button class="btn primary" id="btn-nouveau-probleme">${t("btn.newIssue")}</button>
    </div>
    <div class="list">${issues.map(issueRow).join("") || empty(t("empty.issues"))}</div>
    <div class="toolbar" style="margin-top:18px">
      <h2>${t("h.visits")}</h2>
      <button class="btn primary" id="btn-nouvelle-visite">${t("btn.newVisit")}</button>
    </div>
    <div class="list">${(c.visites || []).map(visiteRow).join("") || empty(t("empty.visits"))}</div>
  `;
}

function issueRow(p) {
  return `
    <article class="item static issue">
      ${p.photo ? `<img src="${p.photo}" alt="">` : `<div></div>`}
      <div>
        <h3>${escapeHtml(p.titre)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <p><strong>${t("issue.action")} :</strong> ${escapeHtml(p.action)}</p>
        <p>${p.echeance ? t("issue.due", { date: fmtDay(p.echeance) }) : t("issue.noDue")}</p>
      </div>
      <div>
        <span class="badge ${p.statut}">${t("issue." + p.statut)}</span>
        ${p.statut === "ouvert" ? `<button class="btn" data-resolve="${p.id}">${t("btn.resolve")}</button>` : ""}
        <button class="btn ghost" data-del-probleme="${p.id}">${t("btn.delete")}</button>
      </div>
    </article>
  `;
}

function contactRow(p) {
  return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(p.nom)}</h3>
        <p>${escapeHtml(p.role || t("noRole"))} · ${escapeHtml(p.tel || t("noPhone"))} · ${escapeHtml(p.email || t("noEmail"))}</p>
      </div>
      <button class="btn ghost" data-del-contact="${p.id}">${t("btn.remove")}</button>
    </article>
  `;
}

function visiteRow(v) {
  const site = currentSite();
  return `
    <article class="item static visit-line">
      <div data-open-visite="${v.id}" style="cursor:pointer">
        <h3>${t("visit.siteOf", { name: site?.nom || t("noSite") })}</h3>
        <p>${escapeHtml(v.date)}${v.heure ? " · " + escapeHtml(v.heure) : ""}</p>
      </div>
      <button type="button" class="sent-box ${v.envoyee ? "on locked" : ""}" data-toggle-envoye="${v.id}" ${v.envoyee ? "disabled" : ""}>
        <span class="mark">${v.envoyee ? "✓" : ""}</span>
        ${t("visit.sent")}
      </button>
      <button type="button" class="btn ghost" data-open-visite="${v.id}">${v.envoyee ? t("visit.view") : t("visit.edit")}</button>
    </article>
  `;
}

function empty(text) {
  return `<div class="empty">${text}</div>`;
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  ["dashboard", "chantiers", "livraison", "cr", "galerie", "finance", "sousTraitants", "calendrier", "devis", "suivi", "historique", "detail"].forEach((v) => {
    qs(`#view-${v}`).classList.toggle("hidden", currentView !== v);
  });
  const histSite = state.chantiers.find((c) => c.id === selectedHistoriqueId);
  const galSite = state.chantiers.find((c) => c.id === selectedGalerieId);
  const title = currentView === "historique" && histSite && selectedHistoriqueCat
    ? `${histSite.nom} · ${t("hist." + selectedHistoriqueCat)}`
    : currentView === "historique" && histSite
    ? t("title.historiqueSite", { name: histSite.nom })
    : currentView === "galerie" && galSite
    ? `${t("title.galerie")} — ${galSite.nom}`
    : t(`title.${currentView}`);
  qs("#page-title").textContent = title;
  qs("#search").classList.toggle("hidden", currentView === "dashboard");
  renderHello();
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "chantiers") renderChantiers();
  if (currentView === "livraison") renderLivraison();
  if (currentView === "cr") renderCompteRendu();
  if (currentView === "galerie") renderGalerie();
  if (currentView === "finance") renderFinance();
  if (currentView === "sousTraitants") renderSousTraitants();
  if (currentView === "calendrier") renderCalendrier();
  if (currentView === "devis") renderDevis();
  if (currentView === "suivi") renderSuivi();
  if (currentView === "historique") renderHistorique();
  if (currentView === "detail") renderDetail();
}

function renderGalerie() {
  const sites = filteredChantiers();
  const site = state.chantiers.find((c) => c.id === selectedGalerieId);
  if (selectedGalerieId && !site) selectedGalerieId = null;
  if (!site) {
    qs("#view-galerie").innerHTML = `
      <p class="label">${t("galerie.pickSite")}</p>
      <div class="list">${sites.map((c) => `
        <article class="item" data-galerie-site="${c.id}">
          <div>
            <h3>${escapeHtml(c.nom)}</h3>
            <p>${escapeHtml(c.client)} · ${sitePhotos(c).length} photo(s)</p>
          </div>
        </article>
      `).join("") || empty(t("empty.sites"))}</div>
    `;
    return;
  }
  const photos = sitePhotos(site);
  qs("#view-galerie").innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn ghost" id="btn-galerie-back">${t("btn.back")}</button>
      <label class="btn primary" style="margin:0;cursor:pointer">
        <input type="file" accept="image/*" multiple hidden data-site-photo="${site.id}" />
        ${t("btn.sitePhoto")}
      </label>
    </div>
    <div class="card">
      <h2>${escapeHtml(site.nom)}</h2>
      <p>${escapeHtml(site.client)} · ${escapeHtml(site.adresse || t("noAddress"))}</p>
    </div>
    <div class="gallery-grid">${photos.length ? photos.map((src, i) => `
      <figure class="gallery-card">
        <button type="button" class="gallery-open" data-view-photo="${i}" data-photo-site="${site.id}">
          <img src="${src}" alt="">
        </button>
        <button type="button" class="btn ghost" data-del-site-photo="${i}" data-photo-site="${site.id}">×</button>
      </figure>
    `).join("") : empty(t("empty.photos"))}</div>
  `;
}

function renderHistorique() {
  const sites = filteredChantiers();
  const site = state.chantiers.find((c) => c.id === selectedHistoriqueId);
  if (selectedHistoriqueId && !site) {
    selectedHistoriqueId = null;
    selectedHistoriqueCat = null;
  }
  if (!site) {
    qs("#view-historique").innerHTML = `
      <p class="label">${t("hist.pickSite")}</p>
      <div class="list">${sites.map((c) => `
        <article class="item" data-hist-site="${c.id}">
          <div>
            <h3>${escapeHtml(c.nom)}</h3>
            <p>${escapeHtml(c.client)} · ${escapeHtml(c.adresse || t("noAddress"))}</p>
          </div>
        </article>
      `).join("") || empty(t("empty.sites"))}</div>
    `;
    return;
  }
  const nCmd = (state.livraisons || []).filter((l) => l.chantierId === site.id && l.commandee).length;
  const nTasks = state.taches.filter((x) => x.chantierId === site.id && x.faite).length;
  const nDevis = (state.devis || []).filter((d) => d.chantierId === site.id && d.validee).length;
  if (!selectedHistoriqueCat) {
    qs("#view-historique").innerHTML = `
      <div class="toolbar">
        <button type="button" class="btn ghost" id="btn-hist-back-sites">${t("btn.back")}</button>
      </div>
      <div class="card">
        <h2>${escapeHtml(site.nom)}</h2>
        <p>${escapeHtml(site.client)} · ${escapeHtml(site.adresse || t("noAddress"))}</p>
      </div>
      <p class="label" style="margin-top:14px">${t("hist.pickCat")}</p>
      <div class="hist-cats">
        <button type="button" class="item hist-cat" data-hist-cat="commandes">
          <h3>${t("hist.commandes")}</h3>
          <p>${t("hist.nCommandes", { n: nCmd })}</p>
        </button>
        <button type="button" class="item hist-cat" data-hist-cat="taches">
          <h3>${t("hist.taches")}</h3>
          <p>${t("hist.nTaches", { n: nTasks })}</p>
        </button>
        <button type="button" class="item hist-cat" data-hist-cat="devis">
          <h3>${t("hist.devis")}</h3>
          <p>${t("hist.nDevis", { n: nDevis })}</p>
        </button>
      </div>
    `;
    return;
  }
  const q = searchQuery();
  let body = "";
  if (selectedHistoriqueCat === "commandes") {
    const rows = (state.livraisons || []).filter((l) =>
      l.chantierId === site.id && l.commandee &&
      [l.titre, l.fournisseur, l.notes].join(" ").toLowerCase().includes(q)
    );
    body = rows.map(commandeHistoryRow).join("") || empty(t("empty.histCommandes"));
  } else if (selectedHistoriqueCat === "taches") {
    const rows = state.taches.filter((x) =>
      x.chantierId === site.id && x.faite &&
      [x.titre].join(" ").toLowerCase().includes(q)
    );
    body = rows.map(tacheHistoryRow).join("") || empty(t("empty.history"));
  } else {
    const rows = (state.devis || []).filter((d) =>
      d.chantierId === site.id && d.validee &&
      [d.titre, d.client, d.notes].join(" ").toLowerCase().includes(q)
    );
    body = rows.map(devisHistoryRow).join("") || empty(t("empty.histDevis"));
  }
  qs("#view-historique").innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn ghost" id="btn-hist-back-cats">${t("btn.back")}</button>
      <p class="label">${t("hist." + selectedHistoriqueCat)}</p>
    </div>
    <div class="list">${body}</div>
  `;
}

function commandeHistoryRow(l) {
  return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(l.titre)}</h3>
        <p>${escapeHtml(l.fournisseur || "—")}</p>
        <p>${t("liv.orderFor", { date: l.dateCommande ? fmtDay(l.dateCommande) : "—" })}</p>
        ${livDate(l) ? `<p>${t("liv.arriveOn", { date: fmtDay(livDate(l)) })}</p>` : ""}
        ${l.notes ? `<p>${escapeHtml(l.notes)}</p>` : ""}
      </div>
      <span class="badge commande">${t("liv.commandee")}</span>
    </article>
  `;
}

function devisHistoryRow(d) {
  return `
    <article class="item static">
      <div>
        <h3>${escapeHtml(d.titre)}</h3>
        <p>${d.client ? escapeHtml(d.client) + " · " : ""}${d.date ? fmtDay(d.date) : "—"} · ${moneyHt(devisTotal(d))}</p>
        ${d.notes ? `<p>${escapeHtml(d.notes)}</p>` : ""}
        ${devisTraceHtml(d)}
      </div>
      <div class="devis-actions">
        <span class="badge termine">${t("devis.validated")}</span>
        <button type="button" class="btn ghost" data-view-devis="${d.id}">${t("visit.view")}</button>
        <button type="button" class="btn primary" data-apply-devis="${d.id}">${t("btn.applyDevis")}</button>
        <button type="button" class="btn ghost" data-pdf-devis="${d.id}">${t("btn.pdf")}</button>
        ${d.preuve ? `<button type="button" class="btn ghost" data-open-preuve="${d.id}">${t("devis.openPreuve")}</button>` : ""}
      </div>
    </article>
  `;
}

function openChantierDialog(chantier) {
  const form = qs("#form-chantier");
  form.reset();
  qs("#dialog-chantier-title").textContent = chantier ? t("dialog.siteEdit") : t("dialog.siteNew");
  if (chantier) {
    for (const [k, v] of Object.entries(chantier)) {
      if (form.elements[k]) form.elements[k].value = v ?? "";
    }
  } else {
    form.elements.id.value = "";
    form.elements.statut.value = "preparation";
  }
  qs("#dialog-chantier").showModal();
}

function openTacheDialog(chantierId, task) {
  const form = qs("#form-tache");
  form.reset();
  form.elements.chantierSelect.innerHTML = state.chantiers
    .map((c) => `<option value="${c.id}">${escapeHtml(c.nom)}</option>`).join("");
  qs("#dialog-tache-title").textContent = task ? t("dialog.taskEdit") : t("dialog.taskNew");
  qs("#btn-save-tache").textContent = task ? t("btn.save") : t("btn.add");
  if (task) {
    form.elements.id.value = task.id;
    form.elements.titre.value = task.titre;
    form.elements.chantierSelect.value = task.chantierId;
    form.elements.echeance.value = task.echeance || "";
    form.elements.priorite.value = task.priorite || "normale";
  } else {
    form.elements.id.value = "";
    if (chantierId) form.elements.chantierSelect.value = chantierId;
  }
  qs("#dialog-tache").showModal();
}

function addDevisLigne(l = {}) {
  const type = l.type === "titre" ? "titre" : "ligne";
  const tr = document.createElement("tr");
  tr.className = `devis-ligne ${type}`;
  tr.dataset.type = type;
  if (type === "titre") {
    tr.innerHTML = `
      <td colspan="5"><input class="devis-desig" value="${escapeHtml(l.designation || "")}" /></td>
      <td><button type="button" class="btn ghost devis-ligne-del">×</button></td>
    `;
  } else {
    const total = devisLineTotal(l);
    tr.innerHTML = `
      <td><textarea class="devis-desig" rows="2">${escapeHtml(l.designation || "")}</textarea></td>
      <td><input class="devis-qte" inputmode="decimal" value="${l.qte ?? ""}" /></td>
      <td><input class="devis-unite" value="${escapeHtml(l.unite || "")}" placeholder="M2" /></td>
      <td><input class="devis-pu" inputmode="decimal" value="${l.puHt ?? ""}" /></td>
      <td class="devis-line-total">${moneyHt(total)}</td>
      <td><button type="button" class="btn ghost devis-ligne-del">×</button></td>
    `;
  }
  qs("#devis-lignes")?.appendChild(tr);
  refreshDevisTotals();
}

function collectDevisLignes() {
  return [...(qs("#devis-lignes")?.querySelectorAll(".devis-ligne") || [])].map((tr) => ({
    id: uid(),
    type: tr.dataset.type === "titre" ? "titre" : "ligne",
    designation: tr.querySelector(".devis-desig")?.value.trim() || "",
    qte: parseDec(tr.querySelector(".devis-qte")?.value),
    unite: tr.querySelector(".devis-unite")?.value.trim() || "",
    puHt: parseDec(tr.querySelector(".devis-pu")?.value),
  })).filter((l) => l.designation || l.qte || l.puHt);
}

function refreshDevisTotals() {
  qs("#devis-lignes")?.querySelectorAll(".devis-ligne").forEach((tr) => {
    if (tr.dataset.type === "titre") return;
    const cell = tr.querySelector(".devis-line-total");
    if (cell) {
      cell.textContent = moneyHt(parseDec(tr.querySelector(".devis-qte")?.value) * parseDec(tr.querySelector(".devis-pu")?.value));
    }
  });
  const total = collectDevisLignes().reduce((s, l) => s + devisLineTotal(l), 0);
  const box = qs("#devis-total");
  if (box) box.textContent = moneyHt(total);
}

function openDevisDialog(devis, readonly = false) {
  const form = qs("#form-devis");
  form.reset();
  fillChantierSelect("#form-devis [name=chantierId]");
  qs("#devis-lignes").innerHTML = "";
  form.classList.toggle("readonly", readonly);
  qs("#dialog-devis-title").textContent = readonly ? t("title.devis") : (devis ? t("dialog.devisEdit") : t("dialog.devisNew"));
  qs("#btn-save-devis").textContent = devis ? t("btn.save") : t("btn.add");
  qs("#btn-save-devis").classList.toggle("hidden", readonly);
  qs("#btn-pdf-devis-dialog").classList.toggle("hidden", !readonly);
  qs(".devis-table-actions")?.classList.toggle("hidden", readonly);
  if (devis) {
    form.elements.id.value = devis.id;
    form.elements.chantierId.value = devis.chantierId;
    form.elements.titre.value = devis.titre;
    form.elements.client.value = devis.client || "";
    form.elements.date.value = devis.date || "";
    form.elements.notes.value = devis.notes || "";
    (devis.lignes || []).forEach((l) => addDevisLigne(l));
    if (!(devis.lignes || []).length) addDevisLigne();
  } else {
    form.elements.id.value = "";
    form.elements.date.value = toDateKey(new Date());
    if (selectedDevisSiteId) form.elements.chantierId.value = selectedDevisSiteId;
    addDevisLigne();
  }
  [...form.querySelectorAll("input, select, textarea, button.devis-ligne-del")].forEach((el) => {
    if (el.name === "id") return;
    el.disabled = readonly;
  });
  refreshDevisTotals();
  const trace = qs("#devis-trace");
  if (trace) {
    const html = devis ? devisTraceHtml(devis) : "";
    trace.innerHTML = html;
    trace.classList.toggle("hidden", !html);
  }
  qs("#dialog-devis").showModal();
}

function downloadDevisPdf(d) {
  const site = state.chantiers.find((c) => c.id === d.chantierId);
  const rows = (d.lignes || []).map((l) => {
    if (l.type === "titre") {
      return `<tr class="titre"><td colspan="5">${escapeHtml(l.designation)}</td></tr>`;
    }
    return `<tr>
      <td class="desig">${escapeHtml(l.designation).replaceAll("\n", "<br>")}</td>
      <td class="num">${escapeHtml(new Intl.NumberFormat(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseDec(l.qte)))}</td>
      <td class="unit">${escapeHtml(l.unite || "")}</td>
      <td class="num">${escapeHtml(new Intl.NumberFormat(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseDec(l.puHt)))}</td>
      <td class="num">${escapeHtml(new Intl.NumberFormat(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(devisLineTotal(l)))}</td>
    </tr>`;
  }).join("");
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${escapeHtml(d.titre || t("title.devis"))}</title>
    <style>
      body{font-family:Segoe UI,Arial,sans-serif;padding:24px;color:#111;font-size:12px}
      h1{font-size:18px;margin:0 0 8px}
      p{margin:0 0 6px}
      table{width:100%;border-collapse:collapse;margin-top:16px}
      th,td{border:1px solid #222;padding:6px 8px;vertical-align:top}
      th{background:#e8e8e8;text-align:center;font-size:12px}
      td.desig{width:52%}
      td.num,td.unit{text-align:right;white-space:nowrap}
      tr.titre td{font-weight:800;text-align:center;background:#f3f3f3}
      tr.head-lot td{font-weight:800;text-align:center}
      tfoot td{font-weight:800}
      tfoot td.num{text-align:right}
    </style></head>
    <body>
      <h1>${escapeHtml(t("title.devis"))}</h1>
      <p>${escapeHtml(site?.nom || "")}${d.client ? " · " + escapeHtml(d.client) : ""}</p>
      <p>${d.date ? escapeHtml(fmtDay(d.date)) : ""}</p>
      <table>
        <thead><tr>
          <th>${escapeHtml(t("devis.col.designation"))}</th>
          <th>${escapeHtml(t("devis.col.qty"))}</th>
          <th>${escapeHtml(t("devis.col.unit"))}</th>
          <th>${escapeHtml(t("devis.col.pu"))}</th>
          <th>${escapeHtml(t("devis.col.total"))}</th>
        </tr></thead>
        <tbody>
          ${d.titre ? `<tr class="head-lot"><td colspan="5">${escapeHtml(d.titre)}</td></tr>` : ""}
          ${rows}
        </tbody>
        <tfoot><tr><td colspan="4">${escapeHtml(t("devis.totalHt"))}</td><td class="num">${escapeHtml(new Intl.NumberFormat(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(devisTotal(d)))}</td></tr></tfoot>
      </table>
      ${d.notes ? `<p style="margin-top:16px">${escapeHtml(d.notes)}</p>` : ""}
    </body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 250);
}

function delayOptions(selected) {
  const opts = [
    [10, t("alert.min", { n: 10 })],
    [15, t("alert.min", { n: 15 })],
    [30, t("alert.min", { n: 30 })],
    [60, t("alert.h", { n: 1 })],
    [90, t("alert.min", { n: 90 })],
    [120, t("alert.h", { n: 2 })],
    [1440, t("alert.d", { n: 1 })],
    ["custom", t("alert.custom")],
  ];
  return opts.map(([v, label]) => `<option value="${v}" ${String(selected) === String(v) ? "selected" : ""}>${label}</option>`).join("");
}

function formatDelay(minutes) {
  if (minutes % 1440 === 0) return t("alert.d", { n: minutes / 1440 });
  if (minutes % 60 === 0) return t("alert.h", { n: minutes / 60 });
  return t("alert.min", { n: minutes });
}

function addAlerteRow(minutes = 30) {
  const n = qs("#alertes-list").children.length + 1;
  const row = document.createElement("div");
  row.className = "alerte-row";
  row.innerHTML = `
    <span>${t("field.alertN", { n })}</span>
    <select class="alerte-delay">${delayOptions(minutes)}</select>
    <input class="alerte-custom hidden" type="number" min="1" value="45" />
    <select class="alerte-unit hidden">
      <option value="1">${t("unit.min")}</option>
      <option value="60">${t("unit.h")}</option>
      <option value="1440">${t("unit.d")}</option>
    </select>
    <button type="button" class="btn ghost alerte-del">×</button>
  `;
  qs("#alertes-list").appendChild(row);
}

function collectAlertes() {
  return [...qs("#alertes-list").children].map((row) => {
    const delay = row.querySelector(".alerte-delay").value;
    if (delay === "custom") {
      const n = Number(row.querySelector(".alerte-custom").value || 0);
      const unit = Number(row.querySelector(".alerte-unit").value || 1);
      return { id: uid(), minutes: Math.max(1, n * unit) };
    }
    return { id: uid(), minutes: Number(delay) };
  }).filter((a) => a.minutes > 0);
}

function addPresentRow(nom = "", tel = "") {
  const row = document.createElement("div");
  row.className = "row present-row";
  row.innerHTML = `
    <label><span>${t("field.name")}</span><input class="present-nom" value="${escapeHtml(nom)}" /></label>
    <label><span>${t("field.phone")}</span><input class="present-tel" type="tel" value="${escapeHtml(tel)}" /></label>
    <button type="button" class="btn ghost present-del">×</button>
  `;
  qs("#presents-list").appendChild(row);
}

function collectPresents() {
  return [...qs("#presents-list").querySelectorAll(".present-row")].map((row) => ({
    nom: row.querySelector(".present-nom").value.trim(),
    tel: row.querySelector(".present-tel").value.trim(),
  })).filter((p) => p.nom || p.tel);
}

function addStRespRow(p = {}) {
  const row = document.createElement("div");
  row.className = "st-resp-row";
  row.innerHTML = `
    <label><span>${t("field.name")}</span><input class="st-resp-nom" value="${escapeHtml(p.nom || "")}" /></label>
    <label><span>${t("field.role")}</span><input class="st-resp-role" value="${escapeHtml(p.role || "")}" /></label>
    <label><span>${t("field.poste")}</span><input class="st-resp-poste" value="${escapeHtml(p.poste || "")}" /></label>
    <label><span>${t("field.email")}</span><input class="st-resp-mail" type="email" value="${escapeHtml(p.mail || "")}" /></label>
    <button type="button" class="btn ghost st-resp-del">×</button>
  `;
  qs("#st-resp-list")?.appendChild(row);
}

function collectStResps() {
  return [...(qs("#st-resp-list")?.querySelectorAll(".st-resp-row") || [])].map((row) => ({
    id: uid(),
    nom: row.querySelector(".st-resp-nom").value.trim(),
    role: row.querySelector(".st-resp-role").value.trim(),
    poste: row.querySelector(".st-resp-poste").value.trim(),
    mail: row.querySelector(".st-resp-mail").value.trim(),
  })).filter((p) => p.nom || p.role || p.poste || p.mail);
}

function renderVisitPhotos() {
  qs("#visite-photos").innerHTML = pendingVisitPhotos.map((src, i) =>
    `<span class="thumb"><img src="${src}" alt=""><button type="button" class="btn ghost" data-del-photo="${i}">×</button></span>`
  ).join("");
}

function qaBlock(question, answer) {
  return `${question}\n________________\n\n${answer || "—"}\n`;
}

function collectVisitAnswers(form) {
  const blocks = [{
    q: t("visit.presents"),
    a: collectPresents().map((p) => `${p.nom}${p.tel ? " — " + p.tel : ""}`).join("\n") || "—",
  }];
  for (const key of [...VISIT_CHOICES, ...VISIT_TEXTS]) {
    const raw = form.elements[key]?.value?.trim() || "";
    blocks.push({
      key,
      q: t(VISIT_LABELS[key]),
      raw,
      a: VISIT_CHOICES.includes(key) ? answerLabel(raw) : raw || "—",
    });
  }
  return blocks;
}

function buildVisitReport(form) {
  return collectVisitAnswers(form).map((b) => qaBlock(b.q, b.a)).join("\n");
}

function parseReportBlocks(text) {
  if (!text) return [];
  return text.split(/\n_{5,}\n+/).map((chunk) => {
    const parts = chunk.trim().split(/\n\n/);
    return { q: (parts[0] || "").trim(), a: (parts.slice(1).join("\n\n") || "").trim() };
  }).filter((b) => b.q);
}

function currentVisitDraft() {
  const form = qs("#form-visite");
  return {
    date: form.date.value,
    heure: form.heure.value,
    presents: collectPresents(),
    photos: pendingVisitPhotos,
    compteRendu: qs("#visite-cr").value,
  };
}

function downloadVisitPdf(v) {
  const blocks = (v.answers && v.answers.length) ? v.answers : parseReportBlocks(v.compteRendu);
  const presents = (v.presents || []).map((p) => `${p.nom || ""} ${p.tel || ""}`.trim()).join("<br>");
  const photos = (v.photos || []).map((src) => `<img src="${src}" style="max-width:280px;margin:8px 8px 0 0">`).join("");
  const qa = blocks.map((b) => `<div style="margin:0 0 18px"><div style="border-bottom:1px solid #333;padding-bottom:4px;font-weight:700">${escapeHtml(b.q)}</div><div style="margin-top:14px;white-space:pre-wrap">${escapeHtml(b.a)}</div></div>`).join("");
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${escapeHtml(t("dialog.visitNew"))}</title>
    <style>body{font-family:Segoe UI,sans-serif;padding:24px;color:#111} h1{font-size:18px}</style></head>
    <body><h1>${escapeHtml(t("dialog.visitNew"))} — ${escapeHtml(v.date || "")} ${escapeHtml(v.heure || "")}</h1>
    ${presents ? `<p>${escapeHtml(t("visit.presents"))}: ${presents}</p>` : ""}
    ${qa}${photos}</body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 250);
}

function eventDate(ev) {
  return new Date(`${ev.date}T${ev.heure || "00:00"}:00`);
}

function requestNotifs() {
  if (!("Notification" in window)) return Promise.resolve(false);
  if (Notification.permission === "granted") return Promise.resolve(true);
  return Notification.requestPermission().then((p) => p === "granted");
}

let audioCtx;
function getAudio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  audioCtx ||= new AC();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playTone(ctx, freq, start, dur, type = "sine") {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.2, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

function playAlertSound(kind = prefs.sound) {
  if (!kind || kind === "off") return;
  const ctx = getAudio();
  if (!ctx) return;
  const t0 = ctx.currentTime + 0.01;
  if (kind === "beep") {
    playTone(ctx, 880, t0, 0.16);
    playTone(ctx, 880, t0 + 0.28, 0.16);
  } else if (kind === "urgent") {
    [0, 0.2, 0.4].forEach((d) => playTone(ctx, 1280, t0 + d, 0.1, "square"));
  } else {
    playTone(ctx, 523, t0, 0.16);
    playTone(ctx, 659, t0 + 0.15, 0.16);
    playTone(ctx, 784, t0 + 0.3, 0.32);
  }
}

function notifsEnabled() {
  return !!prefs.notifs && typeof Notification !== "undefined" && Notification.permission === "granted";
}

function showNotif(title, body, sound, tag) {
  if (!notifsEnabled()) return;
  playAlertSound(sound || "chime");
  try {
    navigator.vibrate?.([220, 80, 220]);
  } catch {}
  const opts = { body, icon: "./icons/icon-192.png", silent: true, tag: tag || title, data: { url: "./index.html" } };
  if (navigator.serviceWorker) {
    navigator.serviceWorker.ready.then((reg) => reg.showNotification(title, opts)).catch(() => {
      try { new Notification(title, opts); } catch {}
    });
  } else {
    try { new Notification(title, opts); } catch {}
  }
}

function dayFiredList() {
  try { return JSON.parse(localStorage.getItem(DAY_FIRED_KEY) || "[]"); } catch { return []; }
}

function markDayFired(id) {
  const next = [...new Set([...dayFiredList(), id])].slice(-400);
  localStorage.setItem(DAY_FIRED_KEY, JSON.stringify(next));
}

function morningMs(dateKey) {
  return new Date(`${dateKey}T08:00:00`).getTime();
}

function endOfDayMs(dateKey) {
  return new Date(`${dateKey}T23:59:59`).getTime();
}

function collectDayReminders() {
  const today = toDateKey(new Date());
  const items = [];
  for (const l of state.livraisons || []) {
    const site = siteName(l.chantierId);
    const where = site === t("noSite") ? "" : ` · ${site}`;
    if (!l.commandee && l.dateCommande === today) {
      items.push({
        id: `order:${l.id}:${today}`,
        title: t("notif.orderDay"),
        body: `${l.titre}${where}`,
        at: morningMs(today),
        until: endOfDayMs(today),
      });
    }
    if (l.commandee && livDate(l) === today) {
      items.push({
        id: `liv:${l.id}:${today}`,
        title: t("notif.livraisonDay"),
        body: `${l.titre}${where}`,
        at: morningMs(today),
        until: endOfDayMs(today),
      });
    }
  }
  for (const c of state.chantiers || []) {
    for (const v of c.visites || []) {
      if (v.date !== today) continue;
      items.push({
        id: `visit:${v.id}:${today}`,
        title: t("notif.visitDay"),
        body: `${c.nom}${v.heure ? " · " + v.heure : ""}`,
        at: eventDate({ date: v.date, heure: v.heure || "08:00" }).getTime(),
        until: endOfDayMs(today),
      });
    }
  }
  for (const x of state.taches || []) {
    if (x.echeance !== today || x.faite || x.geree) continue;
    const site = siteName(x.chantierId);
    items.push({
      id: `task:${x.id}:${today}`,
      title: t("notif.dueDay"),
      body: `${x.titre}${site === t("noSite") ? "" : " · " + site}`,
      at: morningMs(today),
      until: endOfDayMs(today),
    });
  }
  return items;
}

function armDayReminder(item, now) {
  if (dayFiredList().includes(item.id)) return;
  const fire = () => {
    if (dayFiredList().includes(item.id)) return;
    markDayFired(item.id);
    showNotif(item.title, item.body, prefs.sound, item.id);
  };
  if (item.at <= now && now <= item.until) fire();
  else if (item.at > now && item.at - now < 86400000 * 2) {
    alertTimers.push(setTimeout(fire, item.at - now));
  }
}

function collectEventReminders() {
  const items = [];
  for (const ev of state.evenements || []) {
    const start = eventDate(ev).getTime();
    for (const a of ev.alertes || []) {
      const key = `${ev.id}:${a.id}`;
      if (ev.fired?.includes(key) || dayFiredList().includes(`ev:${key}`)) continue;
      const when = start - a.minutes * 60000;
      items.push({
        id: `ev:${key}`,
        title: ev.titre,
        body: t("notif.body", { title: ev.titre, when: formatDelay(a.minutes) }),
        at: when,
        until: start + 180000,
      });
    }
  }
  return items;
}

function pushRemindersToSw() {
  if (!navigator.serviceWorker) return;
  const items = notifsEnabled() ? [...collectDayReminders(), ...collectEventReminders()] : [];
  const payload = { type: "reminders", items, fired: dayFiredList() };
  navigator.serviceWorker.ready.then((reg) => {
    const ch = new MessageChannel();
    ch.port1.onmessage = (e) => {
      (e.data?.fired || []).forEach((id) => {
        if (!dayFiredList().includes(id)) markDayFired(id);
      });
    };
    reg.active?.postMessage(payload, [ch.port2]);
    if (notifsEnabled() && "periodicSync" in reg) {
      reg.periodicSync.register("buildeo-day", { minInterval: 60 * 60 * 1000 }).catch(() => {});
    }
  }).catch(() => {});
}

function scheduleAlerts() {
  alertTimers.forEach(clearTimeout);
  alertTimers = [];
  if (!notifsEnabled()) {
    pushRemindersToSw();
    return;
  }
  const now = Date.now();
  for (const ev of state.evenements) {
    const start = eventDate(ev).getTime();
    for (const a of ev.alertes || []) {
      const when = start - a.minutes * 60000;
      const key = `${ev.id}:${a.id}`;
      if (ev.fired?.includes(key) || dayFiredList().includes(`ev:${key}`)) continue;
      const fire = () => {
        if (ev.fired?.includes(key) || dayFiredList().includes(`ev:${key}`)) return;
        ev.fired = [...(ev.fired || []), key];
        markDayFired(`ev:${key}`);
        save();
        const delayLabel = formatDelay(a.minutes);
        showNotif(ev.titre, Date.now() >= start - 15000 ? t("notif.now", { title: ev.titre }) : t("notif.body", { title: ev.titre, when: delayLabel }), ev.son, `ev:${key}`);
      };
      if (when <= now && now < start + 180000) fire();
      else if (when > now && when - now < 86400000 * 7) {
        alertTimers.push(setTimeout(fire, when - now));
      }
    }
  }
  for (const item of collectDayReminders()) armDayReminder(item, now);
  pushRemindersToSw();
}

function openEventDialog(dateKey) {
  const form = qs("#form-event");
  form.reset();
  form.elements.date.value = dateKey || selectedDay;
  form.elements.heure.value = "09:00";
  form.elements.chantierId.innerHTML =
    `<option value="">${t("none")}</option>` +
    state.chantiers.map((c) => `<option value="${c.id}">${escapeHtml(c.nom)}</option>`).join("");
  form.elements.son.value = "chime";
  qs("#alertes-list").innerHTML = "";
  addAlerteRow(30);
  qs("#dialog-event").showModal();
}

function choiceFromAnswer(a) {
  if (["oui", "non", "partiel"].includes(a)) return a;
  if (a === t("ans.yes")) return "oui";
  if (a === t("ans.no")) return "non";
  if (a === t("ans.partial")) return "partiel";
  return "oui";
}

function applyVisitAnswers(form, v) {
  const keyed = {};
  (v.answers || []).forEach((b) => {
    if (b.key) keyed[b.key] = b;
  });
  for (const key of [...VISIT_CHOICES, ...VISIT_TEXTS]) {
    const el = form.elements[key];
    if (!el) continue;
    const b = keyed[key];
    if (!b) continue;
    if (VISIT_CHOICES.includes(key)) el.value = choiceFromAnswer(b.raw || b.a);
    else el.value = b.raw && b.raw !== "—" ? b.raw : (b.a === "—" ? "" : b.a);
  }
}

function openVisitView(v) {
  viewingVisit = v;
  const site = currentSite();
  qs("#visite-view-title").textContent = `${t("visit.siteOf", { name: site?.nom || t("noSite") })} · ${v.date}`;
  const blocks = (v.answers && v.answers.length) ? v.answers : parseReportBlocks(v.compteRendu);
  const presents = (v.presents || []).map((p) => `${p.nom}${p.tel ? " — " + p.tel : ""}`).join("\n");
  qs("#visite-view-body").innerHTML = `
    ${v.envoyee ? `<p>${t("visit.locked")}</p>` : ""}
    ${presents ? `<p>${escapeHtml(presents)}</p>` : ""}
    <div class="qa-list">${blocks.map((b) => `
      <div class="qa"><div class="qa-q">${escapeHtml(b.q)}</div><div class="qa-a">${escapeHtml(b.a)}</div></div>
    `).join("")}</div>
    ${(v.photos || []).length ? `<div class="photo-thumbs">${v.photos.map((src) => `<img src="${src}" alt="">`).join("")}</div>` : ""}
  `;
  qs("#dialog-visite-view").showModal();
}

function syncProblemeEcheance() {
  const has = qs("#probleme-has-echeance").value === "oui";
  qs("#probleme-echeance-wrap").classList.toggle("hidden", !has);
  const input = qs("#form-probleme [name=echeance]");
  input.required = has;
  if (!has) input.value = "";
}

function openProblemeDialog() {
  pendingPhoto = "";
  qs("#form-probleme").reset();
  qs("#probleme-preview").classList.add("hidden");
  qs("#probleme-preview").src = "";
  qs("#probleme-has-echeance").value = "non";
  syncProblemeEcheance();
  qs("#dialog-probleme").showModal();
}

function answerLabel(v) {
  return { oui: t("ans.yes"), non: t("ans.no"), partiel: t("ans.partial") }[v] || v || "—";
}

function refreshVisitReport() {
  const form = qs("#form-visite");
  qs("#visite-cr").value = buildVisitReport(form);
}

function openVisiteDialog(existing) {
  const form = qs("#form-visite");
  form.reset();
  form.visitId.value = existing?.id || "";
  pendingVisitPhotos = existing?.photos ? [...existing.photos] : [];
  qs("#presents-list").innerHTML = "";
  const presents = existing?.presents || [];
  if (presents.length) presents.forEach((p) => addPresentRow(p.nom, p.tel));
  else addPresentRow();
  renderVisitPhotos();
  form.date.value = existing?.date || toDateKey(new Date());
  form.heure.value = existing?.heure || "09:00";
  if (existing) applyVisitAnswers(form, existing);
  if (existing?.compteRendu) qs("#visite-cr").value = existing.compteRendu;
  else refreshVisitReport();
  qs("#dialog-visite").showModal();
}

function compressImage(file, maxSize = 900) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = maxSize;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.src = url;
  });
}

function fileToPreuve(file) {
  if ((file.type || "").startsWith("image/")) return compressImage(file, 1400);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function openDevisPreuveDialog(id) {
  const form = qs("#form-devis-preuve");
  if (!form) return;
  form.reset();
  form.elements.id.value = id;
  form.elements.valideeLe.value = toDateKey(new Date());
  qs("#dialog-devis-preuve").showModal();
}

function showDevisPreuve(d) {
  if (!d?.preuve) return;
  const w = window.open("", "_blank");
  if (!w) return;
  const isPdf = (d.preuveType || "").includes("pdf") || d.preuve.startsWith("data:application/pdf");
  w.document.write(isPdf
    ? `<title>${escapeHtml(d.preuveNom || t("devis.preuve"))}</title><iframe src="${d.preuve}" style="position:fixed;inset:0;width:100%;height:100%;border:0"></iframe>`
    : `<title>${escapeHtml(d.preuveNom || t("devis.preuve"))}</title><body style="margin:0;background:#111;display:flex;justify-content:center"><img src="${d.preuve}" style="max-width:100%;height:auto" alt=""></body>`);
  w.document.close();
}

function on(sel, type, fn) {
  const el = qs(sel);
  if (!el) {
    console.warn("Élément manquant:", sel);
    return;
  }
  el.addEventListener(type, fn);
}

on("#btn-annuler-chantier", "click", () => qs("#dialog-chantier").close());
on("#btn-annuler-tache", "click", () => qs("#dialog-tache").close());
on("#btn-annuler-membre", "click", () => qs("#dialog-membre").close());
on("#btn-annuler-event", "click", () => qs("#dialog-event").close());
on("#btn-annuler-probleme", "click", () => qs("#dialog-probleme").close());
on("#btn-annuler-contact", "click", () => qs("#dialog-contact").close());
on("#btn-annuler-livraison", "click", () => qs("#dialog-livraison").close());
on("#btn-annuler-liv-arrivee", "click", () => qs("#dialog-liv-arrivee").close());
on("#btn-annuler-finance", "click", () => qs("#dialog-finance").close());
on("#btn-annuler-devis", "click", () => qs("#dialog-devis").close());
on("#btn-annuler-preuve", "click", () => qs("#dialog-devis-preuve").close());
on("#btn-annuler-apply", "click", () => qs("#dialog-devis-apply").close());
on("#btn-annuler-st", "click", () => qs("#dialog-st").close());
on("#probleme-has-echeance", "change", syncProblemeEcheance);
on("#btn-annuler-visite", "click", () => qs("#dialog-visite").close());

on("#btn-add-alerte", "click", () => addAlerteRow());
on("#alertes-list", "click", (e) => {
  if (e.target.closest(".alerte-del")) e.target.closest(".alerte-row")?.remove();
});
on("#alertes-list", "change", (e) => {
  const row = e.target.closest(".alerte-row");
  if (!row || !e.target.classList.contains("alerte-delay")) return;
  const custom = e.target.value === "custom";
  row.querySelector(".alerte-custom").classList.toggle("hidden", !custom);
  row.querySelector(".alerte-unit").classList.toggle("hidden", !custom);
});

on("#btn-add-present", "click", () => {
  addPresentRow();
  refreshVisitReport();
});
on("#btn-add-st-resp", "click", () => addStRespRow());
on("#st-resp-list", "click", (e) => {
  if (e.target.closest(".st-resp-del")) e.target.closest(".st-resp-row")?.remove();
});
on("#presents-list", "click", (e) => {
  if (e.target.closest(".present-del")) {
    e.target.closest(".present-row")?.remove();
    refreshVisitReport();
  }
});

async function addVisitPhoto(file) {
  if (!file) return;
  pendingVisitPhotos.push(await compressImage(file));
  renderVisitPhotos();
}
on("#visite-photo-file", "change", async (e) => {
  await addVisitPhoto(e.target.files?.[0]);
  e.target.value = "";
});
on("#visite-photo-cam", "change", async (e) => {
  await addVisitPhoto(e.target.files?.[0]);
  e.target.value = "";
});
on("#visite-photos", "click", (e) => {
  const btn = e.target.closest("[data-del-photo]");
  if (!btn) return;
  pendingVisitPhotos.splice(Number(btn.dataset.delPhoto), 1);
  renderVisitPhotos();
});
on("#btn-pdf-preview", "click", () => {
  downloadVisitPdf({
    date: qs("#form-visite").date.value,
    heure: qs("#form-visite").heure.value,
    presents: collectPresents(),
    photos: pendingVisitPhotos,
    answers: collectVisitAnswers(qs("#form-visite")),
    compteRendu: qs("#visite-cr").value,
  });
});

on("#select-lang", "change", (e) => {
  prefs.lang = e.target.value;
  savePrefs();
  render();
});
on("#select-theme", "change", (e) => {
  prefs.theme = e.target.value;
  savePrefs();
});
on("#accueil-body", "change", async (e) => {
  if (e.target.id !== "toggle-notifs") return;
  if (e.target.checked) {
    const ok = await requestNotifs();
    prefs.notifs = !!ok;
    if (!ok) e.target.checked = false;
  } else {
    prefs.notifs = false;
  }
  savePrefs();
  const st = qs("#notif-state");
  if (st) st.textContent = t(prefs.notifs ? "prefs.notifsOn" : "prefs.notifsOff");
  scheduleAlerts();
});
on("#btn-test-event-sound", "click", () => {
  playAlertSound(qs("#form-event [name=son]").value);
});
on("#btn-fermer-visite-view", "click", () => qs("#dialog-visite-view").close());
on("#btn-fermer-photo-view", "click", () => qs("#dialog-photo-view").close());
on("#btn-pdf-visite-view", "click", () => {
  if (viewingVisit) downloadVisitPdf(viewingVisit);
});

on("#form-chantier", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const payload = {
    id: data.id || uid(),
    nom: data.nom,
    client: data.client,
    adresse: data.adresse,
    debut: data.debut,
    fin: data.fin,
    statut: data.statut,
    budget: Number(data.budget || 0),
    notes: data.notes,
  };
  const i = state.chantiers.findIndex((c) => c.id === payload.id);
  if (i >= 0) state.chantiers[i] = { ...state.chantiers[i], ...payload };
  else state.chantiers.unshift({ ...payload, contacts: [], visites: [], equipe: [], presences: [], photos: [], photo: "" });
  save();
  qs("#dialog-chantier").close();
  go(data.id ? "detail" : "chantiers", payload.id);
});

on("#form-tache", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const existing = state.taches.find((x) => x.id === data.id);
  if (existing) {
    existing.titre = data.titre;
    existing.chantierId = data.chantierSelect;
    existing.echeance = data.echeance;
    existing.priorite = data.priorite;
  } else {
    state.taches.unshift({
      id: uid(),
      chantierId: data.chantierSelect,
      titre: data.titre,
      echeance: data.echeance,
      priorite: data.priorite,
      faite: false,
      geree: false,
      gereeLe: "",
    });
  }
  save();
  qs("#dialog-tache").close();
  render();
});

on("#form-membre", "submit", (e) => {
  e.preventDefault();
  const c = currentSite();
  if (!c) return;
  c.equipe ||= [];
  const data = Object.fromEntries(new FormData(e.target));
  if (data.poste === "chef") c.equipe.forEach((m) => { m.poste = "membre"; });
  c.equipe.unshift({
    id: uid(),
    nom: data.nom,
    tel: data.tel,
    poste: data.poste || "membre",
    role: data.poste === "chef" ? t("poste.chef") : t("poste.membre"),
  });
  save();
  qs("#dialog-membre").close();
  render();
});

on("#form-event", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  selectedDay = data.date;
  calCursor = startOfMonth(new Date(data.date + "T00:00:00"));
  state.evenements.unshift({
    id: uid(),
    titre: data.titre,
    type: data.type,
    date: data.date,
    heure: data.heure,
    chantierId: data.chantierId || "",
    notes: data.notes,
    son: data.son || "chime",
    alertes: collectAlertes(),
    fired: [],
  });
  save();
  qs("#dialog-event").close();
  requestNotifs().then(() => scheduleAlerts());
  go("calendrier");
});

on("#form-probleme", "submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  state.problemes.unshift({
    id: uid(),
    chantierId: selectedChantierId,
    titre: data.titre,
    description: data.description,
    action: data.action,
    photo: pendingPhoto,
    statut: "ouvert",
    echeance: data.hasEcheance === "oui" ? data.echeance : "",
  });
  save();
  qs("#dialog-probleme").close();
  render();
});

async function setProblemePhoto(file) {
  if (!file) return;
  pendingPhoto = await compressImage(file);
  const preview = qs("#probleme-preview");
  preview.src = pendingPhoto;
  preview.classList.remove("hidden");
}
on("#probleme-photo-file", "change", async (e) => {
  await setProblemePhoto(e.target.files?.[0]);
  e.target.value = "";
});
on("#probleme-photo-cam", "change", async (e) => {
  await setProblemePhoto(e.target.files?.[0]);
  e.target.value = "";
});

on("#form-contact", "submit", (e) => {
  e.preventDefault();
  const c = state.chantiers.find((x) => x.id === selectedChantierId);
  if (!c) return;
  const data = Object.fromEntries(new FormData(e.target));
  c.contacts ||= [];
  c.contacts.unshift({ id: uid(), nom: data.nom, role: data.role, tel: data.tel, email: data.email });
  save();
  qs("#dialog-contact").close();
  render();
});

on("#form-livraison", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  state.livraisons ||= [];
  state.livraisons.unshift({
    id: uid(),
    chantierId: data.chantierId,
    titre: data.titre,
    fournisseur: data.fournisseur,
    dateCommande: data.dateCommande,
    dateArrivee: "",
    date: "",
    notes: data.notes || "",
    statut: "attendue",
    commandee: false,
  });
  save();
  qs("#dialog-livraison").close();
  render();
});

on("#form-liv-arrivee", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const l = (state.livraisons || []).find((x) => x.id === data.livraisonId);
  if (!l || l.commandee) return;
  l.commandee = true;
  l.dateArrivee = data.dateArrivee;
  l.date = data.dateArrivee;
  l.statut = "commandee";
  state.evenements = state.evenements.filter((ev) => ev.livraisonId !== l.id);
  state.evenements.unshift({
    id: uid(),
    titre: `${t("nav.livraison")} : ${l.titre}`,
    type: "commande",
    date: l.dateArrivee,
    heure: "08:00",
    chantierId: l.chantierId,
    notes: l.notes || l.fournisseur || "",
    livraisonId: l.id,
    son: "chime",
    alertes: [{ id: uid(), minutes: 60 }],
    fired: [],
  });
  save();
  qs("#dialog-liv-arrivee").close();
  scheduleAlerts();
  render();
});

on("#form-finance", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  state.finances ||= [];
  state.finances.unshift({
    id: uid(),
    chantierId: data.chantierId,
    type: data.type,
    libelle: data.libelle,
    montant: Number(data.montant || 0),
    date: data.date,
  });
  save();
  qs("#dialog-finance").close();
  render();
});

on("#form-devis", "input", (e) => {
  if (e.target.closest(".devis-ligne")) refreshDevisTotals();
});
on("#form-devis", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  state.devis ||= [];
  const lignes = collectDevisLignes();
  const payload = {
    chantierId: data.chantierId,
    titre: data.titre,
    client: data.client || "",
    date: data.date,
    notes: data.notes || "",
    lignes,
    montant: lignes.reduce((s, l) => s + devisLineTotal(l), 0),
  };
  const existing = state.devis.find((d) => d.id === data.id);
  if (existing) {
    if (existing.validee) {
      qs("#dialog-devis").close();
      return;
    }
    Object.assign(existing, payload);
  } else {
    state.devis.unshift({
      id: uid(),
      ...payload,
      validee: false,
      valideeLe: "",
      envoyeLe: "",
      preuve: "",
      preuveNom: "",
      preuveType: "",
      preuveNote: "",
    });
  }
  save();
  qs("#dialog-devis").close();
  render();
});

on("#form-devis-preuve", "submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const id = form.elements.id.value;
  const d = (state.devis || []).find((x) => x.id === id);
  const file = form.elements.fichier.files[0];
  if (!d || !file) {
    alert(t("devis.needPreuve"));
    return;
  }
  const preuve = await fileToPreuve(file);
  d.validee = true;
  d.valideeLe = form.elements.valideeLe.value || toDateKey(new Date());
  d.preuve = preuve;
  d.preuveNom = file.name || "";
  d.preuveType = file.type || "";
  d.preuveNote = (form.elements.preuveNote.value || "").trim();
  if (!d.envoyeLe) d.envoyeLe = d.valideeLe;
  save();
  qs("#dialog-devis-preuve").close();
  render();
  openDevisApplyDialog(d.id);
});

on("#form-devis-apply", "change", (e) => {
  if (e.target.name === "wantTasks") {
    const n = devisWorkLines((state.devis || []).find((x) => x.id === qs("#form-devis-apply [name=id]")?.value) || { lignes: [] }).length;
    qs("#devis-apply-date-wrap").classList.toggle("hidden", !e.target.checked || n === 0);
  }
  if (e.target.name === "wantCommande") {
    qs("#devis-apply-commande-date-wrap").classList.toggle("hidden", !e.target.checked);
  }
});
on("#form-devis-apply", "submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const d = (state.devis || []).find((x) => x.id === form.elements.id.value);
  const err = qs("#devis-apply-error");
  err.classList.add("hidden");
  if (!d?.validee) return;
  normalizeDevis(d);
  const wantCommande = form.elements.wantCommande.checked;
  const wantTasks = form.elements.wantTasks.checked && !form.elements.wantTasks.disabled;
  const wantFinance = form.elements.wantFinance.checked && !form.elements.wantFinance.disabled;
  if (!wantCommande && !wantTasks && !wantFinance) {
    err.textContent = t("devis.apply.none");
    err.classList.remove("hidden");
    return;
  }
  if (wantCommande) {
    const commandeDate = form.elements.commandeDate.value;
    if (!commandeDate) {
      err.textContent = t("devis.apply.needCommandeDate");
      err.classList.remove("hidden");
      return;
    }
    state.livraisons ||= [];
    const liv = {
      id: uid(),
      chantierId: d.chantierId,
      titre: d.titre,
      fournisseur: d.client || "",
      dateCommande: commandeDate,
      dateArrivee: "",
      date: "",
      notes: devisCommandeNotes(d),
      statut: "attendue",
      commandee: false,
      devisId: d.id,
    };
    state.livraisons.unshift(liv);
    d.apply.commandeId = liv.id;
  }
  if (wantTasks) {
    const tacheDate = form.elements.tacheDate.value;
    if (!tacheDate) {
      err.textContent = t("devis.apply.needDate");
      err.classList.remove("hidden");
      return;
    }
    const created = [];
    devisWorkLines(d).forEach((l) => {
      const task = {
        id: uid(),
        chantierId: d.chantierId,
        titre: l.designation,
        echeance: tacheDate,
        priorite: "normale",
        faite: false,
        geree: false,
        gereeLe: "",
        devisId: d.id,
      };
      state.taches.unshift(task);
      created.push(task.id);
    });
    d.apply.tacheIds = [...(d.apply.tacheIds || []), ...created];
  }
  if (wantFinance) {
    state.finances ||= [];
    const fin = {
      id: uid(),
      chantierId: d.chantierId,
      type: "recette",
      libelle: d.titre,
      montant: devisTotal(d),
      date: d.valideeLe || toDateKey(new Date()),
      devisId: d.id,
    };
    state.finances.unshift(fin);
    d.apply.financeId = fin.id;
  }
  save();
  qs("#dialog-devis-apply").close();
  render();
});

on("#form-st", "submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  state.sousTraitants ||= [];
  state.sousTraitants.unshift({
    id: uid(),
    nom: data.nom,
    metier: data.metier,
    tel: data.tel,
    chantierId: data.chantierId,
    logo: pendingStLogo,
    responsables: collectStResps(),
  });
  pendingStLogo = "";
  save();
  qs("#dialog-st").close();
  render();
});

on("#form-visite", "input", (e) => {
  if (e.target.id === "visite-cr") return;
  refreshVisitReport();
});
on("#form-visite", "change", (e) => {
  if (e.target.id === "visite-cr") return;
  refreshVisitReport();
});
on("#form-visite", "submit", (e) => {
  e.preventDefault();
  const c = currentSite();
  if (!c) return;
  const data = Object.fromEntries(new FormData(e.target));
  c.visites ||= [];
  const payload = {
    date: data.date,
    heure: data.heure,
    presents: collectPresents(),
    photos: [...pendingVisitPhotos],
    answers: collectVisitAnswers(qs("#form-visite")),
    compteRendu: data.compteRendu,
  };
  const existing = c.visites.find((v) => v.id === data.visitId);
  if (existing) {
    if (existing.envoyee) return;
    Object.assign(existing, payload);
  } else {
    c.visites.unshift({
      id: uid(),
      ...payload,
      envoyee: false,
    });
    state.evenements.unshift({
      id: uid(),
      titre: t("event.visite"),
      type: "visite",
      date: data.date,
      heure: data.heure,
      chantierId: c.id,
      notes: collectPresents().map((p) => p.nom).join(", "),
      son: "chime",
      alertes: [{ id: uid(), minutes: 30 }],
      fired: [],
    });
  }
  save();
  qs("#dialog-visite").close();
  scheduleAlerts();
  render();
});

document.body.addEventListener("click", (e) => {
  const togPass = e.target.closest("[data-toggle-pass]");
  if (togPass) {
    const wrap = togPass.closest(".password-field");
    const input = wrap?.querySelector("input");
    if (!input) return;
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    togPass.setAttribute("aria-label", t(show ? "auth.hidePass" : "auth.showPass"));
    togPass.classList.toggle("on", show);
    return;
  }
  const open = e.target.closest("[data-open]");
  if (open && !e.target.closest("[data-stop]")) go("detail", open.dataset.open);

  const goView = e.target.closest("[data-go-view]");
  if (goView) {
    go(goView.dataset.goView);
    return;
  }

  const openDate = e.target.closest("[data-open-date]");
  if (openDate) {
    const input = openDate.closest(".date-row")?.querySelector("input[type=date]");
    if (input?.showPicker) input.showPicker();
    else input?.focus();
    return;
  }

  if (e.target.id === "btn-logout") logout();
  if (e.target.id === "btn-nouveau-chantier-2") openChantierDialog();
  if (e.target.id === "btn-nouvelle-tache" || e.target.id === "btn-tache-chantier") openTacheDialog(selectedChantierId);
  if (e.target.id === "btn-retour-historique") go("historique");
  if (e.target.id === "btn-hist-back-sites") {
    selectedHistoriqueId = null;
    selectedHistoriqueCat = null;
    render();
    return;
  }
  if (e.target.id === "btn-hist-back-cats") {
    selectedHistoriqueCat = null;
    render();
    return;
  }
  const histSite = e.target.closest("[data-hist-site]");
  if (histSite) {
    selectedHistoriqueId = histSite.dataset.histSite;
    selectedHistoriqueCat = null;
    render();
    return;
  }
  const histCat = e.target.closest("[data-hist-cat]");
  if (histCat) {
    selectedHistoriqueCat = histCat.dataset.histCat;
    render();
    return;
  }
  const openH = e.target.closest("[data-open-historique]");
  if (openH) go("historique", openH.dataset.openHistorique);
  if (e.target.id === "btn-nouveau-devis") openDevisDialog();
  if (e.target.id === "btn-devis-back") {
    selectedDevisSiteId = null;
    render();
    return;
  }
  const devisSite = e.target.closest("[data-devis-site]");
  if (devisSite) {
    selectedDevisSiteId = devisSite.dataset.devisSite;
    render();
    return;
  }
  if (e.target.id === "btn-suivi-back") {
    selectedSuiviId = null;
    render();
    return;
  }
  const suiviSite = e.target.closest("[data-suivi-site]");
  if (suiviSite) {
    selectedSuiviId = suiviSite.dataset.suiviSite;
    render();
    return;
  }
  if (e.target.id === "btn-galerie-back") {
    selectedGalerieId = null;
    render();
    return;
  }
  const galerieSite = e.target.closest("[data-galerie-site]");
  if (galerieSite) {
    selectedGalerieId = galerieSite.dataset.galerieSite;
    render();
    return;
  }
  const openGalerie = e.target.closest("[data-open-galerie]");
  if (openGalerie) {
    go("galerie", openGalerie.dataset.openGalerie);
    return;
  }
  const viewPhoto = e.target.closest("[data-view-photo]");
  if (viewPhoto) {
    const site = state.chantiers.find((c) => c.id === viewPhoto.dataset.photoSite);
    const src = sitePhotos(site)[Number(viewPhoto.dataset.viewPhoto)];
    if (src) {
      qs("#photo-view-img").src = src;
      qs("#dialog-photo-view").showModal();
    }
    return;
  }
  const viewDevis = e.target.closest("[data-view-devis]");
  if (viewDevis) {
    const d = (state.devis || []).find((x) => x.id === viewDevis.dataset.viewDevis);
    if (d) openDevisDialog(d, true);
    return;
  }
  if (e.target.id === "btn-pdf-devis-dialog") {
    const id = qs("#form-devis")?.elements.id?.value;
    const d = (state.devis || []).find((x) => x.id === id);
    if (d) downloadDevisPdf(d);
    return;
  }
  if (e.target.id === "btn-add-devis-ligne") {
    addDevisLigne();
    return;
  }
  if (e.target.id === "btn-add-devis-titre") {
    addDevisLigne({ type: "titre" });
    return;
  }
  if (e.target.closest(".devis-ligne-del")) {
    e.target.closest(".devis-ligne")?.remove();
    refreshDevisTotals();
    return;
  }
  const editDevis = e.target.closest("[data-edit-devis]");
  if (editDevis) {
    const d = (state.devis || []).find((x) => x.id === editDevis.dataset.editDevis);
    if (d) openDevisDialog(d, !!d.validee);
    return;
  }
  const pdfDevis = e.target.closest("[data-pdf-devis]");
  if (pdfDevis) {
    const d = (state.devis || []).find((x) => x.id === pdfDevis.dataset.pdfDevis);
    if (d) downloadDevisPdf(d);
    return;
  }
  const envDevis = e.target.closest("[data-envoyer-devis]");
  if (envDevis) {
    const d = (state.devis || []).find((x) => x.id === envDevis.dataset.envoyerDevis);
    if (d && !d.validee) {
      d.envoyeLe = toDateKey(new Date());
      save();
      downloadDevisPdf(d);
      render();
    }
    return;
  }
  const preuveDevis = e.target.closest("[data-preuve-devis]");
  if (preuveDevis) {
    openDevisPreuveDialog(preuveDevis.dataset.preuveDevis);
    return;
  }
  const applyDevis = e.target.closest("[data-apply-devis]");
  if (applyDevis) {
    openDevisApplyDialog(applyDevis.dataset.applyDevis);
    return;
  }
  const openPreuve = e.target.closest("[data-open-preuve]");
  if (openPreuve) {
    const d = (state.devis || []).find((x) => x.id === openPreuve.dataset.openPreuve);
    if (d) showDevisPreuve(d);
    return;
  }
  const delDevis = e.target.closest("[data-del-devis]");
  if (delDevis) {
    state.devis = (state.devis || []).filter((x) => x.id !== delDevis.dataset.delDevis);
    save();
    render();
    return;
  }
  if (e.target.id === "btn-nouveau-membre") qs("#dialog-membre").showModal();
  const pres = e.target.closest("[data-presence]");
  if (pres) {
    const site = currentSite();
    if (!site) return;
    site.presences ||= [];
    const id = pres.dataset.presence;
    const statut = pres.dataset.statut;
    site.presences = site.presences.filter((p) => !(p.memberId === id && p.date === presenceDay));
    site.presences.push({ memberId: id, date: presenceDay, statut });
    save();
    render();
  }
  const setChef = e.target.closest("[data-set-chef]");
  if (setChef) {
    const site = currentSite();
    if (!site) return;
    (site.equipe || []).forEach((m) => {
      m.poste = m.id === setChef.dataset.setChef ? "chef" : (m.poste === "chef" ? "membre" : m.poste);
    });
    save();
    render();
  }
  if (e.target.id === "btn-nouvel-event") openEventDialog(selectedDay);
  if (e.target.closest("[data-enable-notif]")) {
    requestNotifs().then((ok) => {
      if (ok) {
        prefs.notifs = true;
        savePrefs();
        scheduleAlerts();
        if (currentView === "dashboard") render();
      }
    });
    return;
  }
  if (e.target.id === "btn-nouveau-probleme") openProblemeDialog();
  if (e.target.id === "btn-nouveau-contact") {
    qs("#form-contact").reset();
    qs("#dialog-contact").showModal();
  }
  if (e.target.id === "btn-nouvelle-livraison") {
    fillChantierSelect("#form-livraison [name=chantierId]");
    qs("#form-livraison").reset();
    const today = toDateKey(new Date());
    qs("#form-livraison [name=dateCommande]").value = today;
    qs("#dialog-livraison").showModal();
  }
  if (e.target.id === "btn-nouvelle-finance") {
    fillChantierSelect("#form-finance [name=chantierId]");
    qs("#form-finance").reset();
    qs("#form-finance [name=date]").value = toDateKey(new Date());
    qs("#dialog-finance").showModal();
  }
  if (e.target.id === "btn-nouveau-st") {
    fillChantierSelect("#form-st [name=chantierId]");
    qs("#form-st").reset();
    pendingStLogo = "";
    const preview = qs("#st-logo-preview");
    preview.src = "";
    preview.classList.add("hidden");
    qs("#st-resp-list").innerHTML = "";
    addStRespRow();
    qs("#dialog-st").showModal();
  }
  if (e.target.id === "btn-cr-new") {
    const id = qs("#cr-site-select")?.value || state.chantiers[0]?.id;
    if (!id) return;
    selectedChantierId = id;
    openVisiteDialog();
  }
  const openCr = e.target.closest("[data-open-cr]");
  if (openCr) {
    const [siteId, visitId] = openCr.dataset.openCr.split(":");
    const site = state.chantiers.find((c) => c.id === siteId);
    const v = site?.visites?.find((x) => x.id === visitId);
    if (!v) return;
    selectedChantierId = siteId;
    if (v.envoyee) openVisitView(v);
    else openVisiteDialog(v);
  }
  const delL = e.target.closest("[data-del-livraison]");
  if (delL) {
    const id = delL.dataset.delLivraison;
    state.livraisons = (state.livraisons || []).filter((x) => x.id !== id);
    state.evenements = state.evenements.filter((ev) => ev.livraisonId !== id);
    save();
    render();
  }
  const delF = e.target.closest("[data-del-finance]");
  if (delF) {
    state.finances = (state.finances || []).filter((x) => x.id !== delF.dataset.delFinance);
    save();
    render();
  }
  const delSt = e.target.closest("[data-del-st]");
  if (delSt) {
    state.sousTraitants = (state.sousTraitants || []).filter((x) => x.id !== delSt.dataset.delSt);
    save();
    render();
  }
  if (e.target.id === "btn-nouvelle-visite") openVisiteDialog();
  if (e.target.id === "btn-retour") go("chantiers");
  if (e.target.id === "btn-edit-chantier") {
    openChantierDialog(state.chantiers.find((c) => c.id === selectedChantierId));
  }
  if (e.target.id === "btn-del-chantier") {
    if (confirm(t("confirm.deleteSite"))) {
      state.chantiers = state.chantiers.filter((c) => c.id !== selectedChantierId);
      state.taches = state.taches.filter((x) => x.chantierId !== selectedChantierId);
      state.problemes = state.problemes.filter((p) => p.chantierId !== selectedChantierId);
      state.evenements = state.evenements.filter((ev) => ev.chantierId !== selectedChantierId);
      save();
      go("chantiers");
    }
  }
  if (e.target.id === "cal-prev") {
    calCursor = new Date(calCursor.getFullYear(), calCursor.getMonth() - 1, 1);
    render();
  }
  if (e.target.id === "cal-next") {
    calCursor = new Date(calCursor.getFullYear(), calCursor.getMonth() + 1, 1);
    render();
  }
  const day = e.target.closest("[data-day]");
  if (day) {
    selectedDay = day.dataset.day;
    render();
  }
  const delM = e.target.closest("[data-del-membre]");
  if (delM) {
    const site = currentSite();
    if (site) {
      site.equipe = (site.equipe || []).filter((m) => m.id !== delM.dataset.delMembre);
      save();
      render();
    }
  }
  const delE = e.target.closest("[data-del-event]");
  if (delE) {
    state.evenements = state.evenements.filter((ev) => ev.id !== delE.dataset.delEvent);
    save();
    render();
  }
  const delP = e.target.closest("[data-del-probleme]");
  if (delP) {
    state.problemes = state.problemes.filter((p) => p.id !== delP.dataset.delProbleme);
    save();
    render();
  }
  const delC = e.target.closest("[data-del-contact]");
  if (delC) {
    const site = state.chantiers.find((x) => x.id === selectedChantierId);
    if (site) {
      site.contacts = (site.contacts || []).filter((p) => p.id !== delC.dataset.delContact);
      save();
      render();
    }
  }
  const togG = e.target.closest("[data-toggle-geree]");
  if (togG) {
    const task = state.taches.find((x) => x.id === togG.dataset.toggleGeree);
    if (task) {
      task.faite = true;
      task.geree = true;
      task.gereeLe = toDateKey(new Date());
      save();
      render();
    }
    return;
  }
  const editT = e.target.closest("[data-edit-tache]");
  if (editT) {
    const task = state.taches.find((x) => x.id === editT.dataset.editTache);
    if (task) openTacheDialog(task.chantierId, task);
    return;
  }
  const delT = e.target.closest("[data-del-tache]");
  if (delT) {
    if (confirm(t("confirm.deleteTask"))) {
      state.taches = state.taches.filter((x) => x.id !== delT.dataset.delTache);
      save();
      render();
    }
    return;
  }
  const togCmd = e.target.closest("[data-toggle-commande]");
  if (togCmd) {
    const l = (state.livraisons || []).find((x) => x.id === togCmd.dataset.toggleCommande);
    if (l && !l.commandee) {
      qs("#form-liv-arrivee").reset();
      qs("#form-liv-arrivee [name=livraisonId]").value = l.id;
      qs("#liv-arrivee-lead").textContent = t("liv.arriveeLead", { title: l.titre });
      qs("#form-liv-arrivee [name=dateArrivee]").value = toDateKey(new Date());
      qs("#dialog-liv-arrivee").showModal();
    }
    return;
  }
  const togE = e.target.closest("[data-toggle-envoye]");
  if (togE) {
    const site = currentSite();
    const v = site?.visites?.find((x) => x.id === togE.dataset.toggleEnvoye);
    if (v && !v.envoyee) {
      v.envoyee = true;
      save();
      render();
    }
    return;
  }
  const openV = e.target.closest("[data-open-visite]");
  if (openV) {
    const site = currentSite();
    const v = site?.visites?.find((x) => x.id === openV.dataset.openVisite);
    if (v) {
      if (v.envoyee) openVisitView(v);
      else openVisiteDialog(v);
    }
  }
  const pdfV = e.target.closest("[data-pdf-visite]");
  if (pdfV) {
    const site = state.chantiers.find((x) => x.id === selectedChantierId);
    const v = site?.visites?.find((x) => x.id === pdfV.dataset.pdfVisite);
    if (v) downloadVisitPdf(v);
  }
  const delV = e.target.closest("[data-del-visite]");
  if (delV) {
    const site = state.chantiers.find((x) => x.id === selectedChantierId);
    if (site) {
      site.visites = (site.visites || []).filter((v) => v.id !== delV.dataset.delVisite);
      save();
      render();
    }
  }
  const delSitePhoto = e.target.closest("[data-del-site-photo]");
  if (delSitePhoto) {
    const site = state.chantiers.find((c) => c.id === (delSitePhoto.dataset.photoSite || selectedChantierId));
    if (site) {
      const next = sitePhotos(site);
      next.splice(Number(delSitePhoto.dataset.delSitePhoto), 1);
      setSitePhotos(site, next);
      save();
      render();
    }
    return;
  }
  const resolve = e.target.closest("[data-resolve]");
  if (resolve) {
    const p = state.problemes.find((x) => x.id === resolve.dataset.resolve);
    if (p) p.statut = "resolu";
    save();
    render();
  }
});

document.body.addEventListener("change", (e) => {
  if (e.target.id === "presence-date-native") {
    if (e.target.value) {
      presenceDay = e.target.value;
      render();
    }
    return;
  }
  if (e.target.id === "cr-site-select") {
    selectedCrSiteId = e.target.value;
    render();
    return;
  }
  if (e.target.id === "hist-site-select") {
    selectedHistoriqueId = e.target.value;
    render();
    return;
  }
  if (e.target.id === "st-logo-file") {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    compressImage(file, 360).then((src) => {
      pendingStLogo = src;
      const preview = qs("#st-logo-preview");
      preview.src = src;
      preview.classList.remove("hidden");
    });
    return;
  }
  const sitePhotoInp = e.target.closest("[data-site-photo]");
  if (sitePhotoInp) {
    const files = [...(e.target.files || [])];
    e.target.value = "";
    const site = state.chantiers.find((c) => c.id === sitePhotoInp.dataset.sitePhoto);
    if (!files.length || !site) return;
    Promise.all(files.map((file) => compressImage(file))).then((srcs) => {
      setSitePhotos(site, [...sitePhotos(site), ...srcs]);
      save();
      render();
    });
    return;
  }
  if (e.target.closest("#presence-dmy") && e.target.matches("[data-dmy]")) {
    const wrap = qs("#presence-dmy");
    if (!wrap) return;
    const d = wrap.querySelector("[data-dmy=d]").value;
    const m = wrap.querySelector("[data-dmy=m]").value;
    const y = wrap.querySelector("[data-dmy=y]").value;
    const key = parseDmy(d, m, y);
    if (key) {
      presenceDay = key;
      render();
    }
    return;
  }
  const box = e.target.closest("[data-toggle-tache]");
  if (!box) return;
  const task = state.taches.find((x) => x.id === box.dataset.toggleTache);
  if (task) {
    task.faite = box.checked;
    task.geree = box.checked;
    task.gereeLe = box.checked ? toDateKey(new Date()) : "";
    save();
    render();
  }
});

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => go(btn.dataset.view));
});
on("#search", "input", render);
on("#auth-tab-login", "click", () => { resetMode = false; setAuthMode("login"); });
on("#auth-tab-register", "click", () => { resetMode = false; setAuthMode("register"); });
on("#auth-remember", "change", (e) => {
  pendingRemember = !!e.target.checked;
  localStorage.setItem(REMEMBER_KEY, pendingRemember ? "1" : "0");
});
on("#form-auth", "input", (e) => {
  if (e.target.name === "prenom" || e.target.name === "nom") updateAuthInitials();
});
on("#btn-forgot", "click", () => setAuthMode("forgot"));
on("#btn-forgot-back", "click", () => setAuthMode("login"));
on("#auth-photo-file", "change", async (e) => {
  await setAuthPhoto(e.target.files[0]);
  e.target.value = "";
});
on("#auth-photo-cam", "change", async (e) => {
  await setAuthPhoto(e.target.files[0]);
  e.target.value = "";
});
on("#form-auth", "submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const password = data.password || "";
  qs("#auth-error").classList.add("hidden");
  try {
    if (authMode === "register") {
      const prenom = (data.prenom || "").trim();
      const nom = (data.nom || "").trim();
      const username = (data.username || "").trim();
      const telephone = (data.telephone || "").trim();
      const countryCode = data.countryCode || "+33";
      const poste = (data.poste || "").trim();
      const entreprise = (data.entreprise || "").trim();
      const email = (data.email || "").trim().toLowerCase();
      if (!prenom || !nom || !username || !poste || !entreprise) return showAuthError("auth.error.required");
      if (username.length < 3) return showAuthError("auth.error.required");
      if (!validEmail(email)) return showAuthError("auth.error.email");
      if (!validPhone(telephone)) return showAuthError("auth.error.phone");
      if (password.length < 8) return showAuthError("auth.error.short");
      if (!validPassword(password)) return showAuthError("auth.error.weak");
      if (password !== data.confirm) return showAuthError("auth.error.mismatch");
      pendingRemember = !!qs("#auth-remember")?.checked;
      setSessionToken("", pendingRemember);
      const result = await api("/api/register", {
        body: { prenom, nom, username, email, telephone, countryCode, poste, entreprise, password, photo: pendingAuthPhoto || "", lang: prefs.lang },
      });
      showVerify(email, false);
      return;
    }
    const login = (data.login || "").trim();
    if (!login) return showAuthError("auth.error.required");
    pendingRemember = !!qs("#auth-remember")?.checked;
    const result = await api("/api/login", { body: { login, password, lang: prefs.lang } });
    if (result.needsVerify) {
      showVerify(result.email, false);
      return;
    }
    setSessionToken(result.token, pendingRemember);
    currentUser = result.user;
    enterApp();
  } catch (err) {
    showAuthError(err.key || "auth.error.server");
  }
});
on("#form-forgot", "submit", async (e) => {
  e.preventDefault();
  const email = (new FormData(e.target).get("email") || "").trim().toLowerCase();
  qs("#auth-error").classList.add("hidden");
  if (!validEmail(email)) return showAuthError("auth.error.email");
  try {
    await api("/api/forgot", { body: { email, lang: prefs.lang } });
    showVerify(email, true);
  } catch (err) {
    showAuthError(err.key || "auth.error.send");
  }
});
on("#btn-verify", "click", async () => {
  const code = qs("#auth-code").value.trim();
  qs("#auth-error").classList.add("hidden");
  try {
    if (resetMode) {
      const password = qs("#auth-new-pass").value;
      const confirm = qs("#auth-new-confirm").value;
      if (password.length < 8) return showAuthError("auth.error.short");
      if (!validPassword(password)) return showAuthError("auth.error.weak");
      if (password !== confirm) return showAuthError("auth.error.mismatch");
      const result = await api("/api/reset", { body: { email: pendingVerifyEmail, code, password } });
      setSessionToken(result.token, pendingRemember);
      currentUser = result.user;
      enterApp();
      return;
    }
    const result = await api("/api/verify", { body: { email: pendingVerifyEmail, code } });
    setSessionToken(result.token, pendingRemember);
    currentUser = result.user;
    enterApp();
  } catch (err) {
    showAuthError(err.key || "auth.error.code");
  }
});
on("#btn-resend", "click", async () => {
  qs("#auth-error").classList.add("hidden");
  try {
    const path = resetMode ? "/api/forgot" : "/api/resend";
    await api(path, { body: { email: pendingVerifyEmail, lang: prefs.lang } });
    showAuthInfo("auth.sent");
  } catch (err) {
    showAuthError(err.key || "auth.error.send");
  }
});
on("#btn-auth-back", "click", () => { resetMode = false; setAuthMode("login"); });
on("#auth-code", "keydown", (e) => {
  if (e.key === "Enter") qs("#btn-verify").click();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}

applyChrome();
restoreSession().then((ok) => { if (ok) enterApp(); else showAuth(); });
setInterval(() => { if (currentUser) scheduleAlerts(); }, 30000);
document.addEventListener("click", () => getAudio(), { once: true });
