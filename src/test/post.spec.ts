import { test, expect } from '@playwright/test';

const POST = '/celebrating-small-wins-the-importance-of-user-stories/';

test('post – desktop light', async ({ page }) => {
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-desktop-light.png', { fullPage: true });
});

test('post - mobile light', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-mobile-light.png', { fullPage: true });
});