import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
        <div className='py-2 flex-1 flex flex-col items-start 
        justify-center gap-6'>
            <div className='flex items-center gap-2 justify-center bg-amber-100
            px-4 py-1 rounded-full'>
            <p className='text-base text-orange font-semibold'> 
            Bike Delivery
            </p>
            <div className='w-8 h-8 bg-white rounded-full overflow-hidden'>
                <img 
                src={Delivery} 
                className='w-full h-full object-contain' 
                alt="delivery" 
                />
            </div>
            </div>

            <p className='text-[2.5rem] lg:text-[4.5em]
            font-bold tracking-wide text-gray-dark'>
            The Fastest Delivery in <span className='text-orange text-[3rem] lg:text-[5rem]'>Your City</span>
            </p>

            <p className='text-base text-zinc-700 text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Dolor optio itaque delectus tenetur exercitationem! Saepe cum, 
            blanditiis repellat corporis sint reprehenderit aperiam id nemo 
            nostrum voluptatibus, molestias obcaecati rerum necessitatibus?
            </p>

            <button type='button' 
            className='bg-gradient-to-br from-amber-100 to-amber-200 w-full 
            md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
            ease-in-out duration-100'
            >
            Order Now</button>
        </div>
        <div className='py-2 flex-1 flex items-center relative'>
            <img 
            src={HeroBg} 
            className='ml-auto w-full h-4/5 lg:w-auto lg:h-4/5' 
            alt="hero-bg" 
            />

          <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>
            <div className='w-190 p-4 bg-rose-200 backdrop-blur-md rounded-md flex flex-col items-center justify-center'>
                <img 
                src={I1} 
                className='w-40 -mt-20'
                alt="I1" />
                <p className='text-base font-semibold text-zinc-700'>Icecream</p>

                <p className='text-sm text-gray font-semibold'>
                    Chocolate & vanialla
                </p>

                <p className='text-sm font-semibold text-zinc-900'>
                    <span className='text-xs text-red-600'>¥</span> 600
                </p>
            </div>
          </div>  
        </div>
    </section>
  )
};

export default HomeContainer