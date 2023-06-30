const Get_Contact_Req = "Get_Contact_Req";
const Get_Contact_Suc = "Get_Contact_Suc";
const Get_Contact_Fail = "Get_Contact_Fail";

export const GetAllContactsReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
      case Get_Contact_Req:
        return {
          ...state,
          loading: true,
        };
  
      case Get_Contact_Suc:
        return {
          ...state,
          loading: false,
          contacts: action.payload,
        };
  
      case Get_Contact_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };