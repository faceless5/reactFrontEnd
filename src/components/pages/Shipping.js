import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../layout/Navbar'

const Shipping = () => {
  

  const [shipping_add, setShippingAddress] = useState({
    shipping_address: '',
    alternate_shipping_address: '',
    city:'',
    country:'',
    phone:'',
    totalOrderPrice:''
  })
  const {shipping_address, alternate_shipping_address, city, country, phone, totalOrderPrice} = shipping_add

  const dispatch = useDispatch()

  const handleShippingAddress = name =>event => {
    setShippingAddress({...shipping_add, [name]:event.target.value})
  }

  const saveShipping =(event) => {
    event.preventDefault()
    dispatch(saveShippingInfo(shipping_add))
  }


  return (
    <>
        <Navbar/>
        <div className='row d-flex justify-content-evenly'>
            <div className='order-details col-md-8'>
              <checkoutProgress Shipping/>
              {
                localStorage.geItem('shippinginfo') &&
              <div className='mt-2 p-5 shadow-lg'>
                {

                  shipping_info &&
                  <>
                  Shipping Address:
                  <p>{shipping_info.shippin_address},{shipping_info.city},
                  {shipping_info.country}</p>

                  </>
                }
              </div>
      }
            </div>
        </div>
        
    </>
  )
}

export default Shipping