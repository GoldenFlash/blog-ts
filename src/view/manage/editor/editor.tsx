import React from "react"
import CodeMirrorEditor from "@/components/CodeMirrorEditor"
import ReactMarkdown from "@/components/ReactMarkdown" 
import "./codemirror.scss"
import styles from "./editor.module.scss"
export default function Editor(props: any) {

  let [content,setContent] = React.useState("")
  const onChange = (value: any) => {
    console.log(value)
    setContent(value.target.value)
  }
  return (
    <div>
      <div className={styles.header}>
      </div>
      <div className="editor-pane">
        <div className="editor pure-form">
          <CodeMirrorEditor theme="monokai" defaultValue={content} onChange={onChange} />
        </div>
      </div>
      <div className="result-pane">
      <ReactMarkdown value={content}></ReactMarkdown>
        {/* <Markdown
          className="result"
          source={this.state.markdownSrc}
          skipHtml={this.state.htmlMode === 'skip'}
          escapeHtml={this.state.htmlMode === 'escape'}
          renderers={{ code: CodeBlock }}
          plugins={[toc]}
        /> */}
      </div>
    </div>

  )
}