import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import BooksList from "../pages/BooksList";

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
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        
        <PrivateRoute path="/books" component={BooksList} />
        <PrivateRoute path="/home" component={() => <h1>App</h1>} />
        <PrivateRoute path="/app" component={() => <h1>App</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  )
};
export default Routes;