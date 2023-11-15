import React from "react";
import Container from "../_components/_container/Container";
 // Assuming you have a Container component

const Footer = () => {
  return (
    <div className="py-[50px] md:py-[80px] bg-main-black text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Left Section - Logo and Information */}
          <div className="mb-4 md:mb-0 flex items-center">
            <img
              src="https://i.postimg.cc/nLmcVvYf/Group-4.png"
              className="w-[100px] h-auto md:w-[200px] mr-4"
              alt="Logo"
            />
            <div>
              <p className="font-semibold text-lg">Your Donation Site</p>
              <p>123 Donation Street, City</p>
              <p>Email: info@donationsite.com</p>
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
      </Container>
    </div>
  );
};

export default Footer;