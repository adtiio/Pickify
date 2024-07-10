import logo from './logo.svg';
import './App.css';
import Navigations from './customer/components/Navigations/Navigations';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Cart/Checkout';
import Order from './customer/components/Orders/Order';
import OrderDetail from './customer/components/Orders/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CurtomersRouters from './Routers/CurtomersRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CurtomersRouters/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
