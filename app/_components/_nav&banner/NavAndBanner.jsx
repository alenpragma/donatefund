"use client"
import React, { useState } from "react";
import Container from "../_container/Container";
import { FaBars, FaPhone } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaRegPlayCircle } from "react-icons/fa";

const NavAndBanner = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const demoArray = [
      { name: "Home", path: "/" },
      { name: "Charity", path: "/about" },
      { name: "Disaster", path: "/services" },
      { name: "Events", path: "/contact" },
    ];
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/6pXqg4Lj/gift-habeshaw-xmo-EGNKNj2o-unsplash-1.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative h-[100vh] w-full"
    >
      <div className="w-full relative h-full bg-[#000000a4]">
        <Container>
          {/* navbar start */}
          <nav className="flex justify-between items-center py-5">
            {/* Left side */}
            <div className="flex items-center gap-x-5">
              <div className="">
                {/* Your logo component goes here */}
                <img src="https://i.postimg.cc/kXPKcppm/Danate-Fund.png" className="w-[100px] h-auto md:w-[200px]" alt="Logo" />
              </div>

              {/* Loop through demoArray to create nav items */}
              {demoArray.map((item) => (
                <a key={item.name} href={item.path} className="text-white mr-4 duration-300 hover:text-main-green">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-x-5">
              <div className="hidden md:flex items-center mr-4 text-main-green">
                {/* Your phone number component goes here */}
                <VscGraph  className="mr-2 text-main-green" />
                <span className="text-main-green">123-456-7890</span>
              </div>
              <div className="hidden md:flex items-center mr-4 group">
                {/* Your phone number component goes here */}
                <FaPhone className="text-white mr-2 duration-300 group-hover:text-main-green" />
                <span className="text-white duration-300 group-hover:text-main-green">123-456-7890</span>
              </div>

              {/* Toggle icon for mobile */}
              <div className="md:hidden">
                <FaBars
                  className="text-white cursor-pointer"
                  onClick={toggleNav}
                />
              </div>
            </div>
          </nav>
          

          {/* navbar end */}
          {/* banner content start */}
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] flex  flex-col items-center justify-center translate-y-[-50%] w-full">
                <h1 className=" text-[35px] md:text-[60px]  font-bold text-white text-center w-full md:w-[70%] "> <span className="text-main-green">Happiness comes</span> from your action.</h1>
                <p className="text-center w-[75%]  text-white">Be a part of the breakthrough and make someone’s dream come true.</p>
                <div className="flex gap-x-4 mt-7">
                    <div className= "px-[15px] md:px-[25px]  py-[10px] md:py-[15px] rounded-[40px] border border-white bg-main-green text-white  text-[13px] md:text-[16px]">Donate now</div>
                    <div className= "px-[15px] md:px-[25px]  py-[10px] md:py-[15px] rounded-[40px] border border-white  text-white flex items-center gap-x-3 text-[13px] md:text-[16px]"><FaRegPlayCircle /> Donate now</div>
                </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavAndBanner;
