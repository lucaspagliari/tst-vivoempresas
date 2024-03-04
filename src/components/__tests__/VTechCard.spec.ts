import VTechCard from "../VTechCard.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

describe("Component VTechCard", () => {
  it("should display prop title and render icon", () => {
    const title = faker.string.alphanumeric(16);

    render(VTechCard, {
      props: {
        title: title,
        icon: 'menu'
      },
    });
    expect(screen.queryByText(title)).toBeTruthy();
  });

});
