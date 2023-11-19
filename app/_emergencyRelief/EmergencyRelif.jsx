import React from 'react'
import Container from '../_components/_container/Container'
import HeadingSubheading from '../_components/_headingSubHeading/HeadingSubheading'

const EmergencyRelif = () => {
    let data = [
        {
            // number:"22,690 ",
            text:"Caring globally, one mission at a time, fostering compassion.",
        },
        {
            // number:"0,517",
            text:"Committed hearts, united for change, impacting lives through compassion.",
        },
         {
            // number:"6,450",
            text:"Empathy in action, a journey of hope, transforming communities.",
        },
         {
            // number:"1.4 Billion",
            text:"In crises, our mission thrives, spreading compassion, and creating resilience.",
        },
        {
            // number:"5,058 ",
            text:" Humanitarian dedication, creating ripples of kindness, changing lives forever.",
        },
        {
            // number:"4,803",
            text:" Global impact, fueled by compassion, shaping a better tomorrow.",
        },
    ]
  return (
   <>
   <div className="py-[50px] md:py-[80px]">
      <Container>
        <HeadingSubheading heading={"A Compassionate Journey in Our Humanitarian Mission"} sebHeading="HUMANITARIAN MISSION"/>
        <div className="mt-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3">
     
          <div className="w-full md:w-[49%] flex flex-wrap gap-y-4 md:gap-y-10">
             {
                data.map((item)=>(
                    <div className="w-full md:w-[50%]">
                        <div className="w-[60%]">
                            <span className='text-main-green'>
                                {item.number}
                            </span>{item.text}
                        </div>

                    </div>
                ))
             }
          </div>
          <div className="w-full md:w-[49%] flex flex-wrap ">
            <img src="https://i.postimg.cc/g0WrghMs/Group-54.png" alt="" />
          </div>
          </div>
      </Container>
</div>
   </>
  )
}

export default EmergencyRelif