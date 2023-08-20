//import React from 'react';
import { AiOutlineMenu } from "react-icons/ai"


const Sidenav = () => {
  return (
    <>
      <div className="w-7 h-5">
        <AiOutlineMenu/>
      </div>
      <div className="fkex justify-center text-lg h-20">
        This is heading
      </div>
      <div className=" text-red-700 text-base ">
        This will be the content
      </div>
    </>
  );
};

export default Sidenav;