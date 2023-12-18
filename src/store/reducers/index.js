import { combineReducers } from "redux";
import general from "./genericReducer";
import quran from "./QuranReducer";

const rootReducer = combineReducers({
  quran: quran,
  general: general,
});

export default rootReducer;
