import { test, expect } from '@playwright/test';

const PAGE = '/blog/';

test('blog – desktop light @visual', async ({ page }) => {
  await page.goto(PAGE);
  await expect(page).toHaveScreenshot('blog-desktop-light.png', { fullPage: true });
});

test('blog - mobile light @visual', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(PAGE);
  await expect(page).toHaveScreenshot('blog-mobile-light.png', { fullPage: true });
});

test('blog – desktop dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto(PAGE);
  await expect(page).toHaveScreenshot('blog-desktop-dark.png', { fullPage: true });
});

test('blog – mobile dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(PAGE);
  await expect(page).toHaveScreenshot('blog-mobile-dark.png', { fullPage: true });
});
