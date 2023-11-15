"use client"
import React,{useState} from "react";
import Container from "../_components/_container/Container";
import HeadingSubheading from "../_components/_headingSubHeading/HeadingSubheading";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const faqData = [
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  {
    question: "How can I make a donation?",
    answer:
      'You can make a donation by visiting our website and clicking on the "Donate" button.',
  },
  // Add more FAQ items as needed
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="py-[50px] md:py-[80px]">
      <Container>
        <HeadingSubheading
          sebHeading="MODERN CROWDFUNDING PLATFORM"
          heading={"Distribute aid easily, quickly, and transparently."}
        />
        <div className="mt-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3">
          <div className="w-full md:w-[49%]">
            <img src="https://i.postimg.cc/yxLDZRfY/Phone.png" alt="" />
          </div>
          <div className="w-full md:w-[49%] flex flex-col justify-center">
            <p className="text-main-ash mb-3">
              Open Data is the idea that some data should be freely available
              for everyone to use and republish as they see fit, without
              restrictions from copyright, patents, or other control mechanisms.
            </p>
            <a href="text-main-black">Read More</a>
            <h4 className="text-[18px] md:text-[23px] mb-10 text-main-black font-bold mt-10">
              Frequently Asked Question
            </h4>
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border rounded-md mb-4 overflow-hidden"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <div className="font-semibold">{item.question}</div>
                  </div>
                </div>
                {openIndex === index && (
                  <div
                    className="p-4 bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
