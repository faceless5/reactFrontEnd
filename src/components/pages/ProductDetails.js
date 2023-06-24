import React from 'react'
import { isAuthenticated } from '../../API/userAPI'



const ProductDetails = () => {
    const {user} = isAuthenticated()
  return (
    <>

    </>
  )
}

export default ProductDetails



