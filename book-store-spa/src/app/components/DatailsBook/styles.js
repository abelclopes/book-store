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
  box-shadow: -3px 5px 5px 3px rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),
    0 3px 1px -2px rgb(0 0 0 / 20%);
  border-radius: 3px;
  transition: box-shadow 0.5s ease;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const Booktitle = styled.div`
  overflow: hidden;
  cursor: pointer;
  color: #0069af;
  transition: color 0.2s ease;
  display: inline-block;
  margin-bottom: 5px;
`;
export const BookSubTitleAuthors = styled.div`
  color: #0669c5;
  font-family: Nunito Sans, Arial, Helvetica Neue, Helvetica, sans-serif !important;
  font-weight: 300 !important;
  font-size: 17px !important;
  display: contents !important;
  line-height: inherit !important;
  letter-spacing: 0 !important;
`;
export const BookHead = styled.div`
  display: block;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
export const BookDescription = styled.div`
  line-height: 1.35em;
  color: #414141;
  padding-top: 7px;
  font-size: 16px;
`;

export const ButtonBackWard = styled.div`
  padding: 5px;
  margin-left: 0px;
  width: 100%;
  button {
    width: 20%;
    padding: 10px;
    margin: 5px;
    color: #fff;
    font-size: 16px;
    background: #0471ff;
    height: 50px;
    border: 0;
    border-radius: 5px;
    width: 20%;
  }
  button: hover {
    background: #0658c3;
  }
  button: disabled {
    background: #a8b6c7;
  }
`;

export const ButtonBookActionRent = styled(ButtonBackWard)`
  display: unset;
  max-width: 1010px;
  justify-content: center !important;
  display: flex;
`;