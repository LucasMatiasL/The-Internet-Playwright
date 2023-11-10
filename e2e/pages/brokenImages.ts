import { type Locator, type Page } from "@playwright/test";

export class BrokenImages {
  readonly page: Page;
  readonly firstImage: Locator;
  readonly firstImgUrl: string;
  readonly secondImage: Locator;
  readonly secondImgUrl: string;
  readonly thirdImage: Locator;
  readonly thirdImgUrl: string;


  constructor(page: Page) {
    this.page = page;
    this.firstImage = page.getByRole("img").nth(1);
    this.secondImage = page.getByRole("img").nth(2);
    this.thirdImage = page.getByRole("img").nth(3);


  }

  async waitForResponse(image: string): Promise<void> {
    this.page.on("response", (response) => {
      if (
        response.status() !== 200 &&
        response.url().includes(image)
      ) {
        return false;
        console.error(`Image failed to load: ${response.status()}`);
      } else {
        return true;
      }
    });
  }
}
