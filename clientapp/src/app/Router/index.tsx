import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  Link,
} from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import BooksList from "../pages/book/BooksList";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import { Container } from "./styles";
import BooksAdd from "../pages/book/BooksAdd";

const PrivateRoute: React.FC = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
const Router: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/books" component={BooksList} />
            <PrivateRoute path="/book-add" component={BooksAdd} />
            <Route exact path="/" component={SignIn} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default Router;
