import { Component } from "react";

class Child extends Component { 
  // this = {}
  constructor(props) {
    super(props) // 
    this.state = {

    }
  }

  // normal function jab bhi normal call hota ha (this inside function ) will point that particualr exection context
  handleInputChange1  =(e)=>  {
    this.props.dataSetter(e.target.value) // call
  }
  // handleInputChange (e)  {
  //   console.log(this)
  //   this.props.dataSetter(e.target.value)
  // }
  render() {
    return (
    <>
      <div>This is message coming from parent: <b><i>{this.props.message}</i></b> </div>
      {/* <input placeholder="Write message for parent" onChange={this.handleInputChange.bind(this)}/> */}
      <input placeholder="Write message for parent" onChange={this.handleInputChange1}/>

    </>
    )
  }
}


export default Child;

 // strict mode
 // input.addEventListener('oninput' ,handleInputChange)