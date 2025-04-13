import * as githubCore from "@actions/core";
import axios from "axios";

const baseURL = githubCore.getInput("yunext-backend-baseurl");
const pat = githubCore.getInput("yunext-pat");

const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${pat}`,
  },
});

export default apiClient;
