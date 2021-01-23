import styled from "styled-components";
import { BaseModalBackground } from "styled-react-modal";
import { Form } from "../../SignIn/styles";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;
export const ContainerButton = styled(Container)`
  display: unset;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerTable = styled(Container)`
  display: unset;
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;
export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FormSearch = styled(Form)`
  width: 400px;
  background: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 1em 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 6px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

export const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;