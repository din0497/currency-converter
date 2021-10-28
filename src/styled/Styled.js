import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 1px;
  padding: 19.2px 0 19.2px 19.2px;
  border: solid 2px #17a2b8;
  box-shadow: 1px 1px 5px #17a2b8;
  border-radius: 10px;
  margin: 0.2vw;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 120px;
  border: none;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;

export const FromField = styled.div`
  display: flex;
`;

export const ToField = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

export const Icon = styled.span`
  cursor: pointer;
`;
export const Delete = styled.span`
  cursor: pointer;
  right: 10px;
  position: absolute;
`;

export const Input = styled.input`
  width: 60px;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 17px;
  }
`;

export const Result = styled.span`
margin-right: 5px; 
`

// http://data.fixer.io/api/latest?access_key=8284e44a96c37efd88f1e34af4555bb3&base=USD
