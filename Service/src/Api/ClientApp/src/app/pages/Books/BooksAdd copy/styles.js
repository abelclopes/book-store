import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ContainerBookDetail = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  clear: both;
  width: 100%;
  background: #fff;
  margin: 20px 0;
  padding: 20px 22px;
  position: relative;
  box-shadow: -3px 5px 5px 3px rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
  border-radius: 3px;
  transition: box-shadow .5s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  `;


export const Span = styled.div`
box-sizing: border-box;
display: flex;
flex: 0 1 auto;
flex-direction: row;
flex-wrap: wrap;
`;
export const Strong = styled.div`
font-weight: bold;
margin-right: 10px;
`;
export const BookLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
`;

export const BookLineColLeft = styled.div`
  width: 20%;
`;
export const BookLineColRigth = styled.div`
  width: 80%;
  padding: 0 0 0 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;
