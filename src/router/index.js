import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "./routers";
import ScrollToTop from "@/components/ScrollToTop";

export default function() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>{renderRoutes(routers)}</Switch>
      </ScrollToTop>
    </Router>
  );
}
