const { expect, test } = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true,
});


test('check SSL', async ({ page }) => {
  // visit the site
  await page.goto('https://self-signed.badssl.com/');


});
