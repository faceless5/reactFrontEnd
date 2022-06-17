import React, { useEffect, useState } from 'react'
import { deleteCategory, viewCategories } from '../../API/categoryAPI'
import AdminSidebar from '../layout/AdminSidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../API/userAPI'

const ViewCategories = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const {token} = isAuthenticated()


  useEffect(()=>{
    viewCategories()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategories(data)
      }
    })
    .catch(err=>console.log(err))
  },[success])


  const deletecategory = (e,category_id) =>{
    e.preventDefault()
    deleteCategory(category_id,token)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess('')
      }
      else{
        setSuccess(data.message)
        setError('')
      }
    })
    .catch(error=>console.log(error))
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const showSuccess = () =>{
    if(success){
      return <div className='alert alert-success'>{success}</div>
    }
  }

  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 p-0'>
            <AdminSidebar />
          </div>
          <div className='col-md-9'>
            <h3>Categories</h3>
            {showError()}
            {showSuccess()}
              <table className='table table-bordered text-center table-striped table-hover'>
                <thead>
                  <tr>
                    <td>S.No</td>
                    <td>Category</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories.map((category,i)=>{
                      return<tr key ={category._id}>
                          <td>{i+1}</td>
                          <td>{category.category_name}</td>
                          <td>
                           <Link to={`/category/update/${category._id}`}><button className='btn btn-warning'>
                            UPDATE</button></Link>
                            <button className='btn btn-danger' onClick={e=>deletecategory(e,category.category_id)}>
                              DELETE</button>
                          </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default ViewCategories