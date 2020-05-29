import React from "react"
import ReactDOM from "react-dom"

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
                count:state.count +1
            }
            break;
    
        default:
            return state
            break;
    }
}

let initalState = {
    count:0
}
export default function Test() {
    
    let [state,dispatch]:Array<any> = React.useReducer<any>(reducer,initalState)

    const handlerClick = () => {
        dispatch({type:"count"})
    }
    
    return (
        <div>
            {state.count}
            <button onClick={handlerClick}>button</button>
        </div>
    )
}


const styles = {
    child: {
        height: "100px",
        width: "100px",
    }
}