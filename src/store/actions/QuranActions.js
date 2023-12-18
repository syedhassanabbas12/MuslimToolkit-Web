import { QURAN_ACTIONS } from "../../constants/ActionConstants";
import { BASE_URL_KEY } from "../../constants/GenericConstants";
import { generalService } from "../../services/api/GeneralService";
import { request, success, failure } from "./index";

export function getChaptersList(key, url, model, baseUrl = BASE_URL_KEY.ADVANCE) {
    return function (dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(request(QURAN_ACTIONS.GET_CHAPTER_LIST_REQUEST, key));
        generalService.getData(url, model, baseUrl).then(
          (data) => {
            dispatch(success(QURAN_ACTIONS.GET_CHAPTER_LIST_SUCCESS, { key, data }));
            resolve(data);
          },
          (error) => {
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