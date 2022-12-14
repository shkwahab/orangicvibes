import React from 'react'

const Jumbotron = () => {
  return (
    <>
    <section id="jumbotron" className=' bg-[#f8f8f8] py-20'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className=" hover:-translate-y-5 cursor-pointer duration-500 transiton-all">
            <img src="/Jumbotron.png" alt="Jumbotron" />
            </div>
          </div>
          <div className="col-6">
            <div className="col">
              <div>
                <h5 className=" font-Schoolbell">
                  ~ The Best For Your ~
                </h5>
                <h2 className="font-QuickSand font-semibold text-[#2C296D]  lg:text-5xl    ">
                  Organic Drinks 
                </h2>
                  <h2 className='font-QuickSand font-semibold text-[#2C296D] lg:text-5xl  '>
                    <span className="text-[#95AE3C]">
                   {`Easy Healthy - `}
                    </span>
                  Happy Life
                  </h2>
              </div>
              <div className=' my-4 text-gray-600 font-Jost text-sm'>The best Organic drink is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolorem.</div>
             
            </div>
            <div className="row">
              <div className="col-6">
                <h6 className=" font-Jost font-semibold">
                FRESH FRUITS:
                </h6>
                <div className=" border-b-[1px]  border-dashed bg-gray-600"></div>
                <p className=" font-Jost font-semiboldtext-sm mt-2 text-gray-500">
                Apples, Berries & Cherries
                </p>
                <h6 className=" font-Jost font-semibold">
                EXPIRY DATE:
                </h6>
                <div className=" border-b-[1px]  border-dashed bg-gray-600"></div>
                <p className="text-sm font-Jost  mt-2 text-gray-500">
                See on The Bottle Cap
                </p>
                
                  <button className=" font-QuickSand text-white p-[12px] uppercase font-semibold px-4 my-3 hover:bg-[#95AE3C] transition-all duration-300  rounded-full bg-[#2C296D] ">
                    Add to Cart
                  </button>
                
              </div>
              <div className="col-6">
                <h6 className=" font-Jost font-semibold">
                INGREDIENT:
                </h6>
                <div className=" border-b-[1px]  border-dashed bg-gray-600"></div>
                <p className="text-sm mt-2 font-Jost text-gray-500">
                Energy, Protein, Sugars
                </p>
                <h6 className=" font-Jost font-semibold">
                BOOTLE SIZE:
                </h6>
                <div className=" border-b-[1px]  border-dashed bg-gray-600"></div>
                <p className="text-sm mt-2 text-gray-500">
                500ml - 1000ml
                </p>
                <button className=" font-QuickSand text-white p-[12px] uppercase font-semibold px-[28px] my-3 bg-[#95AE3C] transition-all duration-300 hover:bg-[#849e28] rounded-full  ">
                   View More
                  </button>
              </div>
            </div>

          </div> 
        </div>
      </div>
    </section>
    </>
  )
}

export default Jumbotron