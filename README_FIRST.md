# Tracey Listen — Pretty Toggle + Home Screen Icon Patch

This patch intentionally uses **rose, ivory, black and gold only**. There is no green.

## What this fixes
1. Replaces the plain letter-style Home Screen/PWA icon with the new Tracey Listen icon.
2. Connects the iPhone Home Screen icon through `apple-touch-icon`.
3. Connects Android/Chrome install icons through `manifest.webmanifest`.
4. Adds a matching rose/gold in-app toggle component.
5. Adds an optional service worker so the installed app behaves as a standalone PWA.

## Put these files in the project
Copy everything inside `public/` into your existing app's public/root static folder.

### If the app is plain HTML
Copy the contents of `HEAD_SNIPPET.html` into the `<head>` of the main `index.html`.
Before `</body>`, register the service worker:

```html
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
}
</script>
```

### If the app is React/Vite
- Put the `public/` files in your project `public/` folder.
- Add `HEAD_SNIPPET.html` tags to `index.html`.
- Copy `src/PrettyToggle.jsx`, `src/pretty-toggle.css`, and `src/register-pwa.js` into your `src/`.
- Call `registerPrettyHomeScreenIcon()` once from your app startup.
- Use `<PrettyToggle ... />` anywhere you want the matching in-app switch.

### If the app is Next.js App Router
- Put the `public/` files into `/public`.
- Merge `NEXTJS_APP_ROUTER_METADATA.js` into `app/layout.js` or `app/layout.jsx`.
- If you use the in-app toggle, copy the two PrettyToggle files into your component folder.
- Register `/sw.js` from a small client component if you want offline/PWA caching.

## Important iPhone step after deployment
iOS can cache old Home Screen icons aggressively.
After the new Vercel deployment:
1. Remove the old Tracey Listen icon from the iPhone Home Screen.
2. Open the deployed site in Safari.
3. Share -> Add to Home Screen.
4. The new rose/ivory/gold icon should appear.

## Vercel
No special Vercel configuration is needed for these static files. Commit them to GitHub and deploy the commit through the existing Vercel project.
