import React, { useEffect, useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
useEffect;

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className="portfolio py-10 w-full text-center">
        <div className="data mx-auto">
          <h1 className="text-[#2c3e50] text-5xl max-sm:text-4xl uppercase font-bold mt-7">
            portfolio component
          </h1>
          <div className="shape relative flex my-7 w-[30%] mx-auto justify-around items-center">
            <div className="line bg-[#2c3e50] w-1/3 h-1 absolute left-0"></div>
            <i className="fa-solid fa-star fa-xl text-[#2c3e50]"></i>
            <div className="line bg-[#2c3e50] w-1/3 h-1 absolute right-0 "></div>
          </div>

          <div className="cards flex flex-wrap mt-16">
            {[img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="imgCard max-sm:w-full max-md:w-1/2 w-1/3 px-5 cursor-pointer mb-10"
                onClick={() => handleImageClick(imgSrc)}
              >
                <div className="box rounded-2xl overflow-hidden group relative">
                  <img src={imgSrc} alt={`img${index + 1}`} />
                  <div className="layer absolute inset-0 items-center justify-center bg-[#1abc9c] opacity-90 hidden transition-all duration-500 group-hover:flex">
                    <i className="fa-solid fa-plus text-white text-9xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cards flex mb-10 flex-wrap">
            {[img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="imgCard max-sm:w-full max-md:w-1/2 w-1/3 px-5 cursor-pointer mb-10"
                onClick={() => handleImageClick(imgSrc)}
              >
                <div className="box rounded-2xl overflow-hidden group relative">
                  <img src={imgSrc} alt={`img${index + 1}`} />
                  <div className="layer absolute inset-0 items-center justify-center bg-[#1abc9c] opacity-90 hidden transition-all duration-500 group-hover:flex">
                    <i className="fa-solid fa-plus text-white text-9xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-blue-400 bg-opacity-50 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-2xl mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
