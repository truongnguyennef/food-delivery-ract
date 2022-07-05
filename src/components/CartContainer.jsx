import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import {RiRefreshFill} from 'react-icons/ri'

import { motion } from 'framer-motion'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import EmptyCart from '../img/emptyCart.svg'
import CartItem from './CartItem'

const CartContainer = () => {

    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    const showCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow : !cartShow,
        });
    };

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item){
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
    },[tot, flag ]);

    const cleartCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        });
        
        localStorage.setItem("cartItems", JSON.stringify([]))
    }
    
  return (
    <motion.div 
        initial={{opacity : 0, x : 200}}
        animate={{opacity : 1, x : 0}}
        exit={{opacity : 0, x : 200}}
        className='fixed top-0 right-0 w-full md:w-80 h-screen bg-white drop-shadow-md flex
        flex-col z-[101]'>
        <div className='w-ful flex items-center justify-between p-4 cursor-pointer'>
            <motion.div whileTap={{scale : 0.75}} onClick={showCart}>
                <MdOutlineKeyboardBackspace  className=' text-zinc-700 text-3xl'/>

            </motion.div>
            <p className='text-zinc-700 text-lg font-semibold'>Cart</p>
            <motion.p 
                whileTap={{scale : 0.75}} onClick={cleartCart}
                className='flex items-center gap-2 p-1 px-2 my-2 bg-slate-100
                 rounded-md hover:shadow-md cursor-pointer text-zinc-700 text-base'>
                    Clear <RiRefreshFill /> {''}
            </motion.p>
        </div>

    {/*bottom section */}
        {cartItems && cartItems.length > 0 ? (
             <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col '>
             {/* cart Items section */}
             <div className='w-full h-80 md:h-40 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                 {/* cart Item */}
                 {
                     cartItems && cartItems.map(item => (
                        <CartItem key={item.id} item={item} setFlag={setFlag}
                        flag={flag} />
                     ))
                 }
             </div>
 
             {/* cart total section */}
             <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center
             justify-evenly px-8 py-2'>
                 <div className='w-full flex items-center justify-between'>
                     <p className='text-gray text-lg'>小計</p>
                     <p className='text-gray text-lg'>¥ {tot}</p>
                 </div>
                 <div className='w-full flex items-center justify-between'>
                     <p className='text-gray text-lg'>配達料金</p>
                     <p className='text-gray text-lg'>¥ 300</p>
                 </div>
 
                 <div className='w-full border-b border-gray my-2'></div>
 
                 <div className='w-full flex items-center justify-between'>
                     <p className='text-gray text-xl font-semibold'>合計</p>
                     <p className='text-gray text-xl font-semibold'>¥ {tot + 300}</p>
                 </div>
                 
                 {user ? (
                    <motion.button
                    whileTap={{scale : 0.8}}
                    type='button'
                    className='w-full p-2 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-gray text-lg my-2
                    hover:shadow-lg'
                    >
                        注文
                    </motion.button>
                 ) : (
                    <motion.button
                    whileTap={{scale : 0.8}}
                    type='button'
                    className='w-full p-2 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-gray text-lg my-2
                    hover:shadow-lg'
                    >
                        ログインして注文
                    </motion.button>
                 )}
             </div>
         </div>
        ) : (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <img src={EmptyCart} className='w-72' alt="" />
                <p className='text-xl text-zinc-700 font-semibold'>カートに商品を追加する</p>
            </div>
        )}
       
    </motion.div>
  )
}

export default CartContainer