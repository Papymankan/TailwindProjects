import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        injectData: {
          // redirect to index.html on 404 error
          BASE_URL: '/your-repo-name/'
        },
      },
    }),
  ],
  base:'/TailwindProjects/'
})
