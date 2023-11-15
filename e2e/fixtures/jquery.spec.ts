import { test, expect } from "@playwright/test";
import { JQuery } from "../pages/JQuery";

test.describe("JQuery UI Menu tests", () => {
  let jq: JQuery;
  const assertCvs: string = "e2e\\fixtures\\downloads\\menu.cvs";

  test.beforeEach(async ({ page }) => {
    jq = new JQuery(page);
    await page.goto("https://the-internet.herokuapp.com/jqueryui/menu");
  });

  test('Try to click "Disabled" option', async ({ page }) => {
    await jq.doHoverOnDisabled(jq.disabledMenu);
  });

  test('Hover on Enabled and click "Back to JQuery UI"', async ({ page }) => {
    await jq.clickBackToJquery();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/jqueryui");
  });

  test('Hover on Enabled and click "Back to JQuery UI" and return to the Menu page', async ({
    page,
  }) => {
    await jq.clickBackToMenu(jq.backToMenu);
    await expect(page).toHaveURL(
      "https://the-internet.herokuapp.com/jqueryui/menu"
    );
  });

  test("Download the CVS file", async ({ page }) => {
    await jq.downloadFile(page);
    await expect(assertCvs).toBeTruthy();
  });
});
