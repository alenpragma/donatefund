import React from 'react'
import Container from '../_components/_container/Container'
import HeadingSubheading from '../_components/_headingSubHeading/HeadingSubheading'

const EmergencyRelif = () => {
    let data = [
        {
            number:"22,690 ",
            text:"Donations have been verified and still active.",
        },
        {
            number:"0,517",
            text:"donations have been distributed to the needy.",
        },
         {
            number:"6,450",
            text:"Donations have been distributed to disaster-affected areas.",
        },
         {
            number:"1.4 Billion",
            text:" total funds raised so far.",
        },
        {
            number:"5,058 ",
            text:" donations were distributed to social foundations and orphanages.",
        },
        {
            number:"4,803",
            text:" donations have been distributed to people in emergency situations.",
        },
    ]
  return (
   <>
   <div className="py-[50px] md:py-[80px]">
      <Container>
        <HeadingSubheading heading={"Help the Affected by Disasters, Shortages, and Emergency Relief."} sebHeading="HUMANITARIAN MISSION"/>
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