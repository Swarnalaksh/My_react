import React, { Component } from 'react'
 class UserGreeting extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isloggedIn: false
      }
    }
    render(){
    return this.state.isloggedIn?(
      <div>Hello Swarna</div>
            ) : (
           <div>Hello Laxmi</div>
            )
    // render() {
    //   if (this.state.isloggedIn){
    //     return( 
    //       <div>Hello Swarna</div>
    //     )
    //   }else {
    //     return(
    //       <div>Hello Laxmi</div>
    //     )
    //   }
//     return (
//       <div>
//         <div>Hello Swarna</div>
//         <div>Hello Laxmi</div>
//       </div>
//     )
  }  }
export default UserGreeting
