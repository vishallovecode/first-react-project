import { useState } from "react"
import './style.css'
import ReportCard from "./ReportCard"

function ExampleListing() {
  const initialState = [
    {id:1 , name: 'Raj' , lastName: 'Kumar' , percentage: 33},
    {id:2 , name: 'Mohit' , lastName: 'Kumar' , percentage: 78},
    {id:3 , name: 'Rohit' , lastName: 'Kumar' , percentage: 44},
    {id:4 , name: 'Gaurav' , lastName: 'Patel' , percentage: 56},
    {id:5 , name: 'Ashutosh' , lastName: 'Jha' , percentage: 94},
    {id:6 , name: 'Himanshu' , lastName: 'Jha' , percentage: 87},
    {id:7 , name: 'Narendra' , lastName: 'Kumar' , percentage: 66},
    {id:8 , name: 'Rahul' , lastName: 'Sharma' , percentage: 22},
    {id:9 , name: 'Ankit' , lastName: 'Dutta' , percentage: 21},
    {id:10 , name: 'Anand' , lastName: 'Singh' , percentage: 31},
    {id:11, name: 'Aman' , lastName: 'Patel' , percentage: 48},
    {id:12, name: 'Praveen' , lastName: 'Shukla' , percentage: 67},
    {id:13, name: 'Gaurav' , lastName: 'Srivastava' , percentage: 92},
    {id:14, name: 'Anand' , lastName: 'Kumar' , percentage: 85},
    {id:15, name: 'Mohit' , lastName: 'Mishra' , percentage: 75}
  ]
  const [data , setData] = useState(initialState)
  return  (
  <div className="report-container">
      {
        // Write Javascript Code
       data.map((item ,)=>{
          const studentName = `${item.name} ${item.lastName}`;
            if(item.percentage > 90){
              return <ReportCard name= {studentName} text= "Pass(Exellent)" classes="execellent" key={item.id}/>
            } else if(item.percentage<=90 && item.percentage>80){
              return <ReportCard name= {studentName} text= "Pass(Very Good)" classes="veryGood" key={item.id}/>
            } else if(item.percentage<=80 && item.percentage>70) {
              return <ReportCard name= {studentName} text= "Pass(Good)" classes="good" key={item.id}/>
            } else if(item.percentage<=70 && item.percentage >32) {
              return <ReportCard name= {studentName} text= "Pass" classes="pass" key={item.id}/>
            } else {
              return <ReportCard name= {studentName} text= "Failed" classes="failed" key={item.id}/>
            }
        })
        // [<ReportCard/> , <ReportCard/>,<ReportCard/>,<ReportCard/>,<ReportCard/>]
      }
    </div>
  )
}

export default ExampleListing;

// Good => 70-80 (background: blue , fontColor :white)
// Very Good  -> 81-90 (Green , color:white)
// Execellent ->  91-100 (Orange:  white)

// Mohit Kumar  Pass(Good)
// Raj Kumar    Pass (Pink , red)
// Gaurav Srivastava Pass(Exellent)
// Ankit Dutta       Failed (background black  , white)



// JSX
// STATE
// PROPS 
// Conditional Rendering 
// Functional Component 
// We are done with creating reusable component



// useEffect (Tuesday)

// Monday (Github and assignment)

// <div>
//   {
//     [<div>1</div> , <div>2</div>]
//   }
// </div>


// When we are rendering the list of elements i react using map and filter we need to give unique identity to the 
// element which we want to render as a list , this unique identifier is use for updating the things and fast
// React gives key as index by default , but react throws warning to letting you know that  , this  key as index can 
// harm your website and logic , but if you give key as index react stop throwing error or warning because react consider
// you have put index as key  , which will not harm your website working


// You can give key as index , only when  , there is static list you are not updating that list , like deleting item from list 
// sorting that list etc.