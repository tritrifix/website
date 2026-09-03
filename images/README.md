# Logos des services & photo de profil

Dépose ici les logos référencés dans `services.js`. Tant qu'un fichier
n'existe pas (ou que l'image ne charge pas), la tuile correspondante
affiche automatiquement l'initiale du service à la place — aucune
casse, aucune configuration à changer.

Format recommandé : PNG ou JPG carré, 128×128 px suffit (SVG possible
aussi, il suffit d'adapter l'extension dans `services.js`).

Emplacements attendus pour les services actuels :

| Fichier                     | Service          |
|------------------------------|------------------|
| `wiki.png`                   | Wiki             |
| `guacamole.png`               | Guacamole        |
| `passbolt.png`                | Passbolt (Cadenas) |
| `uptime-kuma.png`              | Uptime Kuma      |
| `fossflow.png`                 | FossFLOW         |
| `bentopdf.png`                 | BentoPDF         |
| `privatebin.png`               | PrivateBin       |
| `gramps.png`                   | Gramps           |
| `immich.png`                   | Immich           |
| `it-tools.png`                 | IT-Tools         |
| `stoguard.png`                 | Stoguard         |
| `dawarich.png`                 | Dawarich         |
| `zammad.png`                   | Zammad           |
| `home-assistant.png`           | Home Assistant, Home Assistant 1 (référencent actuellement le même fichier) |

Pour ajouter un nouveau service : dépose son logo ici puis référence
le chemin dans `services.js` (voir le README à la racine du dépôt).

## Photo de profil

L'avatar dans l'en-tête (`index.html` et `contact.html`) suit le même
principe : dépose une photo carrée sous le nom `avatar.jpg` et elle
remplacera automatiquement l'initiale "T". Sans fichier, l'initiale
reste affichée — rien d'autre à changer.
