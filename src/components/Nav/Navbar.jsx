import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCaretUp, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/top-rated" },
  { id: 3, name: "Kids Wear", link: "/kids-wear" },
  { id: 4, name: "New Arrivals", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#services" },
  { id: 3, name: "Top Rated", link: "/#" },
];

function Navbar({ handleOrderPopup }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="shadow-md bg-white duration-200 relative z-40 dark:bg-gray-900">
      {/* Upper navbar */}
      <div className="bg-primary">
        <div className="container flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold sm:text-3xl flex gap-2 items-center">
              <img src={logo} alt="logo" className="w-8" />
              Shopsy
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                transition-all duration-300 rounded-full border border-gray-300
                px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* Order button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
            text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>

          {/* Dark mode switch */}
          <DarkMode />
        </div>
      </div>

      {/* Lower navbar */}
      <div className="flex justify-center bg-gray-100 p-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Trending {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md p-2">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
