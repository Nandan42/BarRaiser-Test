import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";



export default function EmployeeInfoTable() {
    const [employeeData, setEmployeeData] = useState([]);
    const location = useLocation();
    const employee_details = location.state;


    // console.log(employee_details)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                employee_details
            );
            // console.log(result.data)
            setEmployeeData(result.data[0]);
        }
        fetchData()        
    }, []);


    return (
        <div>
            <div>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow> 
                    <TableCell>Field</TableCell>
                    <TableCell >Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">First Name</TableCell>
                        <TableCell >{employeeData.first_name}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Last Name</TableCell>
                        <TableCell >{employeeData.last_name}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Date of Birth</TableCell>
                        <TableCell >{employeeData.date_of_birth}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Address</TableCell>
                        <TableCell >{employeeData.address}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Date of Joining</TableCell>
                        <TableCell >{employeeData.date_of_joining}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Salary</TableCell>
                        <TableCell >{employeeData.salary}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th">Designation</TableCell>
                        <TableCell >{employeeData.designation}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
    </TableContainer>
            </div>
        </div>
    )
}