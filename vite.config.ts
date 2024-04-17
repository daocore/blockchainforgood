import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import seoPrerender from 'vite-plugin-seo-prerender'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // seoPrerender({
    //   routes: ["/"] // 需要生成的路由
    // })
  ],
  server: {
    host: "0.0.0.0",
  },
})
