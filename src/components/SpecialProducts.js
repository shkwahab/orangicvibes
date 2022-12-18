import React from 'react'
const SpecialProducts = () => {
  const data = [
    {
      "_id": "1",
      "item_name": "fresh fruit",
      "item_quantity": "7 items",
      "image_url": "/fruits.jpeg"
    },
    {
      "_id": "2",
      "item_name": "fresh drink",
      "item_quantity": "6 items",
      "image_url": "/drinks.jpg"
    },
    {
      "_id": "3",
      "item_name": "vegetables",
      "item_quantity": "16 items",
      "image_url": "/vegetables.jpeg"
    },
    {
      "_id": "4",
      "item_name": "Bakery",
      "item_quantity": "12 items",
      "image_url": "/bakery.jpeg"
    },
    {
      "_id": "5",
      "item_name": "biscuits",
      "item_quantity": "8 items",
      "image_url": "/biscuits.jpg"
    },
    {
      "_id": "6",
      "item_name": "fresh mear",
      "item_quantity": "4 items",
      "image_url": "/meat.jpeg"
    },

  ]
 const special= data.map((specialProducts) => {
  return <div className="col-2" key={specialProducts._id}>
    <div className=" bg-white p-[19px]  rounded-2xl  shadow-2xl ">
      <div id="plusicon" className=" flex justify-center relative   rounded-full">
        <div  className='z-10 bg-gray-600  rounded-full'>
          <img src={specialProducts.image_url} alt={specialProducts.item_name} className=' rounded-full  focus:opacity-25   w-[80px] h-[80px] ' />
        </div>
       
      </div>
      <div className=" card-body text-center">
        <h6 className="  mt-2 mb-[2px] text-[#2C296D] capitalize">{specialProducts.item_name}</h6>
        <p className="">{specialProducts.item_quantity}</p>
      </div>
    </div>
  </div>

})
  return (
    <>
      <div className="container">
        <div className="row">
          {
           special
          }

        </div>
      </div>

    </>
  )
}

export default SpecialProducts