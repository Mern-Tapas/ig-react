import React, { useState } from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import image from "../../assets/images/background2.jpg"
import instance from '../../instance'
import Cookies from 'js-cookie'



function Signup() {

  const navigate = useNavigate()

  const location = useLocation().pathname
  const [registration, setregistration] = useState(
    {
      name: "",
      contact: "",
      email: "",
      password: "",
      cpassword: "",
    }
  )


  const inputhandler = (e) => {
    const { name, value } = e.target

    setregistration((pre) => {
      return { ...pre, [name]: value }
    })
  }

  const register = (event) => {
    event.preventDefault()
    instance.post(location, registration).then((response) => {
      if (response.data.validation) {
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }
      else {
        navigate('/login')
      }
    }).catch((error) => { console.log(error) })
  }



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
                    <i className="fa-brands fa-facebook-f m-auto text-secondary"></i>
                  </Link>
                </div>
                <div className='auto-icons rounded-pill d-flex'>
                  <Link to="/login" className='w-100 h-100 d-flex form-control'>
                    <i className="fa-brands fa-google m-auto text-secondary"></i>
                  </Link>
                </div>
                <div className='auto-icons rounded-pill d-flex'>
                  <Link to="/login" className='w-100 h-100 d-flex form-control'>
                    <i className="fa-brands fa-twitter  m-auto text-secondary"></i>
                  </Link>
                </div>
              </div>
              <p className='mt-4 text-center text-capitalize text-secondary'>stay updated on your professional world</p>
              <form onSubmit={register} className='w-100'>
                <input onChange={inputhandler} name='name' type="text" placeholder='Alex Walker' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input onChange={inputhandler} name='contact' type="number" placeholder='+91 9922665454' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input onChange={inputhandler} name='email' type="text" placeholder='example@email.com' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input onChange={inputhandler} name='password' type="password" placeholder='Password' className='w-100 p-2 px-3 border mb-3 form-control' />
                <input onChange={inputhandler} name='cpassword' type="password" placeholder='Confirm Password' className='w-100 p-2 px-3 border mb-3 form-control' />
                <p className='mx-2  text-capitalize'><Link to="/resetyourpassword" >forgot your password?</Link></p>
                <div className='d-flex'>
                  <button type="submit" className='py-2 mx-auto px-5 btn btn-primary w-100'>Sign Up</button>
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