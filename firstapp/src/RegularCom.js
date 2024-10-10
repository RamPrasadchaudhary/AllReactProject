import React, { Component } from 'react'
import Parentcompo from './parentcompo'
class RegularCom extends Component {
  render() {
    console.log("REgular Component")
    return (
      <div>Regular Component{this.props.name}</div>
    )
  }
}

export default RegularCom