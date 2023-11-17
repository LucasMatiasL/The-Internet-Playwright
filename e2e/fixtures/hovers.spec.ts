import { test, expect } from "@playwright/test";
import { Hovers } from "../pages/Hovers";

test.describe("Hovers tests", () => {
  let hover: Hovers;

  test.beforeEach(async ({ page }) => {
    hover = new Hovers(page);
    await page.goto("https://the-internet.herokuapp.com/hovers");
  });

  test("Image 1 has the correct information.", async () => {
    await hover.moveToImg(hover.img1);
    await expect(hover.content1, "Incorrect user displayed").toHaveText(
      "name: user1"
    );
    await expect(
      hover.viewProfile1,
      "View profile link doesn't work."
    ).toHaveAttribute("href");
  });

  test('Clicking the user1 "View Profile" link takes me to the profile', async ({
    page,
  }) => {
    await hover.moveToImgAndClickViewProfile(hover.img1, hover.viewProfile1);
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/users/1");
  });

  test("Image 2 has the correct information", async () => {
    await hover.moveToImg(hover.img2);
    await expect(hover.content2, "Incorrect user displayed").toHaveText(
      "name: user2"
    );
    await expect(
      hover.viewProfile2,
      "View profile link doesn't work."
    ).toHaveAttribute("href");
  });

  test('Clicking the user2 "View Profile" link takes me to the profile', async ({
    page,
  }) => {
    await hover.moveToImgAndClickViewProfile(hover.img2, hover.viewProfile2);
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/users/2");
  });

  test("Image 3 has the correct information", async () => {
    await hover.moveToImg(hover.img3);
    await expect(hover.content3, "Incorrect user displayed").toHaveText(
      "name: user3"
    );
    await expect(
      hover.viewProfile3,
      "View profile link doesn't work."
    ).toHaveAttribute("href");
  });

  test('Clicking the user3 "View Profile" link takes me to the profile', async ({
    page,
  }) => {
    await hover.moveToImgAndClickViewProfile(hover.img3, hover.viewProfile3);
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/users/3");
  });
});
