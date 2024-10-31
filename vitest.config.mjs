import { defineConfig, coverageConfigDefaults } from 'vitest/config';

function getVitestDirs() {
    return fg.globSync('**/__tests__', { onlyDirectories: true, ignore: ['**/node_modules/**'] });
}

export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',
            clean: true,
            reportsDirectory: '.coverage-vitest',
        }
    }
});
