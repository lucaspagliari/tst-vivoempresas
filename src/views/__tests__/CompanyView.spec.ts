import CompanyView from "../CompanyView.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { beforeEach } from "node:test";

const testIds = {
  techCard: "v-tech-card",
  planCard: "v-plan-card",
};

describe("Component CompanyView", () => {

  it("should render 3 tech cards", async () => {
    render(CompanyView);

    const cards = await screen.findAllByTestId(testIds.techCard)

    expect(cards).toBeDefined()
    expect(cards).toHaveLength(3)
  });
  it("should render 3 plan cards ", async () => {
    render(CompanyView);

    const cards = await screen.findAllByTestId(testIds.planCard)

    expect(cards).toBeDefined()
    expect(cards).toHaveLength(3)
  });
});
