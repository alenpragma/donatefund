"use client"
import React, { useState, useEffect } from "react";
import { FaBars, FaPhone, FaRegistered } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Container from "../_container/Container";
import Link from "next/link";

const NavAndBanner = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const demoArray = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Charity", path: "/pages/charity" },
    { name: "Faq", path: "/#faq" },
    { name: "Events", path: "/#open" },
    { name: "Contact", path: "/pages/contact" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://i.postimg.cc/6pXqg4Lj/gift-habeshaw-xmo-EGNKNj2o-unsplash-1.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative h-[100vh] w-full"
      >
        <div className="w-full relative h-full bg-[#000000a4]">
          <Container>
            {/* navbar start */}
            <div className="flex justify-between items-center py-5">
              {/* Left side */}
              <div className="flex items-center w-full justify-between   gap-x-5 md:w-[20%]">
                <div className="">
                  {/* Your logo component goes here */}
                  <img
                    src="https://i.postimg.cc/kXPKcppm/Danate-Fund.png"
                    className="w-[180px] h-auto md:w-[200px]"
                    alt="Logo"
                  />
                </div>

                {/* Toggle icon for mobile */}
                <div className="md:hidden">
                  <FaBars
                    className="text-white cursor-pointer"
                    onClick={toggleNav}
                  />
                </div>
              </div>
              <div className="hidden md:flex flex-row items-center mx-auto  gap-x-5 justify-center">
              {demoArray.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white mr-4 duration-300 hover:text-main-green"
                >
                  {item.name}
                </Link>
              ))}
            </div>

              {/* Right side */}
              <div className="flex items-center gap-x-5">
                {/* Your phone number component goes here */}
                <div className="hidden md:flex items-center mr-4 text-main-green">
                  <CiLogin className="mr-2 text-main-green" />
                  <a href="https://my.donatefund.club/login">
                    <span className="text-main-green">Login</span>
                  </a>
                </div>
                <div className="hidden md:flex items-center mr-4 group">
                  <FaRegistered className="text-white mr-2 duration-300 group-hover:text-main-green" />
                  <a href="https://my.donatefund.club/register">
                    <span className="text-white duration-300 group-hover:text-main-green">
                      Signup
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navbar for mobile */}
            {isNavOpen && (
              <div className="md:hidden bg-main-green  relative z-[9999999999] text-white p-4">
                {demoArray.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block !text-white py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Navbar for larger screens */}
         

            {/* navbar end */}
            {/* banner content start */}
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] flex flex-col items-center justify-center translate-y-[-50%] w-full">
              <h1 className=" text-[35px] md:text-[60px]  font-bold text-white text-center w-full md:w-[70%] ">
                {" "}
                <span className="text-main-green">
                  Empowering Lives, One Donation at a Time
                </span>
              </h1>
              <p className="text-center w-[75%]  text-white">
                DonateFund's Commitment to Humanitarian Support and Critical Aid
                for a Positive Global Impact
              </p>
              <div className="flex gap-x-4 mt-7">
                <div className="px-[15px] md:px-[25px]  py-[10px] md:py-[15px] rounded-[40px] border border-white bg-main-green text-white  text-[13px] md:text-[16px]">
                  <a href="https://my.donatefund.club/login">
                    Login
                  </a>
                </div>
                <div className="px-[15px] md:px-[25px]  py-[10px] md:py-[15px] rounded-[40px] border border-white  text-white flex items-center gap-x-3 text-[13px] md:text-[16px]">
                  <a href="https://my.donatefund.club/register">
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default NavAndBanner;
