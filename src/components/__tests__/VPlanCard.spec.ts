import VPlanCard from "../VPlanCard.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

describe("Component VPlanCard", () => {
  it("should render", () => {
    const c = render(VPlanCard);
    expect(c).toBeTruthy();
  });

});
