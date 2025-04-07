import React from 'react';
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';

import {Register, Login, Forget} from '../views';

const AuthRoutes = () => {
  const { path } = useRouteMatch();
  console.log(path)

  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
      <Route path={`${path}/forgot-password`} component={Forget} />
      <Redirect to={`${path}/login`} />
    </Switch>
  );
};

export default AuthRoutes;
