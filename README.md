## Victor Munene Portfolio

Modern single-page portfolio built with React (Create React App + CRACO), Tailwind CSS, and Sass.

### Getting started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd litho
   ```

2. **Install dependencies**

   Make sure you have **Node.js** (recommended v18 or later) and **npm** installed, then run:

   ```bash
   npm install
   ```

### Run the app on your computer

- **Development server**

  ```bash
  npm start
  ```

  This starts the React dev server (Create React App) and opens the site at `http://localhost:3000`.  
  The page will auto‑reload when you make changes in `src/`.

### Build for production

- **Create an optimized production build**

  ```bash
  npm run build
  ```

  This uses CRACO under the hood and outputs static files into the `build/` folder, ready to be deployed to any static hosting service.

### Run tests (optional)

- **Jest / React Testing Library in watch mode**

  ```bash
  npm test
  ```

### Styling workflow (optional)

If you are editing Tailwind or Sass source files, you can run the style build pipeline in watch mode:

```bash
npm run scss
```

This script watches the Sass files under `src/Assets/scss` and rebuilds the generated CSS (including Tailwind styles) into `src/Assets/css`.

### Available npm scripts

- **start**: runs the development server.
- **build**: creates an optimized production build in `build/`.
- **test**: runs the test suite in watch mode.
- **scss**: runs the combined Sass + Tailwind CSS watchers for live style rebuilding.
