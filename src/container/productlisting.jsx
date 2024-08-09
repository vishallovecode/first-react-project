import { useEffect, useState } from "react"

const ProductListing  =() => {
  const  [products , setProducts] = useState([]);

  async function fetchProducts () {
      const  data =  await fetch('https://dummyjson.com/products');
      const res =    await  data.json();
      setProducts(res.products)
  }
   
  useEffect(()=>{
      fetchProducts()
  } , [])

  return(
    <div className="prodcut-container">
        {
          products.map((item)=>{
            return (
              <div className="card">
                <img src= {item.thumbnail}/>
                <div>{item.title}</div>
          </div>
            )
          })
        }
    </div>
  )
}

export default ProductListing;