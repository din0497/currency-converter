import { get } from "./http";

export const getMoney = () => {
  return get("latest?access_key=12116feb6a2d2ec99e5000b96793fdcd");
};

export const convertMoney = (base) => {
  return get(
    `latest?access_key=12116feb6a2d2ec99e5000b96793fdcd&base=${base}`
  );
};
