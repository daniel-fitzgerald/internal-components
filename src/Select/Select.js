import React from 'react'

import './select.css'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      touched: false,
      focus: false
    }
  }

  getOptions(options = []) {
    return options.map((option, index) => <option key={option.value} value={option.value}>{option.label}</option>)
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
    this.setState({ touched: true, focus: true })
    if (onFocus) {
      onFocus(e.target.value);
    }
  }

  render() {
    const { id, label, value, error, submitted, options, ...props } = this.props
    const { touched, focus } = this.state
    const showError = ((error && submitted) || (error && touched)) && !focus

    const errorClass = showError ? 'hasError' : ''

    return <div className={`text-group ${errorClass}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select {...props} id={id} className="uikit-select__element" value={value} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}>
        {this.getOptions(options)}
      </select>
      {showError && <span role="alert" aria-live="polite" className={errorClass}>{error}</span>}
    </div>
  }
}

export default Select