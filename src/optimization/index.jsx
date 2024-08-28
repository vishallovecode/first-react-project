import { useCallback, useState } from "react"
import Child  from  './Child'

function Optimization () { 

  const [heading , setHeading] = useState('This is heading')

  function handlHeading() {
    setHeading('This is change heading')
  }
 // in every re-render function gets different reference
 // ###gwsgdxw3
 // ####sddf
  function handleClick() {
    console.log('hey')
  }
// useCallback memoized the whole function
  const handleEmoizeFunc = useCallback(handleClick , [heading])

  return (
    <div>
      <h1>{heading}</h1>
      <Child handleClick ={handleEmoizeFunc}/>
      <button onClick={handlHeading}>Change Heading</button>
    </div>
  )
}

export default Optimization