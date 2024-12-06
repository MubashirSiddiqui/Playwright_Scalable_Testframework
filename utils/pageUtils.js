// utils/pageUtils.js
module.exports = {
    async login(page, username, password) {
      await page.goto('/login');
      await page.fill('input[name="username"]', username);
      await page.fill('input[name="password"]', password);
      await page.click('button[type="submit"]');
      await page.waitForNavigation();
    },
  
    async waitForElement(page, selector, timeout = 5000) {
      await page.waitForSelector(selector, { timeout });
    },
  
    async takeScreenshot(page, name) {
      await page.screenshot({ path: `screenshots/${name}.png` });
    },
  };
  