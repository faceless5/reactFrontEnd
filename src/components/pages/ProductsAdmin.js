import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../API/productsAPI'
import AdminSidebar from '../layout/AdminSidebar'
import Navbar from '../layout/Navbar'

const ProductsAdmin = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProducts("createdAt",-1,10000)    //  sortBy= createdAt, -1= descending order limit=4
        .then(data=>{
            if(data.error){
                console.log(data)
            }
            else{
                setProducts(data)
            }
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 p-0'>
                    <AdminSidebar/>
                </div>
                <div className='col-md-9 p-0'>
                    <h3>Products</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Product Image</th>
                                <th>Product Description</th>
                                <th>count in stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item,i)=>{
                                    return <tr key={item._id}>
                                        <td>{i+1}</td>
                                        <td>
                                            <img src={`http://localhost:5000/${item.product_image}`} 
                                            alt={item.product_name} height='150px'/>
                                        </td>
                                        <td>
                                            <h5>{item.product_name}</h5>
                                            <h5>Rs. {item.product_price}</h5>
                                            <h5>Description {item.product_description}</h5>
                                        </td>
                                        <td>
                                            {item.count_in_stock}
                                        </td>
                                        <td>
                                           <Link to={`/product/details/${item._id}`}><button className='btn btn-warning'>
                                            View Details</button></Link>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsAdmin