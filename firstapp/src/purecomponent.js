import React, { PureComponent } from 'react'
import Parentcompo from './parentcompo'
 class PureComp extends PureComponent {
  render() {
    console.log("*********Pure Component**********")
    return (

      <div>
      PureComponent{this.props.name}
      </div>
    )
  }
}

export default PureComp