import React from 'react'

const AllSpecialProducts = () => {
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
       
        </>
    )
}

export default AllSpecialProducts