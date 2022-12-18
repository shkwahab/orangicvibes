import React from 'react'
import {AiOutlineStar} from "react-icons/ai"
const TrendingProducts = () => {
    const data = [
        {
            "_id": "1",
            "item_name": "Mix Fruit",
            "category": "fruits",
            "discout": "5%",
            "price": 200,
            "featured": "hot",
            "img_url": "/fruits.jpeg"
        },
        {
            "_id": "2",
            "item_name": "Mix Fruit",
            "category": "fruits",
            "discout": "5%",
            "price": 200,
            "featured": "hot",
            "img_url": "/fruits.jpeg"
        },
        {
            "_id": "3",
            "item_name": "Mix Fruit",
            "category": "fruits",
            "discout": "5%",
            "price": 200,
            "featured": "hot",
            "img_url": "/fruits.jpeg"
        },
    ]
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
                        {
                            data.map((TrendingProducts) => {
                                return <div key={TrendingProducts._id} className="col-2">
                                    <div className="card  shadow-lg rounded-3xl">
                                        <div className="flex justify-center ">
                                            <img src={TrendingProducts.img_url} alt={TrendingProducts.item_name} className=" mt-4  w-[100px] h-auto" />
                                        </div>
                                        <div className="card-body bg-gray-200 bg-opacity-50 mt-4">
                                            <h6 className=" text-black text-left capitalize">
                                                {TrendingProducts.category}
                                            </h6>
                                            <h5 className=' capitalize text-black text-left'>
                                                {TrendingProducts.item_name}
                                            </h5>
                                            <div className="flex">
                                                <AiOutlineStar className=' text-yellow-400'/>
                                                <AiOutlineStar className=' text-yellow-400'/>
                                                <AiOutlineStar className=' text-yellow-400'/>
                                                <AiOutlineStar className=' text-yellow-400'/>
                                                <AiOutlineStar className=' text-yellow-400'/>
                                            </div>
                                            <div className=" text-left">
                                               <h5 className=" text-red-400">
                                                {"$"+TrendingProducts.price}
                                               </h5 >

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts