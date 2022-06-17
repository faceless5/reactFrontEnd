import React from 'react'
import './products.css'

const Products = () => {
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/img1.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/img3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/img2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/img.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products