import VTechCarousel from "../VTechCarousel.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";
import type { VCarouselItem } from "../VTechCarousel.vue";

const icons = ["5g", "chip", "left_arrow", "menu"];

const randomIcon = () =>
  icons[faker.number.int({ min: 0, max: icons.length - 1 })];

const createItem = (title: string) => ({ title, icon: randomIcon() });

const listFactory = (length: number = 3): VCarouselItem[] => {
  const list = Array(length)
    .fill(0)
    .map((_) => ({
      ...createItem(faker.string.alphanumeric(16)),
    }));

  return list;
};

describe("Component VTechCarousel", () => {
  it("should display title of the first item in tech list", async () => {
    const title = faker.string.alphanumeric(18);
    const item = createItem(title);
    const techs = [item, ...listFactory(5)];

    render(VTechCarousel, {
      props: {
        techs,
      },
    });

    const card = await screen.findByText(title);
    expect(card).toBeTruthy();
  });

  it("should not display title of any other item in tech list expect the first", async () => {
    const title = faker.string.alphanumeric(18);
    const item = createItem(title);
    const techs = [...listFactory(5), item];

    render(VTechCarousel, {
      props: {
        techs,
      },
    });

    const card = await screen.queryByText(title);
        
    expect(card).toBeFalsy();
  });
});
