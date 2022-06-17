import React from 'react'
import { Link } from 'react-router-dom'
import Second from './Second'

const Third = () => {
  return (
    <div>
        <Second/>
        <br/>
        <Link className='custom-link' to={'/'}>Goto first page from third page</Link>
    </div>
  )
}

export default Third