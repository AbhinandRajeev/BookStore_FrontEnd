import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div>
      <div className='bg-gray-200 h-screen'>
        <img src="/images/admindash.png" alt="" style={{ height: '250px' }} className='ms-6 pt-5' />
        <h1 className='text-center text-2xl my-5 font-bold'>Admin</h1>
        <div className='text-center text-justify ms-10 font-bold'>

          <div className='my-3'>
            <Link to={'/admin-home'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Home</label>
            </Link>
          </div>

          <div className='my-3'>
            <Link to={'/admin-books'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">All Books</label>
            </Link>
          </div>

          <div className='my-3'>
            <Link to={'/admin-career'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Careers</label>
            </Link>
          </div>

          <div className='my-3'>
            <Link to={'/admin-settings'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Settings</label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
