import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Timeline, List } from "antd"
import Loading from "../../components/Loading"
import api from "../../api/api"
import "./index.scss"
import SideNav from "@/view/sideNav/sideNav"

// interface IProps{
//     loading:Boolean,
//     articleList:
// }
// interface IState{
//     loading:Boolean
// }
export default class Archive extends Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            articleList: [],
            loading: false
        }
    }
    componentDidMount() {
        this.getArticlesList()
    }
    getArticlesList = () => {
        this.setState({
            loading: true
        })
        api.get("article/getHotArticle").then((res:any) => {
            if (res.data) {
                this.setState({
                    articleList: res.data,
                    loading: false
                });
            }
        });
    }
    render() {
        let { loading } = this.state
        return (
            <div className="archive">
                <div className="archive_timeline">
                    {
                        loading ? <Loading /> :
                            <Timeline>
                                {
                                    this.state.articleList.map((item:any, index:Number) => {
                                        return (
                                            <Timeline.Item key={index.toString()}>
                                                <span style={{ marginRight: 10 }}>{item.creatTime.slice(0, 10)}</span>
                                                <Link to={{ pathname: `/article/${item._id}` }}>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </Timeline.Item>
                                        )
                                    })
                                }

                            </Timeline>}
                </div>
                {/* <SideNav></SideNav> */}
            </div>
        );
    }
}