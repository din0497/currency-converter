import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as currencyActions from "../../store/actions";

import { Delete, Input, Result, Select, Wrapper } from "../../styled/Styled";
import { BsTrash } from "react-icons/bs";

const Field = (props) => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.symbol);
  const request = useSelector((state) => state.currency.request);
  console.log(request);
  console.log(currency);
  const [base, setBase] = useState();
  const [rate, setRate] = useState();

  const [rateAmount, setRateAMount] = useState(1);

  useEffect(() => {
    dispatch(currencyActions.getCurrencySymbol());
  }, []);

  useEffect(() => {
    function updateState() {
      base && dispatch(currencyActions.requestCurrency(base));
    }
    updateState();
  }, [base, rate, dispatch]);

  const deleteFieldHandler = (id) => {
    props.delete(id);
  };

  const handleChange = (event) => {
    setRateAMount(Number(event.target.value));
  };

  const selectHandler = (e) => {
    if (props.isBase) {
      setBase(e.target.value);
    } else {
      setRate(e.target.value);
    }
  };
  useEffect(() => {}, [rateAmount, rate]);

  return (
    <Wrapper>
      <Select onChange={selectHandler}>
        <option value="none" selected disabled hidden>
          Enter
        </option>
        {currency?.map((curr, index) => (
          <option key={index} value={curr.currencySymbol}>
            {curr.currencySymbol}
          </option>
        ))}
      </Select>
      {!props.isBase && request?.rates && (
        <Result>
          {
             request?.rates[rate]}
        </Result>
      )}

      {props.ind > 0 && (
        <Delete onClick={deleteFieldHandler.bind(this, props.id)}>
          <BsTrash color={"red"} />
        </Delete>
      )}
      {props.isBase && (
        <Input
          value={rateAmount}
          type="number"
          placeholder="rate"
          onChange={(e) => handleChange(e)}
        />
      )}
    </Wrapper>
  );
};

export default Field;
