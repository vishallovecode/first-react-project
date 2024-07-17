import { useEffect, useState } from "react";
import Button from "../button";

function UseEffectExample() {
  
  const [counter , setCounter] = useState(0)
  // 1 if this compounted is first inserted into dom after that  we want to do some actions

  // useEffect with empty dependecny
  
  useEffect(()=>{
    // this function  will be executed after component is mounted and render in dom
    console.log('UseEffect Component render in UI')
  } , [])



  function updateCounter() {
    setCounter((prev)=> prev+1)
  }

  // i want to do some actions if counter state is updated
  useEffect(()=>{
    console.log('Timer delay')
  },  [counter])


  return  (
    <div>
      <h2>UseEffect Example.... {counter}</h2>
      <Button handleClick={updateCounter} buttonText="Increase"></Button>
    </div>
  )
}


export default UseEffectExample;






