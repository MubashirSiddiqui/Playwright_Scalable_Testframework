// Test Case 2: Using Hooks (tests/hooks.spec.js)

const { test } = require('@playwright/test');

test.describe('Hooks Example', () => {
  test.beforeAll(async () => {
    console.log('Running setup before all tests...');
  });

  test.beforeEach(async ({ page }) => {
    console.log('Running setup before each test...');
    await page.goto('/');
  });

  test('Test Case 1', async ({ page }) => {
    console.log('Running Test Case 1');
    await page.waitForSelector('h1');
  });

  test('Test Case 2', async ({ page }) => {
    console.log('Running Test Case 2');
    await page.waitForSelector('p');
  });

  test.afterEach(async () => {
    console.log('Cleaning up after each test...');
  });

  test.afterAll(async () => {
    console.log('Cleaning up after all tests...');
  });
});
