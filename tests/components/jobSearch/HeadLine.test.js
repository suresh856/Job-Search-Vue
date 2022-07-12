import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import HeadLine from "@/components/jobSearch/HeadLine.vue";

describe("HeadLine", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy"); // to  mock out timer function in test
  });
  afterEach(() => {
    jest.useRealTimers(); // to restore to old timer functions(implementations) of JS
  });
  it("displays introductory action verb", () => {
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("changes action verb ataconsistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
  });
  it("swaps action verb after first interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers(); // to run timers which we have mocked out using useFakeTimers
    await nextTick(); // to go to next step in DOM. without this vue internals will update but DOM will not update
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
  it("removes interval when component disappears", () => {
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
