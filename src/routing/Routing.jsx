import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "./routes";

const Routing = () => {
  return (
    <div>
      <Switch>
        {routes.map(({ path, component, exact }, i) => (
          <Route
            key={component}
            path={path}
            component={component}
            exact={exact}
          />
        ))}

        <Redirect to="/pokemon-db/1" />
      </Switch>
    </div>
  );
};

export default Routing;
