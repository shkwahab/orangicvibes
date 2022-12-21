import React from 'react'

const JumbotronSecond = () => {
  return (
    <>
      <div className=" bg-jumbotron bg-center h-[700px] bg-no-repeat">
        <div className="mx-20 py-32  ">
          <h6 className='  font-Schoolbell text-lg text-white'>
            ~ Deals Of The Day ~
          </h6>
          <h2 className=' m-0 font-QuickSand font-semibold lg:text-5xl text-white'>
            Premium Drinks
          </h2>
          <h2 className=' m-0 font-QuickSand font-semibold lg:text-5xl text-white'>
            Fresh Farm Product
          </h2>
          <div className="row">
            <div className="col-6">
              <div className=' font-Jost my-4  font-thin text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolores nemo rem! Obcaecati, quam voluptatem!
              </div>
              <div className='my-8 font-Jost font-semibold text-white'>
                HURRY UP! OFFER END IN:
              </div>
              <div className="my-12 flex ">
                <div className="font-QuickSand  text-white text-4xl font-bold">
                  0
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                  Days
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                  0
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                  HOUR
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                  00
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                  MINUTE
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                  00
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                  SECOND
                </div>
              </div>
             
              <button id="btnhover2" className="    p-[12px] uppercase font-semibold px-3 text-sm bg-white  text-[#95AE3C] transition-all duration-300  rounded-full ">
                Shop Now
              </button>
              <button id="hoverbtn" className="mx-4 text-white border-2 p-[12px] uppercase font-semibold px-3 text-sm rounded-full border-white ">
               View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JumbotronSecond