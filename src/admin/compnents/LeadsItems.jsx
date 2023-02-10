import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function LeadsItems() {


    const rows = [
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
        { name: "username", calories: "6261452510", fat: "Bank Loan", carbs: "5", protein: "5" },
    ]



    return (
        <div className='h-100  '>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Loan</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right" className='d-flex'> <p className='ms-auto my-auto p-1 px-2 rounded-pill button-red'>verified</p> </TableCell>
                                <TableCell align="right">
                                    <Link to="656468656">
                                        <Button className='ms-2' variant="contained" size="small">view</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default LeadsItems