import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {Base} from "../components";
import { Profile, Schedule } from "../views";

const AppRoutes = () => {

  return (
    <Base>
      <Switch>
        <Route exact path={`/app`} component={() => <div>aaaa</div>} />
        <Route exact path={`/app/perfil`} component={Profile} />
        <Route exact path={`/app/agendamento`} component={Schedule} />
        <Route exact path={`/app/personas`} component={() => <div>aaaa</div>} />
        <Route exact path={`/app/configuracoes`} component={() => <div>aaaa</div>} />
        <Redirect to={`/app`} />
      </Switch>
    </Base>
  );
};

export default AppRoutes;
