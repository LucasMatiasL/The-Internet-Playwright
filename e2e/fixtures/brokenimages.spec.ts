import { test, expect } from "@playwright/test";
import { BrokenImages } from "../pages/brokenImages";

test.describe("Broken Images tests", () => {
  let brokenImages: BrokenImages;

  test.beforeEach(async ({ page }) => {
    brokenImages = new BrokenImages(page);
    await page.goto("https://the-internet.herokuapp.com/broken_images");
  });

  test("Image 1 is visible", async ({ page }) => {
    await expect(
      brokenImages.waitForResponse(brokenImages.firstImgUrl)
    ).toBeTruthy();
  });

  test("Image 2 is visible", async ({ page }) => {
    await expect(
      brokenImages.waitForResponse(brokenImages.secondImgUrl)
    ).toBeTruthy();
  });

  test("Image 3 is visible", async ({ page }) => {
    await expect(
      brokenImages.waitForResponse(brokenImages.thirdImgUrl)
    ).toBeTruthy();
  });
});
