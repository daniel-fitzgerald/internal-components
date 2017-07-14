import React, { Component } from 'react'
import { render } from 'react-dom'

import { Input, Select } from '../../src'

import '../../pancake/css/pancake.min.css'

class Demo extends Component {
  render() {
    return <div>
      <h1>internal-components Demo</h1>
      <Input />
      <Select options={[{value: '', label: 'Please select a value'}]}/>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
