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
        <Button buttonText="Increment" handleClick= {increment} classes="light"/>
        <Button buttonText="Decrement" handleClick= {decremenet}/>
      <span>
        Count: {count}
      </span>


      {/* <button>Click Me</button> */}
      {/* <Button buttonText="Click Me"/> */}

      {/* <button>Hover me</button> */}
      {/* <Button buttonText="Hover me"/> */}

      {/* <button>Touch Me</button> */}
      {/* <Button buttonText="Touch Me"/> */}

      {/* <button>Dafa ho jao</button>    */}
      {/* <Button buttonText="Dafa ho jao"/> */}
    </div>
  )
}


export default Counter;