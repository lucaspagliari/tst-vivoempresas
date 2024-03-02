import VLogo from "../VLogo.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { faker } from "@faker-js/faker";

describe("Component VLogo", () => {
  it("should render VLogo", () => {

    const c = render(VLogo);
    expect(c.baseElement).toBeTruthy();
  });
});
