import axios, { AxiosResponse } from "axios";

const http = axios.create({});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (err) => {
    const { data, status } = err.response;
    return Promise.reject({
      message: data.message,
      status,
    });
  }
);

export default http;
