import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './SignUp';
import Home from './Home';

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signIn" component={SignIn} />
  </BrowserRouter>
);

export default Root;
