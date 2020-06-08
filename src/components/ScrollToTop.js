import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // var dom = document.getElementById("scrollTop");
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
