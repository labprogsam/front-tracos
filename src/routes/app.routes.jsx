import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {Base} from "../components";
import { Profile, Schedule, Home, Portfolio, Explore } from "../views";

const AppRoutes = () => {

  return (
    <Base>
      <Switch>
        <Route exact path={`/app`} component={Home} />
        <Route exact path={`/app/perfil`} component={Profile} />
        <Route exact path={`/app/agendamento`} component={Schedule} />
        <Route exact path={`/app/portfolio`} component={Portfolio} />
        <Route exact path={`/app/explorar`} component={Explore} />
        <Redirect to={`/app`} />
      </Switch>
    </Base>
  );
};

export default AppRoutes;
