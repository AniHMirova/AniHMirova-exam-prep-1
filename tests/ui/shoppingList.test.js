const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('http://localhost:8081/Shopping-List');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  