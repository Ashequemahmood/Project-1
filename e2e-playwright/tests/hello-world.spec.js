const { test, expect } = require("@playwright/test");

test("Main page has expected title and headings.", async ({ page }) => {
  await page.goto("/lists");
  // await expect(page).toHaveTitle("Shared shopping lists");
  await expect(page.locator("h2")).toHaveText(["Add a list", "Active shopping lists"]);
});

test("Can create a lists.", async ({ page }) => {
  await page.goto("/lists");
  await page.locator("input[type=text]").type("Clothes");
  await page.locator("input[type=submit]").first().click();
  
});
