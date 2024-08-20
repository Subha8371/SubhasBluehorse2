import React from 'react'
import { useEffect,useState } from 'react';
const Body = () => {

  const[count,setCount]=useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)
      } catch (error) {
        setError(error.message);
      }
    };
   if(count>2){
    fetchData();
   }
  }, [count]);

  const handleClick=()=>{
    setCount(count+1);
  }

  return (
    <>
       <button
            type="submit"
            className="rounded bg-blue-600 text-white py-2 px-4 my-2 font-semibold text-sm shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleClick}
         >
            Count {count}
          </button>
    </>
  )
}

export default Body;