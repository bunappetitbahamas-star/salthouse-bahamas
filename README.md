# Salt House Bahamas

Website for **Salt House Bahamas** — Chef Harold Pinder, Freeport, Grand Bahama.

Domain (on Netlify): [salthousebahamas.kitchen](https://salthousebahamas.kitchen)

## Run locally

```bash
cd chef-harold
npm install
npm run dev
```

## Publish on Netlify (your domain)

You already own `salthousebahamas.kitchen` on Netlify. Connect the site like this:

### Option A — Drag and drop (fastest)

1. On your computer, open the `chef-harold` folder
2. Run:
   ```bash
   npm install
   npm run build
   ```
3. Go to [app.netlify.com](https://app.netlify.com) and sign in
4. Drag the **`dist`** folder onto the Netlify dashboard (“Add new site” → deploy manually)
5. After it deploys, open the site → **Domain management**
6. Click **Add domain** / **Add domain alias**
7. Enter `salthousebahamas.kitchen` (and `www.salthousebahamas.kitchen` if offered)
8. Because the domain is already in your Netlify account, it should attach with one click — Netlify handles DNS and HTTPS

### Option B — From GitHub (best long-term)

1. Put this project in a GitHub repo
2. Netlify → **Add new site** → **Import an existing project**
3. Pick the repo; build settings are already in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Then Domain management → add `salthousebahamas.kitchen`

After DNS finishes (often a few minutes), visiting **https://salthousebahamas.kitchen** will open this site.
