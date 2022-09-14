import React, { Component } from 'react'

export default class ColorClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'name',
            age: 12
        }
    }
  render() {
    return (
      <div>ColorClass
        <p>{this.state.name}</p>
        <p>{this.props.name}</p>
      </div>

    )
  }
}
