import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "./router/index"

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import moment from "moment";
import "moment/locale/zh-cn";

import reducers from "./redux/reducers";
import { windowWidth as windowAction } from "@/redux/common/action.js";
import ErrorBoundary from "./components/ErrorBoundary"
import ScrollToTop from "@/components/ScrollToTop";
import Loading from "./components/Loading"

import "antd/dist/antd.css";
import "./App.css";
moment.locale("zh-cn");

var store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // 允许 dispatch() 函数
  )
);

store.dispatch(windowAction());
let timer: any = null;
window.onresize = () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    console.log("timer");
    store.dispatch(windowAction());
    timer = null;
  }, 1000);
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Suspense fallback={<Loading></Loading>}>
          <Router>
            <ScrollToTop>
              <Switch>
                {renderRoutes(routers)}
              </Switch>
            </ScrollToTop>
          </Router>
        </Suspense>

      </Provider>
    </ErrorBoundary>
  );
};

export default App;
