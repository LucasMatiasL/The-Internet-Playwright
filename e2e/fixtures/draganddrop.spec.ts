import { test, expect } from "@playwright/test";
import { DragAndDrop } from "../pages/DragAndDrop";

test.describe("Drag and Drop tests", () => {
  let dragDrop: DragAndDrop;

  test.beforeEach(async ({ page }) => {
    dragDrop = new DragAndDrop(page);
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
  });

  test("Drag Box A to Box B", async () => {
    await dragDrop.fromAtoB();
    await expect(
      dragDrop.boxB,
      "Box B Doesn't have the correct text."
    ).toContainText("A");
  });

  test("Drag Box B to Box A", async () => {
    await dragDrop.fromAtoB();
    await dragDrop.fromBtoA();
    await expect(
      dragDrop.boxA,
      "Box A doesn't have the correct text."
    ).toContainText("A");
  });
});
