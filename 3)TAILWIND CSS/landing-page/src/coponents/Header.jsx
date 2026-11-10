import React from "react";

function Header() {
  return (
    <div className="container mx-auto bg-green-200">
      <nav className="flex justify-between items-center">
        <div className="h-16 w-16">
          <a href="#">
            <img
              className="rounded-full"
              src="https://picsum.photos/200"
              alt="picture"
            />
          </a>
        </div>
        <ul className="md:flex hidden space-x-6">
          <li className="font-medium text-black-700 hover:text-white">
            Servicer
          </li>
          <li className="font-medium text-black-700 hover:text-white">
            Pricing
          </li>
          <li className="font-medium text-black-700 hover:text-white">About</li>
          <li className="font-medium text-black-700 hover:text-white">
            Contact
          </li>
        </ul>
        <button className="hidden md:block font-medium bg-green-500 rounded-full px-6 py-2 text-white hover:bg-blue-300">
          SignUp
        </button>
        <button onClick={()=>{document.querySelector(".mobile-icon").classList.toggle("hidden")}} className="md:hidden font-medium bg-green-500 rounded-full px-6 py-2 text-white hover:bg-blue-300">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </nav>
        <ul  className="md:hidden flex flex-col items-center  space-y-6 mobile-icon">
          <li className="font-medium text-black-700 hover:text-white">
            Servicer
          </li>
          <li className="font-medium text-black-700 hover:text-white">
            Pricing
          </li>
          <li className="font-medium text-black-700 hover:text-white">About</li>
          <li className="font-medium text-black-700 hover:text-white">
            Contact
          </li>
          <li>
        <button className="font-medium bg-green-500 rounded-full px-6 py-2 text-white hover:bg-blue-300">
          SignUp
        </button></li>
        </ul>
    </div>
  );
}

export default Header;
