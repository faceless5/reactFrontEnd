import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Payment from './Payment'
import {Elements} from '@stripe/react-stripe-js'

const PaymentElement = () => {
    const[stripeApiKey, setStripeApiKey] = useState('')

    useEffect(async ()=>{
        await fetch(`${API}/getStripeAPIKey`, {method:"GET"})
        .then(response=>response.json())
        .then(data=>setStripeApiKey(data))
        .catch(error=>console.log(error))
    },[])

  return (
    <>
        <Elements stripe={loadStripe}>
        <Payment/>
        </Elements>
    </>
  )
}

export default PaymentElement