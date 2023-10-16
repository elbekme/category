import axios from "axios";

const request = axios.create({
  baseURL: "https://652d754bf9afa8ef4b27786f.mockapi.io/",
  timeout: 10000,
});

export default request;
