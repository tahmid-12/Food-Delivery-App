import React from 'react'

function Header() {
  return (
    <div className="header d-flex justify-content-center py-2 shadow-sm">
        <a href='/'>
            <h5 className='font-weight-bold text-danger mx-3'>Food Delivery App</h5>
        </a>
        <div className='ml-auto'>
            <a href='./signin.html'>
                <button className='btn btn-danger btn-sm mx-2'>Login</button>
            </a>
            <a href='./signup.html'>
                <button className='btn btn-danger btn-sm mr-2'>Sign Up</button>
            </a>
            <button className='btn btn-danger btn-sm mx-2'>Log Out</button>
        </div>
    </div>
  )
}

export default Header