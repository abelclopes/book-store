import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookService from "../service/books.service";

import {
  Container,
  FormSearch,
  ContainerTable,
  ContainerButton,
} from "./styles";

const BooksList = ({ props }) => {
  const [listBooks, setListBooks] = useState('');
  const [listBooksResponse, setListBooksResponse] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(1);

  console.log(props);
  const history = useHistory();

  const getBooks = () => {    
    BookService.GetAllBooksService(pageNumber, pageSize, searchValue)
      .then((res) => {
        setListBooks(res.result);
        setListBooksResponse(res.result.resultado);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);


  const filter = (e) => {
    e.preventDefault()
    getBooks()

  };
  const createBook = () => {
    history.push("/book-add");
  };

  const RenderListBooks = () => {
    console.log(listBooksResponse.length);
    if (listBooksResponse.length > 0) {
      return listBooksResponse.map((book, index) => {
        return (
          <tr key={index}>
            <th>{book.title}</th>
            <th>{book.year}</th>
            <th>{book.author}</th>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <th colSpan="3">Nenhum Resultado Encontrado</th>
        </tr>
      );
    }
  };

  return (
    <Container>
      <h1>Livros Cadastrados</h1>
      <ContainerButton>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => createBook()}
          >
            Cadastrar novo livro
          </button>
        </div>
      </ContainerButton>

      <ContainerButton>
        <FormSearch onSubmit={e => { e.preventDefault(); }}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={filter}
          >
            Pesquisar
          </button>
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
          <tbody>{RenderListBooks()}</tbody>
        </table>
      </ContainerTable>
    </Container>
  );
};

export default BooksList;
