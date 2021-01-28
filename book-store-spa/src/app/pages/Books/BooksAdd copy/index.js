import React, { useState, useEffect } from "react";
import {   useParams } from "react-router-dom";
import styled from "styled-components";
import BookService from "../service/books.service";
import bookDefaul from '../../../../assets/svg/book.svg';

import { Container, 
  ContainerBookDetail, 
  Span, 
  BookLine,
  Strong,
  BookLineColLeft,
  BookLineColRigth
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward
} from "@fortawesome/free-solid-svg-icons";
import ButtonStyled from "../../../components/button";

const BooksDetails = ({...props}) => {
  const {id} = useParams();

  const [bookDetail, setBookDetail] = useState({});

  useEffect(() => {
    const getCategories = () =>{
      BookService.GetBookByIdService(id)
      .then(res =>{
        setBookDetail(res.result)
      })
    }
    getCategories()
    
  }, [id])

  return (
    <Container>
      <ContainerBookDetail>
        <ButtonTable ><FontAwesomeIcon icon={faBackward}/> Voltar</ButtonTable>
      </ContainerBookDetail>
      <ContainerBookDetail>
        <BookLine>
        <BookLineColLeft>
          <img src={bookDefaul} style={{width:"80%"}}/>
        </BookLineColLeft>
        <BookLineColRigth>
          <Span><Strong>Titulo:</Strong> {bookDetail.title}</Span>
          <Span><Strong>Ano de publicação:</Strong> {bookDetail.year}</Span>
          <Span><Strong>Autor:</Strong> {bookDetail.author}</Span>
          <Span><Strong>Descrição:</Strong> {bookDetail.description? bookDetail.description: 'Nunhuma descrição foi informada'}</Span>
        </BookLineColRigth>
        </BookLine>
      </ContainerBookDetail>
    </Container>
  );
}
const ButtonTable = styled(ButtonStyled)`
  box-sizing: border-box;
  display: flex;
  height: 0px;
  padding: 0px;
  margin: 25px;
  display: contents;
`;

export default BooksDetails;