import React, { useState } from 'react'
import { AiOutlineStar } from "react-icons/ai"
import Carousel from 'react-elastic-carousel';

const AllSpecialProducts = () => {
    const data = [
        {
            "_id": "1",
            "item_name": "Peach",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "2",
            "item_name": "Water Melon",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "3",
            "item_name": "Dragon Fruit",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "4",
            "item_name": "Peach",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "5",
            "item_name": "Water Melon",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "6",
            "item_name": "Dragon Fruit",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "7",
            "item_name": "Chill Fruits",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "8",
            "item_name": "Chill Fruits 2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "9",
            "item_name": "Chill Fruits 3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "10",
            "item_name": "Chill Fruits 4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "11",
            "item_name": "Chill Fruits 5",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "12",
            "item_name": "Chill Fruits 6",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },


    ]
    const data2 = [
        {
            "_id": "1",
            "item_name": "Peach V2",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "2",
            "item_name": "Melon V2",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "3",
            "item_name": "Fruit V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "4",
            "item_name": "Peach V2",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "5",
            "item_name": "Melon V2",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "6",
            "item_name": "Fruit V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "7",
            "item_name": "Chill V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "8",
            "item_name": "Chill 2 V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "9",
            "item_name": "Chill 3 V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "10",
            "item_name": "Chill 4 V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "11",
            "item_name": "Chill 5 V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "12",
            "item_name": "Chill 6 V2",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },


    ]
    const data3 = [
        {
            "_id": "1",
            "item_name": "Peach V3",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "2",
            "item_name": "Melon V3",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "3",
            "item_name": "Fruit V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "4",
            "item_name": "Peach V3",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "5",
            "item_name": "Melon V3",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "6",
            "item_name": "Fruit V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "7",
            "item_name": "Chill V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "8",
            "item_name": "Chill 2 V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "9",
            "item_name": "Chill 3 V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "10",
            "item_name": "Chill 4 V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "11",
            "item_name": "Chill 5 V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "12",
            "item_name": "Chill 6 V3",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },


    ]
    const data4 = [
        {
            "_id": "1",
            "item_name": "Peach V4",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "2",
            "item_name": "Melon V4",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "3",
            "item_name": "Fruit V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "4",
            "item_name": "Peach V4",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "5",
            "item_name": "Melon V4",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "6",
            "item_name": "Fruit V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "7",
            "item_name": "Chill V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "8",
            "item_name": "Chill 2 V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "9",
            "item_name": "Chill 3 V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "10",
            "item_name": "Chill 4 V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "11",
            "item_name": "Chill 5 V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },
        {
            "_id": "12",
            "item_name": "Chill 6 V4",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg",
            "type": "organic",
            "mfg": "August 3, 2022",
            "life": "60 Days"
        },


    ]
    const [getId, SetGetid] = useState(null);
    const [onfocus, SetFoucus] = useState(true);
    const [allproducts, SetShowAll] = useState(true);
    const [fresh_meat, SetFreshMeat] = useState(false);
    const [fresh_vegetables, SetFreshVegetables] = useState(false);
    const [Snack, SetSnack] = useState(false);
    const Fouse = () => {
        SetFoucus(!onfocus);
    }

    const Snackers = data4.map((Snack_Biscuits) => {
        return <div id={Snack_Biscuits._id} key={Snack_Biscuits._id} onMouseOver={Fouse} className={` w-[400px] cursor-pointer ${Snack ? "" : "hidden"} `} onMouseEnter={(e) => {
            SetGetid(e.currentTarget.id);
        }} onMouseLeave={() => {
            SetGetid(null);
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Snack_Biscuits.img_url} alt={Snack_Biscuits.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize">
                        {Snack_Biscuits.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left'>
                        {Snack_Biscuits.item_name}
                    </h5>
                    <div className="flex">
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                    </div>
                    <div className=" text-left flex mt-2">

                        <h5 className=" text-red-400">
                            {"$" + Snack_Biscuits.price}
                        </h5 >
                        <h6 className='mt-1 text-black line-through mx-1'>
                            ${Snack_Biscuits.price * (100 - Snack_Biscuits.discout) / 100}
                        </h6>

                    </div>
                    {Snack_Biscuits._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm m-1  uppercase'>
                                    {`Type: ${Snack_Biscuits.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`Mfg: ${Snack_Biscuits.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`LIFE: ${Snack_Biscuits.life}`}
                                </div>

                            </div>
                        </>
                        : ""
                    }
                </div>
            </div>

        </div>
    })
    const Fresh_Veges = data3.map((Fresh_Veges) => {
        return <div id={Fresh_Veges._id} key={Fresh_Veges._id} onMouseOver={Fouse} className={` w-[400px] cursor-pointer ${fresh_vegetables ? "" : "hidden"} `} onMouseEnter={(e) => {
            SetGetid(e.currentTarget.id);
        }} onMouseLeave={() => {
            SetGetid(null);
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Fresh_Veges.img_url} alt={Fresh_Veges.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize">
                        {Fresh_Veges.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left'>
                        {Fresh_Veges.item_name}
                    </h5>
                    <div className="flex">
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                    </div>
                    <div className=" text-left flex mt-2">

                        <h5 className=" text-red-400">
                            {"$" + Fresh_Veges.price}
                        </h5 >
                        <h6 className='mt-1 text-black line-through mx-1'>
                            ${Fresh_Veges.price * (100 - Fresh_Veges.discout) / 100}
                        </h6>

                    </div>
                    {Fresh_Veges._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm m-1  uppercase'>
                                    {`Type: ${Fresh_Veges.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`Mfg: ${Fresh_Veges.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`LIFE: ${Fresh_Veges.life}`}
                                </div>

                            </div>
                        </>
                        : ""
                    }
                </div>
            </div>

        </div>
    })
    const FreshMeat = data2.map((Fresh_Meat) => {
        return <div id={Fresh_Meat._id} key={Fresh_Meat._id} onMouseOver={Fouse} className={` w-[400px] cursor-pointer ${fresh_meat ? "" : "hidden"} `} onMouseEnter={(e) => {
            SetGetid(e.currentTarget.id);
        }} onMouseLeave={() => {
            SetGetid(null);
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Fresh_Meat.img_url} alt={Fresh_Meat.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize">
                        {Fresh_Meat.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left'>
                        {Fresh_Meat.item_name}
                    </h5>
                    <div className="flex">
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                    </div>
                    <div className=" text-left flex mt-2">

                        <h5 className=" text-red-400">
                            {"$" + Fresh_Meat.price}
                        </h5 >
                        <h6 className='mt-1 text-black line-through mx-1'>
                            ${Fresh_Meat.price * (100 - Fresh_Meat.discout) / 100}
                        </h6>

                    </div>
                    {Fresh_Meat._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm m-1  uppercase'>
                                    {`Type: ${Fresh_Meat.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`Mfg: ${Fresh_Meat.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`LIFE: ${Fresh_Meat.life}`}
                                </div>

                            </div>
                        </>
                        : ""
                    }
                </div>
            </div>

        </div>
    })
    const AllProducts = data.map((TrendingProducts) => {
        return <div id={TrendingProducts._id} key={TrendingProducts._id} onMouseOver={Fouse} className={` w-[400px] cursor-pointer ${allproducts ? "" : "hidden"} `} onMouseEnter={(e) => {
            SetGetid(e.currentTarget.id);
        }} onMouseLeave={() => {
            SetGetid(null);
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={TrendingProducts.img_url} alt={TrendingProducts.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize">
                        {TrendingProducts.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left'>
                        {TrendingProducts.item_name}
                    </h5>
                    <div className="flex">
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                        <AiOutlineStar className=' cursor-pointer text-yellow-400' />
                    </div>
                    <div className=" text-left flex mt-2">

                        <h5 className=" text-red-400">
                            {"$" + TrendingProducts.price}
                        </h5 >
                        <h6 className='mt-1 text-black line-through mx-1'>
                            ${TrendingProducts.price * (100 - TrendingProducts.discout) / 100}
                        </h6>

                    </div>
                    {TrendingProducts._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm m-1  uppercase'>
                                    {`Type: ${TrendingProducts.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`Mfg: ${TrendingProducts.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m-1 capitalize'>
                                    {`LIFE: ${TrendingProducts.life}`}
                                </div>

                            </div>
                        </>
                        : ""
                    }
                </div>
            </div>

        </div>
    })

    const ShowingAllProducts = () => {
        setTimeout(() => {
            SetShowAll(true);
        }, 200)
        SetFreshMeat(false);
        SetSnack(false);
        SetFreshVegetables(false);
    }
    const MeatProducts = () => {
        SetShowAll(false);
        SetSnack(false);
        SetFreshVegetables(false);
        setTimeout(() => {
            SetFreshMeat(true);
        }, 200)
    }
    const FreshVeges = () => {
        SetShowAll(false);
        SetFreshMeat(false);
        SetSnack(false);
        setTimeout(() => {
            SetFreshVegetables(true);
        }, 200)
    }
    const Snacky = () => {
        SetShowAll(false);
        SetFreshMeat(false);
        SetFreshVegetables(false);
        setTimeout(() => {
            SetSnack(true);
        }, 200)
    }

    return (
        <>
            <div className=" text-center">
                <h6 className=' text-[#95AE3C]'>
                    {`~ Special Products ~`}
                </h6>
                <h2 className=' text-[#2C296D] '>
                    Weekly Food Offers
                </h2>
            </div>

            <ul className="flex justify-center">
                <li className={`mx-3 cursor-pointer ${allproducts?"active":""}  font-semibold`} onClick={ShowingAllProducts}>All Products</li>
                <li className={`mx-3 cursor-pointer ${fresh_meat?"active":""}  font-semibold`} onClick={MeatProducts}>Fresh Meat</li>
                <li className={`mx-3 ${fresh_vegetables?"active":""} cursor-pointer  font-semibold`} onClick={FreshVeges}>Fresh Vegetables</li>
                <li className={`mx-3 ${Snack?"active":""} cursor-pointer  font-semibold`} onClick={Snacky}>Biscuits Snack</li>
            </ul>
            {
                fresh_meat === false && allproducts === true && fresh_vegetables===false && Snack===false ?
                    <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                        {AllProducts}
                    </Carousel>
                    : ""
            }
            {
                allproducts === false && fresh_meat === true && fresh_vegetables===false && Snack === false? <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {FreshMeat}
                </Carousel> : ""
            }
            {
                allproducts === false && fresh_meat === false && fresh_vegetables===true && Snack === false? <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {Fresh_Veges}
                </Carousel> : ""
            }
            {
                allproducts === false && fresh_meat === false && fresh_vegetables===false && Snack === true? <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {Snackers}
                </Carousel> : ""
            }
        </>
    )
}

export default AllSpecialProducts