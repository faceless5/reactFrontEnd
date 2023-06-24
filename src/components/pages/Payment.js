import React, { useEffect, useState } from 'react'

const Payment = () => {
    const cart_items = useSelector(state=>state.cart.cartItems)
    const shipping_info = useSelector(state=>state.cart.shippingInfo)
    const [total_price, setTotalPrice] = useState(0)


    const stripe = useStripe()
    const elements = useElements()

    useEffect(()=>{
         
    })
  return (
    <>
        
    </>
  )
}

export default Payment