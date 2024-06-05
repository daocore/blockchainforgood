import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// import seoPrerender from 'vite-plugin-seo-prerender'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // seoPrerender({
    //   routes: ["/"] // 需要生成的路由
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
})
