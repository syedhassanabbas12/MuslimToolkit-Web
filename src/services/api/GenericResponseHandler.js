import axios from "axios";
// import StorageService from "../storageService";
// import NavigationService from "../navigationService";
// import AccessToken, { AppEnvironment } from "./ApiClient";
// import { API_CONSTANTS } from "../../constants/UrlConstants";
// import { clearLocalStorageItems } from "../../store/actions/UserActions";
import { ERROR_TYPE_MSG } from "../../constants/GenericConstants";

/**
 * Response interceptor
 */
axios.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    try {
      if (
        error?.response?.status === 401 &&
        originalRequest.url.includes("authenticate")
      ) {
        return Promise.reject(error);
      } else if (error?.response?.status === 401 && !originalRequest._retry) {
        // clearLocalStorageItems();
        // originalRequest._retry = true;
        // const headers = { token: AccessToken.token };
        // const res = await axios.get(
        //   `${AppEnvironment.config().baseURL}${
        //     API_CONSTANTS.API_ROUTES.REFRESH_TOKEN
        //   }`,
        //   { headers }
        // );
        // if (res && res.status === 200) {
        //   // StorageService.instance.setAccessToken(res.data.result.accessToken);
        //   AccessToken.token = res.data.result.accessToken;
        //   originalRequest.headers[
        //     "Authorization"
        //   ] = `Bearer ${res.data.result.accessToken}`;
        //   return axios(originalRequest);
        // }
        // return Promise.reject(error);
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export function handleResponse(response) {
  if (
    response.data.responseCode === 200 ||
    response.data.httpResponseCode === 200 ||
    response.status === 200 || //need to remove this, for testing only
    response.data.status === 200
  ) {
    //for new Apis
    return response.data;
  } else {
    handleError(response);
  }
}

export function handleError(error) {
  let errorMessage = "";
  if (
    error.status === 401 ||
    (!!error.response && error.response.status === 401)
  ) {
    if (!error.config.url.includes("authenticate")) {
      // NavigationService.instance.redirectToLogin();
      errorMessage = "Un Authorized";
    }
  }
  if (!!error.response && error.response.data) {
    errorMessage = error.response.data.message || "";
  }

  throw errorMessage;
}

export function vytelleHandleError(error) {
  let errorMessage = "";
  if (
    error.status === 401 ||
    (!!error.response && error.response.status === 401)
  ) {
    if (!error.config.url.includes("authenticate")) {
      // NavigationService.instance.redirectToLogin();
      errorMessage = "Un Authorized";
    }
  }

  if (!!error?.response && error?.response?.status === 412) {
    errorMessage = ERROR_TYPE_MSG.PRE_CONDITION;
  } else if (!!error.response && error.response.data) {
    let errors = error?.response?.data?.errors;
    if (Array.isArray(errors)) {
      errorMessage = errors?.map((err) => errorHelper(err)) || "";
    } else if (typeof error === "object") {
      errorMessage = Object.keys(errors || {})?.map((key) => {
        return errors?.[key] || "";
      });
    }
  }

  throw errorMessage;
}

export function handleErr(error) {
  throw error;
}

export function errorHelper(error) {
  if (error?.includes(":")) {
    let result = error.split(":");
    return result[1];
  } else {
    return error;
  }
}
