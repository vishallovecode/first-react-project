import { useRef } from "react";
import Child from "./child";

function FowaredRefExample() {
  const divRef = useRef('Chill ha') ;
  return  (
    <div>
      {/* AS A Props */}
      <Child ref={divRef}/>
      <div ref={divRef}>Hello g</div>
    </div>
  )
}


export default FowaredRefExample;