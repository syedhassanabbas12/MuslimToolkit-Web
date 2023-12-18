import { GENERAL_ACTIONS, QURAN_ACTIONS } from "../../constants/ActionConstants";
import { BASE_URL_KEY } from "../../constants/GenericConstants";
import { generalService } from "../../services/api/GeneralService";
import { request, success, failure } from "./index";

export function getChaptersList(key, url, model, baseUrl = BASE_URL_KEY.ADVANCE) {
    return function (dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(request(QURAN_ACTIONS.GET_CHAPTER_LIST_REQUEST, key));
        dispatch(success(GENERAL_ACTIONS.TOGGLE_LOADER, { loading: true }));
        generalService.getData(url, model, baseUrl).then(
          (data) => {
            dispatch(success(QURAN_ACTIONS.GET_CHAPTER_LIST_SUCCESS, { key, data }));
            dispatch(success(GENERAL_ACTIONS.TOGGLE_LOADER, { loading: false }));
            resolve(data);
          },
          (error) => {
            dispatch(success(GENERAL_ACTIONS.TOGGLE_LOADER, { loading: false }));
            dispatch(
              failure(QURAN_ACTIONS.GET_CHAPTER_LIST_FAILURE, {
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