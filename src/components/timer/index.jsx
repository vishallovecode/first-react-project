
import { useState } from 'react';
import Button from '../button';
import './timer.css'
function Timer (props) {
  const[timer , setTimer] = useState(10)  // it return =>  [stateVariable , functionToChangeStateVariable]

  // const timerCallback  =  (prevTimer)=>{
  //   if(prevTimer!==0) {
  //     return prevTimer-1
  //   }
  // }
  // function reduceTimerByOne () {
  //     setTimer((prevTimer)=>{
  //       if(prevTimer!==0) {
  //         return prevTimer-1
  //       }
  //     })
  // }
  function startTimer() {
    setTimer((prev)=> prev-1)
    let timerId =setInterval(()=>{
      setTimer((prevTimer)=>{
        if(prevTimer!==0) {
          return prevTimer-1
        } else {
          clearInterval(timerId)
          return 10;
        }
      })
    } , 1000)
  }
return  (
  <div className="timer-cont">
    <span className="timer-text">{timer}</span>
    <Button  classes = { timer!=10 ? 'disabled': ''} buttonText="Start Timer" handleClick={startTimer}  />
  </div>
)
}


export default Timer;




