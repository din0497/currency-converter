import {
  SYMBOL,
  REQUEST,
} from "./actionsTypes";

const initialState = {
  symbol: [{currencySymbol: 'AED', currencyAmount: 4.261333}],
  request: [{rates:{AED: 4.261333}}],
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
