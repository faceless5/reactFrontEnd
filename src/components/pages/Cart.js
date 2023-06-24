import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addItemToCart } from '../../redux/actions/cartActions'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { ToastContainer, toast } from 'react-toastify'

const Cart = () => {
    const cart_items = useSelector(state=>state.cart.cartItems)

    const increaseQuantity = (id, quantity, stock) => {
        let new_quantity = quantity+ 1
        if(new_quantity>stock){
            toast.error('cannot increase quantity more than stock')
            return
        }
        else{
            dispatchEvent(addItemToCart(id, new_quantity))
            toast.success('quantity increased')
        }
    }

    const decreaseQuantity = (id, quantity) =>{
        let new_quantity = quantity-1
        if(new_quantity<=0){
            toast.error('cannot decrease quantity. Remove item instead')
        }
        else{
            dispatchEvent(addItemToCart(id, new_quantity))
            toast.success('quantity decreased')
        }
    }

    const removeFromCart = () => {

    }


    return (
        <>

            <Navbar />
            <div className='container mx-auto'>
                <h3 className='text-center'>Cart Items</h3>
                <hr />

                <table className='table text-center align-middle '>
                    <thead>
                        <tr>
                            <th width="10%">S.No.</th>
                            <th width="20%">Product Image</th>
                            <th width="50%">Product Details</th>
                            <th>Number</th>
                            <th width="20%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart_items.map((item, i)=>{
                                return       <tr>
                                <td>1</td>
                                <td>
                                    <img src={`http://localhost:5000/${item.image}`} 
                                    alt={item.name} style={{"width":"100%"}}/>
                                </td>
                                <td>
                                    <h4>{item.name}</h4>
                                    <h5>Rs. {item.price}</h5>
                                </td>
                                <td> 
                                    <div className='d-flex'>
                                    <button className='btn btn-danger' 
                                    onClick={()=>decreaseQuantity(item.product, item.quantity)}>-</button>
                                   <input type='text' className='px-2 text-center' value={item.quantity}
                                     readOnly></input>
                                    <button className='btn btn-info'
                                     onClick={()=>increaseQuantity(item.product, item.quantity, item.stock)}>+</button>
                                    </div>
                                </td>
                                <td>
                                <button className='btn btn-danger'>
                                    <i class="bi bi-trash"></i>
                                </button>
                            </td>
                            </tr>
                            })
                        }
                  
                        <tr>
                            <td>2</td>
                            <td>
                                <img src='./images/img3.jpg' alt='image1' style={{"width":"100%"}}/>
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Rs. 30,000</h5>
                                <p>6inch Display, octacore processor, 16GB RAM, 64GB ROM</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>
                                <img src='./images/img2.jpg' alt='image1' style={{"width":"100%"}}/>
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Rs. 30,000</h5>
                                <p>6inch Display, octacore processor, 16GB RAM, 64GB ROM</p>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
            <Footer />
        </>
    )
}

export default Cart