import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";
import { createJob } from "../../store/utils";
import { Job } from "@/api/types";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    ...jobProps,
  });
  const createConfig = (jobProps: Job) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        FontAwesomeIcon: true,
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const jobProps = createJob({ title: "Vue Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer");
  });
  it("renders organization", () => {
    const jobProps = createJob({ organization: "test" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("test");
  });
  // write test for location, qualifications also
  it("links to individual jobs page", () => {
    const jobProps = createJob({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    expect(jobPageLink.props("to")).toBe("/jobs/results/15");
  });
});
