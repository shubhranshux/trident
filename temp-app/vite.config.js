import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const s3SpaHackPlugin = () => {
  return {
    name: 's3-spa-hack',
    closeBundle() {
      const routes = ['about', 'admissions', 'academics', 'research', 'campus-life', 'activities', 'contact', 'apply'];
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.resolve(distDir, 'index.html');
      
      if (!fs.existsSync(indexHtmlPath)) return;
      
      const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      routes.forEach(route => {
        const routeDir = path.resolve(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.resolve(routeDir, 'index.html'), indexHtml);
      });
      console.log('S3 SPA physical folders created.');
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), s3SpaHackPlugin()],
})
