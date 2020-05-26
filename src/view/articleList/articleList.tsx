import React, { Component } from "react";
import Loading from "../../components/Loading";
import api from "../../api/api";
import List from "./components/list/index";
import Carousel from "./components/carousel/carousel";
import styles from "./articleList.module.scss"
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
  componentDidMount() {
    this.getArticlesList();
    console.log("this.props", this.props)
  }

  getArticlesList() {
    this.setState({
      loading: true
    });
    api
      .getArticleList()
      .then((res: any) => {
        if (res.data) {
          this.setState({
            list: res.data,
            loading: false
          });
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    let loading = this.state.loading;
    let list = this.state.list;
    return (
      <>
        {loading ? (
          <Loading />
        ) : list.length > 0 ? (
            <div className={styles.articleContent}>
              <Carousel></Carousel>
              <List list={list} {...this.props}></List>
            </div>
        ) : (
              <div>数据为空</div>
            )}
      </>
    );
  }
}
