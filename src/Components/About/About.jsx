import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="about text-white py-56  max-sm:py-48 mx-auto bg-[#1abc9c] w-full">
        <div className="data w-[80%] mx-auto">
          <h1 className="text-white text-5xl max-sm:text-4xl uppercase font-bold mt-7 text-center">
            about componant
          </h1>
          <div className="shape relative flex my-7 w-[30%] mx-auto justify-around items-center">
            <div className="line bg-white w-1/3 h-1 absolute left-0"></div>
            <i className="fa-solid fa-star fa-xl"></i>
            <div className="line bg-white w-1/3 h-1 absolute right-0"></div>
          </div>
          <div className="content text-white flex flex-wrap justify-between items-center mt-8">
            <div className="box w-1/2 max-sm:w-full text-lg px-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="box w-1/2 max-sm:w-full text-lg px-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
