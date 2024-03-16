import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {

  const [products] =  useContext(productContext);
  let distinct_categories =()=>{
    return products.reduce((acc,cv)=>[...acc,cv.category],[])
  }
  distinct_categories = [...new Set(distinct_categories())]
  
  const color =()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.6)`
  }
  
  
  return (
    <nav className="h-full w-[15%] flex flex-col items-center bg-zinc-100">
      <button className="px-3 py-2  rounded border border-blue-200 text-blue-300  mt-10">
        Add new Products
      </button>

      

      <hr className="w-[80%] my-3  " />

      <h1 className="text-2xl mb-2 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
         {distinct_categories.map((value,index)=>{
           return <Link to={`/?category=${value}`}  className="flex items-center gap-2 my-2">
          <span style={{background:`${color()}`}}  className="w-3 h-3  block rounded-full"></span>
          {value}
        </Link>
         })}
      
      </div>
    </nav>
  );
};

export default Nav;
