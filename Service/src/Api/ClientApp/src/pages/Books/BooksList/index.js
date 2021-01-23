import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import BookService from "../service/books.service";

import { Container, FormSearch, ContainerTable, ContainerButton } from "./styles";

const BooksList = ({props}) => {
  const [listBooks , setListBooks] = useState([]);
  const [fistLoad , setFistLoad] = useState(true);
  console.log(props);
  const history = useHistory();

  const getBooks = () => {
    BookService.GetAllBooksService()
    .then(res => {
      setListBooks(res.result);
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  useEffect(()=>{ 
    if(fistLoad){
      setFistLoad(false);
      getBooks();
    }
  });

  const createBook = () => {
    history.push("/book-add");
  }

  const RenderListBooks = (books) => {
    console.log(listBooks.resultado);
    if(listBooks.resultado){
      return listBooks.resultado.map((book, index)=>{
        return (
          <tr key={index}>
            <th>{book.title}</th>
            <th>{book.year}</th>
            <th>{book.author}</th>
          </tr>
        );
      })
    }else{
      return (
        <tr>
          <th colSpan="3">Nenhum Resultado Encontrado</th>
        </tr>
      );
    }
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
                <th>Titulo</th>
                <th>Ano</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
                {RenderListBooks()}
            </tbody>
          </table>
        </ContainerTable>
    </Container>
  );
}

export default BooksList;