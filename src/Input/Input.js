import React from 'react'

import './input.css'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      touched: false
    }
  }

  onBlur = (e) => {
    const { onBlur } = this.props
    this.setState({ focus: false })
    if (onBlur) {
      onBlur(e.target.value);
    }
  }

  onChange = (e) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e.target.value);
    }
  }

  onFocus = (e) => {
    const { onFocus } = this.props
    this.setState({ focus: true, touched: true })
    if (onFocus) {
      onFocus(e.target.value);
    }
  }

  render() {
    const { id, label, value, type = "text", error, submitted, ...props } = this.props
    const { focus, touched } = this.state
    const showError = (error && submitted && !focus) || (error && !focus && touched)

    const errorClass = showError ? 'hasError' : ''

    return <div className={`text-group ${errorClass}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...props}
        className="uikit-text-input uikit-text-input--block"
        id={id}
        type={type}
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
      />
      {showError && <span role="alert" aria-live="polite" className={errorClass}>{error}</span>}
    </div>
  }
}
export default Input