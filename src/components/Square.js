// we are going to create functional component 
// In react the name of function component should be always start with capital letter
 import './index.css'

//creating a function component using normal function
// function component in react is nothing it is just a function which is returning a jsx
//The jsx  means javascript xml notation  , where you can write the javascript code in html as well

// either default export or normal export
// You go with default export if you have only one export in whole file , 
// so when you import the value from that file , default value will be the export we have done in that file
function Sqaure () {
  return  (
      <div className='square'>
        <span>I am sqaure</span>
      </div>
  )
}
export default Sqaure

// the react component should always return a single element 
// JSX expressions must have one parent element.ts(2657)

// class => className
