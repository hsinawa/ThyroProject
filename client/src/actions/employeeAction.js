import axios from "axios";

const AddEmp_Req = "AddEmp_Req";
const AddEmp_Suc = "AddEmp_Suc";
const AddEmp_Fail = "AddEmp_Fail";

export const EmployeeAddAction = (employeedata) => (dispatch) => {
  dispatch({ type: AddEmp_Req });
  axios
    .post("/api/employees/addemployee", employeedata)
    .then((res) => {
      dispatch({ type: AddEmp_Suc, payload: res.data });
      window.location.href = "/admin/allemployee";
    })
    .catch((err) => {
      dispatch({ type: AddEmp_Fail });

      window.location.href = "/error";
      console.log("Error is ", err);
    });
};

const GetEmp_Req = "GetEmp_Req";
const GetEmp_Suc = "GetEmp_Suc";
const GetEmp_Fail = "GetEmp_Fail";

export const EmployeeGetAction = () => (dispatch) => {
  dispatch({ type: GetEmp_Req });
  axios
    .get("/api/employees/getemployee")
    .then((res) => {
      dispatch({ type: GetEmp_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetEmp_Fail });

      console.log("Error is ", err);
    });
};

export const DeleteEmployeeAction = (id) => (dispatch) => {
  dispatch({ type: "DELETE_Employee_REQUEST" });

  axios
    .post("/api/employees/deleteemployee", { id })
    .then((res) => {
      dispatch({ type: "DELETE_Employee_SUCCESS", payload: res.data });
      alert("Deleted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_Employee_FAILED", payload: err });
    });
};

const EmpId_Req = "EmpId_Req";
const EmpId_Suc = "EmpId_Suc";
const EmpId_Fail = "EmpId_Fail";

export const GetEmployeeById =
  ({ employeeId }) =>
  (dispatch) => {
    dispatch({ type: EmpId_Req });

    axios
      .post("/api/employees/getempbyid", { employeeId })
      .then((res) => {
        dispatch({ type: EmpId_Suc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: EmpId_Fail, payload: err });
      });
  };

const EmployeeLogin_Req = "EmployeeLogin_Req";
const EmployeeLogin_Suc = "EmployeeLogin_Suc";
const EmployeeLogin_Fail = "EmployeeLogin_Fail";

export const EmployeeLoginAction = (employee) => (dispatch) => {
  dispatch({ type: EmployeeLogin_Req });

  axios
    .post("/api/employees/login", employee)
    .then((res) => {
      dispatch({ type: EmployeeLogin_Suc });
      localStorage.setItem("employee", JSON.stringify(res.data));
      window.location.href = "/employeepage";
    })
    .catch((err) => {
      dispatch({ type: EmployeeLogin_Fail, payload: err });
    });
};






const EmployeeCount_Req = "EmployeeCount_Req";
const EmployeeCount_Suc = "EmployeeCount_Suc";
const EmployeeCount_Fail = "EmployeeCount_Fail";

export const EmployeeTestCountAction = ({employeeId, totalTests}) => (dispatch) => {
  dispatch({ type: EmployeeLogin_Req });

  axios
    .post("/api/employees/updatetestcount", {employeeId,totalTests})
    .then((res) => {
      dispatch({ type: EmployeeLogin_Suc });
      
    })
    .catch((err) => {
      dispatch({ type: EmployeeLogin_Fail, payload: err });
    });
};
