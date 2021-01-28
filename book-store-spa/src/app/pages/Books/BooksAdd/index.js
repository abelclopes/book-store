import React, { useState, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import BookService from "../service/books.service";
import styled from "styled-components";

import { Container, FormAddBook,  ContainerFormCenter, FormItemTextArea, FormItem } from "./styles";

const BooksAdd = () => {
  const history = useHistory();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showMessageSuccess, setShowMessageSuccess] = useState(false);
  const [errorOnSave, setErrorOnSave] = useState(false);
  const [categories, setCategories] = useState('');
  const [book, setBook] = useState({title:'',description:'',year:'',publishingCompany:'',author:'',categoryId:''});

  

  const saveBook = () =>{
    BookService.CreatedBook(book)
    .then(res =>{
      if(res.success){
        setShowMessageSuccess(true)
        setTimeout(() => {          
          setShowMessageSuccess(false)
          history.push('/books')
        }, 5000);
      }
    })
    .catch(err => {
      setErrorOnSave(true)
      setShowMessageSuccess(true)

      setTimeout(() => {          
        setErrorOnSave(false)
        setShowMessageSuccess(false)
        history.push('/books')
      }, 5000);
    })

  }
  
  useEffect(() => {
    const getCategories = () =>{
      BookService.GetCategories()
      .then(res =>{
        setCategories(res)
      })
    }
    getCategories()
    
  }, [])

  useEffect(() => {
    const bookIsValid = () =>{
      if(book.title !== '' && book.description !== '' && book.year !== '' &&
        book.publishingCompany !== '' && book.author !== '' && book.categoryId !== ''){
        setButtonDisabled(false);
       }else{
        setButtonDisabled(true);
       }
    }
    bookIsValid()
  }, [book])
  

  const showOption = () => {
    if(categories && categories.length > 0)
    return categories.map( (cat, index)=> {
      return (
        <option value={cat.id}>{cat.name}</option>
      )
    })
  }

  return (
    <Container>
        <h1>Cadastrar Novo Livro</h1>

        <ContainerFormCenter>
          <FormAddBook onSubmit={e => { e.preventDefault(); }}>
            <MessageSuccessOrError hasSuccess={showMessageSuccess}>
              Livro Cadastrado Com sucesso!
            </MessageSuccessOrError>
              <FormItem>
                  <label>Titulo:</label>
                  <input 
                    value={book.title}
                    type="text" 
                    onChange={(e)=>{                    
                      e.preventDefault()
                      setBook({...book ,title: e.target.value})
                    }} 
                  />
              </FormItem>
              <FormItem>
                <label>Autor:</label>
                <input 
                    value={book.author}
                    type="text" 
                    onChange={(e)=>{                    
                      e.preventDefault()
                      setBook({...book ,author: e.target.value})
                    }} 
                  />
              </FormItem>
              <FormItem>
                <label>Ano:</label>
                <input 
                    value={book.year}
                    type="text" 
                    onChange={(e)=>{                    
                      e.preventDefault()
                      setBook({...book ,year: e.target.value})
                    }} 
                  />
              </FormItem>
              <FormItem>
                <label>Editora:</label>
                <input 
                    value={book.publishingCompany}
                    type="text" 
                    onChange={(e)=>{                    
                      e.preventDefault()
                      setBook({...book ,publishingCompany: e.target.value})
                    }} 
                  />
              </FormItem>

              <FormItem>
                <label>Cateoria:</label>
                  <select as="select"  onChange={(e)=> {
                    setBook({...book ,categoryId: e.target.value !== "Selecione uma Categoria" ? e.target.value: '' })
                  }}   value={book.categoryId}>
                    <option>Selecione uma Categoria</option>
                    {showOption()}
                  </select>
              </FormItem>
              <FormItemTextArea>
                <label>Descrição:</label>
                <textarea onChange={(e)=>{                    
                      e.preventDefault()
                      setBook({...book ,description: e.target.value})
                    }} >{book.description}</textarea>
              </FormItemTextArea>

              <FormItem>
                <button 
                  disabled={buttonDisabled} 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={(e) => {
                    e.preventDefault();
                    saveBook()  
                  }}>
                    Salvar
                  </button>
              </FormItem>
          </FormAddBook>
        </ContainerFormCenter>

    </Container>
  );
}
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

export default BooksAdd;