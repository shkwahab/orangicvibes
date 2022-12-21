import React from 'react'
import SpecialProducts from '../components/SpecialProducts'
import TrendingProducts from '../components/TrendingProducts'
import Jumbotron from '../components/Jumbotron'
import Offers from '../components/Offers'
import AllSpecialProducts from '../components/AllSpecialProducts'
import JumbotronSecond from '../components/JumbotronSecond'
import Blog from '../components/Blog'
const Home = () => {
  return (
    <>
      <div className=" my-8 ">
        <SpecialProducts />
      </div>
      <div className=" my-20">
        <TrendingProducts />
      </div>
      <div className=" my-16">
        <Jumbotron />
      </div>
      <div className="my-20">
        <Offers />
      </div>
      <div className="my-20">
        <AllSpecialProducts />
      </div>
      <div className="my-20">
        <JumbotronSecond />
      </div>
      <div className="my-20">
        <Blog/>
      </div>

    </>
  )
}

export default Home