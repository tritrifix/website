// Liste des services affichés sur la page d'accueil.
// Pour ajouter un service : ajoute un objet dans le tableau ci-dessous.
// - name  : nom affiché sous l'icône
// - url   : lien du service
// - image : chemin vers un logo dans le dossier images/ (optionnel)
//           si absent ou introuvable, une icône générique est utilisée
// - desc  : courte description (optionnel, affichée au survol via title)

const SERVICES = [
  {
    name: "Immich",
    url: "#",
    image: "images/immich.png",
    desc: "Serveur photo self-hosted"
  },
  {
    name: "Hermès",
    url: "#",
    image: "images/hermes.png",
    desc: "Application bancaire de simulation"
  },
  {
    name: "GitHub",
    url: "https://github.com/tritrifix",
    image: "images/github.png",
    desc: "Dépôts de code"
  }
  // Ajoute tes propres services ici en suivant le même format.
];
