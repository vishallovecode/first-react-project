// function are only hooks 
// If you want to  create a custom hooks , your function name should be start with use
// as we know all hooks start with use

import { useEffect, useState } from "react"

// You can call hooks inside custom hooks or function component
function useFetch(url){
  const [data , setData] = useState(null)
  const [loading , setLoading] = useState(false);
  const  [error , setError] = useState('');

  const fetchData = async () => {
    setLoading(true); // loading
    try {
      const res = await fetch(url);
      const jsonData =  await res.json();
      setData(jsonData)
      setLoading(false); // not-loading
    } catch(error) {
      setLoading(false); // loading
      setError('Error while fetching the data')
    }
  }

  useEffect(()=>{
    fetchData()
  } , [url])
  return  [data , loading , error]
}

export default useFetch