import { test, Page, expect } from "@playwright/test";
import { BrokenImages } from "../pages/brokenImages";

test.describe("Broken Images tests", () => {
  let brokenImages: BrokenImages;

  test.beforeEach(async ({ page }) => {
    brokenImages = new BrokenImages(page);
    page.goto("https://the-internet.herokuapp.com/broken_images");
  });

  test("Image 1 is visible", async ({ page }) => {
    test.info().annotations.push({
      type: "Read this if test failed.",
      description: "Depending on load times these test may fail.",
    });
    await expect(brokenImages.firstImage).toBeVisible();
  });

  test("Image 2 is visible", async ({ page }) => {
    test.info().annotations.push({
      type: "Read this if test failed.",
      description: "Depending on load times these test may fail.",
    });
    await expect(brokenImages.secondImage).toBeVisible();
  });

  test("Image 3 is visible", async ({ page }) => {
    test.info().annotations.push({
      type: "Read this if test failed.",
      description: "Depending on load times these test may fail.",
    });
    await expect(brokenImages.thirdImage).toBeVisible();
  });
});
