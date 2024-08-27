import { useState } from "react"

function ReRender (props) {
  let [count , setCount] = useState(0)

  function increment (){
    try {
      setCount(count++ )
    } catch(err){
      console.error('error::' , err)
    }

  }

  return (
    <h2>
      {count}
      <div>
      <button onClick={increment}>Increase</button>
      </div>
    </h2>
  )
}


export default ReRender;