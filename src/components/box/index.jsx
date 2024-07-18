import { useEffect } from "react";

function Box(props) {
  useEffect(()=>{
    console.log(props.boxName)
  } , [])


  useEffect(()=>{

    return  ()=> {
      // unmounting
      console.log(props.boxName ,  ' unmounted')
    }
  } , [])

  return (
    <div  className={props.classes}>{props.boxName}</div>
  )
}

 export default Box;