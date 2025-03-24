import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left" data-aos="fade-up">
        
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">Shopsy</h1>
            <p className="text-sm text-gray-400 mt-2">
              Votre destination shopping avec les meilleures offres et une livraison rapide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-500">Liens utiles</h2>
            <nav className="mt-3 space-y-2">
              <a href="#" className="block text-gray-400 hover:text-yellow-500 transition duration-300">Accueil</a>
              <a href="#" className="block text-gray-400 hover:text-yellow-500 transition duration-300">À propos</a>
              <a href="#" className="block text-gray-400 hover:text-yellow-500 transition duration-300">Services</a>
              <a href="#" className="block text-gray-400 hover:text-yellow-500 transition duration-300">Contact</a>
            </nav>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-00">Suivez-nous</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-gray-500 text-sm">
          <p>© 2025 Shopsy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
