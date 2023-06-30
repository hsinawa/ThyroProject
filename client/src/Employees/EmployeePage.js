import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Routes, Route, Link } from "react-router-dom";
import { EmployeeLoginAction } from "../actions/employeeAction";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TodaySchedule from "./todaySchedule";

function Employeepage() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const employee = JSON.parse(localStorage.getItem("employee"));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar collapsed={collapsed}>
              <p onClick={handleToggleCollapse}>
                {collapsed ? (
                  <MenuIcon style={{ cursor: "pointer" }} />
                ) : (
                  <CloseIcon style={{ cursor: "pointer" }} />
                )}
              </p>

              <Menu>
              <MenuItem> <Link to='/' style={{textDecoration:'none', color:'black'}} ><MenuItem> Home </MenuItem></Link> </MenuItem>

                <SubMenu label="Schedule">
                    <Link to='/employeepage/today' style={{textDecoration:'none', color:'black'}} ><MenuItem>  Schedule </MenuItem></Link>
                    
                
                </SubMenu>


                <SubMenu label="Blogs">
                    <Link to='/employeepage/allblogs' style={{textDecoration:'none', color:'black'}} ><MenuItem> My Blogs </MenuItem></Link>
                    
                    <Link to='/addblogs' style={{textDecoration:'none', color:'black'}} ><MenuItem> Write a Blog </MenuItem></Link>
                </SubMenu>

                <MenuItem> <Link to='/employeepage/profile' style={{textDecoration:'none', color:'black'}} ><MenuItem> My Profile </MenuItem></Link> </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("employee");
                    window.location.href = "/";
                  }}
                >
                  {" "}
                  <LogoutIcon style={{ textAlign: "-6px" }} /> Signout{" "}
                </MenuItem>
              </Menu>
            </Sidebar>
          </Grid>
          <Grid item xs={8}>
            <h2>Hello {employee.name} ! Hope You Have a Nice Day </h2>
            <div name='checking' >
                </div>

            <Routes>

{
    employee?(<Route path="/employeepage/today" element={<TodaySchedule />} />):null
}
            



</Routes>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Employeepage;
