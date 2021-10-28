import { get } from "./http";

export const getMoney = () => {
  return get("latest?access_key=cdec1e1f6697ed62693b505915adcf7d");
};

export const convertMoney = (base) => {
  return get(
    `latest?access_key=cdec1e1f6697ed62693b505915adcf7d&base=${base}`
  );
};
