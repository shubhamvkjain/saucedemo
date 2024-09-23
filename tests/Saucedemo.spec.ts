import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('[class="btn_action"]').click();
  await page.locator('.inventory_item_name').first().click();
  await page.getByText('ADD TO CART').click();
  await page.locator('[href="./cart.html"]').click();
  await page.locator('.shopping_cart_container ').click();
  await page.locator('[href="./checkout-step-one.html"]').click();
  await page.locator('#first-name').fill('shubham');
  await page.locator('#last-name').fill('jain');
  await page.locator('#postal-code').fill('440008');
  await page.locator('[type="submit"]').click();
  await page.locator('[href="./checkout-complete.html"]').click();


});