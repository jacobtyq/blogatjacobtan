import { test, expect } from '@playwright/test';

test('home – desktop light @visual', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-desktop-light.png', { fullPage: true });
});

test('home – mobile light @visual', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-mobile-light.png', { fullPage: true });
});

test('meta is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Jacob's Blog");
});
