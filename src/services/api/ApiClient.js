import axios from "axios";
import { BASE_URL } from "../../config/environment";
// import StorageService from "../storageService/react";

export default class AccessToken {
  static token;
  static senseToken;
}
let defaultOptions;

export const apiClient = (contentType) => {
  // const baseUrl = AppEnvironment.config().baseURL;
  const baseUrl = BASE_URL;
  const token = AccessToken.token; // Set your access token here
  defaultOptions = {
    headers: {
      //Authorization: token ? `Bearer ${token || null}` : "",
      "Content-Type": contentType ? contentType : "application/json",
      "X-ApplicationIDHeader": 0,
    },
  };
  if (token) defaultOptions.headers["Authorization"] = `Bearer ${token}`;

  let defaultOptionsWithoutTimer = {
    ...defaultOptions,
  };

  // Request timeout
  defaultOptions = {
    ...defaultOptions,
    //timeout: 60000,
  };

  return {
    get: (url, options = {}, baseKey) =>
      axios.get(getUrl(baseUrl, url, baseKey), {
        ...defaultOptions,
        ...options,
      }),
    post: (url, data, options = {}, baseKey, showTimer = true) =>
      showTimer
        ? axios.post(getUrl(baseUrl, url, baseKey), data, {
            ...defaultOptions,
            ...options,
          })
        : axios.post(getUrl(baseUrl, url, baseKey), data, {
            ...defaultOptionsWithoutTimer,
            ...options,
          }),
    put: (url, data, options = {}, baseKey) =>
      axios.put(getUrl(baseUrl, url, baseKey), data, {
        ...defaultOptions,
        ...options,
      }),
    delete: (url, options = {}, baseKey, params) => {
      if (params?.length) defaultOptions.headers.ids = params;
      return axios.delete(getUrl(baseUrl, url, baseKey), {
        ...defaultOptions,
        ...options,
      });
    },
  };
};

const getUrl = (defaultBaseUrl, url, baseKey) => {
  let baseUrl = defaultBaseUrl;
  baseUrl = BASE_URL;
  return `${baseUrl}${url}`;
};
