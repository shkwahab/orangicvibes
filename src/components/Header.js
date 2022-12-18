import React, {  useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BiSearch, BiUser } from "react-icons/bi"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
// import { HiBars3 } from "react-icons/hi2"
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
   const[hero1,SetHero1]=useState(true);
   const[hero2,SetHero2]=useState(true);
   const[hero3,SetHero3]=useState(true);

   setTimeout(()=>{

       if(hero1===true){
           SetHero1(false);
           SetHero2(false);
           SetHero3(true);
       }
    
   else if(hero2===false){
        SetHero1(false);
        SetHero2(true);
        SetHero3(false);
    }
    else if(hero3===false){
        SetHero2(true);
        SetHero1(true);
        SetHero3(true);
    }
  
   },3000)
    return (
        <>
  
            <section id="navbar" className='bg-white  sticky top-0 z-10'>
                <div className=" container">
                    <div className="row    align-self-center items-center">
                        <div className="col-lg-3  py-4 relative ">
                            <h3 className='font-medium'>
                                {props.sitetitle}
                            </h3>
                        </div>
                        <div className="col-lg-6  ">
                            <ul className="nav justify-center">
                                <li className=" cursor-pointer py-4 nav-item mx-2">{props.category1}</li>
                                <div onMouseEnter={ShopSlider} className=" py-4 cursor-pointer  mx-2">
                                    <div className="flex items-center cursor-pointer">
                                        <li className=" ">{props.category2}</li>
                                        <IoIosArrowDown />
                                    </div>
                                </div>
                                <div onMouseEnter={ShopSlide} onMouseLeave={ShopSlidelift} className={`top-16  ${isShopSlider ? "" : "hidden"} absolute py-4  left-[12rem]  justify-center  `}>
                                    <div className=" border-t-2 border-[#95AE3C]">
                                    <div className="   container-fluid  rounded-b-md
                                      bg-food bg-cover shadow-lg  bg-right px-4 py-8">
                                        <div className="row text-black  w-[800px]">
                                            <div className="col-3">
                                                <div className="">
                                                    <h5 className='text-[#2C296D]'>
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
                                                            <li className=" invisible">
                                                            space
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
                                            <div className="col-3">
                                                <h5 className='text-[#2C296D] font-semibold'>
                                                {props.ShopHeading2}
                                                </h5>
                                                </div>
                                            <div className="col-3">
                                                <h5 className='text-[#2C296D] font-semibold'>
                                                {props.ShopHeading3}
                                                </h5>
                                                </div>
                                            <div className="col-3">
                                                <h5 className='text-[#2C296D] font-semibold'>
                                                {props.ShopHeading4}
                                                </h5>
                                                </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <li className=" cursor-pointer py-4 nav-item mx-2">{props.category3}</li>
                                <li className=" cursor-pointer py-4 nav-item mx-2">{props.category4}</li>
                                <li className=" cursor-pointer py-4 nav-item mx-2">{props.category5}</li>
                                <li className=" cursor-pointer py-4 nav-item mx-2">{props.category6}</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-4  flex justify-end ">
                            <div className="flex ">
                                <div className=" mx-2">
                                    <div className=" rounded-full p-2  bg-[#F5F2FF]">
                                        <BiSearch className=' text-xl text-gray-500'/>
                                    </div>
                                </div>
                                <div className=" mx-2">
                                    <div className=" rounded-full p-2  bg-[#FFF3EC]">
                                        <BiUser className=' text-xl text-gray-500'/>
                                    </div>
                                </div>
                                <div className= " mx-2">
                                    <div className=" rounded-full p-2  bg-[#ECFBFF]">
                                        <FiHeart className=' text-xl text-gray-500'/>
                                    </div>
                                </div>
                                <div className=" mx-2">
                                    <div className=" rounded-full p-2  bg-[#FEEFD0]">
                                        <HiOutlineShoppingBag className=' text-xl text-gray-500'/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                    <div className=" bg-black h-[1px] bg-opacity-10 "></div>
            </section>

            <section id="hero">
                <section id="slider1" className={`${hero1?"":"hidden"}`}>
                <div className=" container-fluid mt-[1px] ">
                     <div className="row bg-[#faf5f5] bg-opacity-50   ">
                        <div className="col-7  py-28">
                            <div className="col ml-10">
                                <h4>
                                    Top Seller in the Week
                                </h4>
                                <h1 className=' w-9/12 font-medium my-8 lg:text-7xl'>
                                    Choose Your Healty Life Style
                                </h1>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, culpa aspernatur! Veniam veritatis officia sunt ex, ipsum dolore necessitatibus repudiandae.
                                </p>
                                <button className=" bg-[#95AE3C] hover:font-medium my-6 text-white py-[12px] text-lg rounded-full px-12  ">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="col-5" >
                            <div className=" flex justify-end mt-40 w-11/12">
                            <img src="/hero1.png" alt="" />
                            </div>
                        </div>
                     </div>
                </div>
                </section>
                <section id="slider2" className={`${hero2?"hidden":""}`}>
                <div className=" container-fluid mt-[1px] ">
                     <div className="row bg-[#faf5f5] bg-opacity-50   ">
                        <div className="col-7  py-28">
                            <div className="col ml-10">
                                <h4>
                                    Top Seller in the Week
                                </h4>
                                <h1 className=' w-8/12 font-medium my-8 lg:text-7xl'>
                                   The Best Health Fresh
                                </h1>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, culpa aspernatur! Veniam veritatis officia sunt ex, ipsum dolore necessitatibus repudiandae.
                                </p>
                                <button className=" bg-[#95AE3C] hover:font-medium my-6 text-white py-[12px] text-lg rounded-full px-12  ">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="col-5" >
                            <div className=" flex justify-end mt-40 w-11/12">
                            <img src="/hero2.png" alt="" />
                            </div>
                        </div>
                     </div>
                </div>
                </section>
                <section id="slider3" className={`${hero3?"hidden":""}`}>
                <div className=" container-fluid mt-[1px] ">
                     <div className="row bg-[#faf5f5] bg-opacity-50   ">
                        <div className="col-7  py-28">
                            <div className="col ml-10">
                                <h4>
                                    Top Seller in the Week
                                </h4>
                                <h1 className=' w-10/12 font-medium my-8 lg:text-7xl'>
                                   Fresh Bread Oatmeal Crumble
                                </h1>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, culpa aspernatur! Veniam veritatis officia sunt ex, ipsum dolore necessitatibus repudiandae.
                                </p>
                                <button className=" bg-[#95AE3C] hover:font-medium my-6 text-white py-[12px] text-lg rounded-full px-12  ">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="col-5" >
                            <div className=" flex justify-end mt-40 w-11/12">
                            <img src="/hero3.png" alt="" />
                            </div>
                        </div>
                     </div>
                </div>
                </section>
            </section>
        </>
    )
}

export default Navbar