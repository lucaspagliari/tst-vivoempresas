import VIcon from "../VIcon.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";

describe("Component VIcon", () => {
  it.each([
    { icon: "menu" },
    { icon: "chip" },
    { icon: "close" },
    { icon: "sim_card" },
  ])("should receive $icon as a prop and match spnapshot", ({ icon }) => {
    const c = render(VIcon, {
      props: { icon },
    });

    expect(c.html()).toMatchSnapshot();
  });
});
