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
    url: "#",
    image: "images/wiki.png",
    desc: "Wiki personnel / documentation"
  },
  {
    name: "Guacamole",
    url: "#",
    image: "images/guacamole.png",
    desc: "Accès distant sans client (RDP/VNC/SSH via navigateur)"
  },
  {
    name: "Passbolt",
    url: "#",
    image: "images/passbolt.png",
    desc: "Cadenas — gestionnaire de mots de passe"
  },
  {
    name: "Uptime Kuma",
    url: "#",
    image: "images/uptime-kuma.png",
    desc: "Supervision de la disponibilité des services"
  },
  {
    name: "FossFLOW",
    url: "#",
    image: "images/fossflow.png",
    desc: "Schémas d'infrastructure au style isométrique"
  },
  {
    name: "BentoPDF",
    url: "#",
    image: "images/bentopdf.png",
    desc: "Boîte à outils PDF (fusion, compression, conversion)"
  },
  {
    name: "PrivateBin",
    url: "#",
    image: "images/privatebin.png",
    desc: "Partage de texte chiffré et éphémère"
  },
  {
    name: "Gramps",
    url: "#",
    image: "images/gramps.png",
    desc: "Généalogie et arbre familial"
  },
  {
    name: "Immich",
    url: "#",
    image: "images/immich.png",
    desc: "Serveur photo self-hosted"
  },
  {
    name: "IT-Tools",
    url: "#",
    image: "images/it-tools.png",
    desc: "Boîte à outils pour devs et administrateurs"
  },
  {
    name: "Stoguard",
    url: "#",
    image: "images/stoguard.png",
    desc: "[description à compléter]"
  },
  {
    name: "Dawarich",
    url: "#",
    image: "images/dawarich.png",
    desc: "Historique de localisation self-hosted"
  },
  {
    name: "Zammad",
    url: "#",
    image: "images/zammad.png",
    desc: "Support client / ticketing"
  },
  {
    name: "Home Assistant",
    url: "#",
    image: "images/home-assistant.png",
    desc: "Domotique — instance principale"
  },
  {
    name: "Home Assistant 2",
    url: "#",
    image: "images/home-assistant-2.png",
    desc: "Domotique — instance secondaire"
  }
  // Ajoute tes propres services ici en suivant le même format.
];
