import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductDetails  = () => {
  const params =  useParams()
  const {productId}  = params // {productId: '9'}
  const [produdctDetails , setProductDetails] = useState({})

  async function fetchProduct  () {
    try {
      const data = await fetch(`https://dummyjson.com/products/${productId}`)
      const res = await data.json();
      setProductDetails(res)
    }
    catch(error) {
      console.error('Error:::' , error)
    }

  }
  useEffect(()=>{
    fetchProduct()
    // WHEN productId WILL CHANGE 
  } , [productId])

  // when the productId Change I want to call api 
  // for single product details
  return (
    <div>
      <img />
      <div>
          {produdctDetails?.title}
      </div>
      <div>{produdctDetails?.description}</div>
      <div>{produdctDetails?.price}</div>
      <div>{produdctDetails.brand}</div>
      <div>{produdctDetails.availabilityStatus}</div>
    </div>
  )
}

export default SingleProductDetails;