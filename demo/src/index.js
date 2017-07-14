import React, { Component } from 'react'
import { render } from 'react-dom'

import { Input, Select, Textarea } from '../../src'

import '../../pancake/css/pancake.min.css'

class Demo extends Component {
  render() {
    return <div>
      <h1>internal-components Demo</h1>
      <Input />
      <Select label="select1" options={[{value: '', label: 'Please select a value'}]}/>
      <Select label="select2" options={[{value: '', label: 'Please select a value'}]}/>
      <Textarea />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
