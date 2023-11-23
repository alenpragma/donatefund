"use client"
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Btt = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-main-green text-white p-2 rounded-full transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowAltCircleUp/>
    </button>
  );
};

export default Btt;
