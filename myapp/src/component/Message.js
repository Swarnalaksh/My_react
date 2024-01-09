import React, {Component} from "react"
class Message extends Component {
   constructor(){
        super()
        this.state={
            message:'Hello Swarna'
        }
    }
    changeMessage(){
        this.setState ( {
          message:'Thank you visit again'  
        })
    }
render(){
return(
    <div>
   <h1>{this.state.message}</h1>
    <button onClick={() => this.changeMessage()}>Click</button>
    </div>
)
}
}
export default Message
