import React from "react";
import hellaLogoWhite from "../assets/images/hellaLogoWhite.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="md:w-[26%] w-[40%]">
        <Link to={'/'}>
          <img src={hellaLogoWhite} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
