import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="col ">
            <div className="container-xxl ">
                navbar-content
                <Link to="dashboard"> dashboard</Link>
            </div>
        </div>
    )
}

export default Navbar