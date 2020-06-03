import React from "react"
export default function Test() {
    let [count,setCount] = React.useState(0)

    const handlerClick=()=>{
        setCount(count+1)
        console.log("location",window.location)
        window.location.href = "http://localhost:3000/"
    }
    return (
        <div style={styles.container}>
            <button onClick={handlerClick}>button</button>
            <ChildComponent count={count}></ChildComponent>
        </div>
    )
}

class ChildComponent extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={}
    }
    static getDerivedStateFromProps(nextProps:any,preveState:any){
        console.log("nextProps",nextProps)
        return {
            count:nextProps.count
        }
    }

    static getDerivedStateFromError(error:any){
        console.log("getDerivedStateFromError",error)
    }
    render(){
        return(
            <div>
                <span>
                   {this.state.count}
                </span>
            </div>
        )
    }
}



const styles = {
    container: {
        width: "100%",
        height: "100vh",
        padding:"20px"
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
    },
    child: {
        height: "100px",
        width: "100px",
    }
}