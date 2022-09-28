import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>some title</h2>",
      },
    });
    expect(wrapper.text()).toMatch("some title");
  });
  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h2>some subtitle</h2>",
      },
    });
    expect(wrapper.text()).toMatch("some subtitle");
  });
});
