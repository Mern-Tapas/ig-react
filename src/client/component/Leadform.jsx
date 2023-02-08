import React from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'


function Leadform() {


    const [formdata, setformdata] = useState({
        service: "",
        loantype: "",
        vehical: "",
        year: "",
        currentbank: "",
        name: "",
        contact: ""
    })


    const [otpdata, setotp] = useState({
        otp_id: "",
        otp: ""
    })


    const [optform, setotpform] = useState(false)


    const [verification, setverification] = useState("not verify")




    const otpinputhandler = (event) => {
        const { name, value } = event.target

        setotp((pre) => {
            return { ...pre, [name]: value }
        })


    }
    const inputhandler = (event) => {
        const { name, value } = event.target

        setformdata((pre) => {
            return { ...pre, [name]: value }
        })


    }

    const submitform = () => {
        axios.post("", formdata).then((res) => { console.log(res) }).catch((error) => { console.log(`tapas${error}`) })
    }





    const sendopt = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            url: 'https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp',
            headers: {
                'content-type': 'application/json',
                Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiNGIyYjZiMzAtNzEyMS00NmRmLWFiMGEtNDcxOGI3Y2VmMjIwIn0.qnLBULB8LUgswHbBkP3EbREyTWBw-7XWcNKTpAAGaFw',
                'X-RapidAPI-Key': '7d4e016ac3msh5db2e413f4dfca2p112efdjsn7232de248718',
                'X-RapidAPI-Host': 'd7-verify.p.rapidapi.com'
            },
            data: `{"originator":"SignOTP","recipient":"+91${formdata.contact.toString()}","content":"Greetings from D7 API, your mobile verification code is: {}","expiry":"600","data_coding":"text"}`
        };

        axios.request(options).then(function (response) {
            console.log("running")
            setotp({ otp_id: response.data.otp_id })
            setotpform(true)
        }).catch(function (error) {
            console.log("notrunning")
            console.error(error);
        });


    }

    const verifyotp = (event) => {
        event.preventDefault()


        const options = {
            method: 'POST',
            url: 'https://d7-verify.p.rapidapi.com/verify/v1/otp/verify-otp',
            headers: {
                'content-type': 'application/json',
                Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiNDgwZmIxM2QtYTRlMi00ZDhlLWIzOTctZjVhZjM2N2M5NjJmIn0.rg3suX_Ry5p_6Ii9CbABPtQ8MJFsM0BRyMFBO3g9kgg',
                'X-RapidAPI-Key': '7d4e016ac3msh5db2e413f4dfca2p112efdjsn7232de248718',
                'X-RapidAPI-Host': 'd7-verify.p.rapidapi.com'
            },
            data: `{"otp_id":"${otpdata.otp_id.toString()}","otp_code":"${otpdata.otp.toString()}"}`
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            submitform()
            setverification("verified")

        }).catch(function (error) {
            console.error(error);
        });

    }



    return (
        <form method='post' className='h-100 p-3'>
            {optform ?
                <div>
                    <TextField required onChange={otpinputhandler} name='otp' fullWidth className='mb-2' id="outlined-basic" label="Six Digit Otp" variant="outlined" type="number" />
                    <Button fullWidth variant="contained" type='submit' onClick={verifyotp} >Verify Otp</Button>
                    <h6>{verification}</h6>
                </div>
                :
                <div>
                    <FormControl className='mb-2' fullWidth >
                        <InputLabel id="product">Product</InputLabel>
                        <Select name="service" required onChange={inputhandler} labelId="product"
                            label="Product">
                            <MenuItem value={"Car Loan"}>Car Loan</MenuItem>
                            <MenuItem value={"Business Loan"}>Business Loan</MenuItem>
                            <MenuItem value={"Personal Loan"}>Personal Loan</MenuItem>
                            <MenuItem value={"Home Loan"}>Home Loan</MenuItem>
                        </Select>

                    </FormControl>

                    {/* car loan form if condition */}
                    {formdata.service === "Car Loan" ?

                        <div className='carloan' >

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="loantype" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"new"}>New</MenuItem>
                                    <MenuItem value={"Refine"}>Refine</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="vehical" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"Bmw"}>Bmw</MenuItem>
                                    <MenuItem value={"Audi"}>Audi</MenuItem>
                                    <MenuItem value={"Verna"}>Verna</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="year" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"2015"}>2015</MenuItem>
                                    <MenuItem value={"2016"}>2016</MenuItem>
                                    <MenuItem value={"2017"}>2017</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        : ""}

                    {/* busines loan form */}
                    {formdata.service === "Business Loan" ?

                        <div className='business_loan' >

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="loantype" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"Top Up"}>Top Up</MenuItem>
                                    <MenuItem value={"Bank Transfer"}>Bank Transfer</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="currentbank" required onChange={inputhandler} className='mb-2' labelId="select" label="Current Bank">
                                    <MenuItem value={"Sbi"}>Sbi</MenuItem>
                                    <MenuItem value={"Union Bank"}>Union Bank</MenuItem>
                                    <MenuItem value={"Panjab National"}>Panjab National</MenuItem>
                                </Select>
                            </FormControl>


                        </div>

                        : ""}
                    {formdata.service === "Home Loan" ?

                        <div className='business_loan' >

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="loantype" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"Top Up"}>Top Up</MenuItem>
                                    <MenuItem value={"Bank Transfer"}>Bank Transfer</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="currentbank" required onChange={inputhandler} className='mb-2' labelId="select" label="Current Bank">
                                    <MenuItem value={"Sbi"}>Sbi</MenuItem>
                                    <MenuItem value={"Union Bank"}>Union Bank</MenuItem>
                                    <MenuItem value={"Panjab National"}>Panjab National</MenuItem>
                                </Select>
                            </FormControl>


                        </div>

                        : ""}
                    {formdata.service === "Personal Loan" ?

                        <div className='business_loan' >

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="loantype" required onChange={inputhandler} className='mb-2' labelId="select" label="select">
                                    <MenuItem value={"Top Up"}>Top Up</MenuItem>
                                    <MenuItem value={"Bank Transfer"}>Bank Transfer</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select">Select</InputLabel>
                                <Select name="currentbank" required onChange={inputhandler} className='mb-2' labelId="select" label="Current Bank">
                                    <MenuItem value={"Sbi"}>Sbi</MenuItem>
                                    <MenuItem value={"Union Bank"}>Union Bank</MenuItem>
                                    <MenuItem value={"Panjab National"}>Panjab National</MenuItem>
                                </Select>
                            </FormControl>


                        </div>

                        : ""}

                    {/* business loan form end */}

                    {/* userdetails */}
                    <div className='userdetails'>

                        <TextField required onChange={inputhandler} name='name' fullWidth className='mb-2' id="outlined-basic" label="Name" variant="outlined" />
                        <TextField required onChange={inputhandler} name='contact' fullWidth className='mb-2' id="outlined-basic" label="Contact No" variant="outlined" type="number" />

                    </div>
                    {/* userdetails */}
                    <Button fullWidth variant="contained" type='submit' onClick={sendopt} >Submit</Button>
                </div>

            }
        </form>



    )
}

export default Leadform