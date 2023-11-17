import { test, expect } from "@playwright/test";
import { HorizontalSlider } from "../pages/HorizontalSlider";

test.describe("Horizontal slider tests", () => {
  let horizontal: HorizontalSlider;

  test.beforeEach(async ({ page }) => {
    horizontal = new HorizontalSlider(page);
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
  });

  test("Slider is visible and has a value of 0", async () => {
    await expect(horizontal.slider, "Slider is not visible.").toBeVisible();
    await expect(
      horizontal.range,
      "Range of slider is not visible."
    ).toContainText("0");
  });

  test("Move the slider to the middle (2,5)", async () => {
    await horizontal.moveSliderToMiddle();
    await expect(horizontal.range, "The value is incorrect.").toContainText(
      "2.5"
    );
  });

  test("Move slider to the right (5)", async () => {
    await horizontal.moveSliderToRight();
    await expect(horizontal.range, "The value is incorrect.").toContainText(
      "5"
    );
  });

  test("Move back the slider to the left (0)", async () => {
    await horizontal.moveSliderRightAndLeft();
    await expect(horizontal.range, "The value is incorrect.").toContainText(
      "0"
    );
  });
});
