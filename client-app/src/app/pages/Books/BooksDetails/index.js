import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import BookService from "../service/books.service";
import moment from "moment";

import { faBackward, faBook } from "@fortawesome/free-solid-svg-icons";
import UserService from "./../../Auth/SignUp/service/signUp.service";
import { Container } from "./styles";
import {
  BookLine,
  ButtonBackWard,
  ButtonBookActionRent,
  ContainerBookDetail,
  Span,
} from "../../../components/DatailsBook/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatailsBook from "../../../components/DatailsBook";
import styled from "styled-components";

const BooksDetails = ({ props }) => {
  const history = useHistory();
  const { id } = useParams();

  const [bookDetail, setBookDetail] = useState({});

  const [user, setUser] = useState({ userId: "" });
  const [disableButton, setDisableButton] = useState(false);
  const [showMesssage, setShowMesssage] = useState(false);
  const [msssage, setMesssage] = useState([]);

  useEffect(() => {
    const getBook = () => {
      BookService.GetBookByIdService(id).then((res) => {
        setBookDetail(res.result);
        setDisableButton(res.result.rented);
      });
    };
    getBook();

    const getUserInfo = () => {
      UserService.getUserInfo().then((res) => {
        setUser(res.id);
      });
    };
    getUserInfo();
  }, [id]);

  const rentBookService = (rent) => {
    BookService.rentBookService(rent).then((res) => {
      setUser(res.id);
      setDisableButton(res.result);
    }).catch(error => {
      setShowMesssage(error.response.data.success === false);
      setMesssage(error.response.data.errors);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
  };
  const BookRent = (e) => {
    e.preventDefault();

    rentBookService({
      bookId: bookDetail.id,
      userId: user,
      dithdrawaldate: moment().toDate(),
      returndate: moment(new Date()).add("days", 5).toDate(),
      term: 5,
    });
  };

  const showMessagesResponse = () => {
      if(msssage.length > 0){
        return msssage.map(item => <Span>{item.message}</Span>)
      }
  }

  return (
    <Container>
      <ContainerBookDetail>
        <ButtonBackWard>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            <FontAwesomeIcon icon={faBackward} /> Voltar
          </button>
        </ButtonBackWard>
      </ContainerBookDetail>
      <DatailsBook
        history={history}
        bookDetail={bookDetail}
        disableButton={disableButton}
        BookRent={BookRent}
      >
        <BookLine>
          <ButtonBookActionRent>
            <button disabled={disableButton} onClick={BookRent}>
              <FontAwesomeIcon icon={faBook} />
              <span> Alugar</span>
            </button>
          </ButtonBookActionRent>
        </BookLine>
        <MessageSuccessOrError hadError={msssage.length > 0 }  hasSuccess={showMesssage}>
              {msssage.length > 0 ? showMessagesResponse(): "Livro locado com sucesso!" }
      </MessageSuccessOrError>
      </DatailsBook>
    </Container>
  );
};

export default BooksDetails;


const MessageSuccessOrError = styled.div`
  background:  ${({ hadError }) =>{
    return (hadError ? '#ff3333' : '#81c189')}
  }; 
  min-height: 20px;
  display: block;
  width: 100%;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: ${({ hasSuccess }) =>{
    return (hasSuccess ? 'block': 'none' )}
  }; 
`;
