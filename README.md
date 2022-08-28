## Yarn Workspaces Monorepo Demo

#### This is a monorepo demo using yarn workspaces

For the frontend, we have chosen **React JS** and for the backend, we have choosen **Node JS**

### Get Started

Install yarn globally if not installed already

```
npm i yarn -g
```

Install the dependencies

```
yarn
```

To run both the app simultaneously

```
yarn start
```

#### Basic structures

```
backend  // backend application
  index.js // backend entry point
  package.json // backend dedicated package.json
  yarn.lock // lock file for the backend

frontend  // frontend application
  <react app related folders and files>
  package.json // frontend dedicated package.json
  yarn.lock // lock file for the frontend

.gitignore // for ignoring all the node_modules and .env
package.json // package.json for yarn workspaces
README.md
yarn.lock
```

You can use this repo as a boilerplate for monorepo if you use **React JS** as frontend and **Node JS** as backend.

⭐ Star this repo if you like and also contribute to make it better 💙
