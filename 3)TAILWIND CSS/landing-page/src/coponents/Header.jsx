import React from 'react'

function Header() {
  return (
    <div className="container mx-auto bg-green-200">
        <nav className="flex justify-between items-center">
          <div className="h-16 w-16">
            <a href="#">
              <img className="rounded-full" src="https://picsum.photos/200" alt="picture" />
            </a>
          </div>
          <ul className="flex space-x-6">
            <li className="font-medium text-black-700 hover:text-white">Servicer</li>
            <li className="font-medium text-black-700 hover:text-white">Pricing</li>
            <li className="font-medium text-black-700 hover:text-white">About</li>
            <li className="font-medium text-black-700 hover:text-white">Contact</li>
          </ul>
        <button className="font-medium bg-green-500 rounded-full px-6 py-2 text-white hover:bg-blue-300" >SignUp</button>
        </nav>
      </div>
  )
}

export default Header