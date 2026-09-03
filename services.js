// Liste des services affichés sur la page d'accueil.
// Pour ajouter un service : ajoute un objet dans le tableau ci-dessous.
// - name  : nom affiché sous l'icône
// - url   : lien du service
// - image : chemin vers un logo dans le dossier images/ (optionnel)
//           si absent ou introuvable, une icône générique est utilisée
// - desc  : courte description (optionnel, affichée au survol via title)
//
// Remplace les url "#" par les vraies adresses de tes services une fois
// prêtes, et dépose les logos correspondants dans images/
// (voir images/README.md pour la liste des noms de fichiers attendus).

const SERVICES = [
  {
    name: "Wiki",
    url: "https://wiki.fixary.info",
    image: "images/wiki.png",
    desc: "Wiki personnel / documentation"
  },
  {
    name: "Guacamole",
    url: "https://guacamole.fixary.info/guacamole",
    image: "images/guacamole.png",
    desc: "Accès distant sans client (RDP/VNC/SSH via navigateur)"
  },
  {
    name: "Passbolt",
    url: "https://cadenas.fixary.info",
    image: "images/passbolt.png",
    desc: "Cadenas — gestionnaire de mots de passe"
  },
  {
    name: "Uptime Kuma",
    url: "https://uptimekuma.fixary.info",
    image: "images/uptime-kuma.png",
    desc: "Supervision de la disponibilité des services"
  },
  {
    name: "FossFLOW",
    url: "https://fossflow.fixary.info",
    image: "images/fossflow.png",
    desc: "Schémas d'infrastructure au style isométrique"
  },
  {
    name: "BentoPDF",
    url: "https://bentopdf.fixary.info",
    image: "images/bentopdf.png",
    desc: "Boîte à outils PDF (fusion, compression, conversion)"
  },
  {
    name: "PrivateBin",
    url: "https://privatebin.fixary.info/",
    image: "images/privatebin.png",
    desc: "Partage de texte chiffré et éphémère"
  },
  {
    name: "Gramps",
    url: "https://gramps.fixary.info/",
    image: "images/gramps.png",
    desc: "Généalogie et arbre familial"
  },
  {
    name: "Immich",
    url: "https://immich.fixary.info/",
    image: "images/immich.png",
    desc: "Serveur photo self-hosted"
  },
  {
    name: "IT-Tools",
    url: "https://it-tools.fixary.info",
    image: "images/it-tools.png",
    desc: "Boîte à outils pour devs et administrateurs"
  },
  {
    name: "Stoguard",
    url: "https://stoguard.fixary.info",
    image: "images/stoguard.png",
    desc: "Application de gestion de stock alimentaire"
  },
  {
    name: "Dawarich",
    url: "https://dawarich.fixary.info",
    image: "images/dawarich.svg",
    desc: "Historique de localisation self-hosted"
  },
  {
    name: "Zammad",
    url: "https://zammad.fixary.info",
    image: "images/zammad.png",
    desc: "Support client / ticketing"
  },
  {
    name: "Home Assistant",
    url: "https://homeassistant.fixary.info",
    image: "images/home-assistant.png",
    desc: "Domotique"
  },
  {
    name: "Home Assistant 1",
    url: "https://ha.fixary.info",
    image: "images/home-assistant.png",
    desc: "Domotique"
  }
  // Ajoute tes propres services ici en suivant le même format.
];
