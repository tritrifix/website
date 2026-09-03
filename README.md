# Page personnelle

Site statique (HTML/CSS/JS), pas de PHP requis. Compatible avec un hébergement mutualisé basique (100 Mo largement suffisants).

## Structure

```
index.html      page d'accueil — grille de services
contact.html    page à propos / contact
style.css       styles partagés entre les deux pages
services.js     liste des services affichés sur l'accueil
images/         logos des services (à fournir)
```

## Ajouter un service

Ouvre `services.js` et ajoute un objet dans le tableau `SERVICES` :

```js
{
  name: "Nom du service",
  url: "https://...",
  image: "images/monservice.png", // optionnel
  desc: "Courte description"      // optionnel, affichée au survol
}
```

Si `image` est absent ou que le fichier n'existe pas, une icône avec l'initiale du nom s'affiche automatiquement à la place.

## Ajouter tes logos

Dépose les images dans `images/` (PNG ou JPG, idéalement carrées, 128×128 px suffit) et référence le chemin dans `services.js`.

## Remplir la page contact

Ouvre `contact.html` et remplace les blocs marqués `[à rédiger]` / `[à ajouter]` par ton propre texte et tes liens (LinkedIn, e-mail, etc.).

## Déploiement OVH

Dépose l'ensemble du dossier (`index.html`, `contact.html`, `style.css`, `services.js`, `images/`) à la racine de ton espace web via FTP/SFTP. Aucune configuration serveur particulière n'est nécessaire.
