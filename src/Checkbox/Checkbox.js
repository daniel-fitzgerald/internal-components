import React from 'react'

import './checkbox.css'

class Checkbox extends React.Component {
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
      onChange(e.target.checked);
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

    return <p className={`text-group ${errorClass}`}>
      <label className="uikit-control-input">
        <input {...props}
          className="uikit-control-input__input"
          type="checkbox"
          checked={value}
          name={name}
          id={id}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        <span className="uikit-control-input__text">{label}</span>
      </label>
    </p>
  }
}

export default Checkbox