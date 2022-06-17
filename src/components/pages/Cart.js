import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <h3 className='text-center'>Cart Items</h3>
                <hr />

                <table className='table text-center '>
                    <thead>
                        <tr>
                            <th width="10%">S.No.</th>
                            <th width="20%">Product Image</th>
                            <th width="50%">Product Details</th>
                            <th width="20%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src='./images/img1.png' alt='image1' style={{"width":"100%"}}/>
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Rs. 30,000</h5>
                                <p>6inch Display, octacore processor, 16GB RAM, 64GB ROM</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>
                                <img src='./images/img3.jpg' alt='image1' style={{"width":"100%"}}/>
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Rs. 30,000</h5>
                                <p>6inch Display, octacore processor, 16GB RAM, 64GB ROM</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>
                                <img src='./images/img2.jpg' alt='image1' style={{"width":"100%"}}/>
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Rs. 30,000</h5>
                                <p>6inch Display, octacore processor, 16GB RAM, 64GB ROM</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <Footer />
        </>
    )
}

export default Cart