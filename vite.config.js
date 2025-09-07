import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* // https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}) */

export default defineConfig({
  base: '/myDevProfile/',   // <-- add your repo name here
  plugins: [react()]
})
