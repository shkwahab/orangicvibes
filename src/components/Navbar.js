import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BiSearch, BiUser } from "react-icons/bi"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { HiBars3 } from "react-icons/hi2"
const Navbar = (props) => {
    const [isShopSlider, SetShopSlider] = useState(true)
    const ShopSlider = () => {
        SetShopSlider(!isShopSlider);
    }
    const ShopSliderClose = () => {
        SetShopSlider(!isShopSlider);
    }
    return (
        <>
            <section id="nav">
                <div className="py-4 mx-4 lg:mx-20  flex  justify-between items-center">
                    <div className=" items-center  lg:hidden flex flex-1">
                        <HiBars3 className=' text-3xl  text-blue-900' />
                    </div>
                    <div className="  flex-1 sm:text-2xl font-semibold  text-[#96AE01]" id="logo">
                        {props.sitetitle}
                    </div>

                    <div className='lg:block hidden'>
                        <ul className="justify-center   lg:flex  font-medium text-gray-600 ">
                            <div className='mx-3 sm:flex items-end  gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category1}</li>
                            </div>
                            <div onMouseEnter={ShopSlider} onMouseLeave={ShopSliderClose}  className='mx-3 sm:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category2}</li>
                                <IoIosArrowDown className=' text-sm ' />

                            </div>
                            <div className='mx-3 sm:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category3}</li>
                                <IoIosArrowDown className=' text-sm ' />
                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category4}</li>
                                <IoIosArrowDown className=' text-sm ' />
                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category5}</li>

                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all duration-300'>
                                <li className=" text-sm">{props.category6}</li>
                            </div>
                        </ul>
                    </div>

                    <div className=" lg:flex-1 flex  justify-end">
                        <div className="flex">
                            <div className="bg-[#F5F2FF] sm:block hidden p-3 rounded-full cursor-pointer">
                                <BiSearch className=' text-xs sm:text-base text-gray-700' />
                            </div>
                            <div className="bg-[#FFF3EC] sm:block hidden p-3 rounded-full mx-4 cursor-pointer">
                                <BiUser className=' text-xs sm:text-base text-gray-800' />
                            </div>
                            <div className="bg-[#ECFBFF] sm:block hidden p-3 pt-[14px] rounded-full cursor-pointer">
                                <FiHeart className=' text-xs sm:text-base text-gray-700' />
                            </div>
                            <div className="bg-[#FEEFD0] p-3 pt-[14px] rounded-full cursor-pointer mx-4">
                                <HiOutlineShoppingBag className='text-xs sm:text-base text-gray-700' />
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="bg-black h-[2px] opacity-10" />
                <div className="hidden lg:block">
                <div id="ShopSlider" className={`${isShopSlider ? "lg:hidden" : ""}   border-[#96AE01] border-t-2 w-[88%] mx-auto`}>
                   <div className="grid grid-cols-4  px-8 py-12  shadow-md rounded-b-md  bg-white">
                    <div className="">Shop1</div>
                    <div className="">Shop2</div>
                    <div className="">Shop3</div>
                    <div className="">Shop4</div>
                   </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default Navbar