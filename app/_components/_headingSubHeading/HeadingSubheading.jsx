import React from 'react'

const HeadingSubheading = ({heading,sebHeading}) => {
  return (
    <div className='w-[50%]'>
        <h5 className='uppercase text-main-black'>{sebHeading}</h5>
        <h3 className="font-bold text-main-green text-[25px] md:text-[40px] ">
         {heading}
        </h3>
    </div>
  )
}

export default HeadingSubheading