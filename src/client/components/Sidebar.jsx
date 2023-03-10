import React from 'react'
import logo from "../../assets/images/logo.jpg"
import profile from "../../assets/images/profile.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import instance from '../../instance'
function Sidebar() {


    const location = useLocation();
    const name = location.pathname;
    const page = name.split('/')
    const pagename = page[2]

    const navigate = useNavigate()

    const logout = () => {


        instance.get(`/dashboard/logout`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((response) => {
            if (response.data.validation) {
                navigate('/login')
                localStorage.removeItem("token")
            }
        }).catch((error) => {
            console.log(`logout route error react ${error}`)
        })

    }

    return (
        <div className="sidebar-content d-flex flex-column h-100">
            {/* logo */}
            <div className='p-3 d-flex align-items-center'>
                <div className="logo-container rounded-3 overflow-hidden" style={{ width: "30px", height: "30px" }}>
                    <img src={logo} alt="logo" />
                </div>
                <h6 className='ms-2 mb-0'>Namecheap</h6>
            </div>
            {/* logo */}
            {/* Links */}
            <div className='p-2'>
                <ul className='links'>
                    <Link to=''>
                        <li className={(pagename === "") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-table-columns"></i>
                            <span className='ms-2'>Dashboard</span>
                        </li>
                    </Link>

                    <Link to='create'>
                        <li className={(pagename === "create") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-square-plus"></i>
                            <span className="ms-2">Create</span>
                        </li>
                    </Link>

                    <Link to='files'>
                        <li className={(pagename === "files") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-file"></i>
                            <span className='ms-2'>Files</span>
                        </li>
                    </Link>

                    <Link to='users'>
                        <li className={(pagename === "users") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-user"></i>
                            <span className='ms-2'>Users</span>
                        </li>
                    </Link>

                    <Link to='setting'>
                        <li className={(pagename === "setting") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-gear"></i>
                            <span className='ms-2'>Settings</span>
                        </li>
                    </Link>

                    <Link to='help'>
                        <li className={(pagename === "help") ? "p-2 px-3 rounded-3 active mb-1 fs-8" : "p-2 px-3 rounded-3 text-secondary mb-1 fs-8"}>
                            <i className="fa-solid fa-circle-info"></i>
                            <span className='ms-2'>Help</span>
                        </li>
                    </Link>
                </ul>
            </div>
            {/* Links */}

            {/* userdetails */}
            <div className="p-2 mt-auto " >

                <div className='user-info w-100 d-flex flex-column p-2 pt-3 rounded-3 border shadow-sm' >
                    <div className="rounded-pill mx-auto overflow-hidden" style={{ width: "35px", height: "35px" }}>
                        <img src={profile} alt="logo" />
                    </div>
                    <h6 className='text-center fs-8 mt-2 mb-0'>client</h6>
                    <p className='text-center fs-8'>@tomcrus_6</p>
                    <Link onClick={logout} >
                        <li className='danger-button p-2 px-3 rounded-3 mb-1 fs-8'>
                            <i className="fa-solid fa-arrow-right-from-bracket "></i>
                            <span className='ms-2 fw-bold'>Logout</span>
                        </li>
                    </Link>
                </div>

            </div>
            {/* userdetails */}

        </div>
    )
}

export default Sidebar