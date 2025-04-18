import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import PrivateRoute from './PrivateRoute';

const InternalRoutes = () => {
  const cookies = Cookies.get();

  return (
    <Switch>
      <PrivateRoute path="/app" component={AppRoutes} />
      <Route path="/auth" component={AuthRoutes} />
      <Redirect to={cookies?.access_token ? '/app' : '/auth'} />
    </Switch>
  );
};

export default InternalRoutes;
