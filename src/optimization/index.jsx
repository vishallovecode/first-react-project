import { useCallback, useMemo, useState } from "react"
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
  const handleEmoizeFunc = useCallback(handleClick , [])


// memoizing the  value object or array or may be value return by the function
  const res =  useMemo(()=>{
    return {}
  } , []) 


  const re1 =  useMemo(()=>{
    return [1,3,4,5,6,78,]
  } , [heading]) 

  return (
    <div>
      <h1>{heading}</h1>
      <Child handleClick ={handleEmoizeFunc} res = {res}  re1 = {re1}/>
      <button onClick={handlHeading}>Change Heading</button>
    </div>
  )
}

export default Optimization