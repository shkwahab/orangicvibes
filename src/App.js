import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/Header"
function App() {
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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
