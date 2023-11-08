import { test, Page, expect } from "@playwright/test";
import { ContextMenu } from "../pages/ContextMenu";

test.describe("Context menu tests", () => {
  let context: ContextMenu;

  test.beforeEach(async ({ page }) => {
    context = new ContextMenu(page);
    page.goto("https://the-internet.herokuapp.com/context_menu");
  });

  test("Page title has the correct text", async ({ page }) => {
    await expect(context.title).toHaveText("Context Menu");
  });

  test("First paragraph has the correct text", async ({ page }) => {
    await expect(context.firstParagraph).toHaveText(
      "Context menu items are custom additions that appear in the right-click menu."
    );
  });

  test("Second paragraph has the correct text", async ({ page }) => {
    await expect(context.secondParagraph).toHaveText(
      "Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert."
    );
  });

  test.skip('Right clicking the box should display an alert', async ({ page }) => {
    await context.rightClickBox();
    // It will just show the right click menu :(
  })
  



  
});
