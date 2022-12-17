import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BiSearch, BiUser } from "react-icons/bi"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { HiBars3 } from "react-icons/hi2"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar = (props) => {

    const [isShopSlider, SetShopSlider] = useState(false);
    const ShopSlider = () => {
        SetShopSlider(!isShopSlider);
    }
    const ShopSlide = () => {
        if (isShopSlider === false) {
            SetShopSlider(!isShopSlider);
        }
    }
    const ShopSlidelift = () => {
        if (isShopSlider === true) {
            SetShopSlider(!isShopSlider);
        }
    }
    const [BlogPages, SetBlogPages] = useState(false);
    const BlogPageSlider = () => {
        if (ShopSlider === true)
            SetShopSlider(!isShopSlider);
        SetBlogPages(!BlogPages);
    }


    return (
        <>
  
            <section id="navbar ">
                <div className=" container    ">
                    <div className="row  bg-white  align-self-center items-center">
                        <div className="col-lg-3  py-2 relative ">
                            <h1 className='text-2xl font-medium'>
                                {props.sitetitle}
                            </h1>
                        </div>
                        <div className="col-lg-6  ">
                            <ul className="nav justify-center">
                                <li className=" py-2 nav-item mx-2">{props.category1}</li>
                                <div onMouseEnter={ShopSlider} className=" py-2 cursor-pointer  mx-2">
                                    <div className="flex items-center cursor-pointer">
                                        <li className=" ">{props.category2}</li>
                                        <IoIosArrowDown />
                                    </div>
                                </div>
                                <div onMouseEnter={ShopSlide} onMouseLeave={ShopSlidelift} className={`top-12  ${isShopSlider ? "" : "hidden"} absolute py-2  left-[12rem]  justify-center  `}>
                                    <div className=" border-t-2 border-green-300">
                                    <div className="  container-fluid  rounded-b-md bg-gray-300 p-3">
                                        <div className="row  w-[800px]">
                                            <div className="col-3">
                                                <div className="">
                                                    <h5>
                                                        {props.ShopHeading1}
                                                    </h5>
                                                    <div  className="row shopitems flex-col">
                                                        <div  className="col ">
                                                            <li  className="  hover:animate-slideleft  hover:translate-x-5  cursor-pointer">
                                                            {props.Shop1ListItem1}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 cursor-pointer">
                                                            {props.Shop1ListItem2}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 cursor-pointer">
                                                            {props.Shop1ListItem3}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 cursor-pointer">
                                                            {props.Shop1ListItem4}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 cursor-pointer">
                                                            {props.Shop1ListItem5}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 translate  hover:animate-slideleft cursor-pointer">
                                                            {props.Shop1ListItem6}
                                                            </li>
                                                            </div>
                                                        <div className="col">
                                                            <li className="  hover:animate-slideleft hover:translate-x-5 translate  hover:animate-slidelef cursor-pointer">
                                                            {props.Shop1ListItem7}
                                                            </li>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">ShopCategory2</div>
                                            <div className="col-3">ShopCategory3</div>
                                            <div className="col-3">ShopCategory4</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <li className=" py-2 nav-item mx-2">{props.category3}</li>
                                <li className=" py-2 nav-item mx-2">{props.category4}</li>
                                <li className=" py-2 nav-item mx-2">{props.category5}</li>
                                <li className=" py-2 nav-item mx-2">{props.category6}</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-2  flex justify-end ">
                            <div className="row">
                                <div className="col-3 bg-green-400">Icons</div>
                                <div className="col-3 bg-green-500">Icons</div>
                                <div className="col-3 bg-green-700">Icons</div>
                                <div className="col-3 bg-green-800">Icons</div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className=" bg-black h-[1px] bg-opacity-10 "></div>
            </section>

        </>
    )
}

export default Navbar