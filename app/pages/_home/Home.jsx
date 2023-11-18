import Contact from "@/app/_components/_contact/Contact";

import OpenDonationTab from "@/app/_components/_openDonationTabs/OpenDonationTab";
import EmergencyRelif from "@/app/_emergencyRelief/EmergencyRelif";
import Faq from "@/app/_faq/Faq";
import OurPartner from "@/app/_ourPartner/OurPartner";
import React from "react";

const Home = () => {
  return (
    <div>
      <OpenDonationTab/>
      <Faq/>
      <EmergencyRelif/>
      <OurPartner/>
      <Contact/>
     
    </div>
  );
};

export default Home;
