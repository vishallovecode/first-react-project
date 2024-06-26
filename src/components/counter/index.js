import { useState } from "react"

import  './counter.css'
import Button from "../button"
function Counter () {
  const [count , setCount] = useState(0)

  function increment () {
      setCount(count+1)
  }

  function decremenet () {
    if(count >=1) {
      setCount(count-1)
    }
  }
  return  (
    <div className="container">
      {/* <button onClick={increment}>
        Increment
      </button> */}
        <Button buttonText="Increment"/>
        <Button buttonText="Decrement"/>
      <span>
        Count: {count}
      </span>
    </div>
  )
}


export default Counter;