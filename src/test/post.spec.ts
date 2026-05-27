import { test, expect } from '@playwright/test';

const POST = '/blog/celebrating-small-wins-the-importance-of-user-stories/';

test('post – desktop light @visual', async ({ page }) => {
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-desktop-light.png', { fullPage: true });
});

test('post - mobile light @visual', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-mobile-light.png', { fullPage: true });
});

test('post – desktop dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-desktop-dark.png', { fullPage: true });
});

test('post – mobile dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(POST);
  await expect(page).toHaveScreenshot('post-mobile-dark.png', { fullPage: true });
});
