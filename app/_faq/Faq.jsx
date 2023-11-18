"use client"
import React,{useState} from "react";
import Container from "../_components/_container/Container";
import HeadingSubheading from "../_components/_headingSubHeading/HeadingSubheading";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const faqData = [
  {
    question: "What is DonateFund?",
    answer:
      "DonateFund is a dedicated platform committed to creating a positive footprint by delivering essential services to those in need. We focus on providing critical resources and aid to underprivileged individuals facing diverse challenges.",
  },
  {
    question: "How can I contribute to DonateFund's mission?",
    answer:
      "You can contribute to DonateFund's mission by making a donation through our secure online platform. Your support enables us to reach and assist more individuals in need.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donation goes directly towards funding critical resources and aid programs for underprivileged individuals. We ensure transparency in our operations, and you can track the impact of your contribution through regular updates on our website.",
  },
  {
    question: "Can I choose where my donation goes?",
    answer:
      "Yes, you have the option to specify a particular cause or program you'd like your donation to support. We provide a range of humanitarian projects, and you can select the one that resonates most with you during the donation process.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, DonateFund is a registered non-profit organization, and donations are generally tax-deductible. Please consult with your tax advisor for specific details based on your location and tax regulations.",
  },
  {
    question: "How can I stay updated on DonateFund's activities?",
    answer:
      "You can stay informed about DonateFund's activities, impact stories, and upcoming projects by subscribing to our newsletter. Follow us on our media platforms for real-time updates and stories of positive change.",
  },
  {
    question: "Can I volunteer with DonateFund?",
    answer:
      "Yes, we welcome volunteers who are passionate about making a difference. Visit our 'Get Involved' section to learn more about volunteer opportunities and how you can contribute your time and skills.",
  },
  {
    question: "How does DonateFund ensure the security of online donations?",
    answer:
      "We prioritize the security of your online donations. Our website employs industry-standard encryption to protect your personal and financial information. You can trust that your transaction is secure and confidential.",
  },
  {
    question: "What types of aid and services does DonateFund provide?",
    answer:
      "DonateFund provides a wide range of aid and services, including but not limited to emergency relief, healthcare support, education initiatives, and sustainable development projects. Visit our 'Projects' page to explore the diverse areas where we make a positive impact.",
  },
  {
    question: "How can I contact DonateFund for further assistance?",
    answer:
      "For any inquiries or assistance, you can reach out to our support team through the 'Contact Us' page on our website. We value your feedback and are here to address any questions you may have.",
  },
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
            We aim to provide you with comprehensive information about our mission, operations, and how you can contribute to creating a positive impact on the lives of those in need. Whether you're considering making a donation, volunteering your time, or just want to learn more about our initiatives, you'll find answers to common queries below.
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
