import React from 'react'

const Title = ({text_1, text_2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>
            {text_1}  
            <span className='text-gray-700 font-medium'> {text_2}</span>
        </p>
        <span className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></span>
    </div>
  )
}

export default Title