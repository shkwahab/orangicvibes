import React, { useState } from 'react'
import { AiOutlineStar } from "react-icons/ai"
import Carousel from 'react-elastic-carousel';


const TrendingProducts = () => {

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


    ]

    const [getId, SetGetid] = useState(null);
    const[onfocus,SetFoucus]=useState(true)
  const Fouse=()=>{
    SetFoucus(false);
  }
  const unFocuse=()=>{
    SetFoucus(true);
  }

    const Trend = data.map((TrendingProducts) => {
        return <div  id={TrendingProducts._id} key={TrendingProducts._id} className="w-[400px] cursor-pointer  "  onMouseEnter={(e) => {
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
                    <h6 className="m-0 font-Jost cursor-pointer text-black text-left capitalize">
                        {TrendingProducts.category}
                    </h6>
                    <h5 className='mt-1 font-Jost cursor-pointer capitalize text-[#2C296D] text-left'>
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

                        <h5 className=" font-QuickSand text-red-500 font-bold">
                            {"$" + TrendingProducts.price}
                        </h5 >
                        <h6 className='mt-1 text-black line-through mx-1 font-Jost '>
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

                                <div className=' text-gray-600 font-medium text-sm m-1 font-Jost uppercase'>
                                    {`Type: ${TrendingProducts.type}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m- font-Jost capitalize'>
                                    {`Mfg: ${TrendingProducts.mfg}`}
                                </div>
                                <div className=' text-gray-600 font-medium text-sm m- font-Jost capitalize'>
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
    return (
        <>
            <div className=" text-center relative ">
                <h5 className=" font-Schoolbell">
                    {`~ Trending Products ~`}
                </h5>
                <h2 className="text-[#2C296D] font-QuickSand font-bold">
                    Weekly Food Offers
                </h2>
                <p className=' font-Jost'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aspernatur, necessitatibus earum fugiat quas id?
                </p>
                
                <div className=" container-fluid  absolute">
                   
                 
                <Carousel  className=' px-8' itemsToShow={6} enableAutoPlay={onfocus}  itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
                    {Trend}
                    </Carousel>
                  
                </div>
            </div>
            <div className="  invisible">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, facilis. Odit dolorem expedita soluta beatae, nostrum quam ratione! Nobis blanditiis similique doloribus repellendus quae voluptatem numquam ea consequatur natus eum exercitationem consectetur saepe nam corrupti incidunt deleniti eligendi minus voluptatum, ex laboriosam obcaecati! Reprehenderit perferendis inventore dicta atque ducimus modi molestias ipsam officia molestiae id, recusandae quod ipsum distinctio quas natus quo? Ducimus illo deleniti veritatis quia, porro reiciendis voluptatem temporibus sapiente ex corporis exercitationem sit nam atque odio quas adipisci repellendus nisi at iste harum quos placeat. Id numquam ipsum voluptatibus cupiditate reiciendis! Saepe quasi cupiditate cumque laudantium quam tenetur veritatis. Voluptatum est assumenda consequatur autem, provident aliquam reprehenderit fuga a porro facilis nesciunt ab amet fugiat qui laborum voluptatem ipsa incidunt officiis praesentium, alias deleniti cumque! Minima, dicta dignissimos perferendis harum ex explicabo ducimus iusto! Eligendi eveniet architecto, animi dicta veritatis blanditiis quis consequuntur excepturi quos sunt quia natus a, harum eius nostrum quod voluptatem soluta iste. Qui provident corporis ipsam repudiandae nulla dolor molestias iure cum eveniet atque accusantium, in quis. Rerum numquam repudiandae facilis soluta, impedit molestias aliquam quia deserunt pariatur. Eius dignissimos excepturi tempora soluta saepe voluptate, magni, sunt suscipit, aspernatur dolorum officia numquam eaque!
            </div>


        </>
    )
}

export default TrendingProducts