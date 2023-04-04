// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // Specify the test directory for the tests to run
  timeout: 30 * 1000,   // (30 seconds) The number of seconds to wait before throwing an error
  expect: {   // For assertion
    timeout: 5000 // (5 sec) 
  },

  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1440, height: 950},
        screenshot: "only-on-failure",
        trace: "on",
        video: {
          mode: "retain-on-failure" ,
          size: { width: 640, height: 480 }
        }
      }
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
});

