import React from 'react'
import casual from "../../assets/casual.png";
import vintage from "../../assets/vintage.png";
import oldmoney from "../../assets/oldmoney.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: casual,
    title: "Casual wear",
    description :"jsdilufdsjsdff"
   
  },
  {
    id: 2,
    img: vintage,
    title: "Vintage",
     description :"jsdilufdsjsdff"
   
  },
  {
    id: 3, // Correction de l'ID (au lieu de 2 en double)
    img: oldmoney,
    title: " old money",
     description :"jsdilufdsjsdff"
   
  },
 
];


function TopProducts({handleOrderPopup}) {
  return (
    <div>
      <div className='container'>
        {/* header section  */}
        <div className='text-left mb-24 '>
          <p  data-aos="fade-up"className='text-sm text-yellow-500'>Top Rated Products for You</p>
          <h1   data-aos="fade-up"className='text-3xl font-bold'> Best Products</h1>
          <p  data-aos="fade-up" className='text-xs text-gray-600'>Find the best deals on our products</p>

        </div>
        {/* body section  */}
<div className='grid grid-cols-1 sm:grid-cols-2
md:grid-cols-5 place-items-center gap-5'> 
    {
        ProductsData.map((data)=> (
            <div data-aos="zoom-in"
            className='rounded-2xl bg-white dark:bg-gray-800 
            hover:bg-black/80 dark:hover:bg-primary hover:text-white
             relative shadow-xl duration-300 group max-w-[300px] '>
                {/* image section  */}
            <div className='h-[150px]'> 
            <img src={data.img}
            className='h-[220px] max-w-[140px] 
            mx-auto transform -translate-y-20 
            group-hover:scale-105 duration-300 drop-shadow-md'/>
            </div>
            {/* details section  */}
            <div className='p-4 text-center flex flex-col items-center'></div>
            {/* star rating  */}
   <div className='w-full flex items-center justify-center gap-1'>
     <FaStar className=' text-yellow-400'/>
      <FaStar className=' text-yellow-400'/>
       <FaStar className=' text-yellow-400'/>
        <FaStar className=' text-yellow-400'/>
   </div>
   <h1 className='text-xl font-bold  
   flex items-center justify-center'>{data.title}</h1>
   <p className='text-gray-500 group-hover:text-white  
   duration-300 text-sm  line-champ-2 
    flex items-center justify-center'>{data.description}</p>
   <div className=' flex items-center justify-center'>

   <button className='bg-primary hover:scale-105 duration-300
    text-white py-1 px-2 rounded-full mt-4 group-hover:bg-white
     group-hover:text-yellow-600 ' onClick={handleOrderPopup}>Order Now</button> </div>
            </div>

))
    }
</div>
      </div>
    </div>
  )
}

export default TopProducts
