import React, { useState } from "react";
import {  useHistory } from "react-router-dom";

// import Logo from "../../assets/airbnb-logo.svg";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Container, FormSearch, ContainerTable, ContainerButton } from "./styles";

const BooksAdd = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const createBook = () => {
    // history.push("/books/add");
  }

  return (
    <Container>
        <h1>Cadastrar Novo Livro</h1>
        <ContainerButton>
          <div><button type="button" className="btn btn-primary" onClick={() => createBook()}>Cadastrar</button></div>
        </ContainerButton>

        <ContainerButton>
          <FormSearch>
              <label>Titulo:</label>
              <input type="text" />
              
              <label>Titulo:</label>
              <textarea></textarea>
          </FormSearch>
        </ContainerButton>

    </Container>
  );
}

export default BooksAdd;