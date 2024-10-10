import React, { Component } from 'react'
import RegularCom from './RegularCom'
import PureComp from './purecomponent'

 class Parentcompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ram Prasad"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Vishwas"
            })
        },2000)
    }
  render() {
    
    return (
      <div>parent component
 <RegularCom name={this.state.name}></RegularCom>
    //   <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default Parentcompo