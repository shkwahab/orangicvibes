import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BiSearch, BiUser } from "react-icons/bi"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { HiBars3 } from "react-icons/hi2"

const Navbar = (props) => {

    const [isShopSlider, SetShopSlider] = useState(false);
    const ShopSlider = () => {
        SetShopSlider(!isShopSlider);
    }
    


    return (
        <>
            <section id="nav">
                <div className=" mx-4 lg:mx-20  flex  justify-between items-center">
                    <div className="py-4 items-center  lg:hidden flex flex-1">
                        <HiBars3 className=' text-3xl  text-blue-900' />
                    </div>
                    <div className=" py-4 flex-1 sm:text-2xl font-semibold  text-[#96AE01]" id="logo">
                        {props.sitetitle}
                    </div>

                    <div className='lg:block  hidden '>
                        <ul className="justify-center    lg:flex  font-medium text-gray-600 ">
                            <div className='mx-3 sm:flex items-end  gap-1 hover:text-[#96AE01] cursor-pointer transition-all  py-4'>
                                <li className=" text-sm">{props.category1}</li>
                            </div>
                            <div onClick={ShopSlider} className={`mx-3 sm:flex lg:items-end gap-1  cursor-pointer transition-all  py-4`}>
                                <li className="  hover:text-[#96AE01]  text-sm">{props.category2}</li>
                                <IoIosArrowDown className='  hover:text-[#96AE01] text-sm ' />
                            </div>
                                <div  className=' absolute top-[75px] flex justify-center border-[#96AE01] border-t-2 ' >
                                        <div className={`${isShopSlider ? "" : "hidden"}  grid   grid-cols-4   relative px-8 py-12  shadow-md rounded-b-lg  bg-white `}>
                                                <div className='mx-4 ' >
                                                    <h2 className=" text-[#96AE01] mb-8  font-semibold uppercase">
                                                        {props.ShopHeading1}
                                                    </h2>
                                                    <li className=" hover:animate-slideleft hover:left-[20px]  list-none cursor-pointer  my-2  relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem1}</li>
                                                    <li className=" hover:animate-slideleft  hover:left-[20px]  list-none cursor-pointer  my-2  relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem2}</li>
                                                    <li className=" hover:animate-slideleft hover:left-[20px]  list-none cursor-pointer  my-2 relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem3}</li>
                                                    <li className=" hover:animate-slideleft hover:left-[20px]   list-none cursor-pointer  my-2 relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem4}</li>
                                                    <li className=" hover:animate-slideleft  hover:left-[20px]  list-none cursor-pointer  my-2 relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem5}</li>
                                                    <li className=" hover:animate-slideleft hover:left-[20px]   list-none cursor-pointer  my-2 relative   transition-all hover:text-[#96AE01] ">{props.Shop1ListItem6}</li>
                                                </div>
                                                <div className="mx-4">
                                                    <h2 className=" text-[#96AE01]  font-semibold mb-8 uppercase">
                                                        {props.ShopHeading2}
                                                    </h2>
                                                </div>
                                                <div className="mx-4">
                                                    <h2 className=" text-[#96AE01]  font-semibold mb-8 uppercase">
                                                        {props.ShopHeading3}
                                                    </h2>
                                                </div>
                                                <div className="mx-4">
                                                    <h2 className=" text-[#96AE01]  font-semibold mb-8 uppercase">
                                                        {props.ShopHeading4}
                                                    </h2>
                                                </div>
                                            </div>
                                       
                                   
                                </div>

                            <div className='mx-3 sm:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all  py-4'>
                                <li className=" text-sm">{props.category3}</li>
                                <IoIosArrowDown className=' text-sm ' />
                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all  py-4'>
                                <li className=" text-sm">{props.category4}</li>
                                <IoIosArrowDown className=' text-sm ' />
                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all  py-4'>
                                <li className=" text-sm">{props.category5}</li>

                            </div>
                            <div className='mx-3 lg:flex lg:items-end   gap-1 hover:text-[#96AE01] cursor-pointer transition-all  py-4'>
                                <li className=" text-sm">{props.category6}</li>
                            </div>
                        </ul>
                    </div>

                    <div className="py-4 lg:flex-1 flex  justify-end">
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
                <hr className="bg-black h-[2px] opacity-10 " />

            </section>

        </>
    )
}

export default Navbar