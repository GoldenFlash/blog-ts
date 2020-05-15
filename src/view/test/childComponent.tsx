import React,{Component} from 'react'
interface IProps{
}
export default class Child extends Component<IProps>{
  constructor(props: IProps){
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log("this.props",this.props)
    // console.log()
  }
  render(){
    return(
      <div>123</div>
    )
  }
}