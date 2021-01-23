import React, { useState } from "react";
import {  useHistory } from "react-router-dom";

import { Container, FormSearch, ContainerTable, ContainerButton } from "./styles";

const BooksList = ({props}) => {
  console.log(props);
  const history = useHistory();


  const createBook = () => {
    history.push("/book-add");
  }

  return (
    <Container>
        <h1>Livros Cadastrados</h1>
        <ContainerButton>
          <div><button type="button" className="btn btn-primary" onClick={() => createBook()}>Cadastrar</button></div>
        </ContainerButton>

        <ContainerButton>
          <FormSearch>
            <input type="text" />
          </FormSearch>
        </ContainerButton>

        <ContainerTable>
          <table className="table table-bordered ">
            <thead className="thead-dark">
              <tr>
                <th>Header Row 1</th>
                <th>Header Row 2</th>
                <th>Header Row 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Header Row 1</th>
                <th>Header Row 2</th>
                <th>Header Row 3</th>
              </tr>
            </tbody>
          </table>
        </ContainerTable>
    </Container>
  );
}

export default BooksList;