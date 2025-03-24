import React from "react";
import { FaStar } from "react-icons/fa6";
import Image1 from "/src/assets/Image1.png";
import Image2 from "/src/assets/Image2.png";
import Image3 from "/src/assets/Image3.png";
import Image4 from "/src/assets/Image4.png";

const kidsProducts = [
  { id: 1, img: Image1, title: "Kids Jacket", rating: 4.8, price: "$29.99", badge: "NEW IN", colors: ["#ff6666", "#ffcc00", "#00ccff"] },
  { id: 2, img: Image2, title: "Winter Coat", rating: 4.7, price: "$39.99", badge: "NEW COLOUR", colors: ["#ff0000", "#0000ff", "#00ff00"] },
  { id: 3, img: Image3, title: "Cute Dress", rating: 4.6, price: "$25.99", badge: "BEST SELLER", colors: ["#808080", "#000000", "#ffffff"] },
  { id: 4, img: Image4, title: "T-shirt & Shorts", rating: 4.5, price: "$19.99", badge: "LIMITED EDITION", colors: ["#ff0000", "#0000ff", "#ffff00"] },
];

function KidsWear() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Kids Wear Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kidsProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 relative">
            {/* Badge */}
            <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
            
            {/* Image */}
            <img src={product.img} alt={product.title} className="h-[220px] w-full object-cover rounded-md" />
            
            {/* Détails du produit */}
            <div className="mt-3 text-center">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
              <div className="flex justify-center items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            </div>
            
            {/* Couleurs disponibles */}
            <div className="flex justify-center gap-2 mt-2">
              {product.colors.map((color, index) => (
                <span key={index} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }}></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsWear;