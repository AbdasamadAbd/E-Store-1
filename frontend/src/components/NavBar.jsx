import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
    const {setShowSearch, getCardCount, navigate} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to="/">
            <img src={assets.logo} className='w-36' alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            
            <NavLink to="/"
                className="flex flex-col items-center gap-1"
            >
                <p>Home</p>
                <hr className='hidden w-1/2 border-none h-[1.5px] bg-gray-700 ' />
            </NavLink>
            
            <NavLink to="/collection"
                className="flex flex-col items-center gap-1"
            >
                <p>COLLECTION</p>
                <hr className='hidden w-1/2 border-none h-[1.5px] bg-gray-700 ' />
            </NavLink>
            
            <NavLink to="/about"
                className="flex flex-col items-center gap-1"
            >
                <p>ABOUT</p>
                <hr className='hidden w-1/2 border-none h-[1.5px] bg-gray-700 ' />
            </NavLink>
            
            <NavLink to="/contact"
                className="flex flex-col items-center gap-1"
            >
                <p>CONTACT</p>
                <hr className='hidden w-1/2 border-none h-[1.5px] bg-gray-700 ' />
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" 
                onClick={()=> setShowSearch(true)}
            />
            <div className="group relative">
                <Link to="/login">
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                </Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className='cursor-pointe hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate("/orders")} className='cursor-pointe hover:text-black'>Orders</p>
                        <p className='cursor-pointe hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <span className='absolute right-[-5px] bottom-[-5px] w-4 aspect-square leading-4 text-center  bg-black text-white rounded-full text-[8px]'>{getCardCount()}</span>
            </Link>

            <img src={assets.menu_icon} className='sm:hidden w-5 cursor-pointer' alt="" 
                onClick={()=> setVisible(true)}
            />


            {/* sideBar menu for small screens */}

                {/* this div is relative to the root window (html) */}
            <div className={`${visible? "w-full" : "w-0"} absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={()=> setVisible(false)} className="w-fit p-3 flex items-center gap-4 cursor-pointer">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <span>Back</span>
                    </div>

                    <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
                
                </div>
            </div>

        </div>
    </div>

  )
}

export default NavBar