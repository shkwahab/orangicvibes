import React from 'react'
import Header from "../components/Header"
import SpecialProducts from '../components/SpecialProducts'
import TrendingProducts from '../components/TrendingProducts'
import Jumbotron from '../components/Jumbotron'
import Offers from '../components/Offers'
import AllSpecialProducts from '../components/AllSpecialProducts'
const Home = () => {
  return (
    <>
     <Header 
      sitetitle="Organic Vibes"
      category1="Home"
      category2="Shop"
      category3="Blog"
      category4="Pages"
      category5="About Us"
      category6="Contact Us"
      ShopHeading1="Shop Layout"
      ShopHeading2="Product Layout"
      ShopHeading3="Product Type"
      ShopHeading4="Product Category"
      Shop1ListItem1="Shop With Banner"
      Shop1ListItem2="Shop Without Banner"
      Shop1ListItem3="Shop Version"
      Shop1ListItem4="Shop Left Sidebar"
      Shop1ListItem5="Shop Right Sidebar"
  
      />
      <div className=" my-8 ">
      <SpecialProducts/>
      </div>
      <div className=" my-20">
        <TrendingProducts/>
      </div>
      <div className=" my-16">
        <Jumbotron/>
      </div>
      <div className="my-20">
        <Offers/>
      </div>
      <div className="my-20">
        <AllSpecialProducts/>
      </div>
      <div className=' my-20'> 
        s
      </div>
    </>
  )
}

export default Home