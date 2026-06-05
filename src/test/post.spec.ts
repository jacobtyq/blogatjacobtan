import { test, expect } from '@playwright/test'

const POST = '/blog/celebrating-small-wins-the-importance-of-user-stories/'

test('post – desktop light @visual', async ({ page }) => {
  await page.goto(POST)
  await expect(page).toHaveScreenshot('post-desktop-light.png', {
    fullPage: true,
  })
})

test('post - mobile light @visual', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto(POST)
  await expect(page).toHaveScreenshot('post-mobile-light.png', {
    fullPage: true,
  })
})

test('post – desktop dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'))
  await page.goto(POST)
  await expect(page).toHaveScreenshot('post-desktop-dark.png', {
    fullPage: true,
  })
})

test('post – mobile dark @visual @dark', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'))
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto(POST)
  await expect(page).toHaveScreenshot('post-mobile-dark.png', {
    fullPage: true,
  })
})

test('oldest post - no next link @visual', async ({ page }) => {
  await page.goto('/blog/')
  const lastPost = page.locator('a[href^="/blog/"]').last()
  await lastPost.click()
  const nav = page.locator('nav')
  await expect(nav.locator('a[href*="←"]')).toHaveCount(0)
})

test('latest post – no prev link @visual', async ({ page }) => {
  await page.goto('/blog/')
  const firstPost = page.locator('a[href^="/blog/"]').first()
  await firstPost.click()
  const nav = page.locator('nav')
  await expect(nav.locator('a[href*="→"]')).toHaveCount(0)
})

test('not latest or oldest post – PostNav has prev and next', async ({
  page,
}) => {
  await page.goto('/blog/my-homelab-journey/')
  const nav = page.locator('nav')
  await expect(nav.locator('text=←')).toBeVisible()
  await expect(nav.locator('text=→')).toBeVisible()
})
