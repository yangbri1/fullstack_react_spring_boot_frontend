# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- - -
## Typical Flow:
1. Browser goes to `index.html` where it imports the `main.jsx` file
2. In the `main.jsx`, create a root using **ReactDOM.createRoot()** method where it takes in **docment.getElementById(*root*)** as the parmeter. Additionally, dot call **.render()** method to render `App.jsx` functional component in the DOM.
3. `App.jsx` takes in all the pages and routes, here you set up general format of each page from each placement of functional components.
4. From here for every page/component/route that were to be established, make sure to import and include them into the `App.jsx` in order to reflect the changes on the DOM.

## References
### Navigation Bar Ideas
* https://react-bootstrap.github.io/docs/components/navbar

### Website Color Schemes
* https://colorhunt.co/palettes/popular

### Emoji Source
* https://emojidb.org/work-emojis

### Markdown Syntax
* https://docs.readme.com/rdmd/docs/code-blocks

## LINK TO FRONT-END:
> https://github.com/yangbri1/fullstack_mrs_crud_backend


- - -

# Hosting/Deploying Front-End React to GitHub Pages
### 1. Install Github Pages package:
* `npm install gh-pages --save-dev`

### 2. Add below script commands to `package.json`:
```
{
    "homepage": "https://github.io/yangbri1/fullstack_react_spring_boot_frontend",
    "scripts": {
        "predeploy": "npm run build"
        "deploy": "gh-pages -d build"
    }
}
```
***NOTICE: Here it's `.io` NOT `.com` AND username before Github
`http://<your-username>.github.io/<repository-name>`***

### 3. Push React project upstream to Github (if not already done)

### 4. Deploy this React front-end:
#### This command prompts Github to automatically create a branch *gh-pages* & host it
* `npm run deploy` 

* NOTICE: ***Different from usual `npm run dev` w/ vite***

### 5. Visit hosted Github site:
* https://yangbri1.github.io/fullstack_react_spring_boot_frontend/