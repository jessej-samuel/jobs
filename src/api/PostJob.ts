import axios from "axios";

const jobsApi = axios.create({
  baseURL: "https://641311f53b710647375e5988.mockapi.io/jobs/v1/",
});

export default jobsApi;
