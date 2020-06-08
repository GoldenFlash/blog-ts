import React from "react"
import { connect } from "react-redux"
import { windowWidth as windowAction } from "@/redux/common/action.js";

function Test(props: any) {

    const handlerClick = () => {
        console.log("TestProps", props)
    }

    return (
        <div style={styles.container}>
            <button onClick={handlerClick}>button</button>
        </div>
    )
}
export default connect((state: any) => {
    return {
        common:state.common
    }
}, (dispatch) => {
    return {
        dispatch,
        onTodoClick: () => {
            dispatch(windowAction())
        }
    }
})(Test)


const styles = {
    container: {
        width: "100%",
        height: "100vh",
        padding: "20px"
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
    },
    child: {
        height: "100px",
        width: "100px",
    }
}