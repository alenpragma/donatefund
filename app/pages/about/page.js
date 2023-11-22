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
            Our Humanitarian Response
            </h4>
            <p className="text-main-ash mb-3">
            Dive into the core of our mission, unraveling the intricacies of our operations and discovering meaningful ways to contribute to transformative impacts. Whether you're contemplating a donation, exploring volunteer opportunities, or seeking insights into our diverse initiatives, our platform serves as a comprehensive guide. Transparency is paramount, offering you a clear understanding of how your involvement can make a positive difference in the lives of those facing challenges. From addressing disasters to fostering education and healthcare, your engagement is a catalyst for change. Join us in this collaborative journey, where collective efforts shape a world of compassion, resilience, and enduring change.
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