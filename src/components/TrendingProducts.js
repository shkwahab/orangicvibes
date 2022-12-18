import React from 'react'
import { AiOutlineStar } from "react-icons/ai"
const TrendingProducts = () => {
    
    const data = [
        {
            "_id": "1",
            "item_name": "Peach",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg"
        },
        {
            "_id": "2",
            "item_name": "Water Melon",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg"
        },
        {
            "_id": "3",
            "item_name": "Dragon Fruit",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg"
        },
        {
            "_id": "4",
            "item_name": "Peach",
            "category": "fruits",
            "discout": 9,
            "price": 55,
            "img_url": "/peach.jpg"
        },
        {
            "_id": "5",
            "item_name": "Water Melon",
            "category": "fruits",
            "discout": 15,
            "price": 55,
            "img_url": "/watermelon.jpeg"
        },
        {
            "_id": "6",
            "item_name": "Dragon Fruit",
            "category": "fruits",
            "discout": 2,
            "price": 55,
            "img_url": "/dragon.jpeg"
        },
    ]
    const Trend = data.map((TrendingProducts) => {
        return <div key={TrendingProducts._id} className="col-2">
            <div className="card  shadow-lg rounded-3xl">
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
                </div>
            </div>
        </div>
    })
    return (
        <>
            <div className=" text-center">
                <h5 className="">
                    {`~ Trending Products ~`}
                </h5>
                <h2 className="text-[#2C296D] ">
                    Weekly Food Offers
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aspernatur, necessitatibus earum fugiat quas id?
                </p>
                <div className="container">
                    
                        <div className="row">
                            {Trend}
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default TrendingProducts