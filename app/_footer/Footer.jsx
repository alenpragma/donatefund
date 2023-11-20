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
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div>
              <p className="font-semibold mb-2">About Us</p>
              <ul>
                <li>About Our Cause</li>
                <li>Our Team</li>
                <li>Impact</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Get Involved</p>
              <ul>
                <li>Donate</li>
                <li>Volunteer</li>
                <li>Events</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Contact</p>
              <ul>
                <li>Contact Us</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 py-5 items-center mt-10">
          Follow Us -
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="www.facebook.com">
              <FaFacebook size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="www.twitter.com">
              <FaTwitter size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <a href="www.instagram.com">
              <FaInstagram size={25} />
            </a>
          </div>
          <div className="flex items-center text-white duration-300 hover:text-main-green">
            <FaLinkedin size={25} />
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
