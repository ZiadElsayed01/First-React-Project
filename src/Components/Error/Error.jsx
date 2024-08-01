import React, { useEffect } from "react";
import image from "../../assets/404.png";

export default function Error() {
  useEffect(() => {
    document.title = "Error 404";
  }, []);
  return (
    <>
      <div className="image bg-black w-full flex justify-center py-14">
        <img src={image} alt="" />
      </div>
    </>
  );
}
