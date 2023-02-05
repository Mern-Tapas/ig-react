import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/background2.jpg"

function Signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 ">
          <div className="col-md-6 col-12 bg-dark d-flex p-0 position-relative">
            <img src={image} alt="" />
            <div className="overlay-box"></div>
          </div>
          <div className="col-md-6 col-12 d-flex p-0 bg-white ">
            <div className="login-form p-2 d-flex flex-column m-auto ">
              <h3 className='text-center text-dark mb-4'>Create Account</h3>
              <div className='login-by-other d-flex justify-content-between m-auto'>
                <div className='auto-icons rounded-pill d-flex'>
                  <Link to="/signup" className='w-100 h-100 d-flex form-control'>
                    <i class="fa-brands fa-facebook-f m-auto text-secondary"></i>
                  </Link>
                </div>
                <div className='auto-icons rounded-pill d-flex'>
                  <Link to="/login" className='w-100 h-100 d-flex form-control'>
                    <i class="fa-brands fa-google m-auto text-secondary"></i>
                  </Link>
                </div>
                <div className='auto-icons rounded-pill d-flex'>
                  <Link to="/login" className='w-100 h-100 d-flex form-control'>
                    <i class="fa-brands fa-twitter  m-auto text-secondary"></i>
                  </Link>
                </div>
              </div>
              <p className='mt-4 text-center text-capitalize text-secondary'>stay updated on your professional world</p>
              <form method='post' className='w-100'>
                <input type="text" placeholder='example@email.com' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input type="password" placeholder='Password' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input type="cpassword" placeholder='Confirm Password' className='w-100 p-2 px-3 border mb-3 form-control' />
                <p className='mx-2  text-capitalize fw-bold'><Link to="/resetyourpassword" >forgot your password?</Link></p>
                <div className='d-flex'>
                  <button className='py-2 mx-auto px-5 btn btn-primary w-100'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup