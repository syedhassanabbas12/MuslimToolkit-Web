import {
    handleResponse,
    vytelleHandleError,
    handleErr,
  } from "./GenericResponseHandler";
  import { apiClient } from "./ApiClient";
  import { BASE_URL_KEY } from "../../constants/GenericConstants";
  
  export const generalService = {
    getListData,
    getData,
    postData,
    updateData,
    deleteData,
    putData,
    downloadReport,
    downloadReportPost,
  };
  
  function getListData(url, model = {}, baseUrl = BASE_URL_KEY.ADVANCE) {
    return apiClient()
      .post(url, model, {}, baseUrl)
      .then(handleResponse)
      .catch(vytelleHandleError);
  }
  
  
  function getData(url, options = {}, baseUrl = BASE_URL_KEY.ADVANCE) {
    return apiClient()
      .get(url, options, baseUrl)
      .then(handleResponse)
      .catch(handleErr);
  }
  
  function downloadReport(url, baseUrl = BASE_URL_KEY.ADVANCE) {
    let options = { responseType: "blob" };
    return apiClient()
      .get(url, options, baseUrl)
      .then()
      .catch(handleErr);
  }
  
  function downloadReportPost(url, params, baseUrl = BASE_URL_KEY.ADVANCE, showTimer= true) {
    let options = { responseType: "blob" };
    return apiClient()
      .post(url, params, options, baseUrl, showTimer)
      .then()
      .catch(vytelleHandleError);
  }
  
  function postData(url, params, baseUrl = BASE_URL_KEY.ADVANCE, showTimer) {
    return apiClient()
      .post(url, params, {}, baseUrl, showTimer)
      .then(handleResponse)
      .catch(vytelleHandleError);
    // .catch((e) => {
    //   throw e;
    // });
  }
  
  function updateData(url, params, baseUrl = BASE_URL_KEY.ADVANCE) {
    return apiClient()
      .put(url, params, {}, baseUrl)
      .then(handleResponse)
      .catch(vytelleHandleError);
  }
  
  function deleteData(url, params = {}, baseUrl = BASE_URL_KEY.ADVANCE) {
    return apiClient()
      .delete(url, {}, baseUrl, params)
      .then(handleResponse)
      .catch(vytelleHandleError);
  }
  function putData(url, params, baseUrl = BASE_URL_KEY.ADVANCE) {
    return apiClient()
      .put(url, params, {}, baseUrl)
      .then(handleResponse)
      .catch(vytelleHandleError);
    // .catch((e) => {
    //   throw e;
    // });
  }
  