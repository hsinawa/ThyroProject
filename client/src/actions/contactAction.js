import axios from "axios";

const Contact_Req = "Contact_Req";
const Contact_Suc = "Contact_Suc";
const Contact_Fail = "Contact_Fail";

export const ContactSendAction =
  ({ contactdata }) =>
  (dispatch) => {
    dispatch({ type: Contact_Req });

    axios
      .post("/api/contact/contactmessage", { contactdata })
      .then((res) => {
        dispatch({ type: Contact_Suc, payload: res.data });
        window.location.href = "/successcontact";
      })
      .catch((err) => {
        dispatch({ type: Contact_Fail });

        window.location.href = "/error";
        console.log("Error is ", err);
      });
  };

const Get_Contact_Req = "Get_Contact_Req";
const Get_Contact_Suc = "Get_Contact_Suc";
const Get_Contact_Fail = "Get_Contact_Fail";

export const GetAllContactsAdmin = () => (dispatch) => {
  dispatch({ type: Get_Contact_Req });

  axios
    .get("/api/contact/getcontacts")
    .then((res) => {
      dispatch({ type: Get_Contact_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Get_Contact_Fail });
      window.location.href = "/error";
      console.log("Error is ", err);
    });
};
