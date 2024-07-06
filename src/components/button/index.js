

function Button (props) { 
  const {buttonText , handleClick , classes , isDisable} = props;
  return   ( 
     <button   className={ `button ${classes}`} onClick={handleClick}>{buttonText}</button> 
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


