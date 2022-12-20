import React from 'react'

const Offers = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card cursor-pointer">
              {/* <div className="   scale-y-125">
                <img src="/banner-1.jpg" className=' img-fluid ' alt="banner1" />
              </div> */}
              <div className=" bg-banner1 rounded-md h-[200px]"></div>
              <div className=" text-white card-img-overlay  ">
                <h5 className='text-yellow-300 uppercase font-Jost'>
                  Top Offers
                </h5>
                <h4 className='text-white m-0 font-QuickSand font-semibold'>
                  Eat Green
                </h4>
                <h4 className='text-white mt-2 font-QuickSand font-semibold'>
                  Best for Family
                </h4>
                <p className=' mt-4 font-Jost'>
                  Free Shipping 05km
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card cursor-pointer">
            <div className=" bg-banner2 rounded-md h-[200px]"></div>
              <div className=" text-white  card-img-overlay">
                <h6 className='text-white font-Jost uppercase'>
                 Weekend Deals
                </h6>
                <h4 className='text-white m-0 font-QuickSand font-semibold'>
                  Fresh Food
                </h4>
                <h4 className='text-white mt-2 font-QuickSand font-semibold'>
                  Restore Health
                </h4>
                
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card  cursor-pointer">
            <div className=" bg-banner3 rounded-md h-[200px]"></div>
              <div className=" text-white  card-img-overlay">
                <h5 className='text-yellow-300 uppercase font-Jost'>
                  Top Sellers
                </h5>
                <h4 className='text-white m-0 font-QuickSand font-semibold'>
                  Healthy
                </h4>
                <h4 className='text-white mt-2 font-QuickSand font-semibold'>
                 Fresh Free Bread
                </h4>
                <p className=' mt-4'>
                  Limited Time: Online Only!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Offers