import { GENERAL_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  isLoading: false,
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case GENERAL_ACTIONS.TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
}
