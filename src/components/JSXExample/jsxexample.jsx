
// Javascript 
// JSX
// useState 
// useEffect
import './style.css'

function JSXExample(props) {
//  Create state here
  function handleClick (event) {
    if(event.target.id == 'inner1') {
      //  Write your code here
    }
    else if(event.target.id == 'inner2') {
      
    }
    else if(event.target.id == 'outer1') {
      
    }
    else {
      
    }
  }
  return  (
    <div>
      {/* bg-yellow */}
      <div id="outer1" onClick={handleClick} >
        {/* bg-black */}
          <div id='outer2'>
          {/* bg-blue  */}
            <div id='inner1'>
            {/* bg-yellow  */}
              <div id="inner2"></div>
            </div>
          </div>
      </div>
    </div>
  )
}


export default JSXExample
