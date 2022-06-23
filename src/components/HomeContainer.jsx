import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heropData } from '../utils/data';


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
        <div className='py-2 flex-1 flex flex-col items-start 
        justify-center gap-6'>
            <div className='flex items-center gap-2 justify-center bg-amber-100
            px-4 py-1 rounded-full'>
            <p className='text-base text-amber-500 font-semibold'> 
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
            The Fastest Delivery in <span className='text-amber-500 text-[3rem] lg:text-[5rem]'>Yokohama</span>
            </p>

            <p className='text-base text-zinc-700 text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Dolor optio itaque delectus tenetur exercitationem! Saepe cum, 
            blanditiis repellat corporis sint reprehenderit aperiam id nemo 
            nostrum voluptatibus, molestias obcaecati rerum necessitatibus?
            </p>

            <button type='button' 
            className='bg-gradient-to-br from-amber-300 to-amber-500 w-full 
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

          <div className='w-full h-full absolute top-0 
          left-0 flex items-center justify-center
           py-4 gap-4 flex-wrap'>
            {heropData && heropData.map(n =>(
              <div key={n.id} className='lg:w-190 p-4 bg-rose-200 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
              <img 
              src={n.imageSrc} 
              className='w-20 lg:w-40 -mt-10 lg:-mt-20'
              alt="I1" />
              <p className='text-base lg:text-xl font-semibold text-zinc-700 mt-2 lg:mt-4'>{n.name}</p>

              <p className='text-xl text-gray font-semibold'>
                  {n.decp}
              </p>

              <p className='text-[12px] lg:text-sm font-semibold text-zinc-900 my-1 lg:my-3'>
                  <span className='text-xs text-red-600'>¥</span> {n.price}
              </p>
          </div>
            ))}
          </div>  
        </div>
    </section>
  )
};

export default HomeContainer