import styled from "styled-components";
import { Form } from "../../Auth/SignIn/styles";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormItem= styled(Container)`
  width: 100%;
  flex-direction: column;
  button {
    color: #fff;
    font-size: 16px;
    background: #0069d9 !important;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  button:hover {background: #007bff !important;}
`;
export const ContainerFormCenter = styled(Container)`
  display: unset;
  width: 100%;
  margin: 20px auto;
  justify-content: center  !important;
  display: -webkit-inline-box !important;
  display: flex;
  flex-wrap: wrap;
`;
export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FormItemTextArea = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 92px
  background: transparent;
  margin-bottom: 50px !important;
  display: block;
  flex-direction: column;
  align-items: center;
  label{
    font-weight: bold;
  }
`;
export const FormAddBook = styled(Form)`
  width: 100%;
  max-width: 500px;
  min-height: 92px
  background: transparent;
  padding: 20px;
  display: flex;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  label{
    font-weight: bold;
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
    border: 1px solid #d4b7b7;
    border-radius: 6px;
    &::placeholder {
      color: #999;
    }
  }
  select {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    background: #fff;
    padding: 1em 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #d4b7b7;
    border-radius: 6px;
    &::placeholder {
      color: #999;
    }
  }
  input:focus {
    border: 1px solid #777;
  }
  label: {
    text-align: left;
  }
  textarea {
    flex: 1;
    min-height: 92px
    margin-bottom: 15px;
    padding: 1em 15px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #d4b7b7;
    border-radius: 6px;
    &::placeholder {
      color: #999;
    }
  }
  textarea:focus {
    border: 1px solid #777;
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    font-weight: bold;
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

