import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  });
  it("displays company name", () => {
    // mount method Mounts main component and it's all child components as well and it mounts child components child as well
    // so we can use shallowMount   when we want to test just parent component. it stubs out all child components

    // as second argument to mount we can pass configuration object. which contains all configuration
    // required in vue component

    //We can use setData method on wrapper to set value of data in our component.It's async method
    // below code will change vslue of company in out component
    //  await wrapper.setData({
    //       company: "super test"
    // });
    expect(wrapper.text()).toMatch("Suresh Careers");
  });
  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    ); // to serach an element with attribute use []
    const navigationMenuTexts = navigationMenuItems.map((item) => {
      return item.text();
    });
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Suresh Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      // const wrapper = shallowMount(MainNav);
      //second argument, {
      //   data() {
      //     return {
      //       isLoggedIn: false,
      //     };
      //   },
      // });
      //One way to get component
      // const loginButton = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      const loginButton = wrapper.find("[data-test='login-botton']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      // const wrapper = shallowMount(MainNav);
      // const loginButton = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-botton']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnavigation menu with additional information", async () => {
      // const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-botton']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
