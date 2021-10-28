import {
  SYMBOL,
  REQUEST
} from "./actionsTypes";
import { getMoney, convertMoney } from "../api/api";

export const getCurrencySymbol = () => {
  return async (dispatch, getState) => {
    console.log(dispatch);
    try {
      const response = await getMoney();
      if (!response.success) {
        throw new Error("Something went wrong");
      }
      const resData = await response.rates;
      let currencies = [];
      for (let amount in resData) {
        currencies.push({
          currencySymbol: amount,
          currencyAmount: resData[amount],
        });
      }
      dispatch({
        type: SYMBOL,
        symbol: currencies,
      });
    } catch (err) {
      console.log("IT is erehe", err);
      throw err;
    }
  };
};

export const requestCurrency = (base) => {
  return async (dispatch) => {
    try {
      if (base !== "EUR") {
        return alert("Please, select only EUR! You are currently on free plan.");
      }
      const response = await convertMoney(base);
      if (!response.success) {
        throw new Error("Something went wrong");
      }
      const resData = await response;
      dispatch({
        type: REQUEST,
        request: resData,
      });
    } catch (error) {
      console.log("Error occured", error);
    }
  };
};
