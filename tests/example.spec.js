// Test Case 1: Basic Features (tests/example.spec.js)

const { test, expect } = require('@playwright/test');
const { login, takeScreenshot } = require('../utils/pageUtils');

test('Example Test Case', async ({ page }) => {
  // Navigate to a website
  await page.goto('/');
  
  // Interact with elements
  const title = await page.title();
  expect(title).toBe('Example Domain'); // Assert title
  
  await page.click('a[href="https://www.iana.org/domains/example"]');
  
  // Take a screenshot
  await takeScreenshot(page, 'example-domain');
});
