import VNavigationBar, { type VNavigationBarItem } from "../VNavigationBar.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

const itemsFactory = (
  length: number = 3,
  item?: VNavigationBarItem
): VNavigationBarItem[] => {
  const items = Array(length - 1)
    .fill(0)
    .map((_) => ({
      title: faker.string.alphanumeric(16),
      ...item,
    }));

  return item ? [...items, item] : items;
};

describe("Component VNavigationBar", () => {
  it("should render all items passed as props", () => {
    const length = faker.number.int({ min: 1, max: 16 });
    const title = faker.string.alphanumeric(16);
    const items = itemsFactory(length, { title });

    render(VNavigationBar, {
      props: {
        modelValue: true,
        items,
      },
    });

    const navItems = screen.queryAllByText(title);
    expect(navItems).toBeDefined();
    expect(navItems).toHaveLength(length);
  });
});
