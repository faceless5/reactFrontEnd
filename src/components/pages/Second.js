import React from 'react'
import { Link } from 'react-router-dom'
import './second.css'

const Second = () => {
  return (
    <>
        This is second component.
        <Link className='custom-link' to='/' style={{"color":"red","fontSize":"30px"}}>Goto Home page</Link>
        {/* JSON format- {"key":"value"} */}
    </>
  )
}

export default Second