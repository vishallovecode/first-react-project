import { Component } from "react";
import Button from "../../components/button";

class LifeCycleMethod extends  Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: 'First Heading'
    }
  } 

  componentDidMount() {
     // 
    // code will come here after mounting is done
    console.log('hey after mounted') 

    // api call karna  
    // useEffect(()=>{

    // } , [])
  }

  componentDidUpdate(nextProps , nextState) {
     // this is call just after the state and props updated
     //
    console.log('hey')
    //  // useEffect(()=>{

    //  } , [state on which we want track])
  }
 
  shouldComponentUpdate(nextProps , nextState) {
 // this is call just before state and props  update
     // whenever state and props
    console.log(nextProps , nextState)
   // if this function return true  then state updated otherwise it will not
   if(nextState.heading ==='chill')
     return true;
  }

  changeHeading = ()=> {
    this.setState({...this.state, heading: 'Cool this is coll'})
  }
  changeHeading1 = ()=> {
    this.setState({...this.state, heading: 'chill'})
  }

  componentWillUnmount() {
    // this will call just before component is unmounted from dom
  }
  render () {
    return  (
    <div>
      <h2>{this.state.heading}</h2>
      <Button handleClick = {this.changeHeading}>Change Heading</Button>
      <Button handleClick = {this.changeHeading1}>Change Heading</Button>
    </div>
    )
  }
}

export default LifeCycleMethod;

// single page application 

//multipage application 