import { type Page, type Locator } from "@playwright/test";

export class HorizontalSlider {
  readonly page: Page;
  readonly slider: Locator;
  readonly range: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.getByRole("slider");
    this.range = page.locator('//*[@id="range"]');
  }

  async moveSliderToMiddle() {
    await this.slider.click();
  }

  async moveSliderToRight() {
    await this.slider.click();

    for (let i = 0; i < 5; i++) {
      await this.slider.press("ArrowRight");
    }
  }

  async moveSliderRightAndLeft() {
    await this.slider.click();

    for (let i = 0; i < 10; i++) {
      await this.slider.press("ArrowLeft");
    }
  }
}
