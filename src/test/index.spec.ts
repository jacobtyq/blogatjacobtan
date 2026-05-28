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

test('home – desktop dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-desktop-dark.png', { fullPage: true });
});

test('home – mobile dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-mobile-dark.png', { fullPage: true });
});

test('home - profile pic has alt text', async ({ page }) => {
  await page.goto('/');
  const image = page.getByAltText('Headshot of Jacob');
  await expect(image).toBeVisible();
})

test('home - profile pic has loaded', async ({ page }) => {
  await page.goto('/');
  const image = page.getByAltText('Headshot of Jacob');
  const isLoaded = await image.evaluate((img) => {
    return (img as HTMLImageElement).complete && 
           (img as HTMLImageElement).naturalWidth > 0;
  });

  expect(isLoaded).toBe(true);
})

test('meta is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Jacob Tan");
});
