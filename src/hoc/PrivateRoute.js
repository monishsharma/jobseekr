import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component,updateState, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component asd = {updateState} {...props} /> : <Redirect to="/jobs" />
      }
    />
  );
};

export default PrivateRoute;
