import React from "react"
import { ThemeContext, themes } from "../context/themeContext"
export default function Test() {
    let [theme, setTheme] = React.useState(themes.light)

    const handlerClick = (theme: { background: string, foreground: string }) => {
        setTheme(theme)
    }
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Child></Child>
                <br />
                <ThemeButton></ThemeButton>
            </ThemeContext.Provider>
            <button onClick={() => {
                handlerClick(themes.dark)
            }}>dark</button>
            <button onClick={() => {
                handlerClick(themes.light)
            }}>light</button>
        </div>
    )
}

interface ChildProps {
    value?: number,
    onChange?: (value: string) => void,
    click?: () => void
}

const Child = React.memo((props: ChildProps) => {
    let themeContext = React.useContext(ThemeContext)
    return (
        <div>
            <ThemeContext.Consumer>
                {({ background }) => {
                    return (
                        <div style={{ backgroundColor: background, ...styles.child }}></div>
                    )
                }}
            </ThemeContext.Consumer>
            <br />
            <div style={{ backgroundColor: themeContext.background, ...styles.child }}></div>

        </div>
    )
})

interface ThemeButtonProps {
}

class ThemeButton extends React.Component<ThemeButtonProps>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <>
                <div style={{ backgroundColor: this.context.background, ...styles.child }}></div>
                <br />
                <ThemeContext.Consumer>
                    {({ background }) => {
                        return (
                            <div style={{ backgroundColor: background, ...styles.child }}></div>
                        )
                    }}
                </ThemeContext.Consumer>
            </>
        )
    }
}

ThemeButton.contextType = ThemeContext


const styles = {
    child: {
        height: "100px",
        width: "100px",
    }
}