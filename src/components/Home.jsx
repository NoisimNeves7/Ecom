import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {

  const [products] = useContext(productContext)
  console.log(products);
  return products ? (
    <>
    <Nav/>
    <div className=" w-[85%] p-5 pt-[5%] flex  overflow-auto flex-wrap">
      {products.map((value,index)=>(
        <Link to={`/details/${value.id  }`} key={index} className="  m-4 shadow-2xl card   w-[17%] h-[40%] rounded flex flex-col items-center justify-center p-5">
        <div
          className="w-full h-[80%] bg-white bg-contain bg-no-repeat bg-center mb-2 hover:scale-110  "
          style={{
            backgroundImage:
              `url(${value.image})`,
          }}
        ></div>
        <h1 className="hover:text-blue-300">{value.title}</h1>
      </Link>
      ))}
    </div>


    </>
  ): (<Loading/>);
};

export default Home;
