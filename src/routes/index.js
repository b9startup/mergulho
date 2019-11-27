import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={SignUp} />

      <Route exact path="/" component={Home} isProtected />
    </Switch>
  );
}
