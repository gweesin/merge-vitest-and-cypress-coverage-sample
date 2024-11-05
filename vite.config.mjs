import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        istanbul({
            include: '**/src/**'
        })
    ],
    test: {
        coverage: {
            provider: 'istanbul',
            reportsDirectory: '.nyc_coverage',
            reporter: [['json', {file:'vitest-coverage.json'}]],
        }
    }
})
