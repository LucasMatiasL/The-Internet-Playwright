import { test, expect } from "@playwright/test";
import { HorizontalSlider } from "../pages/HorizontalSlider";

test.describe("Horizontal slider tests", () => {
  let horizontal: HorizontalSlider;

  test.beforeEach(async ({ page }) => {
    horizontal = new HorizontalSlider(page);
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
  });

  test("Slider is visible and has a value of 0", async ({ page }) => {
    await expect(horizontal.slider).toBeVisible();
    await expect(horizontal.range).toContainText("0");
  });

  test("Move the slider to the middle (2,5)", async ({ page }) => {
    await horizontal.moveSliderToMiddle();
    await expect(horizontal.range).toContainText("2.5");
  });

  test("Move slider to the right (5)", async ({ page }) => {
    await horizontal.moveSliderToRight();
    await expect(horizontal.range).toContainText("5");
  });

  test("Move back the slider to the left (0)", async ({ page }) => {
    await horizontal.moveSliderRightAndLeft();
    await expect(horizontal.range).toContainText("0");
  });
});
