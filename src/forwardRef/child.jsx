import { forwardRef } from "react";

const Child  = forwardRef(function  (props , ref) {
  function handleClick (){
    ref.current.textContent = 'Ham ho gaye g'
  }
  return  (
    <div ref={props.ref}>
     <span>Hey I am vishal Sharma</span> 
     <button onClick={handleClick}>Click Me</button>
    </div>
  )
})

export default Child;



// const Child = forwardRef((props , ref)=>{

// })