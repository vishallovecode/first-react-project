
// Javascript 
// JSX
// useState 
// useEffect
import { useState } from 'react'
import './style.css'

function JSXExample(props) {
//  Create state here
console.log('Rendering started.....')
const initialColors = {outer1: '' ,  outer2: '', inner1:'' , inner2: '' };
const [colors , setColors] = useState(initialColors)
// const [colors , setColors] = useState({outer1: '' ,  outer2: '', inner1:'' , inner2: '' })

  function handleClick (event) {
    const updatedColors = {...colors}; // created one object  // {}

    if(event.target.id == 'inner1') {
      //  Write your code here
      // updatedColors[event.target.id]  = 'bg-yellow'
      updatedColors['inner1']  = 'bg-yellow'
    }
    else if(event.target.id == 'inner2') {
      updatedColors[event.target.id]  = 'bg-green'
    }
    else if(event.target.id == 'outer1') {
      updatedColors[event.target.id]  = 'bg-black'
    }
    else {
      updatedColors[event.target.id]  = 'bg-red'
    }
    setColors(updatedColors);   // {outer1: '' ,  outer2: '', inner1:'bg-yellow' , inner2: '' };
  }
  return  (
    <div>
      {/* bg-yellow */}
      <div id="outer1" onClick={handleClick} className={colors.outer1}>
        {/* bg-black */}
          <div id='outer2' className={colors.outer2}>
          {/* bg-yellow  */}
            <div id='inner1' className={colors.inner1}>
            {/* bg-blue  */}
              <div id="inner2" className={colors.inner2}></div>

            </div>
          </div>
      </div>
    </div>
  )
}


export default JSXExample
