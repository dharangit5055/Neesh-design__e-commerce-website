import "./App.css";
// import Admin_log from "./components/Source/admin_login";

import Navbar from "./components/Source/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import ShopCategory from "./components/pages/ShopCategory";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import LoginSignup from "./components/pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import men_banner from './components/Assets/men_banner.png';
import women_banner from './components/Assets/women_banner.png';
import kids_banner from './components/Assets/kids_banner.png';

function App() {
  return (
    <div>
      {/* <Admin_log/> */}
      {/* <Dash/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":prouductId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <br/>
       
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
