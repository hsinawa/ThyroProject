import React from "react";
import AdminAddBlog from "./AdminAddBlog";
import EmployeeAddBlog from "./employeeBlogs";

const AddBlogs = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));


  return (
    <div>
      {admin && (<AdminAddBlog/>)}

      {employee && <p><EmployeeAddBlog/></p>}

      
    </div>
  );
};

export default AddBlogs;
