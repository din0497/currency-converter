import Field from "./Field";
import { Container, FromField, ToField } from "../../styled/Styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { Icon } from "../../styled/Styled";

const Fields = (props) => {
 

  const [horizontal, setHorizontal] = useState([{id: Date.now() }]);
  console.log(horizontal);

  const deleteFieldHandler = (i) => {
    const copied = [...horizontal];
    const filtered = copied.filter((copy) => copy.id !== i);
    console.log(copied);
    setHorizontal(filtered);
  };
  const clickHandler = () => {
    setHorizontal((prev) => [...prev, { id: Date.now() }]);
  };
  return (
    <div>
      <Container>
        <FromField>
          <Field
            base={props.base}
            isBase={props.isBase}
          />
        </FromField>
        <h1>=</h1>
        <ToField>
          {horizontal.map((field, index) => (
            <Field
              key={index}
              ind={index}
              id={field.id}
              delete={deleteFieldHandler}
            />
          ))}
        </ToField>
        <Icon onClick={clickHandler}>
          <AiFillPlusCircle color={"#37ed55"} size={"35px"} />
        </Icon>
      </Container>
    </div>
  );
};

export default Fields;
