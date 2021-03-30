import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './SignUp';

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={SignIn} />
  </BrowserRouter>
);

export default Root;
