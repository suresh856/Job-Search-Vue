import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import SpotLight from "@/components/jobSearch/SpotLight.vue";

describe("SpotLight", () => {
  it("provides img attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "test img",
          title: "some test title",
          description: "some test description",
        },
      ],
    });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("test img");
  });

  it("provides title attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "test img",
          title: "some test title",
          description: "some test description",
        },
      ],
    });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("some test title");
  });

  it("provides description attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "test img",
          title: "some test title",
          description: "some test description",
        },
      ],
    });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("some test description");
  });
});
