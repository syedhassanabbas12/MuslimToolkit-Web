import { QURAN_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  error: false,
  chapterList: [],
};

export default function quran(state = initialState, action) {
  switch (action.type) {
    case QURAN_ACTIONS.GET_CHAPTER_LIST_REQUEST:
      return { ...state };
    case QURAN_ACTIONS.GET_CHAPTER_LIST_SUCCESS:
      const { key, data } = action?.payload;
      return { ...state, [key]: data?.chapters };
    case QURAN_ACTIONS.GET_CHAPTER_LIST_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
}
