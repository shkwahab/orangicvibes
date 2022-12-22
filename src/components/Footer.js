import React from 'react'
import { MdOutlinePayment, MdDeliveryDining } from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { FaRegListAlt } from "react-icons/fa"
import { TbDiscount2 } from "react-icons/tb"
import { BsFacebook, BsInstagram, BsPinterest, BsReddit, BsYoutube } from "react-icons/bs"

const Footer = () => {
    return (
        <>
            <div className="pb-8  bg-footer bg-no-repeat">
                <div className="py-10 container">
                    <div id="services" className="flex justify-center">
                        <div className=" font-Jost text-center">
                            <div className="flex justify-center">
                                <MdDeliveryDining className='text-4xl text-white' />
                            </div>
                            <div className=' text-white uppercase text-sm tracking-wide font-medium'>
                                Fast Delivery
                            </div>
                            <div className='  text-gray-300'>
                                Across West & East India
                            </div>
                        </div>
                        <div className="mx-10 font-Jost  text-center">
                            <div className="flex justify-center">
                                <MdOutlinePayment className='text-4xl text-white' />
                            </div>
                            <div className=' text-white uppercase text-sm tracking-wide font-medium'>
                                Safe Payments
                            </div>
                            <div className=' text-gray-300'>
                                100% Secure Payment

                            </div>
                        </div>

                        <div className=" font-Jost  text-center">
                            <div className="flex justify-center">
                                <TbDiscount2 className='text-4xl text-white' />
                            </div>
                            <div className=' text-white uppercase text-sm tracking-wide font-medium'>
                                ONLINE DISCOUNT
                            </div>
                            <div className=' text-gray-300'>
                                Add Multi-buy Discount
                            </div>
                        </div>

                        <div className="mx-10 font-Jost  text-center">
                            <div className="flex justify-center">
                                <RiMessage2Line className='text-4xl text-white' />
                            </div>
                            <div className=' text-white uppercase text-sm tracking-wide font-medium'>
                                HELP CENTER
                            </div>
                            <div className=' text-gray-300'>
                                Dedicated 24/7 Support
                            </div>
                        </div>

                        <div className=" font-Jost  text-center">
                            <div className="flex justify-center">
                                <FaRegListAlt className='text-4xl text-white' />
                            </div>
                            <div className=' text-white uppercase text-sm tracking-wide font-medium'>
                                CURATED ITEMS
                            </div>
                            <div className=' text-gray-300 '>
                                From Handpicked Sellers
                            </div>
                        </div>
                    </div>


                    <div className="my-10 bg-opacity-20 bg-gray-400 h-[.2px]" />
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 font-Jost ">
                                    <div className="text-sm mb-8  uppercase font-semibold text-white">
                                        LET US HELP YOU
                                    </div>
                                    <div className=" text-gray-300 ">
                                        If you have any question, please
                                        contact us at:
                                        <span className=" mx-1 font-semibold text-prim">
                                            support@example.com
                                        </span>
                                    </div>
                                    <div className=" text-sm text-gray-300 font-semibold mt-8 mb-1">
                                        Social Media:
                                    </div>
                                    <div className=" flex">
                                        <div className="m-1">
                                            <BsFacebook className=' text-white text-xl' />
                                        </div>
                                        <div className="m-1">
                                            <BsInstagram className=' text-white text-xl' />
                                        </div>
                                        <div className="m-1">
                                            <BsPinterest className=' text-white text-xl' />
                                        </div>
                                        <div className="m-1">
                                            <BsReddit className=' text-white text-xl' />
                                        </div>
                                        <div className="m-1">
                                            <BsYoutube className=' text-white text-xl' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 font-Jost ">
                                    <div className="text-sm mb-8  uppercase font-semibold text-white">
                                        LOOKING FOR ORAGANIC VIBES?
                                    </div>
                                    <div className=" text-gray-300 mb-8">
                                        Dummy Place, Dummy City, Dummy Street, Pakistan.
                                    </div>
                                    <div className=" text-semibold text-gray-300 ">
                                        <div>
                                            Monday – Friday:
                                            <span className="mx-1 text-white">
                                                8:10 AM – 6:10 PM
                                            </span>
                                        </div>
                                        <div>
                                            Saturday:
                                            <span className="mx-1 text-white">
                                                10:10 AM – 06:10 PM
                                            </span>
                                        </div>
                                        <div>
                                            Sunday:
                                            <span className="mx-1 text-white">
                                                Close
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 ">
                                    <div className=" font-Jost ">
                                        <div className=" text-white font-semibold">
                                            HOT CATEGORIES
                                        </div>
                                        <ul id="start" className=' text-gray-300 '>
                                            <li className=' my-1'>Fruits & Vegetables</li>
                                            <li className=' my-1'>Dairy Products</li>
                                            <li className=' my-1'>Package Foods</li>
                                            <li className=' my-1'>Beverage</li>
                                            <li className=' my-1'>Health & Wellness</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="  border-l-[.5px] border-opacity-10 border-white h-[250px] absolute 
                             "/>
                            <div className=" ml-8 font-Jost text-white font-semibold">
                                OUR NEWSLETTER
                            </div>
                            <div className="ml-8 mt-8  text-gray-300 font-Jost ">
                                Subscribe to the Orfarm mailing list to receive updates
                                on new arrivals & other information.
                            </div>
                            <div>
                                <div className=" flex my-4 ml-8 bg-white w-[300px]">
                                    <input type="email" name="newsletter" id="newsletter" placeholder='Enter Your Email' className='h-[50px] w-[140px] border-none outline-none  p-2' />
                                    <input type="submit" value="Subscribe" className='  bg-prim px-[16px] py-[13px] text-white absolute  right-24  w-[140px] uppercase font-semibold font-Jost' />
                                </div>
                                <div className="ml-8 text-white font-Jost flex">
                                    <input type="checkbox" name="policy" id="checkpolicy" className='  accent-[#95AE3C] ' />
                                    <div className="ml-2">
                                        I accept terms & conditions & privacy policy.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            <div className="my-10  bg-opacity-20 bg-gray-400 h-[.2px]" />
                    <div className="container ">
                        <div className="flex justify-between font-Jost text-gray-300 ">
                            <div>
                            &copy; CopyRight 
                                &nbsp;
                            <span className="text-prim">
                                {`Organic Vibes all rights reserved.`}
                                &nbsp;
                            </span>
                             Made by
                             <span className=" text-prim">
                                &nbsp;
                             {`Sheikh Abdul Wahab Ali.`}
                                </span> 
                            </div>
                            <div className="cursor-pointer">
                                <img src="/footer-payment.png" alt="payments" />
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default Footer