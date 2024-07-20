

function Button (props) { 
  const {buttonText , handleClick , classes , isDisable , children} = props;
  console.log(props.children)
  return   ( 
     <button   className={ `button ${classes}`} onClick={handleClick}>{buttonText || children}</button> 
  )
}

// I have created the button component now i need to make it available for every another should able to  use it.


export default Button

// Univers



// function GrandChild (props) {
//   const {a1 ,b1} = props;
//   return  (
//     <div> {a1+ b1}</div>
//   )
// }

// function Child (props) {
//   const  {a , b} = props;
//   return  (
//     <div>
//       <GrandChild a1= {a} b1= {b}/>
//     </div>
//   )
// }


// function Parent() {
//   return  (
//     <Child a= {20} b= {30}/>
//   )
// }





 //(1)
// Understanding Keys
// Reconcilation
// React fiber
// Differ algorithm 
// Virtual dom

// Class based components (1)

// React router (2)



// Next Introduce => 2
// Higher order component(1/2)
// useRef (1/2)
// useCallback  (1)
// useMemo (1)
// Context api (2-3)
// Custom react hooks (1)
// Extraa (5)


// useRef  
// useCallback
// useMemo 
// useContext
// useReducer
