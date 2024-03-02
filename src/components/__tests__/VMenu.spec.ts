import VMenu from "../VMenu.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

describe("Component VMenu", () => {
  it("should render text in default slot", () => {
    const text = faker.string.alphanumeric(16);

    render(VMenu, {
      slots: {
        default: text,
      },
    });

    expect(screen.queryByText(text)).toBeTruthy();
  });
});
