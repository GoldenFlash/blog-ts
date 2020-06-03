import React, { Suspense } from "react";
import { Provider } from "react-redux";
import moment from "moment";
import "moment/locale/zh-cn";
import store from "./redux/store"
import { windowWidth as windowAction } from "@/redux/common/action.js";
import ErrorBoundary from "./components/ErrorBoundary"
import Loading from "./components/Loading"
import Router from "./router/index"
import ScrollToTop from "@/components/ScrollToTop";

import "antd/dist/antd.css";
import "./App.css";
moment.locale("zh-cn");

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
          <ScrollToTop>
            <Router />
          </ScrollToTop>
        </Suspense>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
