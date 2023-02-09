import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../assets/css/leads.css"
import LeadsItems from '../compnents/LeadsItems'

function Leads() {
  return (
    <div className='leads-pages ' style={{ height: "100%" }}>
      <div >

      </div>
      <div style={{overflow:"scroll"}}>
        <LeadsItems/>
      </div>
      <div >
        <Outlet/>
      </div>
    </div>
  )
}

export default Leads