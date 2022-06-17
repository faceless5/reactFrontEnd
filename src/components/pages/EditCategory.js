import React, { useEffect, useState } from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../API/userAPI'
import { getCategory, updateCategory } from '../../API/categoryAPI'

const EditCategory = () => {
    const {token} = isAuthenticated()
    const params = useParams()
    const category_id = params.category_id
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [prevCategory, setPrevCategory] = useState('')


    //useEffect
    useEffect(()=>{
      getCategory(category_id)
      .then(data=>{
        if(data.error){
          setError(data.error)
        }
        else{
          setPrevCategory(data)
        }
      })
    },[success])

    
    const clickSubmit = (e) => {
        e.preventDefault()
        updateCategory(category, category_id, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess("category Updated Successfully")
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
            <div className='container w-50 mt-3'>
            <h3>Update Category</h3>
            {showError()}
            {showSuccess()}
            <form className='mt-3 p-5'>
                <label>Category Name</label>
                <input type={'text'} className='disabled form-control' readOnly value={prevCategory.category_name}/>
               
                {
                  
                  !success &&
                  <>
                  <label htmlFor='new_cat'>New Category Name:</label>
                  <input type={'text'} className='form-control' onChange={e=>setCategory(e.target.value)}/>
                  <button className='btn btn-warning mt-2'
                  onClick={clickSubmit}>Update Category</button>
                  </>
                }
               
            </form>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default EditCategory