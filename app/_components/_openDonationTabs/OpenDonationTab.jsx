"use client";
import React, { useState } from "react";
import Container from "../_container/Container";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const crisisArray = [
  "All",
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

  const projectData = [
    {
      header: "Disaster in Indonesia",
      description:
        "Responding swiftly to natural calamities, providing aid, and rebuilding communities in the aftermath of disasters, fostering resilience.",
      image: "https://i.postimg.cc/mk9z2Lhh/Disaster.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Children in Africa",
      description:
        "Nurturing the potential of every child through education, healthcare, and protection, ensuring a brighter future for the next generation.",
      image: "https://i.postimg.cc/L6dgQ10P/Children.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Food Crisis in Africa",
      description:
        "Tackling hunger by distributing food aid, implementing sustainable agriculture, and addressing systemic issues to alleviate food crises globally.",
      image: "https://i.postimg.cc/Nf193jWz/Food-Crisis.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Health in Cameroon",
      description:
        "Promoting well-being through healthcare access, disease prevention, and medical interventions, improving overall health outcomes for vulnerable communities.",
      image: "https://i.postimg.cc/8z2RhYQ2/Health.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Education in Niger",
      description:
        "Empowering minds through educational initiatives, ensuring access, quality, and equity in learning opportunities for children and adults in need.",
      image: "https://i.postimg.cc/7PJTNVXD/Education.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Homeless in Nigeria",
      description:
        "Providing shelter, support, and resources to those experiencing homelessness, working towards stable housing solutions, and rebuilding lives.",
      image: "https://i.postimg.cc/zfTnpkqV/Homeless.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Animal in Brazil",
      description:
        "Advocating for animal welfare, rescue, and conservation efforts, protecting and caring for the well-being of animals in need.",
      image: "https://i.postimg.cc/mkgCLfCH/Animal.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "Pandemic in South Africa",
      description:
        "Combating global health crises, providing medical aid, and supporting communities affected by pandemics, fostering resilience and recovery.",
      image: "https://i.postimg.cc/W3j0yJ4S/Pandemic.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
    {
      header: "War Crisis in Palestine",
      description:
        "Aiding communities impacted by conflict, delivering humanitarian assistance, and advocating for peace to address the lasting effects of war crises.",
      image: "https://i.postimg.cc/fLKYQTts/War-Crisis.jpg", // Image URL or empty string if not available
      donations: getRandomDonationAmount(),
      createdAt: new Date("2023-01-02"),
    },
  ];

  function getRandomDonationAmount() {
    // Generate a random donation amount between 100 and 1000
    return Math.floor(Math.random() * (1000 - 100 + 1) + 100);
  }

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
          {activeTab === "All" && (
            <>
              {projectData.map((item) => (
                <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                  <img src={item.image} className="w-full h-auto " alt="" />
                  <div className="p-3 bg-white rounded-b-lg">
                    <div className="flex justify-between ">
                      <p className="text-main-ash">June 27, 2022</p>
                      <p className="text-main-green">
                        {item.donations} donations
                      </p>
                    </div>
                    <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                      {item.header}
                    </h4>
                    <p className="mt-3 text-main-ash">{item.description}</p>
                    <div className="flex gap-x-3 mt-3">
                      <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                        <CiBookmark className="text-[15px] text-main-green" />
                      </div>
                      <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                        Donate Now
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {/* Use a conditional rendering based on the activeTab */}
          {activeTab === "Disaster" && (
            <>
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */}
              {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
                  </div>
                </div>
              </div>
              {/* // card end */} {/* // card start */}
              <div className="w-full md:w-[32%] rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
                <img
                  src="https://i.postimg.cc/yd3svpz2/Rectangle-43.png"
                  className="w-full h-auto "
                  alt=""
                />
                <div className="p-3 bg-white">
                  <div className="flex justify-between ">
                    <p className="text-main-ash">June 27, 202</p>
                    <p className="text-main-green">230 donations</p>
                  </div>
                  <h4 className="text-[18px] md:text-[23px] mt-3 text-main-black font-bold">
                    Flood in Lamboa
                  </h4>
                  <p className="mt-3 text-main-ash">
                    Lamboa community needs your help for crisis management from
                    3 days of non-stop flooding.
                  </p>
                  <div className="flex gap-x-3 mt-3">
                    <div className="w-[50px] h-[50px] border border-main-green flex justify-center items-center rounded-lg">
                      <CiBookmark className="text-[15px] text-main-green" />
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center border border-main-green text-main-green rounded-lg duration-300 hover:text-[white] hover:bg-main-green">
                      Donate Now
                    </div>
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
