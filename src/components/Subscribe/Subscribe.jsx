import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Subscribe() {
  return (
    <div 
      data-aos="fade-up" 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-6"
    >
      <div className="max-w-lg mx-auto text-center space-y-6">
        {/* Titre */}
        <h1 className="text-3xl font-bold">
          Abonnez-vous pour recevoir nos nouveautés !
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300">
          Soyez les premiers informés des nouvelles offres et réductions exclusives.
        </p>

        {/* Formulaire d'abonnement */}
        <div className="flex items-center bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
          <div className="px-4 text-gray-500">
            <FaEnvelope size={20} />
          </div>
          <input 
            type="email" 
            placeholder="Entrez votre email" 
            className="flex-1 px-4 py-3 focus:outline-none bg-transparent text-gray-900 dark:text-white"
          />
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-3 rounded-r-lg">
            S'abonner
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
