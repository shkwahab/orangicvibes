import React from 'react'
import { MdOutlinePayment , MdDeliveryDining} from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { FaRegListAlt } from "react-icons/fa"
import { TbDiscount2 } from "react-icons/tb"


const Footer = () => {
    return (
        <>
            <div className="h-[600px] py-40  bg-footer bg-no-repeat">
                <div className="container">
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
``
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


                    <div className="my-4 bg-opacity-20 bg-gray-400 h-[.2px]" />
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 border-2 h-[50px] border-red-500">

                                </div>
                                <div className="col-4 border-2 h-[50px] border-red-600"></div>
                                <div className="col-4 border-2 h-[50px] border-red-700"></div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="  h-[50px] border-2 border-red-900"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer