# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


src/
  assets/           # Images, icons, etc.
  components/       # Reusable UI components
  layouts/          # Layout components (e.g., DashboardLayout)
  pages/            # Page components (Dashboard, Home, etc.)
  router/           # Routing logic (AppRouter.jsx)
  services/         # API calls, business logic
  hooks/            # Custom React hooks
  utils/            # Utility functions
  styles/           # Global and module CSS files
  App.jsx           # Main app component
  main.jsx          # Entry point