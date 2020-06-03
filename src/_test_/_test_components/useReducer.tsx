import React from "react"

interface reducerState{
    count:number;
    [propName:string]:any;
}

interface reducerAction{
    type?:string;
    content?:any;
    [propName:string]:any;

}

function reducer(state:reducerState,action:reducerAction){
    switch (action.type) {
        case "count":
            return{
                count:action.count
            }
            break;
    
        default:
            return state
            break;
    }
}

function countAction(count:number){
    return {
        type:"count",
        count:count
    }
}

let initalState = {
    count:0
}
export default function Test() {
    
    let [state,dispatch]:Array<any> = React.useReducer<any>(reducer,initalState)

    const handlerClick = () => {
        // dispatch(countAction(state.count+1))
        dispatch({
            type:"count",
            count:state.count+1
        })
    }
    
    return (
        <div style={styles.container}>
            {state.count}
            <button onClick={handlerClick}>button</button>
        </div>
    )
}


const styles = {
    container:{
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    child: {
        height: "100px",
        width: "100px",
    }
}