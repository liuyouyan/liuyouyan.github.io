import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The default matches the intended GitHub Pages user-site repository.
// Set SITE_URL only if the published domain changes later.
const site = process.env.SITE_URL ?? 'https://liuyouyan.github.io';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
});
