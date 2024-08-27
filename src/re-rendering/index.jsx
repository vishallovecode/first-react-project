import { useEffect, useState } from "react"

function ReRender (props) {
  let [count , setCount] = useState(0)

  function increment (){
    try {
      setCount(count++) //  0
      setCount(++count) // 2
      setCount(++count) // 3
      setCount(count++) // 3
      setCount(++count) // 5
      setCount(++count) //  6
      setCount(count++) // 6
      console.log(count) //  7
    } catch(err){
      console.error('error::' , err)
    }
  }

  useEffect(()=>{
    setCount(count ++ ) // 7  // state === 7
    // setCount(++ count )  // infinite rendering
  } , [count])

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