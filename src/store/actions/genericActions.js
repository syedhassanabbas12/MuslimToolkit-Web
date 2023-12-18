import { GENERAL_ACTIONS } from "../../constants/ActionConstants";
import { BASE_URL_KEY } from "../../constants/GenericConstants";
import { generalService } from "../../services/api/GeneralService";
import { request, success, failure } from "./index";

export function getListData(key, url, model, baseUrl = BASE_URL_KEY.ADVANCE) {
    return function (dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(request(GENERAL_ACTIONS.GET_LIST_REQUEST, key));
        generalService.getListData(url, model, baseUrl).then(
          (data) => {
            dispatch(success(GENERAL_ACTIONS.GET_LIST_SUCCESS, { key, data }));
            resolve(data);
          },
          (error) => {
            dispatch(
              failure(GENERAL_ACTIONS.GET_LIST_FAILURE, {
                key,
                error: error.toString(),
              })
            );
            reject(error.toString());
          }
        );
      });
    };
  }