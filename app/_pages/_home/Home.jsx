import Contact from "@/app/_components/_contact/Contact";
import NavAndBanner from "@/app/_components/_nav&banner/NavAndBanner";
import OpenDonationTab from "@/app/_components/_openDonationTabs/OpenDonationTab";
import EmergencyRelif from "@/app/_emergencyRelief/EmergencyRelif";
import Faq from "@/app/_faq/Faq";
import Footer from "@/app/_footer/Footer";
import OurPartner from "@/app/_ourPartner/OurPartner";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavAndBanner />
      <OpenDonationTab/>
      <Faq/>
      <EmergencyRelif/>
      <OurPartner/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
