import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_URL': JSON.stringify(env.API_URL)
    },
    plugins: [react(), viteSingleFile()],
    base: "https://www.ictsebutex.com/"
  }
})
