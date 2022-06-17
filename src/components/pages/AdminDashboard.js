import React from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 p-0'>
            <AdminSidebar />
          </div>
          <div className='col-md-9'>
            <h3>Welcome to Admin Dashboard</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminDashboard