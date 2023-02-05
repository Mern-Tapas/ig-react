import React from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Button } from '@mui/material'

function Leadform() {

    const [service, setservice] = useState("")



    const inputhandler = (e) => {
        setservice(e.target.value)
    }

    const submitform = (event) => {
        event.preventDefault()
        console.log("submited")
    }


    return (
        <form method='post' className='h-100 p-3' onSubmit={submitform}>
            <div>
                <FormControl className='mb-2' fullWidth >
                    <InputLabel id="product">Product</InputLabel>
                    <Select required onChange={inputhandler} labelId="product"
                        label="Product">
                        <MenuItem value={"Car_Loan"}>Car Loan</MenuItem>
                        <MenuItem value={"Business_Loan"}>Business Loan</MenuItem>
                        <MenuItem value={"Personal_Loan"}>Personal Loan</MenuItem>
                        <MenuItem value={"Home Loan"}>Home Loan</MenuItem>
                    </Select>

                </FormControl>

                {/* car loan form if condition */}
                {service === "Car_Loan" ?

                    <div className='carloan' >

                        <FormControl name="carLoanType" fullWidth>
                            <InputLabel id="select">Select</InputLabel>
                            <Select required className='mb-2' labelId="select" label="select">
                                <MenuItem value={"new"}>New</MenuItem>
                                <MenuItem value={"Refine"}>Refine</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel name="Vehical" id="select">Select</InputLabel>
                            <Select required className='mb-2' labelId="select" label="select">
                                <MenuItem value={"new"}>Bmw</MenuItem>
                                <MenuItem value={"Refine"}>Audi</MenuItem>
                                <MenuItem value={"Refine"}>Verna</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel name="year" id="select">Select</InputLabel>
                            <Select required className='mb-2' labelId="select" label="select">
                                <MenuItem value={"new"}>2015</MenuItem>
                                <MenuItem value={"Refine"}>2016</MenuItem>
                                <MenuItem value={"Refine"}>2017</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    : ""}

                {/* busines loan form */}
                {service === "Business_Loan" ?

                    <div className='business_loan' >

                        <FormControl fullWidth>
                            <InputLabel id="select">Select</InputLabel>
                            <Select required name='bltype' className='mb-2' labelId="select" label="select">
                                <MenuItem value={"new"}>Top Up</MenuItem>
                                <MenuItem value={"Refine"}>Bank Transfer</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="select">Select</InputLabel>
                            <Select required name='bankname' className='mb-2' labelId="select" label="Current Bank">
                                <MenuItem value={"new"}>Sbi</MenuItem>
                                <MenuItem value={"Refine"}>Union Bank</MenuItem>
                                <MenuItem value={"Refine"}>Panjab National</MenuItem>
                            </Select>
                        </FormControl>


                    </div>

                    : ""}

                {/* business loan form end */}

                {/* userdetails */}
                <div className='userdetails'>

                    <TextField required name='name' fullWidth className='mb-2' id="outlined-basic" label="Name" variant="outlined" />
                    <TextField required name='contact' fullWidth className='mb-2' id="outlined-basic" label="Contact No" variant="outlined" type="number" />

                </div>
                {/* userdetails */}
                <Button fullWidth variant="contained" type='submit' >Submit</Button>
            </div>
        </form>
    )
}

export default Leadform