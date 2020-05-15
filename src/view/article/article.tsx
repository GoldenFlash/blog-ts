import React, { Component } from "react";
import {connect} from "react-redux"
import { Divider } from "antd";
import Loading from "@/components/Loading";
import author_img from "@/assets/author.svg";
import time_img from "@/assets/time.svg";
import comment_img from "@/assets/comment.svg";
import { translateMarkdown } from "@/util/util";
import styles from "./article.module.scss";

import Anchor from "./anchor";
import api from "../../api/api";
 class Article extends Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      content: "",
      loading: true,
      id: ""
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.getArticle(id);
  }
  componentWillReceiveProps(nextprops: { match: { params: { id: any; }; }; }) {
    var id = nextprops.match.params.id;
    if (id === this.state.id) {
      return;
    }
    this.getArticle(id);
  }
  getArticle(id:any){
    this.setState({
      loading: true
    });
    api
      .post("article/getArticle", {
        id: id
      })
      .then((res:any) => {
        this.setState({
          id: id,
          article: res.data,
          loading: false
        });
      });
  };

  render() {
    let { article, loading } = this.state;
    let content;
    if (article) {
      content = translateMarkdown(article.content);
    }
    return loading ? (
      <Loading />
    ) : (
      <div className={styles.article_wrapper}>
        <div className={styles.content_left}>
          <div className={styles.content_header}>
            <div className="">{article.title}</div>
            <div className={styles.articleInfo}>
              <div className={styles.first_item}>
                <img alt="" src={author_img} />
                <span>{article.author}</span>
              </div>
              <div className={styles.item}>
                <img alt="" src={time_img} />
                <span>{article.updateTime.slice(0, 10)}</span>
              </div>
              <div className={styles.item}>
                <img alt="" src={comment_img} />
                <span>暂无评论</span>
              </div>
            </div>
          </div>

          <div className="article-detail" style={{paddingLeft:40,paddingRight:40}}  dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>

          <div className={styles.sider_left}>
            <Divider orientation="left">总览</Divider>
            <Anchor content={content} />
          </div>
      </div>
    );
  }
}
export default connect((state:any)=>({windowWidth:state.common.windowWidth}))(Article)
