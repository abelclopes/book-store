import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookService from "../service/books.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPenAlt,
  faSearch,
  faBookDead,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  FormSearch,
  ContainerTable,
  ContainerButton,
} from "./styles";
import styled from "styled-components";
import ButtonStyled from "../../../components/button";
import { ContainerBookDetail } from "../../../components/DatailsBook/styles";
import { Alert } from "reactstrap";

const BooksList = ({ props }) => {
  const history = useHistory();
  const [listBooksResponse, setListBooksResponse] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getBooks = () => {
    BookService.GetAllBooksService(pageNumber, pageSize, searchValue)
      .then((res) => {
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
    e.preventDefault();
    getBooks();
  };
  const createBook = () => {
    history.push("/book-add");
  };

  const lookDetails = (id) => {
    history.push(`/book-details/${id}`);
  };

  const EditBook = (id) => {
    history.push(`/book-edit/${id}`);
  };
  const DisableBook = (id) => {
    setShowAlert(false);
    BookService.DeleteBook(id).then((res) => {
      let books = listBooksResponse;
      books = books.filter(x=> x.id !== id);
      setListBooksResponse(books);
      setShowAlert(res.success);
    });
  };

  

  const showStatus = (status = false) => {
    if(status){
      return (
        <span style={{color:'red'}}><FontAwesomeIcon icon={faBookDead} /> Locado</span>
      )
    }  
    return (
      <span style={{color:'green'}}><FontAwesomeIcon icon={faBookOpen} /> Disponivel</span>
    )
  }

  const RenderListBooks = () => {
    console.log(listBooksResponse.length);
    if (listBooksResponse.length > 0) {
      return listBooksResponse.map((book, index) => {
        return (
          <tr key={index}>
            <th>{book.title}</th>
            <th>{book.year}</th>
            <th>{book.author}</th>
            <th>{showStatus(book.rented)}</th>
            <th>{book.publishingCompany}</th>
            <th>
              <ButtonTable
                onClick={() => lookDetails(book.id)}
                style={{ width: 1.5 + "em", border: "unset" }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ margin: "5px 10px" }}
                />
              </ButtonTable>
              <ButtonTable 
                 onClick={() => EditBook(book.id)}
                style={{ width: 1.5 + "em", border: "unset" }}>
                <FontAwesomeIcon
                  icon={faPenAlt}
                  style={{ margin: "5px 10px" }}
                />
              </ButtonTable>
              <ButtonTable 
                onClick={() => DisableBook(book.id)}
                style={{ width: 1.5 + "em", border: "unset" }}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ margin: "5px 10px" }}
                />
              </ButtonTable>
            </th>
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
      <ContainerBookDetail>
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
          <FormSearch
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button type="button" className="btn btn-primary" onClick={filter}>
              Pesquisar
            </button>
          </FormSearch>
        </ContainerButton>
      </ContainerBookDetail>

      <ContainerBookDetail>
        <h4>Livos</h4>
        <ContainerAlert show={()=> showAlert}>
          <Alert color="primary">
            Livro desabilitado com sucesso!
          </Alert>
        </ContainerAlert>
        <ContainerTable>
          <table className="table table-striped table-hover">
            <thead className="thead-dark ">
              <tr>
                <th>Titulo</th>
                <th>Ano</th>
                <th>Autor</th>
                <th>Status</th>
                <th>Editora</th>
                <th style={{ width: 150 + "px" }}>Ações</th>
              </tr>
            </thead>
            <tbody>{RenderListBooks()}</tbody>
          </table>
        </ContainerTable>
      </ContainerBookDetail>
    </Container>
  );
};
const ContainerAlert = styled.div`
  display: ${({ show }) =>{
    return (show === true ? 'block': 'none' )}
  }; 
`;
const ButtonTable = styled(ButtonStyled)`
  box-sizing: border-box;
  display: flex;
  height: 0px;
  padding: 0px;
  margin: 25px;
  display: contents;
`;

export default BooksList;
