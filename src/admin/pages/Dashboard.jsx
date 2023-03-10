import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import instance from '../../instance';
import Sidebar from '../compnents/Sidebar'
import Topbar from '../compnents/Topbar';

function Dashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        instance.get("/dashboard", {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((response) => {
            if (response.data.validation === false) {

                navigate('/login')
            } else {
                navigate("/dashboard")
            }
        }).catch((error) => { console.log(error) })

    }, [])

    return (
        <>
            <div className='container-fluid '>
                <div className="row bg-white vh-100 overflow-hidden ">
                    {/* sidebar */}
                    <div className="col d-xl-block d-none p-0 border-end" style={{ maxWidth: "170px" }}>
                        <Sidebar />
                    </div>
                    {/* sidebar */}

                    {/* body content */}
                    <div className="col p-0 h-100 overflowy-scroll bg-light">



                        {/* topbar */}
                        <Topbar />
                        {/* topbar */}

                        {/* pages-content */}

                        <div className="col custom-dashboard-page-container mx-auto p-2" style={{ minHeight: "92%" }}>
                            <Outlet />
                        </div>

                        {/* pages-content */}
                    </div>
                    {/* body content */}
                </div>
            </div>
        </>
    )
}

export default Dashboard