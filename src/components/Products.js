import { DriveEta } from '@mui/icons-material'
import React from 'react'
import './products.css'

const Products = ({ products }) => {
    return (
        <>

            <div className="col">
                <div className="card shadow-lg">
                    <img src="./images/img1.png" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <button className='btn btn-warning'>View Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products