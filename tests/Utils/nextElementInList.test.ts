import nextElementInList from "@/Utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and returns the next element in list", () => {
    const list = ["A", "B", "C", "D"];
    const value = "D";
    const result = nextElementInList<string>(list, value);
    expect(result).toBe("A");
  });
});
