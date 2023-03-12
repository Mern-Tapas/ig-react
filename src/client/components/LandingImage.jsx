import React from 'react'
import image from '../../assets/images/background3.jpg'

function LandingImage() {
  return (
    <div className='bg-warning w-100 vh-100 p-0' style={{ minHeight: "200px" }}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="overlay">

      </div>

    </div>
  )
}

export default LandingImage