import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import image from '../../assets/images/background3.jpg'
import Leadform from '../components/Leadform'


function Home() {
  return (
    <>
      <div className="container-fluid position-relative">
        {/* NAVBAR */}
        <div className="row navbar bg-white shadow-sm">
          <Navbar />
        </div>
        {/* NAVBAR */}

        {/* landing page conent */}
        <div className="row content-section ">
          <div className="col position-relative" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
            <div className="container-xxl h-100">
              <div className="row  h-100" >
                <div className="p-2 col-xl-6 d-flex ">
                  <div className='m-auto'>
                  </div>

                </div>
                <div className="p-2 col-xl-6 d-flex justify-content-center align-items-center justify-content-xxl-end">
                  <div className="enquire-form-div shadow  bg-white" style={{ width: "350px", height: "auto" }}>
                    <Leadform />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row content-section">
          <img src="/img.jpg" alt="" />
        </div>


        {/* landing page conent */}

        <div className="row footer bg-white">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home