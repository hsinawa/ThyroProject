export const AddNewTestsReducer = (state = {}, action) => {
  switch (action.type) {
    case "Test_Request":
      return {
        ...state,
        loading: true,
      };

    case "Test_Success":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "Test_Error":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const GetAllTestsReducer = (state = { tets: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case "GET_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};

export const GetTestsByDiagnosticsReducer = (state = {}, action) => {
  switch (action.type) {
    case "Test_Diag_Request":
      return {
        ...state,
        loading: true,
      };

    case "Test_Diag_Success":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "Test_Diag_Error":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const GetTestsByComboReducer = (state = { tets: [] }, action) => {
  switch (action.type) {
    case "GET_COMBO_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_COMBO_SUCCESS":
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case "GET_COMBO_FAILED":
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};

export const GetTestsByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_IDTEST_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_IDTEST_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        testsdata: action.payload,
      };

    case "GET_IDTEST_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const GetTestMedReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case "GET_MEDTEST_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_MEDTEST_SUCCESS":
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case "GET_MEDTEST_FAILED":
      return {
        ...state,
        loading: true,
        error: false,
        tests: action.payload,
      };

    default:
      return state;
  }
};


export const GetAllTestsNonPackageReducer = (state = { tets: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST1":
      return {
        ...state,
        loading: true,
      };

    case "GET_PRODUCT_SUCCESS1":
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case "GET_PRODUCT_FAILED1":
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};



const Category_Request = "GET_CATEGORYTEST_REQUEST";
const Category_Success = "GET_CATEGORYTEST_SUCCESS";
const Category_Fail = "GET_CATEGORYTEST_FAILED";

export const GetTestCategoryReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case `${Category_Request}`:
      return {
        ...state,
        loading: true,
      };

    case `${Category_Success}`:
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case `${Category_Fail}`:
      return {
        ...state,
        loading: true,
        error: false,
        tests: action.payload,
      };

    default:
      return state;
  }
};
