import React from 'react'
import { TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Topbar() {


    const location = useLocation();
    const name = location.pathname;
    const page = name.slice(11)


    return (
        <div className="row p-2 bg-white m-0 dashboard-topbar border-bottom">

            <div className="col-3 d-flex align-items-center ">
                {page ? <h5 className='m-0 text-capitalize'>{page}</h5> : <h5 className='m-0 text-capitalize'>Analytics</h5>}
            </div>
            <div className="col d-md-flex d-none justity-content-center">
                <form method='post' className='w-100 d-flex'>
                    <TextField id="input-with-icon-textfield" fullWidth placeholder='Search' size="small" />
                </form>
            </div>
            <div className="col ">

            </div>
        </div>
    )
}

export default Topbar