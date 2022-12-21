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
        SetFoucus(false);
    }
    const unFocuse=()=>{
        SetFoucus(true);
      }

    const Snackers = data4.map((Snack_Biscuits) => {
        return <div id={Snack_Biscuits._id} key={Snack_Biscuits._id}  className={` w-[400px] cursor-pointer ${Snack ? "" : "invisible"} `} onMouseEnter={(e) => {
             SetGetid(e.currentTarget.id);
            Fouse();
        }} onMouseLeave={() => {
             SetGetid(null);
            unFocuse();
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Snack_Biscuits.img_url} alt={Snack_Biscuits.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize text-sm font-Jost">
                        {Snack_Biscuits.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left font-Jost'>
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

                        <h5 className=" text-red-500 font-Jost font-semibold">
                            {"$" + Snack_Biscuits.price}
                        </h5 >
                        <h6 className='mt-1 text-gray-400 line-through mx-1 font-medium font-Jost'>
                            ${Snack_Biscuits.price * (100 - Snack_Biscuits.discout) / 100}
                        </h6>

                    </div>
                    {Snack_Biscuits._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm font-Jost  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1  uppercase'>
                                    {`Type: ${Snack_Biscuits.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
                                    {`Mfg: ${Snack_Biscuits.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
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
        return <div id={Fresh_Veges._id} key={Fresh_Veges._id}  className={` w-[400px] cursor-pointer ${fresh_vegetables ? "" : "invisible"} `} onMouseEnter={(e) => {
             SetGetid(e.currentTarget.id);
            Fouse();
        }} onMouseLeave={() => {
             SetGetid(null);
            unFocuse();
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Fresh_Veges.img_url} alt={Fresh_Veges.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize text-sm font-Jost">
                        {Fresh_Veges.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left font-Jost'>
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

                        <h5 className=" text-red-500 font-Jost font-semibold">
                            {"$" + Fresh_Veges.price}
                        </h5 >
                        <h6 className='mt-1 text-gray-400 line-through mx-1 font-medium font-Jost'>
                            ${Fresh_Veges.price * (100 - Fresh_Veges.discout) / 100}
                        </h6>

                    </div>
                    {Fresh_Veges._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm font-Jost  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1  uppercase'>
                                    {`Type: ${Fresh_Veges.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
                                    {`Mfg: ${Fresh_Veges.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
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
        return <div id={Fresh_Meat._id} key={Fresh_Meat._id}  className={` w-[400px] cursor-pointer ${fresh_meat ? "" : "invisible"} `} onMouseEnter={(e) => {
             SetGetid(e.currentTarget.id);
            Fouse();
        }} onMouseLeave={() => {
             SetGetid(null);
            unFocuse();
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={Fresh_Meat.img_url} alt={Fresh_Meat.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize text-sm font-Jost">
                        {Fresh_Meat.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left font-Jost'>
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

                        <h5 className=" text-red-500 font-Jost font-semibold">
                            {"$" + Fresh_Meat.price}
                        </h5 >
                        <h6 className='mt-1 text-gray-400 line-through mx-1 font-medium font-Jost'>
                            ${Fresh_Meat.price * (100 - Fresh_Meat.discout) / 100}
                        </h6>

                    </div>
                    {Fresh_Meat._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm font-Jost  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1  uppercase'>
                                    {`Type: ${Fresh_Meat.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
                                    {`Mfg: ${Fresh_Meat.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
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
        return <div id={TrendingProducts._id} key={TrendingProducts._id}  className={` w-[400px] cursor-pointer ${allproducts ? "" : "invisible"} `} onMouseEnter={(e) => {
             SetGetid(e.currentTarget.id);
            Fouse();
        }} onMouseLeave={() => {
             SetGetid(null);
            unFocuse();
        }}>
            <div className="card mx-2  shadow-custom  rounded-3xl">
                <div className="flex justify-center ">
                    <img src={TrendingProducts.img_url} alt={TrendingProducts.item_name} className=" mt-4  w-[110px] h-[100px]" />
                </div>
                <div className="card-body bg-gray-300 bg-opacity-20 mt-4">
                    <h6 className="m-0 cursor-pointer text-black text-left capitalize text-sm font-Jost">
                        {TrendingProducts.category}
                    </h6>
                    <h5 className='mt-1 cursor-pointer capitalize text-[#2C296D] text-left font-Jost'>
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

                        <h5 className=" text-red-500 font-Jost font-semibold">
                            {"$" + TrendingProducts.price}
                        </h5 >
                        <h6 className='mt-1 text-gray-400 line-through mx-1 font-medium font-Jost'>
                            ${TrendingProducts.price * (100 - TrendingProducts.discout) / 100}
                        </h6>

                    </div>
                    {TrendingProducts._id === getId ?
                        <>
                            <div className={` my-3`}>
                                <button className=" text-white p-[12px] uppercase font-semibold px-3 text-sm font-Jost  hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                                    Add to Cart
                                </button>
                            </div>
                            <div className={` my-2 ml-[2px] text-left font-[Calibri]}`}>

                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1  uppercase'>
                                    {`Type: ${TrendingProducts.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
                                    {`Mfg: ${TrendingProducts.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm font-Jost m-1 capitalize'>
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
                <h6 className=' text-[#95AE3C] m-0 text-lg font-Schoolbell'>
                    {`~ Special Products ~`}
                </h6>
                <h2 className=' font-black mb-3 text-[#2C296D] font-QuickSand'>
                    Weekly Food Offers
                </h2>
            </div>

            <ul className="flex justify-center">
                <li className={`mx-3 font-Jost cursor-pointer ${allproducts?"active":""}  font-semibold text-gray-700`} onClick={ShowingAllProducts}>All Products</li>
                <li className={`mx-3 font-Jost cursor-pointer ${fresh_meat?"active":""}  font-semibold text-gray-700`} onClick={MeatProducts}>Fresh Meat</li>
                <li className={`mx-3 font-Jost ${fresh_vegetables?"active":""} cursor-pointer  font-semibold text-gray-700`} onClick={FreshVeges}>Fresh Vegetables</li>
                <li className={`mx-3 font-Jost ${Snack?"active":""} cursor-pointer  font-semibold text-gray-700`} onClick={Snacky}>Biscuits Snack</li>
            </ul>
           
            {
                fresh_meat === false && allproducts === true && fresh_vegetables===false && Snack===false ?
                <div className=" container-fluid  absolute">
                    <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                        {AllProducts}
                    </Carousel>
                    </div>
                    : ""
            }
            {
                
                allproducts === false && fresh_meat === true && fresh_vegetables===false && Snack === false? 
                <div className=" container-fluid  absolute">
                <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {FreshMeat}
                </Carousel> 
                </div>
                : ""
            }
            {
                allproducts === false && fresh_meat === false && fresh_vegetables===true && Snack === false? 
                <div className=" container-fluid  absolute">
                <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {Fresh_Veges}
                </Carousel>
                </div>
                 : ""
            }
            {
                allproducts === false && fresh_meat === false && fresh_vegetables===false && Snack === true? 
                <div className=" container-fluid  absolute">
                <Carousel className=' px-8' itemsToShow={6} enableAutoPlay={onfocus} itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {Snackers}
                </Carousel> 
                </div>
                : ""
            }
             <div className="  invisible">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium aliquam voluptatem odio quibusdam exercitationem, voluptatibus consectetur nam totam amet aut molestiae hic quisquam sequi vero provident labore numquam quos mollitia magnam unde possimus at. Nesciunt numquam, ad ipsum non sed temporibus et ullam iusto consequuntur dolores natus animi, architecto voluptas similique? Adipisci beatae reiciendis facere officia, iure a in quam unde consequatur, molestiae maiores ad veniam accusantium labore assumenda voluptatibus doloribus cupiditate! Dolorum expedita debitis praesentium veritatis maiores! Aliquam, atque saepe? Maiores, quis unde! Ipsam voluptatum animi aut nisi nulla commodi at? Possimus distinctio molestias temporibus perferendis, blanditiis animi quisquam repellat unde iure est aperiam adipisci excepturi architecto itaque quis. Recusandae doloremque possimus soluta aspernatur veniam in repellendus quas at excepturi voluptas, adipisci mollitia ea doloribus autem sed facere molestias id eum modi illo. Voluptas vero assumenda ab iste odit laboriosam sunt rem quae obcaecati? Ea incidunt culpa ducimus quam! Doloribus, pariatur veniam facere nemo nihil cum beatae modi esse ab odio sequi exercitationem nam porro perferendis dignissimos fugiat minus animi, mollitia eius asperiores illum? Aut nihil quis quaerat porro ab, esse nisi voluptatum quae quos aliquid assumenda ducimus officiis veniam perferendis omnis est ad nemo similique debitis saepe ratione fugit laudantium eligendi! Possimus eaque, aliquam, vel magnam amet eos ex reiciendis natus labore esse enim dolor alias debitis, excepturi commodi eum corporis obcaecati quia libero soluta sed provident. Quaerat debitis quis eius officia ratione assumenda voluptatum vel quod autem vero? Saepe similique tenetur commodi, sapiente quidem consequuntur quae aliquam quibusdam aliquid quam, excepturi aspernatur molestiae officiis a dolor animi fugit quo culpa! Veniam molestias a maiores nisi dolorem sapiente esse tenetur, dicta debitis necessitatibus officiis mollitia doloremque, laborum amet deserunt labore modi dignissimos? Cumque magnam quo, reprehenderit fuga voluptatibus hic modi, pariatur autem velit quae accusamus molestias sint accusantium.
            </div>
           
        </>
    )
}

export default AllSpecialProducts