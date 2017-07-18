import React, { Component } from 'react'
import { render } from 'react-dom'

import { Input, Select, Textarea } from '../../src'

import '../../pancake/css/pancake.min.css'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select2: ''
    }
  }

  onChange = (value) => {
    console.log(value)
    this.setState((prevState, props) => ({
      select2: value
    }))
  }

  render() {
    return <div>
      <h1>internal-components Demo</h1>
      <Input />
      <Select label="select2" options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]} onChange={this.onChange} error={'aww nu'} value={this.state.select2} />
      <Textarea />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
