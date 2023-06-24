import React, { useEffect, useState } from 'react'
import { viewCategories } from '../../API/categoryAPI'
import { addProduct } from '../../API/productsAPI'
import { isAuthenticated } from '../../API/userAPI'
import AdminSidebar from '../layout/AdminSidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const AddProduct = () => {

    const {token} = isAuthenticated()
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        product_name : '',
        product_price : '',
        product_description : '',
        count_in_stok : '',
        product_image : '',
        category :'',
        error : '',
        success : false,
        formdata: ''

})

// destructuring
const{product_name, product_price, product_description, count_in_stok,product_image, category,
error, success, formdata}  = product

    useEffect(()=>{
        viewCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
                setProduct({...product, formdata: new FormData})
            }
        })
        .catch(err=>console.log(err))

    },[])

    const handleChange = name => event =>{
        let value = name === 'product_image' ? event.target.files[0] : event.target.value
        setProduct({...product, [name]:value})
        formdata.set(name,value)
    }

    const clickSubmit = event => {
        event.preventDefault()
        addProduct(formdata,token)
        .then(data=>{
            if(data.error){
                setProduct({...product, error: data.error, success: false})
            }
            else{
                setProduct({success:true})
            }
        })
    }

    const showError = () => {
        if(error){
          return <div className='alert alert-danger'>{error}</div>
        }
      }
    
      const showSuccess = () =>{
        if(success){
          return <div className='alert alert-success'>Product added Successfully</div>
        }
      }
    
  return (
    <>
         <Navbar/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 p-0'>
           <AdminSidebar/>
          </div>
          <div className='col-md-9'>
            <h3>Add Product</h3>
            {showError()}
            {showSuccess()}
            <form className='mt-3 w-50 mx-auto text-start'>
                <label htmlFor='product-name'>Product name</label>
                <input type={'text'} id='product_name' className='form-control' onChange=
                {handleChange('product_name')}></input>
                <label htmlFor='product-price'>Price</label>
                <input type={'number'} id='product_price' className='form-control' onChange
                ={handleChange('product_price')}></input>
                <label htmlFor='product-description'>Description</label>
                <textarea id='product_description' className='form-control' rows={5} onChange=
                {handleChange('product_description')}></textarea>
                <label htmlFor='count'>Count in stock</label>
                <input type={'number'} id='count' className='form-control' onChange=
                {handleChange('')}></input>
                <label htmlFor='image'>Image</label>
                <input type={'file'} id='image' className='form-control'></input>
                <select id='category' className='form-control'>
                    <option></option>
                    {
                        categories.map(category=>{
                            return <option key={category._id} value={category._id}>{category.category_name}</option>
                        })
                    }
                </select>
                <button className='btn btn-warning form-control mt-3' onClick={clickSubmit}>Add Product</button>

            </form>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AddProduct