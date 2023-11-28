import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Orders from './MobileComponents/Orders';
import Address from './profile/Address';
import PersonalInfo from './MobileComponents/PersonalInfo';

// Mobile Components
import NavigationBar from './MobileComponents/NavigationBar';


import HeaderBelow from './components/HeaderBelow';
import ProductsPage from './ProductsComponents/ProductsPage';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import WishList from './wishlist/wishList';
import Profile from './profile/Profile';
import OrderConfirm from './components/OrderConfirm';

function App() {

  return (
    <div >
    <BrowserRouter>
      <Header />
      <HeaderBelow/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Ecom-React" element={<Home/>}/>
        <Route exact path="/products" element={<ProductsPage/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/orderconfirmed" element={<OrderConfirm/>}/>
        <Route exact path="/wishlist" element={<WishList/>}/>
        <Route exact path="/account" element={<Profile/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signUp" element={<SignUp/>}/>

        <Route exact path="/orders" element={<Orders/>}/>
        <Route exact path="/address" element={<Address/>}/>
        <Route exact path="/personal-Info" element={<PersonalInfo/>}/>
        
      </Routes>
      <NavigationBar/>
      <Footer />
  </BrowserRouter>
  
  </div>
  )  
}

export default App;
