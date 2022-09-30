import axios from "axios";
jest.mock("axios");

import getDegrees from "@/api/getDegrees";
import { flushPromises } from "@vue/test-utils";
const axiosGetMock = axios.get as jest.Mock;
describe("getDegrees", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ id: 1, degree: "Master's" }],
    }); // to mock get reesponse
  });
  it("fetches degrees that candidates can use in drop down", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith("http://mytestapi.com/degrees");
  });
  it("extracts degree from response", async () => {
    const data = await getDegrees();
    flushPromises();
    expect(data).toEqual([{ id: 1, degree: "Master's" }]);
  });
});
