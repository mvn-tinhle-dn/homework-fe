import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';

export default function Auth() {
  return (
    <Switch>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
    </Switch>
  )
}
