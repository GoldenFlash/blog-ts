import React from "react"
import ReactDOM from "react-dom"
export default function Test() {
    let textInputRef: any = React.createRef()
    let textInputRef2: any = React.createRef()

    const handlerClick = () => {
        console.log("textInputRef", textInputRef)
        textInputRef.current.focus()
        textInputRef2.current.focus()

    }
    const renderCallback = (
        id:any,
        phase:any, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration:any, // 本次更新 committed 花费的渲染时间
        baseDuration:any, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        startTime:any, // 本次更新中 React 开始渲染的时间
        commitTime:any, // 本次更新中 React committed 的时间
        interactions:any )=>{
        console.log("Profiler",id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,  
        interactions)
    }
    return (
        <div>
            <div id="modalRoot"></div>
            <React.Profiler id="test" onRender={renderCallback}>
                <Modal>qweqwe</Modal>
            </React.Profiler>
            
        </div>
    )
}

class Modal extends React.Component<any> {
    wrapper: any;
    modalRoot: any;
    constructor(props: any) {
        super(props)
        this.wrapper = document.createElement("div")
        this.modalRoot = document.getElementById("root")

    }
    componentDidMount() {
        this.modalRoot?.appendChild(this.wrapper)
    }
    componentWillUnmount() {
        this.modalRoot?.removeChild(this.wrapper)

    }
    render() {
        return (
            ReactDOM.createPortal(this.props.children, this.wrapper)

        )
    }


}





const styles = {
    child: {
        height: "100px",
        width: "100px",
    }
}