<<<<<<< HEAD
# RayanProtectionPrivee

Site web professionnel pour une agence de sécurité et de protection privée.  
Cette plateforme met en valeur les services de l’agence, notamment la mise à disposition d’agents de sécurité, la surveillance par caméras, le contrôle d’accès, la réponse aux alertes et les consultations personnalisées.  

Le site offre une interface interactive et moderne permettant aux visiteurs de s’informer facilement et de contacter directement l’agence.  

## Technologies utilisées

- **Frontend :** Développé avec **React**, **TypeScript** et **Tailwind CSS** pour une interface réactive, élégante et performante.  
- **Design :** Maquette et conception graphique entièrement réalisées par moi, avec une attention particulière à l’expérience utilisateur (UX/UI).  
- **Backend :** Intégration d’un serveur léger utilisant **Node.js** et **Nodemailer** pour la gestion et l’envoi d’e-mails via le formulaire de contact.  

## Fonctionnalités principales

- Présentation claire des services de sécurité proposés  
- Interface responsive et optimisée pour tous les appareils  
- Formulaire de contact fonctionnel (envoi d’e-mails automatisé via Nodemailer)  
- Navigation fluide et animations légères pour une expérience utilisateur agréable  

## Objectif

Ce projet vise à offrir une vitrine professionnelle et moderne à une agence de protection privée, tout en mettant l’accent sur la fiabilité, la simplicité et la performance technique du site.

---

=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 7f4c026 (Initial client commit - React + Vite frontend RayanProtectionPrivee)
