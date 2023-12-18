import { combineReducers } from "redux";
import general from "./generalReducer";
import quran from "./QuranReducer";

const rootReducer = combineReducers({
  quran: quran,
  general: general,
});

export default rootReducer;
