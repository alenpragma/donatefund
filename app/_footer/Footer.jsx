import React from "react";
import Container from "../_components/_container/Container";
// Assuming you have a Container component
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link" 
const Footer = () => {
  return (
    <div className="py-[50px] md:py-[80px] bg-main-black text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Left Section - Logo and Information */}
          <div className="mb-4 md:mb-0 flex items-center">
            <img
              src="https://i.postimg.cc/kXPKcppm/Danate-Fund.png"
              className="w-[100px] h-auto md:w-[200px] mr-4"
              alt="Logo"
            />
            <div>
              <p className="font-semibold text-lg">Donate Fund</p>
              <p>
                <p> (716) 486-3801</p>
                <p>Frewsburg, New York, USA</p>
                <p>info@donatefund.club</p>
              </p>
            </div>
          </div>

          {/* Right Section - Three Columns */}
          <div className="flex flex-col md:flex-row gap-y-10 md:space-x-8">
  <div>
    <p className="font-semibold mb-2">About Us</p>
    <ul>
      <li>
        <a href="#">About Our Cause</a>
      </li>
      <li>
        <a href="#">Our Team</a>
      </li>
      <li>
        <a href="#">Impact</a>
      </li>
    </ul>
  </div>
  <div>
    <p className="font-semibold mb-2">Get Involved</p>
    <ul>
      <li>
        <a href="#">Donate</a>
      </li>
      <li>
        <a href="#">Volunteer</a>
      </li>
      <li>
        <a href="#open">Events</a>
      </li>
    </ul>
  </div>
  <div>
    <p className="font-semibold mb-2">Contact</p>
    <ul>
      <li>
        <Link href="/pages/contact">Contact Us</Link>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
    </ul>
  </div>
</div>
        </div>
        <div className="flex gap-x-4 py-5 items-center mt-10">
          Follow Us -
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="https://www.facebook.com">
              <FaFacebook size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="https://www.twitter.com">
              <FaTwitter size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="https://www.instagram.com">
              <FaInstagram size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="https://www.linkedin.com">

            <FaLinkedin size={25} />
            </a>
          </div>
        </div>
        <div className="border-t text-center text-white pt-5  mt-10">
          <a href="/">
            Copyright &#169; 2023. All rights reserved.{" "}
            <span className="text-main-green">Donate Fund</span>{" "}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
