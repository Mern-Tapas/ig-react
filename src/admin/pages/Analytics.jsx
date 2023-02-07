import axios from 'axios'
import React, { useEffect } from 'react'
import "../../assets/css/analytics.css"

function Analytics() {



  const  fetchdata = async ()=>{
      await axios.get("").then((response)=>{console.log(response)})
  }

  fetchdata()

  return (
    <div className='analytics d-grid h-100'>

      {/* gridchiild */}
      <div className='analytics-count'>
        <div>f</div>
        <div>f</div>
        <div>f</div>
        <div>f</div>
      </div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>d</div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>d</div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>

        <div className='w-100' style={{ maxHeight: "400px", overflowX: "scroll" }}>
          <div className='p-2 bg-white' style={{ position: "sticky", top: "0" }}>
            <h6 className='m-0'>Leads</h6>
          </div>

          {/* leades */}
          <div className='border p-2'>
            2
          </div>
          {/* leades */}

        </div>

      </div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>

      </div>
      {/* gridchiild */}

    </div>
  )
}

export default Analytics