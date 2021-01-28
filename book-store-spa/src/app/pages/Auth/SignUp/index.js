import React, {  useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserService from "./service/signUp.service";

//import Logo from "../../assets/airbnb-logo.svg";

import { Form, Container } from "./styles";

const SignUp = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        UserService.registerUser({ username: username, password: password, email: email })
            .then(response => {
                if (response.token) {
                    history.push(`/home`);
                }
            })
            .catch(error => {
                setError(error.message)
            })
    };

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                {/* <img src={Logo} alt="Airbnb logo" /> */}
                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    value={email}
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    );
}

export default SignUp;