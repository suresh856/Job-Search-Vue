import { mount } from "@vue/test-utils";
import TextInput from "@/components/shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("h");
    input.setValue("he");
    input.setValue("hel");
    input.setValue("hell");
    input.setValue("hello");
    // to get all events which are emitted on component
    // console.log(wrapper.emitted())
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["h"], ["he"], ["hel"], ["hell"], ["hello"]]);
  });
});
