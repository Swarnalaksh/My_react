import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
constructor(props){
    super(props)
    this.state={
        parentName:'parent'
    }
    this.greetparent=this.greetparent.bind(this)
}
greetparent(){
    alert('Hello ${this.state.parentName}')
}
render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetparent} />
      </div>
    )
  }
}

export default ParentComponent
