import { useEffect, useState } from "react";

function Child (props) {
  // props.parentMessage
  const [message , setMessage]= useState('Hello This data is from child...')
  useEffect(()=>{
      props.dataReceiver(message);
  } , [])
function handleClick () {
  props.dataReceiver('hYE I AM CHANGING WHEN BUTTON CLCIK'); // ARGUMENT
}

  return (
    <button onClick={handleClick}>Update Meesage</button>
  )
}

function Child2(props) {
  return  (
    <div>Child: {props.message}</div>
  )
}

function TwoWayBinding () {
  const [parentMessage , setParentMessage]= useState('This message is from parent...')
  const [childMessage , setChildMessage] = useState('')
// data as a parameter
  function dutaVahak(data) {
    console.log(data) ////
    setChildMessage(data) // ?? 
  }

    return (
      <div>
      <Child parentMessage ={parentMessage} dataReceiver= {dutaVahak}/>
      <div>Parent: {parentMessage}</div>
      <Child2 message= {childMessage}/>
      </div>
    )
}

export default TwoWayBinding;