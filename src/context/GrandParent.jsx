import { useState } from "react"
import Parent from "./Parent"
import { MyContext } from "./inex"



// provider
function GrandParent() {
  const [message , setMessage] = useState('Hey this is the message from the grand parent')
  const value  = {message , setMessage} // {message:message , setMessage:setMessage}
  return(
<MyContext.Provider value= {value}>
  <div>
    <h2>I am Grand Parent::::::: {message}</h2>
    <Parent/>
  </div>
</MyContext.Provider>
  )
}


export default GrandParent