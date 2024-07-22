import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navigation from '../customer/components/Navigations/Navigations'
import Footer from '../customer/components/Footer/Footer'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Cart/Checkout'
import Order from '../customer/components/Orders/Order'
import OrderDetail from '../customer/components/Orders/OrderDetail'

const CurtomersRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>

        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}

      </Routes>
    
    <div>
        <Footer/>
    </div>
    </div>
  )
}

export default CurtomersRouters
