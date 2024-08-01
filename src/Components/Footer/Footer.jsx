import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer flex flex-wrap items-center justify-between bg-[#2c3e50] p-16 text-white">
        <div className="box max-sm:w-full max-md:w-1/2 w-1/3 text-center p-10">
          <h2 className="uppercase text-3xl font-semibold mb-4">location</h2>
          <p className="text-md">2215 John Daniel Drive</p>
          <p className="mt-5 text-md">Clark, MO 65243</p>
        </div>

        <div className="box max-sm:w-full max-md:w-1/2 w-1/3 text-center p-10">
          <h2 className="uppercase text-3xl font-semibold mb-4">
            around the web
          </h2>
          <div className="links flex items-start justify-center gap-2">
            <div className="icon border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center p-5">
              <i className="fab fa-facebook fa-lg"></i>
            </div>
            <div className="icon border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center p-5">
              <i className="fab fa-twitter fa-lg"></i>
            </div>
            <div className="icon border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center p-5">
              <i className="fab fa-linkedin fa-lg"></i>
            </div>
            <div className="icon border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center p-5">
              <i className="fab fa-facebook fa-lg"></i>
            </div>
          </div>
        </div>

        <div className="box max-sm:w-full max-md:w-1/2 w-1/3 text-center p-10">
          <h2 className="uppercase text-3xl font-semibold mb-4">
            about freelancer
          </h2>
          <p className="text-md">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="copy bg-[#1a252f] p-5 text-center text-white text-lg">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
