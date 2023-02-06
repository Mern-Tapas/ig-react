import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../compnents/Sidebar'
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';

function Dashboard() {

    const location = useLocation();
    const name = location.pathname;

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


                        <div className="row p-2 bg-white m-0 dashboard-topbar">
                            <div className="col-3 d-flex align-items-center ">
                                <h5 className='m-0'>{name}</h5>
                            </div>
                            <div className="col d-md-flex d-none justity-content-center">
                                <form method='post' className='w-100 d-flex'>
                                    <TextField id="input-with-icon-textfield" fullWidth placeholder='Search' size="small" />
                                </form>
                            </div>
                            <div className="col ">

                            </div>
                        </div>

                        <div className="custom-dashboard-page-container mx-auto p-3">
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