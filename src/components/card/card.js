
import { useState } from 'react';
import Button from '../../button';  // importing things from jsx or js file
import './card.css' // importing the css file 

const Card = () => {
  // Play with JSX 
  // hooks useState
  let btnText = 'Click Me';
  const [buttonText , setButtonText] = useState('Click Me123') // 
  function handleClick() {
    btnText = 'Updated'
    setButtonText('Updated here..')
  }
  return  (
    <div className="card">
      <div className="img-cont">
        <img src = 'https://st.adda247.com/https://storeimages.adda247.com/39371716365652.png?tr=w-undefined'/>
      </div>
      <div>
        <h2>Heading</h2>
        <span>This is short description about the card</span>
        <button onClick={handleClick}>{buttonText}</button>
        {/* Create a button change description once click that chan ge the description of span tag */}
      </div>
      <Button/>
    </div>
  )
}
export default Card;



// JSX
// STATE 
// PROPS 
// useEffect => Next => React 
// HOC
// REACT DEPT nkjfg
// Class Component
// Advanced  => useCallback , useMemo , useRef 
// Dom vs Virtual dom 
// react pwrf

// reconcilation 
// render 
// we will start building
// context  , useReducer , useContext 






// for reference

// function useState(value){
//   let data = value;
//   console.log('initial',data)
  
//   function setData(updatedValue) {
//     data =  updatedValue
//       console.log(data)
//   }
//   return [data , setData]
// }




// const [a1 , setA1] = useState('Ramji');


