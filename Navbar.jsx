import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCaretUp, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "New Arrivals",
    link: "/#",
  },
];

console.log(Menu);
const DropdownLinks = [
  {
    id: 1,
    name: "Trending products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#services",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
 
  }
];
console.log( DropdownLinks);

function Navbar() {
  return (
    <div className="shadow-md bg-white duration-200 relative z-40 dark:bg-gray-900">
      {/* Upper navbar */}
      <div className="bg-primary">
        <div className="container flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold sm:text-3xl flex gap-2 items-center">
              <img src={logo} alt="logo" className="w-8" />
              Shopsy
            </a>
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
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>

          {/* Order button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
            text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>

          {/* Dark mode switch */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower navbar */}
      <div className="flex justify-center bg-gray-100 p-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}
       {/* Dropdown and links*/}
       <li>
        <a href="#" className="flex items-center gap-[2px] py-2"> Trending
          <span> <FaCaretUp
          className="transition-all duration-200 
          group-hover: rotate-180"/></span>
        </a>
       <div>
        <ul>
          {DropdownLinks.map((data) => (
            <li key={data.id}>
            <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
              {data.name}
            </a>
          </li>

           ))} 
          </ul>
       </div>
       </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
