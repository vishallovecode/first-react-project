import { useState } from "react";
import Button from "../button";

import  './style.css'

function  ThemeChanger (props) {
  const [styles , setStyle]= useState({
    backgroundColor:'',
    border: '',
    coolor: ''
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
    setInputValues(updatedStyle)
  }
  function borderChange(){
    const updatedStyle = {...styles};
    updatedStyle.border =  inputValues.border
    setInputValues(updatedStyle)
  }
  function colorChange(){
    const updatedStyle = {...styles};
    updatedStyle.color =  inputValues.color
    setInputValues(updatedStyle)
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