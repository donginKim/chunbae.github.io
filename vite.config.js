import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // 확장자 명시적 처리
  },
  base: './', // GitHub Pages용 상대 경로
  build: {
    outDir: 'dist'
  }
})