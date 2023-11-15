import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-container px-[10px]'>{children}</div>
  )
}

export default Container