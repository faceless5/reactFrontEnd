import React from 'react'
import { Link } from 'react-router-dom'


const First = () => {


  return (
    
    <>
        This is first component.
        <Link className='custom-link' to='/sss'>Go to second page</Link>
        {/* <a href='/sss'>Go to second page</a> */}
    </>
    
  )
}

export default First