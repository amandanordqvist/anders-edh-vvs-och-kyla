// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Byt till den egna domänen när den är kopplad (t.ex. 'https://www.andersedh.se').
  site: 'https://anders-edh-vvs.netlify.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/tack') })],
});
