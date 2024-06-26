
import { useState } from 'react'; // named export
 // importing things from jsx or js file
import './card.css' // importing the css file 
import Button from '../button';


const Card = () => {
  // Play with JSX 
  // hooks useState
  let btnText = 'Click Me'; // this is normal variable  , if  this value got change there will be no componenet re-render happen
  // buttonText is state variable  , whenever this buttonText get change then ui will updated because re-render
  const [buttonText , setButtonText] = useState('Click Me123') // 
  const [description ,setDescription] = useState('This is short description about the card')
  const [showCard , setShowCard]= useState(true)

  const [images , setImages] = useState(['https://st.adda247.com/https://storeimages.adda247.com/CompleteFoundationBatch1717742640.png?tr=w-250' , 'https://st.adda247.com/https://storeimages.adda247.com/39371716365652.png?tr=w-undefined' , 'https://st.adda247.com/https://storeimages.adda247.com/AdhyyanCurrentAffarisGautamSirApril2024HindiStore1715751288.png?tr=w-250' , 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'])
  const [img , setImage] = useState(images[0])
  const [count , setCount] = useState(0);
   // 0 , 1 , 2 ,3 

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

  function changeImage () {
    let updatedCount =  count +1;
    if(updatedCount < images.length) {
      setCount(updatedCount)
      setImage(images[updatedCount])
    }

  }

  return  (
    <div className="card">
      <div className="img-cont" onClick={changeImage}>
        <img src = {img}/>
      </div>
   
      <div>
        <h2>Heading</h2>
       { 
       showCard ? <span>{description}</span> : null
       }
        <button onClick={handleClick}>{buttonText}</button> 
        
        <button onClick={changeDescription}>Change Description</button>
        <button onClick={hideCard}>Hide Description</button>
        <button onClick={changeImage} >Change image</button>
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







// State => The state is the variable which store the value , and which is belongs to the component  , and you can create state inside component 
// using useState hooks , and if your state value is updated then your component will re-render

//  Earlier before react version 16.8 state can be defined only inside the class component , in 16.8 react
// introduced new concepts call hooks  , using that we can defined state inside the function component as well 
// the hook are nothing it a normal function which have starting key as use
 

