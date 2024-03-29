import { mount } from "@vue/test-utils";
import ActionButton from "@/components/shared/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Sign in",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Sign in");
  });
  it("applies oone of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Sign in",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
