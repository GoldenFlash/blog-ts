import React,{Component} from 'react'
import P2019_nCov from "./2019-nCov/index"
interface IProps{
    [propName:string]:any
}
interface IState{
[propName:string]:any
}
export default class ProjectDetail extends Component<IProps,IState>{
    state: {}
    constructor(props: IProps){
        super(props)
        this.state={}
    }
    componentDidMount(){
        console.log("this.props",this.props)
    }
    render(){
        return(
            <>
                <P2019_nCov></P2019_nCov>
            </>
        )
    }
}