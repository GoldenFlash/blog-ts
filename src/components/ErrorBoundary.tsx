import React from "react"

interface IState{
  errorInfo:any,
  error:any,
  hasError:boolean
}
export default class ErrorBoundary extends React.Component<any,IState>{
  constructor(props:any){
    super(props)
    this.state={
      errorInfo:"",
      error:"",
      hasError:false
    }
  }

  static getDerivedStateFromError(error:any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }


  componentDidCatch(error:any,errorInfo:any){
    console.log("error",error)
    console.log("errorInfo",errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }
  render(){
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return(
      this.props.children?this.props.children:null
    )
  }
}