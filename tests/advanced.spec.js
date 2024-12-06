// Test Case 3: Advanced Features (tests/advanced.spec.js)

const { test, expect, request } = require('@playwright/test');
const { waitForElement } = require('../utils/pageUtils');

test('Advanced Playwright Test', async ({ page }) => {
  // 1. API Testing
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();

  // 2. File Upload
  await page.goto('https://the-internet.herokuapp.com/upload');
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('example.txt');
  await page.click('#file-submit');

  // 3. Keyboard Input
  await page.goto('https://example.com');
  await page.keyboard.type('Hello Playwright!');

  // 4. Wait for Timeout
  await page.waitForTimeout(2000);

  // 5. Use Locators
  const button = page.locator('button');
  await button.hover();
  await button.click();

  // 6. Assert Element Text
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // 7. Close
  await page.close();
});
