
import './App.css';
import { createGlobalStyle } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './app/Routes';
import Layout from './app/components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #ffffff;
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
  background: #ffffff;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  },
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
