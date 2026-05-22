import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/test',
  use: {
    baseURL: 'http://localhost:4321',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,    
  },  
});