import React from 'react';
import image6 from "../../assets/image6.png";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-14'>
          {/* Image section */}
          <div data-aos="zoom-in">
            <img 
              src={image6} 
              alt="Winter Sale" 
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' 
            />
          </div>

          {/* Text details section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold ' data-aos='fade-up'>
              Winter Sale up to 50% off
            </h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5' data-aos='fade-up'>
              Hello, my name is Myassa. I'm a CS student at the University of Boumerdes.
            </p>

            {/* Features */}
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Secure Payments</p>
              </div>

              <div className='flex items-center gap-4' >
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p>Fast Delivery</p>
              </div>

              <div className='flex items-center gap-4 '>
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>On-the-Go Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
