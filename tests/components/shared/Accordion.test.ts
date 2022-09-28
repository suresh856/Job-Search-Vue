import { mount } from "@vue/test-utils";
import Accordion from "@/components/shared/Accordion.vue";

describe("Accordion", () => {
  it("renders child", async () => {
    const wrapper = mount(Accordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        default: "<h1>Testing child</h1>",
      },
    });
    expect(wrapper.text()).not.toMatch("Testing Child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("Testing child");
  });
  describe("When we do not provide custom child content", () => {
    it("renders default content", async () => {
      const wrapper = mount(Accordion, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        props: {
          header: "Test Header",
        },
      });
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch(
        "this is fallback content. This is only used when parent does not provide any slot content."
      );
    });
  });
});
