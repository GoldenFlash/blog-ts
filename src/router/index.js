import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "./routers";

export default function() {
  return (
    <Router>
      <Switch>{renderRoutes(routers)}</Switch>
    </Router>
  );
}
