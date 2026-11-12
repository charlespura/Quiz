# QuizApp

A responsive landing page for the QuizApp Android application, with an interactive three-question browser preview, app information, developer profiles, and APK download.

## Stack

- Strict TypeScript for all application logic and Vite configuration
- Vite for development and static production builds
- CSS for responsive styling; a minimal HTML entry point
- No frontend framework, runtime JavaScript dependencies, or Tailwind CDN

Browsers run the JavaScript compiled from TypeScript. The HTML and CSS are still required for the web page. The Android APK is an existing native application and is not converted to TypeScript.

## Local development

Use Node.js 22.12+ (or Node.js 24) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell, use `npm.cmd` if script execution policy prevents `npm` from running.

```sh
npm run typecheck
npm run build
npm run preview
```

`build` runs the strict TypeScript check before creating `dist/`. Preview serves that production output. Opening `index.html` directly or serving the unbuilt source with XAMPP does not compile TypeScript.

## Deploy to GitHub Pages

1. Push this project, including `package-lock.json`, to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
3. Open **Actions → Deploy to GitHub Pages** to see the deployment. It runs on pushes to `main` and supports **Run workflow** manually.
4. The deployment job exposes the published URL. For this repository it is expected to be `https://charlespura.github.io/Quiz/`.

The workflow at `.github/workflows/deploy.yml` installs locked dependencies, checks TypeScript, builds the site, and deploys `dist/` through the official GitHub Pages actions. No personal access token is needed. The repository must have GitHub Pages enabled and allow Actions. If your default branch differs, update the workflow branch filter.

Vite uses a relative base (`./`) so the built assets and APK work under a repository subpath or at a custom domain root.

## Project structure

```text
.github/workflows/deploy.yml  GitHub Pages build and deployment
public/app-debug.apk         Existing Android download (approximately 44 MB)
public/quizapplogo.png        App favicon
src/main.ts                  Typed content and interactions
src/style.css                Responsive styles
index.html                   HTML entry point
vite.config.ts               Build configuration
```

## Editing

Update the quiz questions and developer profiles in `src/main.ts`, and visual styles in `src/style.css`. Replace `public/app-debug.apk` when releasing a new Android build; also update the version, size, and requirements in the download dialog as appropriate. The existing file is a debug APK distributed outside Google Play. Use a signed release APK for a production Android release.

The web quiz is a small independent preview. Firebase authentication and other Android features described on the page belong to the native application; this landing page does not connect to Firebase. Developer portraits use initials so they do not depend on expiring image links. Google Fonts is optional; system fonts provide fallbacks.

## Accessibility

Includes keyboard-operable controls, visible focus states, a skip link, a native modal dialog (Escape to close and focus restoration), live answer feedback, reduced-motion support, and a collapsible mobile navigation.

## References

- [Vite static deployment](https://vite.dev/guide/static-deploy)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
