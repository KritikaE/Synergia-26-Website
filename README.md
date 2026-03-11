
  # Synergia Fest Website UI

  This is a code bundle for Synergia Fest Website UI. The original project is available at https://www.figma.com/design/oIzt8oaHrcN9S3qQ1MonF1/Synergia-Fest-Website-UI.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Build for production

  Run `npm run build` to generate the production bundle in `dist/`.

  ## Hosting

  This project is a Vite + React SPA (uses browser routing), so route rewrites are required in production.

  ### Option 1: Netlify (recommended)

  1. Push this repo to GitHub.
  2. In Netlify, import the repo.
  3. Build command: `npm run build`
  4. Publish directory: `dist`
  5. Deploy.

  `netlify.toml` is already added with SPA redirects.

  ### Option 2: Vercel

  1. Push this repo to GitHub.
  2. Import the repo in Vercel.
  3. Framework preset: `Vite`
  4. Build command: `npm run build`
  5. Output directory: `dist`
  6. Deploy.

  `vercel.json` is already added with SPA rewrites.

  ### Option 3: GitHub Pages

  Build locally:

  ```bash
  npm i
  npm run build
  ```

  Then publish the `dist/` folder using your preferred GH Pages workflow (Actions or `gh-pages` package).  
  For project pages (`https://<user>.github.io/<repo>/`), set Vite `base` in `vite.config.ts`.
  
