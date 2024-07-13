import { useState } from "react"
import './style.css'

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
  const [data , setData] = useState()
  return  (
  <div className="report-container">
    <div className="report-card">
      <span> Mohit Kumar</span>
      <span>Pass </span>
    </div>
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
