### Applis du projet
* NextJS
* ReactJS
* shadcn (UI components)
* Tailwindcss (CSS)
* Prisma (ORM)
* Neon (PostgreSQL) https://neon.tech
* Kinde (authentication) https://kinde.com

### Installer NodeJS
https://nodejs.org/fr/download

**Choisir :**
* version Linux, avec nvm et pnpm
* version Windows avec fnm (gestionnaire de versions Node.js multiplateforme) et pnpm

... et suivre les instructions.

```
Note :
npm est le Node Package Manager livré par défaut.
Beaucoup de dev utilisent désormais pnpm au lieu de npm qui semble plus adapté aux projets modernes et à NextJS.
Cela change peu de chose et on utilise pnpm comme npm, à quelques petites exceptions près...
```

### Installer pnpm (optionnel)
https://pnpm.io

### Installer NextJS
`pnpm create-next-app@latest`
1. donner un nom pour le projet
2. ok pour tout sauf : /src et @alias

### Lancer le serveur de dev
`pnpm run dev`

### Installer Shadcn
`pnpm dlx shadcn@latest init`

Installer le composant Button par exemple :
`pnpm dlx shadcn@latest add button`

### Installer Prisma et Prisma client
`pnpm i -D prisma`

`pnpm i @prisma/client`

`pnpm dlx prisma init`

Fichier Prisma :
`~/prisma/schema.prisma`
Fichier où on définit la structure de la base de données, avec les tables.

Créer la base de données :
`pnpm dlx prisma db push`

Pour rappel, la BDD PostgreSQL est "en ligne" sur Neon et notre structure de BDD est stockée dans le fichier prisma/schema.prisma (ORM).
Cette commande va "pusher" la ou les tables PostgreSQL dans Neon.
Dans votre console Neon (https://console.neon.tech), aller dans Branch/Tables, vous verrez les tables si tout a bien fonctionné.

### Utiliser Prisma Studio
`pnpm dlx prisma studio`

Prisma studio est la version graphique pour la gestion de la base de données Prisma.
On peut ajouter des enregistrements, modifier des enregistrements, etc. dans les tables.

### Prisma best practises
Il vaut mieux créer une instance Prisma pour eviter les soucis créés par le hot-reload de nextJS qui peut créer de multiple instances Prisma...

Créer un nouveau répertoire ~/utils et un nouveau fichier :
`~/utils/db.ts`

Voir ici : https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
et copier le code de la section **Recommended solution**

### Kinde : authentication
Kinde est conseillé pour l'authentification...
Se rendre sur kinde.com (créer un compte gratuit si besoin)
Paramétrer le Bussiness sur kinde.com

Récupérer les infos suivantes et les mettre dans ***~/.env*** (à adapter avec ses propres infos :D !!! ) :
```
KINDE_CLIENT_ID=e92c8172f54e4ee78557be9971d059ad
KINDE_CLIENT_SECRET=6Lz3nPYBWwsewQJvzSsROkOq3OcQjD35jrEe2BE8SSXqOx8qfse
KINDE_ISSUER_URL=https://learnnextjs15olivier.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```

Créer un nouveau fichier dans : app/api/auth/[kindeAuth]/route.ts et y mettre :
```
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();
```

