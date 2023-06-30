import axios from "axios";
import { get } from "mongoose";
import { useHistory } from "react-router-dom";

export const AddNewTestsAction = (testdata) => (dispatch) => {
  dispatch({ type: "Test_Request" });
  axios
    .post("/api/tests/addtest", testdata)
    .then((res) => {
      dispatch({ type: "Test_Success", payload: res.data });
      window.location.href = "/admin/tests";
    })
    .catch((err) => {
      dispatch({ type: "Test_Error" });

      window.location.href = "/error";
      console.log("Error is ", err);
    });
};

export const GetAllTestsAction = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });

  axios
    .get("/api/tests/getalltests2")
    .then((res) => {
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};


export const GetAllTestsNonPacageAction = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST1" });

  axios
    .get("/api/tests/getalltests")
    .then((res) => {
      dispatch({ type: "GET_PRODUCT_SUCCESS1", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED1", payload: err });
    });
};

export const GetComboTestsAction = () => (dispatch) => {
  dispatch({ type: "GET_COMBO_REQUEST" });

  axios
    .get("/api/tests/getcombotest")
    .then((res) => {
      dispatch({ type: "GET_COMBO_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_COMBO_FAILED", payload: err });
    });
};

export const GetTestsByIdAction =
  ({ testid }) =>
  (dispatch) => {
    dispatch({ type: "GET_IDTEST_REQUEST" });

    axios
      .post("/api/tests/gettestbyid", { testid })
      .then((res) => {
        dispatch({ type: "GET_IDTEST_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_IDTEST_FAILED", payload: err });
      });
  };

export const GetTestsByMedAction = () => (dispatch) => {
  dispatch({ type: "GET_MEDTEST_REQUEST" });

  axios
    .post("/api/tests/getmedicaltests")
    .then((res) => {
      dispatch({ type: "GET_MEDTEST_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: "GET_MEDTEST_FAILED", payload: err });
    });
};

const Category_Request = "GET_CATEGORYTEST_REQUEST";
const Category_Success = "GET_CATEGORYTEST_SUCCESS";
const Category_Fail = "GET_CATEGORYTEST_FAILED";
export const GetTestsByCategoryAction =
  ({ categorytype }) =>
  (dispatch) => {
    dispatch({ type: `${Category_Request}` });

    axios
      .post("/api/tests/getcategorytests", { categorytype })
      .then((res) => {
        dispatch({ type: `${Category_Success}`, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: `${Category_Fail}`, payload: err });
      });
  };

export const DeleteTestAction = (id) => (dispatch) => {
  dispatch({ type: "DELETE_PRODUCT_REQUEST" });

  axios
    .post("/api/tests/deletetest", { id })
    .then((res) => {
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
      alert("Deleted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_PRODUCT_FAILED", payload: err });
    });
};

const Update_Req = "Update_Req";
const Update_Suc = "Update_Suc";
const Update_Fail = "Update_Fail";

export const UpdateTestsAction = (testid, testdata) => (dispatch) => {
  dispatch({ type: Update_Req });

  axios
    .post("/api/tests/updateTest", { testid, testdata })
    .then((res) => {
      dispatch({ type: Update_Suc });
      window.location.href = "/admin/tests";
    })
    .catch((err) => {
      dispatch({ type: Update_Fail });
    });
};
