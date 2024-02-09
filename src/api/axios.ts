import axios, { AxiosError } from "axios";
const baseURL = "https://fakestoreapi.com";
export const tokenName = "pr-token";

export const Axios = axios.create({
  baseURL,
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(tokenName);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.log("Request Error : ", error);
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Request made and server responded
      switch (error.response.status) {
        case 400:
          console.log("Bad Request");
          break;
        case 401:
          unAuthorize();
          window.location.href = "/login";
          break;
        case 403:
          console.log("Forbidden");
          break;
        case 404:
          console.log("Not Found");
          break;
        case 500:
          console.log("Internal Server Error");
          break;
        case 502:
          console.log("Bad Gateway");
          break;
        case 503:
          console.log("Service Unavailable");
          break;
        case 504:
          console.log("Gateway Timeout");
          break;
        default:
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Error Request : ", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error Message : ", error.message);
    }
    return Promise.reject(error);
  }
);

export const authorize = (token: string) => {
  return new Promise((resolve, reject) => {
    if (token) {
      localStorage.setItem(tokenName, token);
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return resolve(true);
    }
    reject(false);
  });
};
export const unAuthorize = () => {
  localStorage.removeItem(tokenName);
  delete Axios.defaults.headers.common["Authorization"];
  window.location.href = "/login";
};
