import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Route } from "react-router-dom";
import { StyledAuth } from "./styles";

function Auth() {
  return (
    <StyledAuth>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </StyledAuth>
  );
}

export default Auth;
