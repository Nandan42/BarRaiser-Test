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



export default function EmployeeTable() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees'
            );
            setData(result.data);
            setFilter(result.data);
        }
        fetchData()
        
    }, []);


    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((employee) => {
            return employee.first_name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
        });
        if (searchedVal.length < 1) {
            setFilter(data)
        }
        else {
            setFilter(filteredRows)
        }
      };
    
    return (
        <div>
            <div>
                <TextField onChange={(e) => requestSearch(e.target.value)} label='Search by name'/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow> 
                    <TableCell>ID</TableCell>
                    <TableCell >First Name</TableCell>
                    <TableCell >Last Name</TableCell>
                    <TableCell >Address</TableCell>
                    <TableCell >Date of Joining</TableCell>
                    <TableCell >Salary</TableCell>
                    <TableCell >Designation</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {filter.map((employee,index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th"><Link to={"/info/" + employee.id} state={employee.details}>{employee.id}</Link></TableCell>
                        <TableCell >{employee.first_name}</TableCell>
                        <TableCell >{employee.last_name}</TableCell>
                        <TableCell >{employee.address}</TableCell>
                        <TableCell >{employee.date_of_joining}</TableCell>
                        <TableCell >{employee.salary}</TableCell>
                        <TableCell >{employee.designation}</TableCell>
                        {/* <TableCell >{row.carbs}</TableCell>
                        <TableCell >{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
    </TableContainer>
            </div>
        </div>
    )
}


