import { useEffect, useState } from "react";
import Button from "../button";

function UseEffectExample() {
  
  const [counter , setCounter] = useState(0)
  // 1 if this compounted is first inserted into dom after that  we want to do some actions

  // useEffect with empty dependecny
  
  useEffect(()=>{
    console.log('I will get call only once..... UseEffectExample')
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