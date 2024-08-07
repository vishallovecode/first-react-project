import { Component, useEffect } from "react";
import Button from "../../components/button";
import Child from "./child";

class FirstComponent extends Component {
  // state ?? 
  constructor() {
    super() // this is initilize the parent class constructor (calling parent class component cosntructor)
    this.state = {
      // defined your state here
      style: {
        backgroundColor: 'red'
      },
      changedStyle: false,
      childMessage: ''
    }
  }
 // shorthand property
 //normal function
  handleClick = () => {
    const updatedState = {...this.state} ;
    updatedState.changedStyle = true
    updatedState.style = {
      backgroundColor: 'blue',
      color: 'white'
    }
     // you have change the state  but how to update that
     // this.setState are predefined 
     // state update with callback function 
     this.setState(()=>{
      return updatedState
     })  // we are updating the state  
      //state update with normal 
     // this.setState(updatedState) 
  }
  // setting child data

  receiverChildData = (data)=> {
    this.setState({...this.state , childMessage: data}) // 
  }
  render () {
    return (
    <div>
       <h2 style={this.state.style}>Hello I am class Component</h2>
       <h3>{this.state.childMessage}</h3>
       { this.state.changedStyle ? <h4>Style is changes</h4> : null} 
       {/* Using functional component */}
       <Button handleClick={this.handleClick}>Change Color</Button>
       {/*  this  */}
       <Child 
          message= {'Parent is busy in some work will see you tomorrow'} 
          dataSetter = {this.receiverChildData}
        />
    </div>
    )
  }
}
export default FirstComponent;


// function FirstComponent() {
//   // state define (hooks)
//   return  (
//     <div>
//       hello
//     </div>
//   )
// }



// const employee = {
//    getName (){
//   }
// }

// employee.getName()


// // useEffect(()=>{

// } , [])


// useEffect(()=> {
//    // initializtion 
// })


// useEffect(()=>{
//   return ()=> {
//     // unmounting
//   }
// } , [])