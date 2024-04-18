import React from "react";
import hellaLogoWhite from "../assets/images/hellaLogoWhite.png";

const Logo = () => {
  return (
    <>
      <div className="md:w-[36%] w-[40%] mt-4 ms-4 p-1">
        <img src={hellaLogoWhite} alt="" />
      </div>
    </>
  );
};

export default Logo;
