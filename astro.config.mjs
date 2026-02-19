import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcosnataqs.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
