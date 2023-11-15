import { test, expect } from "@playwright/test";
import { InfiniteScroll } from "../pages/InfiniteScroll";

test.describe("Infinite Scroll tests", () => {
  let infinite: InfiniteScroll;

  test.beforeEach(async ({ page }) => {
    infinite = new InfiniteScroll(page);
    await page.goto("https://the-internet.herokuapp.com/infinite_scroll");
  });

  test("When I scroll down more content is created.", async ({ page }) => {
    await infinite.scrollDown();
    await expect(infinite.newContent).toBeVisible();
  });
});
