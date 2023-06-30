const GetEmp_Req = "GetEmp_Req";
const GetEmp_Suc = "GetEmp_Suc";
const GetEmp_Fail = "GetEmp_Fail";

export const GetAllEmployeeReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
      case GetEmp_Req:
        return {
          ...state,
          loading: true,
        };
  
      case GetEmp_Suc:
        return {
          ...state,
          loading: false,
          employees: action.payload,
        };
  
      case GetEmp_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };





  const EmpId_Req = 'EmpId_Req'
  const EmpId_Suc = 'EmpId_Suc'
  const EmpId_Fail = 'EmpId_Fail'
  export const GetEmployeeByIDReducer = (state = {}, action) => {
    switch (action.type) {
      case EmpId_Req:
        return {
          ...state,
          loading: true,
        };
  
      case EmpId_Suc:
        return {
          ...state,
          loading: false,
          success: true,
          employeedata: action.payload,
        };
  
      case EmpId_Fail:
        return {
          ...state,
          loading: true,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };