import React from 'react'

import ReactSelect from 'react-select'

import 'react-select/dist/react-select.css'

import './select.css'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      touched: false,
      focus: false
    }
  }

  onBlur = (value) => {
    const { onBlur } = this.props
    this.setState({ focus: false })
    if (onBlur) {
      onBlur(value ? value.value : '')
    }
  }

  onChange = (value) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(value ? value.value : '')
    }
  }

  onFocus = (value) => {
    const { onFocus } = this.props
    this.setState({ touched: true, focus: true })
    if (onFocus) {
      onFocus(value ? value.value : '')
    }
  }

  render() {
    const { id, label, value, error, submitted, options, ...props } = this.props
    const { touched, focus } = this.state
    const showError = ((error && submitted) || (error && touched)) && !focus

    const errorClass = showError ? ' hasError' : ''

    return <div className={`text-group${errorClass}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <ReactSelect {...props} id={id} value={value} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} options={options}>
        </ReactSelect>
      </div>
      {showError && <span role="alert" aria-live="polite" className={errorClass}>{error}</span>}
    </div>
  }
}

export default Select