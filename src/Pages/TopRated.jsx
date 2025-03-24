import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import Image1 from "/src/assets/Image1.png";
import Image2 from "/src/assets/Image2.png";
import Image3 from "/src/assets/Image3.png";
import Image4 from "/src/assets/Image4.png";
import Image5 from "/src/assets/Image5.png";


const allProducts = [
  { id: 1, img: Image1, title: "Product 1", rating: 4.8, price: "$49.99" },
  { id: 2, img: Image2, title: "Product 2", rating: 4.7, price: "$39.99" },
  { id: 3, img: Image3, title: "Product 3", rating: 4.6, price: "$59.99" },
  { id: 4, img: Image4, title: "Product 4", rating: 4.5, price: "$29.99" },
  { id: 5, img: Image5, title: "Product 5", rating: 4.4, price: "$19.99" },
  { id: 6, img: Image1, title: "Product 6", rating: 4.3, price: "$89.99" },
  { id: 7, img: Image2, title: "Product 7", rating: 4.2, price: "$99.99" },
  { id: 8, img: Image3, title: "Product 8", rating: 4.1, price: "$79.99" },
];

function TopRated() {
  const [visibleProducts, setVisibleProducts] = useState(5);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <div className='mt-14 mb-12'>
      <div className='container mx-auto'>

        {/* Header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-yellow-500'>Top Rated Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Rated</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Check out our top-rated products</p>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
          {allProducts.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className='p-4 bg-white shadow-md rounded-lg text-center'>
              <img src={product.img} alt={product.title} className='h-[220px] w-[150px] object-cover rounded-md' />
              <div className='mt-3'>
                <h3 className='font-semibold'>{product.title}</h3>
                <p className='text-sm text-gray-600'>{product.price}</p>
                <div className='flex justify-center items-center gap-1'>
                  <FaStar className='text-yellow-400' />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir Plus" */}
        {visibleProducts < allProducts.length && (
          <div className='flex justify-center mt-6'>
            <button 
              onClick={showMoreProducts} 
              className='bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition'>
              Voir Plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopRated;
