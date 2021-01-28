import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

// import Logo from "../../assets/airbnb-logo.svg";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Form, Container } from "./styles";

const SignIn = () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


  const handleSignIn = async e => {
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
        setError(
            "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  };

    return (
      <Container>
        <Form onSubmit={handleSignIn}>
          {/* <img src={Logo} alt="Airbnb logo" /> */}
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
}

export default withRouter(SignIn);