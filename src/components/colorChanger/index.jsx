import { useContext, useState } from "react";
import Button from "../button";

import  './style.css'
import { AppContext } from "../../appContext";

function  ThemeChanger (props) {

const  {state , dispatch} = useContext(AppContext); // {state , dispatch}
console.log(state , 'aaa ga hun me')
  const [styles , setStyle]= useState({
    backgroundColor:'',
    borderColor: '',
    color: ''
  })


  const [inputValues , setInputValues]= useState({
    bg:'',
    color:'',
    border:''
  })

  function bgInput(event) {
    const values = {...inputValues}
    values.bg = event.target.value
    setInputValues(values)
  }
  function borderInput(event) {
    const values = {...inputValues}
    values.border = event.target.value
    setInputValues(values)
  }
 
  function colorInput(event) {
    const values = {...inputValues}
    values.color = event.target.value
    setInputValues(values)
  }
 
 
  function bgChange(){
    const updatedStyle = {...styles};
    updatedStyle.backgroundColor =  inputValues.bg
    setStyle(updatedStyle)
    dispatch({
      type: 'THEME_CHANGER',
      payload: {backgroundColor: inputValues.bg}
    })
  }
  function borderChange(){
    const updatedStyle = {...styles};
    updatedStyle.borderColor =  inputValues.border
    setStyle(updatedStyle)
    dispatch({
      type: 'THEME_CHANGER',
      payload: {borderColor: inputValues.border}
    })
  }
  function colorChange(){
    const updatedStyle = {...styles};
    updatedStyle.color =  inputValues.color;
    setStyle(updatedStyle)
    dispatch({
      type: 'THEME_CHANGER',
      payload: {borderColor: inputValues.color}
    })
  }
  return  (
    <div className="container">
      <div className="sub-container">
      <input placeholder="BG Color" onChange={bgInput}/>
      <Button buttonText= 'Change' handleClick= {bgChange}/>
      </div>
      <div className="sub-container">
      <input placeholder="Border Color" onChange={borderInput}/>
      <Button buttonText= 'Change' handleClick= {borderChange}/>
      </div>
      <div className="sub-container">
      <input placeholder="Color Color" onChange={colorInput}/>
      <Button buttonText= 'Change' handleClick= {colorChange}/>
      </div>
      <div className="box" style={styles}>
        Hello relax
      </div>
    </div>
  )
}


export default ThemeChanger;



