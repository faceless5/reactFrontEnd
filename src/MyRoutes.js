import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import Homepage from './components/pages/Homepage'
import Productspage from './components/pages/Productspage'
import Services from './components/pages/Services'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import ConfirmUser from './components/pages/ConfirmUser'
import AdminDashboard from './components/pages/AdminDashboard'
import AdminRoute from './route/AdminRoute'
import PrivateRoute from './route/PrivateRoute'
import ViewCategories from './components/pages/ViewCategories'
import AddCategory from './components/pages/AddCategory'
import EditCategory from './components/pages/EditCategory'
import ProductsAdmin from './components/pages/ProductsAdmin'
import AddProduct from './components/pages/AddProduct'
import Shipping from './components/pages/Shipping'
import PaymentElement from './components/pages/PaymentElement'
import UserOrderDetail from './components/pages/UserOrderDetail'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<First/>}/>
            <Route path='/sss' element={<Second/>}/>
            <Route path='/ttt' element={<Third/>}/> */}

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/confirmuser/:token' element={<ConfirmUser />} />


        {/* material pages  */}
        <Route path='/home' element={<Homepage />} />
        <Route path='/products' element={<Productspage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/' element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path= '/categories' element={<ViewCategories/>}/>
          <Route path='/category/add' element={<AddCategory/>}/>
          <Route path='/category/update/:category_id' element={<EditCategory/>}/>
          <Route path='/admin/products' element={<ProductsAdmin/>}/>
          <Route path='/admin/product/add' element={<AddProduct/>}/>
        </Route>
        
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/user/profile/' element={<Cart/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/payment' element={<PaymentElement/>}/>
          <Route path='/orderdetails/:order_id' element={<UserOrderDetail/>}/>
        </Route>

      </Routes>
    </Router>

  )
}

export default MyRoutes