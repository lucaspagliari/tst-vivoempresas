import VIcon from "../VIcon.vue";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";

describe("Component VIcon", () => {
  it("should render component and match spnapshot", () => {
    const c = render(VIcon, {
      props: { icon: "menu", color: "red" },
    });

    expect(c.html()).toMatchSnapshot()
  });
});
