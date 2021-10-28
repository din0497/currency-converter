import React from "react";
import Fields from "./components/Fields/Fields";
import { useState } from "react";
import FromTo from "./components/FromTo";
import { AiFillPlusCircle } from "react-icons/ai";
import { Icon } from "./styled/Styled";

const App = () => {
  const [vertical, setVertical] = useState([{ base: "vertical" }]);
  const isBase = true;

  const addBaseHandler = () => {
    setVertical((prev) => [...prev, { base: "vertical" }]);
  };
  return (
    <div>
      <FromTo />
      {vertical.map((v, index) => (
        <Fields key={index} id={index} base={vertical.base} isBase={isBase} />
      ))}
      <Icon onClick={addBaseHandler}>
        <AiFillPlusCircle color={"#37ed55"} size={"35px"} />
      </Icon>
    </div>
  );
};

export default App;
