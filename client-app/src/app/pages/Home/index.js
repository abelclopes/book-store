import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import {
  BookLine,
  ButtonBookActionRent,
  Container,
  ContainerBookDetail,
} from "../../components/DatailsBook/styles";
import BookService from "../Books/service/books.service";
import DatailsBook from "../../components/DatailsBook";
import { ContainerButton, FormSearch } from "../Books/BooksList/styles";
import Checkbox from "../../components/Checkbox";
import styled from "styled-components";
import Switch from "../../components/Switch";

const Home = ({ ...props }) => {
  const history = useHistory();
  const [listBooksResponse, setListBooksResponse] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [checked, setChecked] = useState(false);

  const getBooks = () => {
    BookService.GetBookNotRentedByIdService(checked)
      .then((res) => {
        setListBooksResponse(res.result.resultado);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getBooks();
  }, [checked]);

  const filter = (e) => {
    e.preventDefault();
    getBooks();
  };

  const lookDetails = (id) => {
    history.push(`/book-details/${id}`);
  };
  const returnBook = (id) => {
    history.push(`/return-book/${id}`);
  };
  const RenderListBooks = () => {
    console.log(listBooksResponse.length);
    if (listBooksResponse.length > 0) {
      return listBooksResponse.map((book, index) => {
        return (
          <DatailsBook
            key={index}
            history={history}
            bookDetail={book}
            disableButton={false}
            BookRent={() => {}}
          >
            <BookLine>
              <ButtonBookActionRent>
                <button
                  // disabled={book.rent}
                  onClick={() => {
                    if(book.rented){
                      returnBook(book.id);
                    }else{
                      lookDetails(book.id);
                    }
                      
                  }}
                >
                  <FontAwesomeIcon icon={faBook} />
                  <span> {book.rented? 'Devolver o livro' : 'Ver Detalhes'}</span>
                </button>
              </ButtonBookActionRent>
            </BookLine>
          </DatailsBook>
        );
      });
    }
  };
  const handleCheckboxChange = (e) => {
    setChecked(!checked);
  };

  return (
    <Container>
      <ContainerBookDetail>
        <h1>Livros Cadastrados</h1>
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
                setChecked(!checked);
              }}
            />
            <button type="button" className="btn btn-primary" onClick={filter}>
              Pesquisar
            </button>            
          </FormSearch>
          <CheckboxContainer checked={checked} >
              <label htmlFor="renteds">Filtar somente locados</label>
              <Switch
                isOn={checked}
                onColor="#EF476F"
                handleToggle={(e) => handleCheckboxChange(e)}
              />
          </CheckboxContainer>
        </ContainerButton>
      </ContainerBookDetail>
      {RenderListBooks()}
    </Container>
  );
};

export const CheckboxContainer = styled.div`
  width: 400px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  label{
    margin-left: 15px;
    color: #0069af;
  }
`;
export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;
export const Text = styled.label``;

export default Home;
