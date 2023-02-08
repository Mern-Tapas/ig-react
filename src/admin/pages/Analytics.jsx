import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

import "../../assets/css/analytics.css"

function Analytics() {

  const [leades, setleads] = useState([])

  useEffect(() => {
    fetchdata()

  }, [])

  const fetchdata = async () => {
    await axios.get("").then((response) => { setleads(response.data.data) })
  }

  const deletitem = (id)=>{
    console.log("running")
    console.log(id)
    
  }


  return (
    <div className='analytics d-grid h-100'>

      {/* gridchiild */}
      <div className='analytics-count'>
        <div>c</div>
        <div>c</div>
        <div>c</div>
        <div>c</div>
      </div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div></div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div></div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>

        <div className='w-100' style={{ maxHeight: "400px", overflowX: "scroll" }}>
          <div className='p-2 bg-white border-bottom' style={{ position: "sticky", top: "0", zIndex: "99" }}>
            <h6 className='m-0'>Leads</h6>

          </div>

          {/* leades */}
          {leades.map((data) => {
            return <div key={data._id} className='border-bottom px-2 mb-2'>

              <div className='p-2 d-flex align-items-center'>
                <div className='' style={{ width: "150px" }}>
                  <h6 className='fs-8 m-0 text-capitalize'>{data.service}</h6>
                </div>
                <div className='' style={{ width: "200px" }}>
                  <h6 className='fs-8 m-0 text-capitalize'>{data.name}</h6>
                </div>
                <div className='' style={{ width: "200px" }}>
                  <h6 className='fs-8 m-0 text-capitalize'>{data.contact}</h6>
                </div>

                <div className='ms-auto'>
                  <Button className='ms-2' variant='outlined' color="error" size="small" onClick={()=>{deletitem(data._id)}} >Delete</Button>
                  <Button className='ms-2' variant="contained" size="small">view</Button>
                </div>
              </div>

            </div>
          })}
          {/* leades */}

        </div>

      </div>
      {/* gridchiild */}

      {/* gridchiild */}
      <div>
        s
      </div>
      {/* gridchiild */}

    </div>
  )
}

export default Analytics