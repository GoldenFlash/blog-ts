import React from "react"

class TestParent {
    name: string;
    constructor() {
        this.name = "name"
    }

    fn() {
        console.log("fn")
    }
}

class TestChild extends TestParent {
    // constructor(){
    //     super()
    //     console.log("a")
    // }

    fn2() {
        console.log(this.name)
    }
}


console.log(new TestParent())

let child = new TestChild()
console.log(child)
child.fn2()

export default function Test() {
    let [count, setCount] = React.useState(0)
    let [visible, setVisible] = React.useState(false)
    const handlerClick = () => {
        console.log("click")
        setVisible(!visible)
    }

    const onChange = (value: string) => {
        console.log("value", value)
        setCount(parseFloat(value))
    }
    let labelText,
        onchangeHandler,
        inputValue
    return (
        <div>
            <span>{visible ? "true" : "false"}</span>
            <span>{count}</span>
            {
                visible ? <Child onChange={onChange} value={count}></Child> : <Child value={count} onChange={onChange}></Child>
            }
            <br />
            <button onClick={handlerClick}>click</button>

            <label htmlFor="namedInput">Name:</label>
            <input id="namedInput" type="text" name="name" />

            <input
                type="text"
                aria-label={labelText}
                aria-required="true"
                onChange={onchangeHandler}
                value={inputValue}
                name="name"
            />

        </div>
    )
}

interface ChildProps {
    value: number,
    onChange: (value: string) => void,
    click?: () => void
}

const Child = React.memo((props: ChildProps) => {
    console.log("rerender")
    return (
        <div>
            <input value={props.value} onChange={(e) => { props.onChange(e.target.value) }} type="text" />
        </div>
    )
})


const styles = {
    child: {
        height: "100px",
        width: "100px",
        backgroundColor: "red"
    }
}