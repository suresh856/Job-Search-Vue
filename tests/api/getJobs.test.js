import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";
import { flushPromises } from "@vue/test-utils";

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [{ id: 1, title: "Java engineer" }] }); // to mock get reesponse
  });
  it("fetches jobs that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytestapi.com/jobs");
  });
  it("extracts jobs from response", async () => {
    const data = await getJobs();
    flushPromises();
    expect(data).toEqual([{ id: 1, title: "Java engineer" }]);
  });
});
