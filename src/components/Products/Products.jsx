import React, { useState } from 'react';
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import { FaStar } from "react-icons/fa6"; // Correction de l'import

const ProductsData = [
  { id: 1, img: Image2, title: "Women", rating: 4, color: "red", aosDelay: "100" },
  { id: 2, img: Image1, title: "Men", rating: 3.5, color: "white", aosDelay: "200" },
  { id: 3, img: Image3, title: "Kids", rating: 5, color: "white", aosDelay: "300" },
  { id: 4, img: Image4, title: "Hey", rating: 2, color: "white", aosDelay: "300" },
  { id: 5, img: Image5, title: "CC", rating: 4.5, color: "white", aosDelay: "300" },
  { id: 6, img: Image2, title: "Shoes", rating: 4.8, color: "black", aosDelay: "400" },
  { id: 7, img: Image3, title: "Hats", rating: 3.9, color: "blue", aosDelay: "500" },
  { id: 8, img: Image4, title: "Bags", rating: 4.7, color: "brown", aosDelay: "600" },
  { id: 9, img: Image5, title: "Watches", rating: 4.2, color: "gray", aosDelay: "700" },
];

function Products() {
  const [visibleProducts, setVisibleProducts] = useState(5); // Afficher d'abord 5 produits

  // Fonction pour afficher plus de produits
  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 4); // Afficher 4 produits de plus à chaque clic
  };

  return (
    <div className='mt-14 mb-12'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-yellow-500'>Top Selling Products for You</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Find the best deals on our products</p>
        </div>

        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-5'>
          {/* Card section */}
          {ProductsData.slice(0, visibleProducts).map((data) => (
            <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id} 
              className='p-4 bg-white shadow-md rounded-lg text-center'
            >
              <img 
                src={data.img} 
                alt={data.title} 
                className='h-[220px] w-[150px] object-cover rounded-md'
              />
              <div className='mt-3'>
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-sm text-gray-600'>{data.color}</p>
                <div className='flex justify-center items-center gap-1'>
                  <FaStar className='text-yellow-400'/>
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Show More */}
        {visibleProducts < ProductsData.length && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={handleShowMore}
              className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
