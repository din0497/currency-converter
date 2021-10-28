import {
  SYMBOL,
  REQUEST,
} from "./actionsTypes";

const initialState = {
  symbol: [],
  request: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SYMBOL:
      return {
        ...state,
        symbol: action.symbol,
      };
    case REQUEST:
      return {
        ...state,
        request: action.request,
      };
    default:
      return state;
  }
};
export default reducers;
