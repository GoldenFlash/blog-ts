import React from "react"

export default function Test() {
    let textInputRef: any = React.createRef()
    let textInputRef2: any = React.createRef()

    const handlerClick = () => {
        console.log("textInputRef", textInputRef)
        textInputRef.current.focus()
        textInputRef2.current.focus()

    }
    return (
        <div>
            <ForwardRefTextInput ref={textInputRef}></ForwardRefTextInput>
            <ForwardRefTextInput2 ref={textInputRef2}></ForwardRefTextInput2>
            <button onClick={handlerClick}>focus</button>
        </div>
    )
}




const ForwardRefTextInput = React.forwardRef((props: any, ref: any) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

interface ForwardRefClassProps {
    forwardRef: any
}
class ForwardRefClass extends React.Component<ForwardRefClassProps>{
    render() {
        return (
            <div>
                <input type="text" ref={this.props.forwardRef} />
            </div>
        )
    }
}

const ForwardRefTextInput2 = React.forwardRef((props: any, ref: any) => {
    return (
        <ForwardRefClass forwardRef={ref}></ForwardRefClass>
    )
})

const styles = {
    child: {
        height: "100px",
        width: "100px",
    }
}