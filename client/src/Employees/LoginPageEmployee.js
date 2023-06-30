import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EmployeeLoginAction } from "../actions/employeeAction";

const EmployeeLogin = () => {
  const [contactnumber, setcontactnumber] = useState();
  const [password, setpassword] = useState("");

  const admin = localStorage.getItem("admin");
  const employee = localStorage.getItem("employee");

  if (admin || employee) {
    window.location.href = "/";
  }

  const dispatch = useDispatch();

  const handleEmpLogin = (e) => {
    e.preventDefault();

    const employee = {
      contactnumber: contactnumber,
      password: password,
    };

    dispatch(EmployeeLoginAction(employee));
  };

  const boxStyle = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft:'10px',
    paddingRight:'10px',
  };

  return (
    <div>
      <div style={boxStyle} className="LoginBox">
        <br />
        <h3> Employee Login </h3>
        <form onSubmit={handleEmpLogin}>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Contact Number"
            value={contactnumber}
            type="tel"
            onChange={(e) => setcontactnumber(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: "16px" }}
          />

          <TextField
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            label="Password"
            type="password"
            required
            fullWidth
            style={{ marginBottom: "16px" }}
          />

          <Button variant="contained" type="submit" color="primary">
            Login
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
