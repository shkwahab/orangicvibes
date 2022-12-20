import React,{useState} from 'react'
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
    const [getId, SetGetid] = useState(null);
  const[onfocus,SetFoucus]=useState(true)
  const Fouse=()=>{
    SetFoucus(!onfocus);
  }
    const Trend = data.map((TrendingProducts) => {
        return <div id={TrendingProducts._id} key={TrendingProducts._id} onMouseOver={Fouse} className={` w-[400px] cursor-pointer  `} onMouseEnter={(e) => {
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
            <li className="mx-3 cursor-pointer active  font-semibold">All Products</li>
            <li className="mx-3 cursor-pointer  font-semibold">Fresh Meat</li>
            <li className="mx-3 cursor-pointer  font-semibold">Fresh Vegetables</li>
            <li className="mx-3 cursor-pointer  font-semibold">Biscuits Snack</li>
            </ul>
            
         <Carousel  className=' px-8' itemsToShow={6} enableAutoPlay={onfocus}  itemsToScroll={1} pagination={false} showArrows={true} autoPlaySpeed={3000}>
   {Trend}
         </Carousel>
        </>
    )
}

export default AllSpecialProducts