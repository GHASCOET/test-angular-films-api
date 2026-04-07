# Test Angular 21 — Recrutement

## Objectif

Ce test technique evalue vos competences en **Angular moderne** (v21). Vous disposez de **30 minutes** pour completer les exercices ci-dessous.

## Prerequis

- Node.js 22+
- pnpm (`npm install -g pnpm`)

## Installation

```bash
pnpm install
pnpm start
```

L'application sera disponible sur [http://localhost:4200](http://localhost:4200).

## Contexte

L'application recupere une liste de films depuis l'API [TheMovieDB](https://www.themoviedb.org/). Le service `MovieService` est deja implemente et fonctionnel.

Votre travail se concentre sur le fichier `src/app/components/exercise/exercise.component.ts`.

## Exercices

### Question 1 — Afficher la liste des films (5 min)

Completez le template pour afficher les **genres** de chaque film sous forme de badges dans la zone prevue.

### Question 2 — Extraire les genres (8 min)

Affichez la liste de **tous les genres** disponibles sous forme de boutons dans la zone de filtres :
- **Sans doublons**
- **Tries par ordre alphabetique**

### Question 3 — Filtrer par genre (10 min)

Implementez le filtrage : au clic sur un genre, seuls les films de ce genre sont affiches. Le bouton actif doit etre visuellement mis en evidence.

### Question 4 — Reinitialiser (5 min)

Ajoutez un bouton **Reinitialiser** qui :
- Restaure la liste complete des films
- N'est visible que lorsqu'un filtre est actif

## Bonus (si le temps le permet)

- Reperez et corrigez les **erreurs volontaires** dans le code existant
- Proposez des ameliorations d'architecture (signals, resource(), etc.)
- Identifiez les problemes de **performance** ou de **bonnes pratiques**
- Migrez vers les patterns Angular 21 (zoneless, nouvelle syntaxe de controle)

## Criteres d'evaluation

| Critere | Description |
|---------|-------------|
| Fonctionnel | Les exercices fonctionnent correctement |
| Qualite du code | Lisibilite, nommage, structure |
| Sens critique | Detection des erreurs volontaires |
| Architecture | Utilisation des patterns Angular modernes |
| Communication | Capacite a expliquer ses choix |

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── statement/    # Enonce (lecture seule)
│   │   └── exercise/     # <-- Votre zone de travail
│   ├── services/
│   │   └── movie.service.ts
│   ├── types/
│   │   ├── genre.ts
│   │   ├── movie.ts
│   │   └── index.ts
│   ├── pipes/
│   │   └── truncate.pipe.ts
│   └── app.component.ts
├── assets/
│   └── styles.css
├── environments/
├── index.html
└── main.ts
```

## Attention

Le code existant contient des **erreurs volontaires** — soyez attentif !
Vous pouvez modifier n'importe quel fichier si vous le jugez necessaire.
Privilegiez les **patterns Angular 21 modernes** (standalone, signals, zoneless, @for/@if).
N'hesitez pas a **expliquer vos choix** a voix haute pendant le test.

Bonne chance !
