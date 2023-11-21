# Setup

- npm init
    Nom du projet : mon-premier-programme-nodejs
    entry point : dist/index.js
- npm install --save-dev concurrently typescript nodemon @types/node
- ajouter les commandes au package.json
    "dev": "concurrently -k -n \"Typescript,Node\" -p \"[{name}]\" -c \"blue,green\" \"tsc --watch\" \"nodemon dist/index.js\"",
    "start": "tsc && node dist/index.js"
- npx tsc --init
    {
        "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "outDir": "dist",
            "target": "es6",
            "strict": true
        },
        "include": [
            "src/**/*"
        ]
    }
- create src/index.ts
    console.log('Hello world');

Version de Node a utilier
  - v18.17.1

# pour vérifier si l'API 

Dans le dossier *index.ts* 
  code [
      console.log("hello");

      import express from 'express'
      import "dotenv/config"

      const app = express();
      const PORT = process.env.PORT as string;

      app.get('/helloo', (_, res) => {
          console.log("hello les toutous");
          res.send("ok")
      })

      app.listen( parseInt(PORT), () =>
        console.log("Server is listening on port " + PORT + "...")
      );
    ]

Dans le dossier *.env* 
  code [
    PORT=3030
  ]

Dans le dossier *.http*
  code [
    GET http://localhost:3030/helloo
  ]

# Etapes pour le fichier .nvmrc

1 - Créer un fichier .nvmrc à la racine du projet
2 - Lancer la commande `nvm ls-remote` pour voir les versions de node disponibles
3 - Ajouter la version de node souhaitée dans le fichier (ex: v18.17.1)
4 - Lancer la commande `nvm use` pour utiliser la version de node souhaitée
5 - Si la version n'a pas été installée au préalable, lancer la commande `nvm install` pour l'installer
6 - Vérifier que la version de node utilisée est bien celle souhaitée avec la commande `node -v`
7 - Supprimer le dossier node_modules et supprimez le fichier package-lock.json puis relancer la commande `npm install` pour installer les dépendances à nouveau

# commande poour changer de version

- **node -v** (pour savoir la l'inversion utilisé)
- **nvm ls-remote** (pour voire toute les versions disponible)
  On créer un fichier .nvmrc (on colle la version voulu (! sans espace des deux coté))
- **nvm use** (pour lire l'erreur)
- **nvm i** (pour instaler la version qui se trouve dans le .nvmrc)
- **nvm -v** (pour voire la version qui est instaler)
  maintenent supprimer (node_modules/ et package-lock.json)
  - **rm -rf** node_modules/
  - **rm** package-lock.json
- **npm i** (pour réinstaller les deux fichiers)


# Etapes pour le fichier .env

1 - Créer un fichier .env à la racine du projet
2 - Ajouter la variable souhaitée sans espace et sans guillemets (ex: PORT=3000)
3 - Ajouter le fichier .env dans le .gitignore
4 - installer le package dotenv (npm install dotenv)
5 - importer le package dotenv dans le fichier : import 'dotenv/config'
6 - utiliser la variable d'environnement : process.env.PORT qui est une chaine de caractère
    a) si vous êtes sûr qu'elle existe : process.env.PORT as string
    b) si vous n'êtes pas sûr qu'elle existe : process.env.PORT || 3000
7 - si la variable est un nombre, vous pouvez la convertir en nombre : parseInt(process.env.PORT)
8 - si la variable est un booléen, vous pouvez la convertir en booléen : process.env.PORT === 'true'
9 - Utilisez la variable d'environnement dans le code

#  .env 

Installer **dotenv** dans le *dependencies* (dans le package.json)
- **npm i dotenv**
  Ensuite dans le fichier *.env* 
    - ajouter les variables d'environnement (EX: **PORT=3030**)
- l'importer dans le fichier voulu (EX: dans le fichier maint.ts Code: [import **"dotenv/config"**])
- Code [**const PORT = process.env.PORT as string;**] pour préciser que s'est un number

# express

  - **npm install express --save** (pour installer express dans depandence)
  - **npm i --save-dev @types/express** (pour l'installer dans les devdependance)

# .gitignore 

    créer un fichier *.gitignore* et mettre 
      - node_modules
      - dist
      - package-lock.json
      - .env



# CORS  (serveur)

## Gérer les cors avec express

### Installation

```bash
npm install cors
npm install -D @types/cors
```

### Utilisation

```ts
import cors from "cors"

const app = express()
app.use(cors())
```

# Requête POST avec express

## Server

```bash
npm i body-parser
```

```ts
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

interface IMaRequetBody {  // la table
  name: string
}

app.post("/send-name", (req: Request<IMaRequetBody>, res) => { // rajouter du contenue
  const name = req.body.name
  console.log(name)
  res.json({ name: name })
})
```

## Client

```ts
async function init() {
  const response = await fetch("http://localhost:3030/send-name", {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
      name: "John",
    }),
  })
  console.log(response)
  const data = await response.json()
  console.log(data)
}

init()
```
