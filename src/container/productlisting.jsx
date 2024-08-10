import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

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
  const handleClick = (id)=> {
    window.location.pathname = `products/${id}`
  }

  return(
    <div className="prodcut-container">
        {
          products.map((item)=>{
            return (
              <div className="card" onClick={()=>handleClick(item.id)}>
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


