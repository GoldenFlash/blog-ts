import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import SideNav from "../sideNav/sideNav"
import Header from "./components/Header/header";
import styles from "./index.module.scss"

interface state {
  list: Array<object>;
  timeLine: Array<object>;
  loading: boolean;
}

export default class ArticalList extends Component<any, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
      timeLine: [],
      loading: false
    };
  }

  render() {
    return (
      <>
        <Header></Header>
        <div className={styles.wrapper} id="scrollTop">
          <div className={styles.content}>
            {this.props.route.routes ?
              renderRoutes(this.props.route.routes)
              : null}
          </div>
          <SideNav></SideNav>
        </div>
      </>
    );
  }
}
