
import './App.css';
import { createGlobalStyle } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './app/Routes';
import Layout from './app/components/Layout';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
    background: #ffffff;
  }
  th {
    text-align: left;
  }
  }
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes />
    </Layout>
  );
}

export default App;
