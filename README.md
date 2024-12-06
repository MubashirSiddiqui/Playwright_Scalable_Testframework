# Playwright_Scalable_Testframework
Playwright test framework that demonstrates the use of most Playwright features such as browser interaction, assertions, hooks, and reusable utilities. It also integrates with Playwright’s test runner to create a scalable framework.

# Directory Structure

 playwright-test-framework
- ├── tests/
- │   ├── example.spec.js   # Example test file
- │   ├── hooks.spec.js     # Hooks and setup/teardown
- │   ├── advanced.spec.js  # Full test with all methods
  
- ├── utils/
- │   ├── pageUtils.js      # Reusable utilities
- ├── playwright.config.js  # Configuration file
- ├── package.json          # Dependencies and scripts
- └── README.md             # Documentation


# 1. Install Playwright and Test Runner
Install Playwright and related dependencies:
npm init -y
npm install playwright @playwright/test

# 2. Configuration File (playwright.config.js)
This file configures browser, base URL, retries, etc.

# 3. Reusable Utilities (utils/pageUtils.js)
Encapsulate repetitive tasks like login and navigation.

# 4. Test Case 1: Basic Features (tests/example.spec.js)
Covers basic page interactions like navigation and assertions.

# 5. Test Case 2: Using Hooks (tests/hooks.spec.js)
Demonstrates beforeEach, afterEach, beforeAll, and afterAll.

# 6. Test Case 3: Advanced Features (tests/advanced.spec.js)
Covers Playwright-specific features like locators, waitForTimeout, API testing, and file upload.

# 7. Run All Tests
Run the framework and tests:
npx playwright test

#8. View Reports
After the tests run, open the Playwright report:
npx playwright show-report

# Key Features Used
- Navigation: page.goto(url)
- Assertions: expect API
- Selectors: locator, waitForSelector
- File Uploads: setInputFiles
- Keyboard & Mouse: keyboard.type, locator.hover
- Screenshots & Videos: Configured in playwright.config.js
- API Testing: request.newContext()
- Hooks: beforeAll, beforeEach, afterEach, afterAll
This framework is modular, demonstrates nearly every Playwright feature, and is easy to extend for complex use cases.
