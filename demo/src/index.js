import React, { Component } from 'react'
import { render } from 'react-dom'

import { Input } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>internal-components Demo</h1>
      <Input />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
