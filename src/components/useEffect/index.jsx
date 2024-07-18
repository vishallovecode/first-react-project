import { useEffect, useState } from "react";
import Button from "../button";
import Box from "../box";
import  './style.css'

function UseEffectExample() {
  
  const [counter , setCounter] = useState(0)
  const [hideObject , setHideObject] = useState({
    first:true ,
    second: true,
    third: true,
    fourth: true,
    five: true
  })
  // 1 if this compounted is first inserted into dom after that  we want to do some actions

  // useEffect with empty dependecny
  
  useEffect(()=>{
    // this function  will be executed after component is mounted and render in dom
    console.log('UseEffect Component render in UI')
  } , [])



  function updateCounter() {
    setCounter((prev)=> prev+1)
  }

  // i want to do some actions if counter state is updated
  useEffect(()=>{
    console.log('Timer delay')
  },  [counter])


  function hide(type) {
    const obj = {...hideObject};
    obj[type]= false
    setHideObject(obj)
  }

  
  

  return  (
    <div className="box-cont">
    {hideObject.first && <Box boxName= "First Box" classes="box"/>}
     <Button buttonText= {'Hide First Box'} handleClick={()=>{hide('first')}}/>
     <Box boxName= "Second Box" classes="box bg-blue "/>
     <Box boxName= "Third Box" classes="box bg-pink"/>
     <Box boxName= "Fourth Box" classes="box bg-black"/>
     <Box boxName= "Five  Box" classes="box bg-yellow "/>
    </div>
  )
}


export default UseEffectExample;








