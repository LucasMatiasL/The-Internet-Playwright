import { test } from "@playwright/test";
import { ContextMenu } from "../pages/ContextMenu";

test.describe("Context menu tests", () => {
  let context: ContextMenu;

  test.beforeEach(async ({ page }) => {
    context = new ContextMenu(page);
    page.goto("https://the-internet.herokuapp.com/context_menu");
  });

  test.skip('Right clicking the box should display an alert', async ({ page }) => {
    await context.rightClickBox();
  })
  



  
});
