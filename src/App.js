import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmployeeTable from './employeeTable';
import EmployeeInfoTable from './employeeInfo';
import RichObjectTreeView from './hierarchyView';


export default function ButtonAppBar() {
  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ mb:4 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Directory
          </Typography>
        <Button color="inherit" component={Link} to="/">Table View</Button>
        <Button color="inherit" component={Link} to="/tree">Hierarchy View</Button>
        </Toolbar>
      </AppBar>

        <Routes>
          <Route path="/" element={<EmployeeTable />} /> 
          <Route path="/tree" element={<RichObjectTreeView />} />      
          <Route path="/info/:id" element={<EmployeeInfoTable />} />
        </Routes>
      </div>
    </Router>
  );
}
