# BookNodeProject

BookNodeProject est une application de gestion de prêts de livres construite avec Node.js et Express.

## Installation

Assurez-vous d'avoir Node.js et npm installés sur votre machine. Ensuite, clonez ce dépôt et installez les dépendances en exécutant :

```bash
git clone git@github.com:inecer/BooksNodeProject.git
cd BookNodeProject
npm install
```

## Utilisation

Pour démarrer le serveur, exécutez :

```bash
npm start
```

Le serveur sera alors accessible à l'adresse `http://localhost:8081`.

## Swagger

- Pour démarrer Swagger utilisé le script suivant :
  ```bash
  npm run swagger
  ```
- L'API est documentée avec Swagger. Vous pouvez accéder à la documentation en ouvrant votre navigateur à l'adresse `http://localhost:8081/docs`.

## Routes

- `/books` : Gère les opérations CRUD sur les livres.
- `/borrows` : Gère les opérations CRUD sur les emprunts.

## Tests

Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

## Linting

Ce projet utilise ESLint pour le linting. Pour exécuter le linter, utilisez la commande suivante :

```bash
npm run lint
```
