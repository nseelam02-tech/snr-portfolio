import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  console.log('VITE MODE:', mode)

  return {
    base: mode === 'production' ? '/snr-portfolio/' : '/',
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
