import React,{Component} from 'react'
import {Route,Link} from "react-router-dom";
import nodeList from "./nodelist"
import Child from "./childComponent"
interface IProps{
    [propName:string]:any
}
export default class Test extends Component<IProps>{
    constructor(props: IProps){
        super(props)
        this.state={}
    }

    componentDidMount(){
        // let newNode = new nodeList(1)
        // nodeList.creat()
        // console.log("newNode",newNode)
        // console.log("nodeList",nodeList)
    }

    navigate=()=>{
        // console.log("this.props",this.props)
        this.props.history.push("/test/link",{a:1,b:2})
    }
  
    render(){
        return(
            <div>
                {/* <p>
                <a href="/test/link">a标签</a>
                </p>
                <Link to="/test/link">link标签</Link> */}
                <div onClick={this.navigate}>跳转</div>
                <Route path="/test/link" component={Child}>
                    {/* <Child></Child> */}
                    {/* <div>1313</div> */}
                </Route>
            </div>
        )
    }
}