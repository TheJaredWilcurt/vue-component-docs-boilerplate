# Vue Component Docs Site Boilerplate

A boilerplate for creating a Vue Component library documentation website.


## Features

1. Allows you to do component development, and docs site development from the same repo, without being a monorepo.
  * Just uses two Vite configs, and references them in the `package.json` for different scripts
1. Project structure and dependencies already set up.
1. Uses Vue-Doxen which automatically documents your components.


## Running Locally

1. Fork/clone/download the repo
1. `npm install`
1. Run docs site locally - `npm start`
1. Check linting issues - `npm run lint`
1. Fix linting issues (where possible) - `npm run fix`
1. Build docs site and library - `npm run build`


## Personalizing

* Do a "find and replace" for:
  * `Your Library` - Proper noun version of your library name
  * `your-library` - url safe/repo name
  * `yourLibrary` - JavaScript variable name for your library
  * `TheJaredWilcurt` - GitHub organization
  * `vue-component-docs-boilerplate` - repo name
* Replace `/public/favicon.ico` with your own favicon


### Project Structure

* **Documentation site**
  * `npm start` will launch the app for local development
  * Code lives in `app` folder
  * Uses `vite.config.doc.js`
  * `npm run build` will produce `docs` folder
* **Library**
  * To manually test/develop the library use the docs site via `npm start`
  * Code lives in the `lib` folder
  * Uses `vite.config.lib.js`
  * `npm run build` will produce `dist` folder
  * `npm t` runs unit tests for the library
