import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag, data, scrollValue }) => {
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    },[scrollValue])
  return (
    <div 
        ref={rowContainer}
        className={`w-full flex items-center my-12 gap-3 scroll-smooth bg-rowBg ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'
        }`}
        >
       {data && data.map((item) => (
         <div 
            key={item?.id}
            className='w-72 h-[225px] md:w-80 min-w-[280px] md:min-w-[320px] my-12 bg-rose-200 rounded-lg p-2 shadow-md backdrop-blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.img 
                    whileTap={{scale: 1.2}}
                    src={item?.imageURl} 
                    alt="" 
                    className='w-40 -mt-8 drop-shadow-2xl'
                />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingBasket className='text-white'/>
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
                <p className=' text-zinc-700 font-semibold text-base md:text-lg'>
                    {item?.title}
                </p>
                <p className='mt-1 tex-sm text-gray font-semibold text-base'>{item?.calories} Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-zinc-700 font-semibold'>
                        <span className='text-sm text-red-500' >¥</span> {item?.price}
                    </p>
                </div>
            </div>
         </div>
       ))}
    </div>
  )
}

export default RowContainer