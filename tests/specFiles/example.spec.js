import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('text=ShadowDOM').scrollIntoViewIfNeeded()
  await page.waitForTimeout(3000)

  await page.locator('[id="shadow_host"]').locator('[type="text"]').fill("Javascript")
  await page.waitForTimeout(3000)

});
