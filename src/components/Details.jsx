import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {

    const[products,setProducts] =useState(null);

    const {id} = useParams()
    
    const Details = async()=>{
        try{
             const {data} =await axios.get(`/products/${id}`)
            setProducts(data)
        }
        catch(error){console.log(error)}
    }

    useEffect(()=>{
        Details();
    },[])

    

   
  return products ? (
    <div className="h-full w-[70%]  m-auto py-[10%]  px-[5%] flex  justify-between items-center">
      <img
        className="w-[40%] h-[90%] object-contain"
        src={`${products.image}`}
        alt=""
      />
      <div className="content w-[50%] ">
        <h1 className="text-4xl ">
          {products.title}
        </h1>
        <h3 className="text-zinc-500 my-5">{products.category}</h3>
        <h2 className="text-red-400 mb-3 ">$ 109.95</h2>
        <p className="mb-8">
          {products.description}
        </p>
        <Link className="px-3 py-2  rounded border mr-10 border-blue-200 text-blue-400 ">Edit</Link>
        <Link className="px-3 py-2  rounded border border-red-200 text-red-400  ">Delete</Link>
      </div>
    </div>
  ): (<Loading/>)  ;
};

export default Details;
