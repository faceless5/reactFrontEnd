import React, { useState } from 'react'
import { addCategory } from '../../API/categoryAPI'
import { isAuthenticated } from '../../API/userAPI'
import AdminSidebar from '../layout/AdminSidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const AddCategory = () => {
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const {token} = isAuthenticated()

  const clickSubmit = (e) => {
    e.preventDefault()
    addCategory(category, token)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
      }
    })
    .catch(err=>console.log(err))
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const showSuccess = () =>{
    if(success){
      return <div className='alert alert-success'>Category added Successfully</div>
    }
  }

  return (
    <>
      <Navbar />
      {showError()}
      {showSuccess()}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 p-0'>
            <AdminSidebar />
          </div>
          <div className='col-md-9'>
            <h3>Add Category</h3>
            <div className='w-50 mt-3 mx-auto'>
                <label htmlFor='category_name'>Category Name:</label>
                <input type={'text'} className='form-control mb-3' id='category_name' 
                placeholder='enter category name here' onChange={e=>setCategory(e.target.value)}></input>
                <button className='btn btn-warning form-control' onClick={clickSubmit}>Add category</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddCategory