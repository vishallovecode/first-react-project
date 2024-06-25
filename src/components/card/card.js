
import { useState } from 'react';
import Button from '../../button';  // importing things from jsx or js file
import './card.css' // importing the css file 

const Card = () => {
  // Play with JSX 
  // hooks useState
  let btnText = 'Click Me'; // this is normal variable  , if  this value got change there will be no componenet re-render happen
  // buttonText is state variable  , whenever this buttonText get change then ui will updated because re-render
  const [buttonText , setButtonText] = useState('Click Me123') // 
  const [description ,setDescription] = useState('This is short description about the card')
  const [showCard , setShowCard]= useState(true)

  function handleClick() {
    btnText = 'Updated' // this will not re-render the component ui will not updated
    setButtonText('Updated here..') // state updated now your component will re-render , ui will updated
  }
  const changeDescription = () => {
    setDescription('Just relax its very easy , focus more,,,')
  }
  // You can conditionally render jsx

  function hideCard () {
    setShowCard(false) // it is updating the showCard to false  , ui will re-render
  }

  return  (
    <div className="card">
      <div className="img-cont">
        <img src = 'https://st.adda247.com/https://storeimages.adda247.com/39371716365652.png?tr=w-undefined'/>
      </div>
   
      <div>
        <h2>Heading</h2>
       { 
       showCard ? <span>{description}</span> : null
       }
        <button onClick={handleClick}>{buttonText}</button> 
        
        <button onClick={changeDescription}>Change Description</button>
        <button onClick={hideCard}>Hide Description</button>
      </div>
      <Button/>
    </div>
  )
}
export default Card;


//  ctrl+ ?/
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




// // const [a1 , setA1] = useState('Ramji'); // [data , setData]


