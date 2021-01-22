import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

// import Logo from "../../assets/airbnb-logo.svg";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container, CustomTable, ButtonsContainer } from "./styles";

const Books = () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


  const handleBooks = async e => {
    e.preventDefault();
    if (!username || !password) {
        setError({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/api/v1/Authentication/login", { username, password });
        console.log(response);
        login(response.data.token);
        history.push("/home");
      } catch (err) {
        setError({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

    return (
      <Container>
        <ButtonsContainer></ButtonsContainer>
        <table>
          <tr>
            <th>Header Row 1</th>
            <th>Header Row 2</th>
            <th>Header Row 3</th>
          </tr>
         
        </table>
      </Container>
    );
}

export default withRouter(Books);