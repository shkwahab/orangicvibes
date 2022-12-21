import React, { useState, useEffect } from 'react'
import Clock from './Clock';
const JumbotronSecond = () => {
  const [Daytimer, SetDayTimer] = useState();
  const [Hourtimer, SetHourTimer] = useState();
  const [Mintimer, SetMinTimer] = useState();
  const [Sectimer, SetSecTimer] = useState();
  let interval;
  const StartTimer = () => {
    const CountdownDate = new Date("Dec 30,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const min = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const sec = Math.floor(distance % (60 * 1000) / 1000);
      if (distance < 0) {
        clearInterval(interval.current)
      }
      else {
        SetDayTimer(days);
        SetHourTimer(hours);
        SetMinTimer(min);
        SetSecTimer(sec);
      }
    })
  }
  useEffect(() => {
    StartTimer();
  })
  return (
    <>
      <div className=" bg-jumbotron bg-center  bg-no-repeat">
        <div className="mx-20 py-32  ">
          <h6 className='  font-Schoolbell text-lg text-white'>
            ~ Deals Of The Month ~
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
              <Clock
                Daytimer={Daytimer}
                Hourtimer={Hourtimer}
                Mintimer={Mintimer}
                Sectimer={Sectimer}
              />
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