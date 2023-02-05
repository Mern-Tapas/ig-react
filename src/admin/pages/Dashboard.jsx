import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../compnents/Sidebar'

function Dashboard() {
    return (
        <>
            <div className='container-fluid '>
                <div className="row bg-white vh-100 overflow-hidden ">
                    {/* sidebar */}
                    <div className="col d-xl-block d-none p-0 border-end" style={{ maxWidth: "190px" }}>
                        <Sidebar />
                    </div>
                    {/* sidebar */}

                    {/* body content */}
                    <div className="col p-0 h-100 overflowy-scroll bg-light">
                        <div className="custom-dashboard-page-container mx-auto">
                            <div className="row bg-white w-100">
                                <div className="col">

                                d
                                </div>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                    {/* body content */}
                </div>
            </div>
        </>
    )
}

export default Dashboard