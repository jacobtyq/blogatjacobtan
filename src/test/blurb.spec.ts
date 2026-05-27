import { test, expect } from '@playwright/test';

const BLURB = '/blurb/';

test('blurb – desktop light @visual', async ({ page }) => {
  await page.goto(BLURB);
  await expect(page).toHaveScreenshot('blurb-desktop-light.png', { fullPage: true });
});

test('blurb - mobile light @visual', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BLURB);
  await expect(page).toHaveScreenshot('blurb-mobile-light.png', { fullPage: true });
});

test('blurb – desktop dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto(BLURB);
  await expect(page).toHaveScreenshot('blurb-desktop-dark.png', { fullPage: true });
});

test('blurb – mobile dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BLURB);
  await expect(page).toHaveScreenshot('blurb-mobile-dark.png', { fullPage: true });
});

test('permalink has correct href and aria-label', async ({ page }) => {
  await page.goto(BLURB);
  const permalink = page.locator('a[aria-label]').first();
  await expect(permalink).toHaveAttribute('href', /#/);
  await expect(permalink).toHaveAttribute('aria-label', 'Permalink to this blurb');
});
