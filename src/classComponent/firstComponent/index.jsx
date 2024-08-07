import { Component } from "react";

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
     this.setState(()=>{
      return updatedState
     })  // we are updating the state  

  }
  render () {
    return (
    <div>
       <h2 style={this.state.style}>Hello I am class Component</h2>
       { this.state.changedStyle ? <h4>Style is changes</h4> : null}
       <button onClick={this.handleClick}>Change Color</button>
       {/*  this  */}
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