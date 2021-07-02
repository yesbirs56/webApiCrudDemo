import axios from "axios";

const key = "basicAuth";
const instance = axios.create({
  baseURL: "https://localhost:44392/api",
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(key);
    if (token) {
      config.headers["Authorization"] = `BasicAuth ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
