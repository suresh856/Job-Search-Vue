import state from "@/store/state";
describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
  it("stores organizations that user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });
  it("stores job types that user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });
});
