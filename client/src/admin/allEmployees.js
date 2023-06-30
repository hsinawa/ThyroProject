import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteEmployeeAction,
  EmployeeGetAction,
} from "../actions/employeeAction";
import CircularStatic from "../components/loading";
import { GetAllEmployeeReducer } from "../reducers/EmployeeReducer";

//MUI
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const AllEmployeesAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EmployeeGetAction());
  }, []);

  const { loading, employees } = useSelector(
    (state) => state.GetAllEmployeeReducer
  );

  const deleteEmployee = (id) => {
    
    const r = window.confirm("Do you want to delete?");
    if (r == true) {
      dispatch(DeleteEmployeeAction(id));
    } else {
      return;
    }
  };

  return (
    <div>
      <h3>List of All Employees</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>LName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Total Tests</th>
            <th>Delete</th>
            <th>View More</th>
          </tr>
        </thead>
        {loading && <CircularStatic />}

        {employees &&
          employees.map((i) => {
            return (
              <tr>
                <td data-label="Name"> {i.name} </td>
                <td data-label="LName"> {i.lname} </td>
                <td data-label="Email"> {i.email} </td>
                <td data-label="Contact Number"> {i.contactnumber} </td>
                <td data-label="Password"> {i.password} </td>
                <td data-label="Total Tests"> {i.totalTests} </td>

                <td
                  data-label="Delete"
                  onClick={() => {
                    deleteEmployee(i._id);
                  }}
                >
                  <DeleteIcon />{" "}
                </td>

                <td data-label="View More">
                  {" "}
                  <Link to={`/aboutemp/${i._id}`} >View More</Link>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AllEmployeesAdmin;
