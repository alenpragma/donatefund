import Container from '@/app/_components/_container/Container'
import HeadingSubheading from '@/app/_components/_headingSubHeading/HeadingSubheading'
import React from 'react'

const About = () => {
  return (
    <div>

<div className="py-[50px] md:py-[80px] " id="about">
      <Container>
        <HeadingSubheading
          sebHeading="About us"
          heading={"Who we are?"}
        />
        <div className="mt-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3">
          <div className="w-full md:w-[49%] flex justify-center overflow-hidden rounded-lg">
            <img src="https://i.postimg.cc/05WmpC3G/download.jpg" className='w-[70%] h-auto rounded-lg' alt="" />
          </div>
          <div className="w-full md:w-[49%] flex flex-col justify-center">
            <h4 className="text-[18px] md:text-[23px] mb-10 text-main-black font-bold mt-10">
              Learn About Us
            </h4>
            <p className="text-main-ash mb-3">
            We aim to provide you with comprehensive information about our mission, operations, and how you can contribute to creating a positive impact on the lives of those in need. Whether you're considering making a donation, volunteering your time, or just want to learn more about our initiatives, you'll find answers to common queries below.
            </p>
            <a href="text-main-black">Read More</a>
            
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default About