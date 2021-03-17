import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './SignUp';

const Root = () => (
  <BrowserRouter>
    <Route path="/" component={SignUp} />
    <Route path="/signup" component={SignUp} />
  </BrowserRouter>
);

export default Root;
