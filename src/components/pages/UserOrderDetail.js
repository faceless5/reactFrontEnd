import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from '../../API/userAPI'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const UserOrderDetail = () => {
    const {order_id} = useParams()
   //const param = useParams()
   // const order_id = params.order_id 

   const {token} = isAuthenticated()
   // const data = isAuthenticated()
   // const token = data.token

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadOrderDetails(order_id,token))
    },[])

    // const orderStore = useSelector(state=>state.orderDetail)
    // const order = orderStore.data


  return (
    <>
        <Navbar/>
        <div className='container mx-auto my-5 shadow-lg p-5 text-center'>
            <h3 className='mb-3'>Order Details</h3>
            <hr className='mb-3'/>
            {order &&
            <>
            <h4>Order ID: <u>{order._id}</u></h4>
            <h4>No. of Items: <u>{order.orderItemsIds.length}</u></h4>
            <h4>Total price: Rs. <u>{order.totalOrderPrice}</u></h4>
            <h4>Status: <u>{order.status}</u></h4>
            <h4>Items:</h4>
            {
                order.orderItemsIds.map(item=>{
                    return <div className='row-cols-2 row-cols-md-3 row-cols-lg-4 g-4'>
                        
                    </div>
                })
            }
            </>
            }
        </div>
        <Footer/>
    </>
  )
}

export default UserOrderDetail