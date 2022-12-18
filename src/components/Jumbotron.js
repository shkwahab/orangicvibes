import React from 'react'

const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="/Jumbotron.png" alt="Jumbotron" />
          </div>
          <div className="col-6">
            <div className="col">
              <div>
                <h5 className="">
                  ~ The Best For Your ~
                </h5>
                <h1 className=" lg:text-5xl    ">
                  Organic Drinks 
                </h1>
                  <h1 className='lg:text-5xl  '>
                  Easy Healthy - Happy Life
                  </h1>
              </div>
              <div className=' my-4 text-gray-600 text-sm'>The best Organic drink is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolorem.</div>
             
            </div>
            <div className="row">
              {/* <div className="col-6">a</div>
              <div className="col-6">a</div> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron