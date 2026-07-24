# Salt House Bahamas

Chef Harold Pinder — Freeport, Grand Bahama  
Domain: [salthousebahamas.kitchen](https://salthousebahamas.kitchen)

## Connect to Netlify (auto-updates)

1. Open [app.netlify.com](https://app.netlify.com) and sign in
2. **Add new site** → **Import an existing project** → **GitHub**
3. Choose **`bunappetitbahamas-star/salthouse-bahamas`**
4. Build settings (already in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy
6. **Domain management** → add **`salthousebahamas.kitchen`** (the domain you already own on Netlify)

After that, every push to `main` rebuilds the live site.

## Local development

```bash
npm install
npm run dev
```
