 // Case :1 I want to persist the data   (meaning if render happen we do  not want to re-initialized again , want 
//  initialized only in first rendering or mounting phase) 
// Case: 2 Also I do not want to re-render the component

import { useRef, useState } from "react"

function UseRefExample() {
  const timerRef = useRef('Initial Value');  // {current: null}
  const buttonRef =  useRef(null)
  let [state , setState] = useState(0)

  var a =60;

  function handleClick() {
    timerRef.current = 'Hey I am changed'
    a = 500
  }

  function handleClick2() {
    setState(++state)
    console.log(buttonRef.current) //
    buttonRef.current.textContent = 'Hat yeha se'
  }
  
  return (
    <div>
      <h2>{timerRef.current + `A:== ` + a}</h2>
      <button onClick={handleClick}>Change Ref</button>
      <button  ref = {buttonRef} onClick={handleClick2}>Change  State</button>

    </div>
  )
}

export default UseRefExample;

// custom hooks
// usePrevious 


// create a timer or stopwatch using react