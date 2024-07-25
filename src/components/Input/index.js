//Think this component as re-usable where i can use anywhere and it should fullfill all input box scenario 

import { useState } from "react";



// Owner => 10 lakh 


// onFocus 

//

import './style.css'
function Input (props) {
   // props = {}
  // type , value , placeHolder , searchAction , classes , style , name
  const {type='text' , value ,placeHolder="Enter a value", searchAction, name="search", classes="" , style= {} , focusAction , blurAction} =   props // {type:'text' , value: 'Atta' , searchAction: 'handleChange', name:"search" , classes:"search"} 

  // new code
function handleChange(e) {
   searchAction(e.target.value) // child to parent =>
}

  return  (
    <input 
      type={type}  
      defaultValue={value} 
      placeholder={placeHolder}
      onChange={handleChange}  
      name={name} style={style} 
      className={`input ${classes}`}
      onFocus={focusAction}
      onBlur={blurAction}
    />
  )
}


export default Input;


{/* <Input  /> //  {}
<Input  type="number" />    props = > // {type: 'number'}
<Input   type='text'  value="Vishal Sharma"/>  //  props =>  {type: 'text' , value: 'Vishal Sharma'}
<Input type='text'  value='Atta'  onChange={handleChanges}  name='search' , classes='search' />

// props => {type:'text' , value: 'Atta' , onChange: 'handleChange', name:"search" , classes:"search"} */}


// props vs state  