import React from "react";
import bookDefaul from "../../../assets/svg/book.svg";
import {  faBookDead, faBookOpen } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Span,
    BookLine,
    Strong,
    BookLineColLeft,
    Booktitle,
    BookLineColRigth,
    BookHead,
    BookDescription,
    BookSubTitleAuthors,
    ContainerBookDetail,
    ButtonBookActionRent,
  } from "./styles";
  

const DatailsBook = ({ bookDetail = {}, disableButton, ...props }) => {

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
  return (
    <>
      <ContainerBookDetail>
        <BookLine>
          <BookLineColLeft>
            <img src={bookDefaul} style={{ width: "80%" }} />
          </BookLineColLeft>
          <BookLineColRigth>
            <BookHead>
              <Booktitle>{bookDetail.title}</Booktitle>
              <Span>
                <BookSubTitleAuthors>{bookDetail.author}</BookSubTitleAuthors>
                <BookSubTitleAuthors>, Ano {bookDetail.year}</BookSubTitleAuthors>
                </Span>
                <Span>
                {showStatus(bookDetail.rented)}
              </Span>
            </BookHead>
            <BookDescription>
              <Span>
                <Strong>Descrição:</Strong>{" "}
                {bookDetail.description
                  ? bookDetail.description
                  : "Nunhuma descrição foi informada"}
              </Span>
            </BookDescription>
          </BookLineColRigth>
        </BookLine>
        {props.children}
       
      </ContainerBookDetail>
    </>
  );
};


export default DatailsBook;
