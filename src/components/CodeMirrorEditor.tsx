import React from "react"
const windows: any = window
const CodeMirror = windows.CodeMirror

class CodeMirrorEditor extends React.Component<any, any> {
  editorRef: any
  editor: any
  constructor(props: any) {
      super(props)
      this.state = { isControlled: Boolean(this.props.value) }
      this.editorRef = React.createRef()
  }

  componentDidMount() {
      this.editor = CodeMirror.fromTextArea(this.editorRef.current, this.props);
      this.editor.on('change', this.handleChange);

  }

  componentDidUpdate() {
      if (!this.editor) {
          return
      }

      if (this.props.value) {
          if (this.editor.getValue() !== this.props.value) {
              this.editor.setValue(this.props.value);
          }
      }
  }

  handleChange=()=> {
    if (!this.editor) {
      return
    }

    const value = this.editor.getValue()
    if (value === this.props.value) {
      return
    }

    if (this.props.onChange) {
      this.props.onChange({target: {value: value}})
    }

    // if (this.editor.getValue() !== this.props.value) {
    //   this.editor.setValue(this.props.value)
    // }
  }

  render() {
      const editor = React.createElement('textarea', {
          ref: this.editorRef,
          value:this.props.value,
          readOnly: this.props.readOnly,
          defaultValue:this.props.defaultValue ,
          onChange:this.props.onChange,
          className: this.props.textAreaClassName
      })

      return React.createElement('div', null, editor);
  }
}

export default CodeMirrorEditor