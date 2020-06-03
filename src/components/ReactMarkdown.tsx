import React from "react"
import ReactMarkdown from "react-markdown"
const input = '# This is a header\n\nAnd this is a paragraph'

export default function ReactMarkdownViewer(props:any){
  return(
    <ReactMarkdown source={props.value} />
  )
}
