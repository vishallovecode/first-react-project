import { useEffect } from "react";

function Box(props) {
  useEffect(()=>{
    console.log(props.boxName)
  } , [])


  useEffect(()=>{

    return  ()=> {
      // unmounting
  // 1 if this compounted is first inserted into dom after that  we want to do some actions

      console.log(props.boxName ,  ' unmounted')
    }
  } , [])

  return (
    <div  className={props.classes}>{props.boxName}</div>
  )
}

 export default Box;