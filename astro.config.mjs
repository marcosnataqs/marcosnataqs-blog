import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcosnataqs.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
