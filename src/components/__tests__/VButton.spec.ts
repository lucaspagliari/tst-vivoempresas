import VButton from "../VButton.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

describe("Component VButton", () => {
  it("should render text passed in slot", () => {
    const text = faker.string.alphanumeric(16);
    render(VButton, {
      slots: {
        default: text,
      },
    });
    expect(screen.getByText(text)).toBeVisible();
  });
});
