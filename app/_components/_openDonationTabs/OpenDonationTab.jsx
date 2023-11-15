"use client"
import React, { useState } from "react";
import Container from "../_container/Container";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const crisisArray = [
  "Disaster",
  "Children",
  "Food Crisis",
  "Health",
  "Education",
  "Homeless",
  "Animal",
  "Pandemic",
  "War Crisis",
  // Add more items as needed
];

const OpenDonationTab = () => {
  const [activeTab, setActiveTab] = useState(crisisArray[0]); // Set the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-[50px] md:py-[80px]">
      <Container>
        <h3 className="font-bold text-main-black text-[25px] md:text-[40px] text-center">
          Open <span className="text-main-green mb-10">Donation</span>
        </h3>

        {/* Search input start */}
        <div className="flex justify-center mt-10">
          <div className="w-full md:w-[70%] relative">
            <div className=" absolute top-[50%] translate-y-[-50%] right-5">
              <FaSearch className="text-[30px] duration-300 hover:text-main-ash text-main-green" />
            </div>
            <input
              type="text"
              className="w-full p-7 rounded-[100px] shadow-lg"
              placeholder="Find Donation..."
              name=""
              id=""
            />
          </div>
        </div>
        {/* Search input end */}

        {/* Tab buttons start */}
        <div className="mt-10 flex gap-x-3 gap-y-3 justify-center flex-wrap md:flex-nowrap">
          {crisisArray.map((item) => (
            <div
              key={item}
              onClick={() => handleTabClick(item)}
              className={` p-2 md:p-4 rounded-3xl border cursor-pointer border-main-green text-maingreen text-main-black duration-300 hover:bg-main-green hover:text-[#fff] ${
                activeTab === item ? "bg-main-green !text-white" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Tab buttons end */}

        {/* Tab content here */}
        <div className="mt-10 text-main-black flex flex-wrap flex-col md:flex-row gap-3">
          {/* Use a conditional rendering based on the activeTab */}
          {activeTab === "Disaster" && (
            <>
            
            {/* // card start */}
            <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
            
            </>

            
          )}
          {activeTab === "Children" && (
            <>
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
            </>
          )}
          {activeTab === "Food Crisis" && (
            <>
             {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
            </>
          )}
          {activeTab === "Health" && (
            <>
             {/* // card start */}
             <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
            </>
          )}
          {activeTab === "Education" && (
          <>
           {/* // card start */}
           <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
          </>
          )}
          {activeTab === "Homeless" && (
           <>
            {/* // card start */}
            <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
           </>
          )}
          {activeTab === "Animal" && (
          <>
          {/* // card start */}
          <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
               <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
               <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                      <p className="text-main-ash">June 27, 202</p>
                      <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                  <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                  <div className="flex gap-x-3 mt-3">
                     <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                     <CiBookmark className="text-[15px] text-main-green" />
                     </div>
                     <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                  </div>
               </div>
          </div>
          {/* // card end */}
         </>
          )}
          {activeTab === "Pandemic" && (
          <>
          {/* // card start */}
          <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
               <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
               <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                      <p className="text-main-ash">June 27, 202</p>
                      <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                  <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                  <div className="flex gap-x-3 mt-3">
                     <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                     <CiBookmark className="text-[15px] text-main-green" />
                     </div>
                     <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                  </div>
               </div>
          </div>
          {/* // card end */}
         </>
          )}
           {activeTab === "War Crisis" && (
            <>
            {/* // card start */}
            <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                 <img src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png" className="w-full h-auto " alt="" />
                 <div className="p-3 bg-white">
                    <div className="flex justify-between ">
                        <p className="text-main-ash">June 27, 202</p>
                        <p className="text-main-green">230 donations</p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">Flood in Lamboa</h4>
                    <p className="mt-3 text-main-ash">Lamboa community needs your help for crisis management from 3 days of non-stop flooding.</p>
                    <div className="flex gap-x-3 mt-3">
                       <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                       <CiBookmark className="text-[15px] text-main-green" />
                       </div>
                       <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">Donate Now</div>
                    </div>
                 </div>
            </div>
            {/* // card end */}
           </>
          )}
          {/* Add more conditions for other tabs */}
        </div>
        {/* Tab content here end */}
      </Container>
    </div>
  );
};

export default OpenDonationTab;
