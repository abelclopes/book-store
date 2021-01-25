import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import BooksList from "../pages/Books/BooksList";
import BooksAdd from "../pages/Books/BooksAdd";

import { isAuthenticated } from "../services/auth";
import Home from "../pages/Home";
import BooksDetails from "../pages/Books/BooksDetails";
import BookReturn from "../pages/Books/BookReturn";
import BookEdit from "../pages/Books/BookEdit";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () =>{
  const history = useHistory(); 

  return(
    <BrowserRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/books" component={BooksList} />
        <PrivateRoute exact path="/book-add" component={BooksAdd} />
        <PrivateRoute exact path="/book-details/:id" component={BooksDetails} />
        <PrivateRoute exact path="/book-edit/:id" component={BookEdit} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/return-book/:id" component={BookReturn} />
        <Route exact path="/login" component={SignIn} />
        <PrivateRoute path="/" component={Home} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;