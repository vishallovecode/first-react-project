import { useEffect, useState } from "react"

function ReRender (props) {
  let [count , setCount] = useState(0)
  function increment (){
    try {
      setCount(count+2)  //  setCount(2) // count  = 0
      console.log(count) // 0 // count =0 
      setCount(++count)   // setCount(1) // count =1
      console.log(count)
      ++count // count =2
      setCount(count)  // setCount(2)
      console.log(count)
      setCount(count +2 )  // setCount(2+2) // 4  // count =2
      console.log(count)
      setCount(++count)    // setCount(3) //  count  = 3
      console.log(count)
      setCount(++count)  // setCount(4) // count  =4
      console.log(count)
      setCount(count +2)    // setCount(6) // count  = 4 
      console.log(count) 
    } catch(err){
      console.error('error::' , err)
    }
  }

  // useEffect(()=>{
  //   setCount(count ++ ) // 7  // state === 7 
  //   // setCount(++count )  // infinite rendering
  // } , [count])


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