// function A(props){
//   return  (
//     <>
//     <B description ={props.data} a={100} c= {50} d= {[1,2,3]} func = {()=>{console.log('Hey')}}/>
//     <C heading ={props.data}/>
//     </>
//   )
// }


// function B(props){
//     return  (
//       <h3>
//         {props.description}
//       </h3>
//     )
// }

// function C(props){
// return  (
//   <h3>
//     {props.heading}
//   </h3>
// )
// }


// function PropsExample() {
//   return (
//     <div>
//       <h2>Understanding Props ....</h2>
//       <A data= {'Hello'}/>
//     </div>
//   )
// }


// export default PropsExample;


function B(props) {
  return (
    <h2>{props.text}</h2>
  )
}

function A(props) {
  return  (
    <C textC= {props.text2}/>
  )
}
function C(props) {
   // ??
  return  (
    <D heading={props.textC}/>
  )
}
 function D(props){
  return  (
    <>
      <h2>{props.heading}</h2>
      <E subheading = {props.heading}/>
    </>
  )
 }
function E(props) {
  // props.subheading ?? Props Learning
  return  (
    <>
    <h2>{props.subheading}</h2>
    <F mainheading= {props.subheading}/>
    </>
  )
}

function F () {
  return (
    <h2>{props.mainheading}</h2>
  )
}

function P () {
  return  (
    <>
      <B text = 'Props Learning'/>
      <A text2= 'Props Learning'/>
    </>
  )
}