import axios from './Axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const productContext = createContext();

const Context = (props) => {

  const[products,setProducts] = useState(null);

  const getProducts = async()=>{
    try{
      var {data} = await axios('/products')
      setProducts(data);
      // console.log(data[0].id)
      

    }
    catch(error){
      console.log(error);
    }

  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <productContext.Provider value={[products,setProducts]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context