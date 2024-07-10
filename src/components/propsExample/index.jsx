function A(props){
  return  (
    <>
    <B description ={props.data} a={100} c= {50} d= {[1,2,3]} func = {()=>{console.log('Hey')}}/>
    <C heading ={props.data}/>
    </>
  )
}


function B(props){
    return  (
      <h3>
        {props.description}
      </h3>
    )
}

function C(props){
return  (
  <h3>
    {props.heading}
  </h3>
)
}


function PropsExample() {
  return (
    <div>
      <h2>Understanding Props ....</h2>
      <A data= {'Hello'}/>
    </div>
  )
}


export default PropsExample;