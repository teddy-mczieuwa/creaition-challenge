import { describe, it, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

describe("Home", () => {
  test("Morph button does not display initially", () => {
    const wrapper = mount(Home);
    expect(wrapper.find(".cta").isVisible()).toBe(false);
  });
});
