import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from  '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'


const RowContainer = ({flag, data, scrollValue }) => {
    const rowContainer = useRef();

    const [items, setItems] = useState([])

    const [{ cartItems }, dispatch] = useStateValue();

    const addtocart = () => {
        
       dispatch({
        type : actionType.SET_CARTITEMS,
        cartItems : items,
       })
       localStorage.setItem("cartItems", JSON.stringify(cartItems))
    };

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    },[scrollValue]);

    useEffect(() => {
        addtocart()
    }, [items])

  return (
    <div 
        ref={rowContainer}
        className={`w-full flex items-center my-12 gap-3 scroll-smooth bg-rowBg ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'
        }`}
        >
       {data.length > 0 ? (
        data.map((item) => (
         <div 
            key={item?.id}
            className='w-72 h-[225px] md:w-80 min-w-[280px] md:min-w-[320px] 
            my-12 bg-rose-200 rounded-lg p-2 shadow-md backdrop-blur-lg 
            hover:drop-shadow-lg flex flex-col items-center justify-between'>
            <div className='w-full flex items-center justify-between'>
                <motion.div className='w-40 h-40 -mt-8 drop-shadow-2xl' whileTap={{scale: 1.2}}>
                <img 
                    
                    src={item?.imageURl} 
                    alt="" 
                    className='w-full h-full object-contain'
                />
                </motion.div>
                
                <motion.div 
                    whileTap={{scale: 0.75}} 
                    className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                    onClick={() => setItems([...cartItems, item])}
                >
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
       ))) : <div className='w-full flex  flex-col items-center justify-center'>
                <img src={NotFound} className='h-72' />
                <p className='text-xl text-black font-semibold my-2'>Item Not Available</p>
            </div>}
    </div>
  )
}

export default RowContainer