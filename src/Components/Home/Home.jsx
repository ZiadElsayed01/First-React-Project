import React, { useEffect } from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="home text-white py-24 text-center max-sm:py-48 mx-auto bg-[#1abc9c] w-full">
        <div className="data w-[50%] mx-auto">
          <img className="w-[280px] mx-auto mb-10" src={avatar} alt="" />
          <h1 className="text-white text-5xl max-sm:text-4xl uppercase font-bold mt-7">
            start framework
          </h1>
          <div className="shape relative flex mt-7 w-[35%] mx-auto justify-around items-center">
            <div className="line bg-white w-1/3 h-1 absolute left-0"></div>
            <i className="fa-solid fa-star fa-xl"></i>
            <div className="line bg-white w-1/3 h-1 absolute right-0"></div>
          </div>
          <h2 className="pos text-lg mt-7">
            Graphic Artist - Web Designer - Illustrator
          </h2>
        </div>
      </div>
    </>
  );
}
