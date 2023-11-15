import React from "react";
import Container from "../_components/_container/Container";
import HeadingSubheading from "../_components/_headingSubHeading/HeadingSubheading";

const OurPartner = () => {
    const imageArray = [
        'https://i.postimg.cc/YCj3zhnh/Group-19.png',
        'https://i.postimg.cc/qqLLjnHC/Group-52.png',
        
        'https://i.postimg.cc/QtZJDSXT/Group-21.png',
        'https://i.postimg.cc/8z3bKN9w/Group-22.png',
        'https://i.postimg.cc/pXsCjDBw/Group-50.png',
        'https://i.postimg.cc/SQ7DS0YN/Group-51.png',
        'https://i.postimg.cc/ZKbj0f6P/Group-53-1.png',
        'https://i.postimg.cc/YCj3zhnh/Group-19.png',
      ];
  return (
    <>
      <div className="py-[50px] md:py-[80px]">
        <Container>
          <HeadingSubheading
            heading={
              "More than 50 Companies and Institutions that trust us over the years"
            }
            sebHeading="OUR PARTNERS"
          />
          <div className="mt-10 flex flex-col md:flex-row gap-3 flex-wrap">
            {imageArray.map((item)=>(

            <div className="w-full md:w-[24%]">
                <img className="w-full h-auto" src={item} alt="" />
            </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurPartner;
