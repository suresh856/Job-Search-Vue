import state from "@/store/state";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
  it("stores degree listings", () => {
    const startingState = state();
    expect(startingState.degrees).toEqual([]);
  });
  it("stores organizations that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("stores job types that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });
  it("stores degreess that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedDegrees).toEqual([]);
  });
  it("stores user's search term for search and qalification", () => {
    const startingState = state();
    expect(startingState.skillsSearchTerm).toEqual("");
  });
});
