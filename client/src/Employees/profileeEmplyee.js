import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetEmployeeById } from "../actions/employeeAction";
import { GetEmployeeByIDReducer } from "../reducers/EmployeeReducer";
import EmailIcon from "@mui/icons-material/Email";

//MUI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const ProfileEmployee = () => {
  const dispatch = useDispatch();
  const employee = JSON.parse(localStorage.getItem("employee"));
  const employeeId = employee._id;
  useEffect(() => {
    dispatch(GetEmployeeById({ employeeId }));
  }, []);

  const getEmployeeBy = useSelector((state) => state.GetEmployeeByIDReducer);
  const { loading, success, error, employeedata } = getEmployeeBy;
  const gradientStyle = {
    background:
      "linear-gradient(to right, #307bff, #0091ff, #00a9ff, #00c1ff, #00d9ff)",
    height: "200px",
    width: "80%",
  };

  return (
    <div>
      <h3 style={{color:'red'}} > If you want to edit details, contact Admin! </h3>
      <div id="BackGround-1" style={gradientStyle}></div>
      <div id="BackGround-2">
        {loading && <CircularProgress />}
        {error&&(<h2>Error is: {error}</h2>)}
        {employeedata && (
          <>
            <br />
            <h3>
              {" "}
              Hi, I'm {employeedata[0].name} {employeedata[0].lname}{" "}
            </h3>
            <p style={{ color: "#403030" }}>
              <VaccinesIcon style={{ verticalAlign: "-6px" }} /> Total Tests
              Doneone : {employeedata[0].totalTests}{" "}
            </p>
            <h4 style={{ color: "#404040" }}>
              {" "}
              <a
                href={`mailto:${employeedata[0].email}`}
                style={{ textDecoration: "none", color: "#404040" }}
              >
                {" "}
                <EmailIcon style={{ verticalAlign: "-6px" }} />{" "}
                {employeedata[0].email}{" "}
              </a>{" "}
            </h4>

            <hr />
            <h2 className="sub-heading" style={{ textAlign: "start" }}>
              About Myself
            </h2>
            <p
              style={{
                textAlign: "justify",

                color: "#505050",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {employeedata[0].about}
            </p>

            <h2 className="sub-heading" style={{ textAlign: "start" }}>
              My Hobbies
            </h2>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {employeedata[0].hobbies.map((i, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    {i}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )}
      </div>

      <h2 className="sub-heading" style={{ textAlign: "start" }}>
        Here are some of my Blogs
      </h2>
    </div>
  );
};

export default ProfileEmployee;
