import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './src/locales/**.json'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@comp': path.resolve(__dirname, 'src/components'),
            '@scss': path.resolve(__dirname, 'src/assets/scss'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
        },
    },
})
