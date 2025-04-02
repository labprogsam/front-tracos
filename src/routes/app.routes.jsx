import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {Base} from "../components";

const AppRoutes = () => {

  return (
    <Base>
      <Switch>
        <Route path={`/app`} component={() => <div>aaaa</div>} />
        <Route path={`/app/dados-analiticos`} component={() => <div>aaaa</div>} />
        <Route path={`/app/personas`} component={() => <div>aaaa</div>} />
        <Route path={`/app/configuracoes`} component={() => <div>aaaa</div>} />
        <Redirect to={`/app`} />
      </Switch>
    </Base>
  );
};

export default AppRoutes;
