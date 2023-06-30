import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EmployeeAddAction } from "../actions/employeeAction";
import './tests.css'
const AddEmployeeAdmin = () => {
    const dispatch = useDispatch()

    const [name,setname] = useState('')
    const [lname,setlname] = useState('')
    const [email,setemail] = useState('')
    const [about,setabout] = useState('')
    const [hobbies,sethobbies] = useState('')
    const [password,setpassword] = useState('')
    const [contactnumber, setcontactnumber] = useState()
    const [totalTests,settotalTests] = useState()

    function AddEmployee(e)
    {
        e.preventDefault()

        const employeedata = {
            name: name,
           lname:lname,
           email:email,
           contactnumber:contactnumber,
           totalTests:totalTests,
           hobbies:hobbies,
           about:about,
           password:password


        };
        
dispatch(EmployeeAddAction(employeedata))
    }




  return (
    <div>
      <h3>Admin Screen to Add Employees</h3>
      <hr />
      <div
      id="BackGround-5"
      >

<form onSubmit={AddEmployee} >

<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Name" variant="outlined" style={{ width: '100%' }}
                    value={name}
                    onChange={(e) => {
                        setname(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />


<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Last Name" variant="outlined" style={{ width: '100%' }}
                    value={lname}
                    onChange={(e) => {
                        setlname(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />




<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%' }}
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />



<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Contact Number" variant="outlined" style={{ width: '100%' }}
                    value={contactnumber}
                    onChange={(e) => {
                        setcontactnumber(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />


<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Password" variant="outlined" style={{ width: '100%' }}
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />



<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Total Tests" variant="outlined" style={{ width: '100%' }}
                    value={totalTests}
                    onChange={(e) => {
                        settotalTests(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />

<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="About" variant="outlined" style={{ width: '100%' }}
                    value={about}
                    onChange={(e) => {
                        setabout(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />

<br/><br/>
<TextField
                    required
                    id="outlined-basic" label="Hobbies;" variant="outlined" style={{ width: '100%' }}
                    value={hobbies}
                    onChange={(e) => {
                        sethobbies(e.target.value)
                    }}

                    style={{ width: '80%' }}

                />




<br /><br />
                <p style={{ textAlign: 'center' }} >
                    <Button variant="contained"
                        size='large'
                        style={{ color: 'white', backgroundColor: 'black' }}
                        type='submit'
                    >
                        Add Employee

                    </Button>

                    <br /><br />
                </p>

</form>

        
      </div>
    </div>
  );
};

export default AddEmployeeAdmin;
