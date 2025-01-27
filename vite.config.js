import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']  // 자동으로 처리할 확장자 목록
  },
  base: './', // GitHub Pages에서는 상대 경로 사용 권장
  build: {
    outDir: 'dist'
  }
})
