import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import BooksList from "../pages/Books/BooksList";
import BooksAdd from "../pages/Books/BooksAdd";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () =>{
  const history = useHistory(); 
 
  return(
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/books" component={BooksList} />
        <PrivateRoute path="/book-add" component={BooksAdd} />
        <Route exact path="/" component={SignIn} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;