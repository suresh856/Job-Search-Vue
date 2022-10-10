import axios from "axios";
import { Job } from "@/api/types";
const getJobById = async (id: number) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<Job>(`${baseUrl}/jobs/${id}`);
  return response.data;
};

export default getJobById;
