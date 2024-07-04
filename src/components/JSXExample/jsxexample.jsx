// Javascript
// JSX
// useState
// useEffect
import { useState } from "react";
import "./style.css";
import Button from "../button";
function JSXExample(props) {
  //  Create state here
  // if component re-render your state will not initialized it will persist the value;
  // Try creating one normal variable and see what happen ..
  console.log("Rendering started.....");

  // Normal Varibale
  console.log("===>", heading);
  var heading = "Hello Me har bar in re-rendering reitinialized hoyunga... ";
  console.log("===>", heading);

  const initialColors = { outer1: "", outer2: "", inner1: "", inner2: "" };
  const initialState = {
    outer1: true,
    outer2: true,
    inner1: true,
    inner2: true,
  };
  const [shows, setShows] = useState(initialState);

  const [colors, setColors] = useState(initialColors);
  // const [colors , setColors] = useState({outer1: '' ,  outer2: '', inner1:'' , inner2: '' })

  function handleClick(event) {
    const updatedColors = { ...colors }; // created one object  // {}
    heading = "me change ho gya";

    if (event.target.id == "inner1") {
      //  Write your code here
      // updatedColors[event.target.id]  = 'bg-yellow'
      updatedColors["inner1"] = "bg-yellow";
    } else if (event.target.id == "inner2") {
      updatedColors[event.target.id] = "bg-green";
    } else if (event.target.id == "outer1") {
      updatedColors[event.target.id] = "bg-black";
    } else {
      updatedColors[event.target.id] = "bg-red";
    }
    setColors(updatedColors); // {outer1: '' ,  outer2: '', inner1:'bg-yellow' , inner2: '' };
  }

  function outerSwap() {
    const updatedColors = { ...colors };
    if (!colors.outer1 && !colors.outer2) {
      return;
    } else {
      const temp = updatedColors.outer1;
      updatedColors.outer1 = updatedColors.outer2;
      updatedColors.outer2 = temp;
      setColors(updatedColors);
    }
  }

  function innerSwap() {
    const updatedColors = { ...colors };
    if (!colors.inner1 && !colors.inner2) {
      return;
    } else {
      const temp = updatedColors.inner1;
      updatedColors.inner1 = updatedColors.inner2;
      updatedColors.inner2 = temp;
      setColors(updatedColors);
    }
  }

  function handleOuter1() {
    const updatedShows = {...shows};
    updatedShows.outer1 =  !updatedShows.outer1
    setShows(updatedShows);
  }
  function handleOuter2() {
    const updatedShows = {...shows};
    updatedShows.outer2 =  !updatedShows.outer2
    setShows(updatedShows);
  }
  function handleInner1() {
    const updatedShows = {...shows};
    updatedShows.inner1 =  !updatedShows.inner1
    setShows(updatedShows);
  }

  function handleInner2() {
    const updatedShows = {...shows};
    updatedShows.inner2 =  !updatedShows.inner2 
    setShows(updatedShows);
  }
  return (
    <div className="container">
      {/* <h2>{heading}</h2> */}
      {/* bg-yellow */}
      {
      shows.outer1 ? (
        <div id="outer1" onClick={handleClick} className={colors.outer1}>
          {/* bg-black */}
          {shows.outer2 ? (
            <div id="outer2" className={colors.outer2}>
              {/* bg-yellow  */}
              {shows.inner1 ? (
                <div id="inner1" className={colors.inner1}>
                  {/* bg-blue  */}
                  {shows.inner2 ? (
                    <div id="inner2" className={colors.inner2}></div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null
      }
      <div className="btn-cont">
        <Button buttonText={`Outer Swap`} handleClick={outerSwap} />
        <Button buttonText={`Inner Swap`} handleClick={innerSwap} />
        <Button buttonText={`${shows.outer1 ? 'Hide': 'Show'} Outer1`} handleClick={handleOuter1} />
        <Button buttonText={`${shows.outer2 ? 'Hide': 'Show'} outer2`} handleClick={handleOuter2} />
        <Button buttonText={`${shows.inner1 ? 'Hide': 'Show'} Inner1`} handleClick={handleInner1} />
        <Button buttonText={`${shows.inner2 ? 'Hide': 'Show'} Inner2`} handleClick={handleInner2} />
      </div>
    </div>
  );
}
export default JSXExample;


