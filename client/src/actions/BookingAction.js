import axios from "axios";

const Booking_Req = "PLACE_Booking_REQUEST";
const Booking_Suc = "PLACE_Booking_SUCCESS";
const Booking_Fail = "PLACE_ORDER_FAILED";

export const PlaceBookingAction =
  ({ details }) =>
  (dispatch, getState) => {
    const DemoItem = getState().CartReducer.CartItem;
    const Coupondata = JSON.parse(sessionStorage.getItem("couponavail"));

    var CartItem = new Array();

    for (var i = 0; i < DemoItem.length; i++) {
      var item = {
        name: DemoItem[i].name,
        reporttime: DemoItem[i].reporttime,
        price: DemoItem[i].price,
        _id: DemoItem[i]._id,
        duration: DemoItem[i].duration,
        CouponApplied: DemoItem[i].CouponApplied,
        profit: DemoItem[i].profit,
        category: DemoItem[i].category,
      };
      CartItem.push(item);
    }

    dispatch({ type: `${Booking_Req}` });

    axios
      .post("/api/bookings/makebooking", { CartItem, details, Coupondata })
      .then((res) => {
        dispatch({ type: `${Booking_Suc}` });
        sessionStorage.setItem("Details", JSON.stringify(details));
        localStorage.removeItem("CartItem");
        window.location.href = "/confirm";
      })
      .catch((err) => {
        dispatch({ type: `${Booking_Fail}` });
      });
  };

const Bookings_Req = "Get_Bookings_Request";
const Booking_Success = "Get_Bookings_Success";
const Bookings_Fail = "Get_Bookings_Failed";

export const GetBookingsByPhoneNumberAction =
  ({ contactnumber }) =>
  (dispatch) => {
    dispatch({ type: Bookings_Req });

    axios
      .post("/api/bookings/bookingsbycontact", { contactnumber })
      .then((res) => {
        dispatch({ type: Booking_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Bookings_Fail, payload: err });
      });
  };

const Booking_Id_Req = "Get_Bookings_ById_Req";
const Booking_Id_Success = "Get_Bookings_ById_Success";
const Booking_Id_Fail = "Get_Bookings_ById_Fail";
export const GetBookingByIdAction =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: Booking_Id_Req });

    axios
      .post("/api/bookings/bookingsbyid", { id })
      .then((res) => {
        dispatch({ type: Booking_Id_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Booking_Id_Fail, payload: err });
      });
  };

const Get_All_BookingsReq = "Get_All_BookingsRed";
const Get_All_BookingsSuc = "Get_All_BookingsSuc";
const Get_All_BookingsFail = "Get_All_BookingsFail";

export const GetAllBookingsAction =
  ({ SelectedDate }) =>
  (dispatch) => {
    dispatch({ type: Get_All_BookingsReq });
    axios
      .post("/api/bookings/allbookings", { SelectedDate })
      .then((res) => {
        dispatch({ type: Get_All_BookingsSuc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Get_All_BookingsFail, payload: err });
      });
  };

export const GetAllBookingsByMonthAction =
  ({ SelectedDate }) =>
  (dispatch) => {
    dispatch({ type: Get_All_BookingsReq });
    axios
      .post("/api/bookings/allbookingsmonth", { SelectedDate })
      .then((res) => {
        dispatch({ type: Get_All_BookingsSuc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Get_All_BookingsFail, payload: err });
      });
  };

export const GetAllBookingsByYearAction =
  ({ SelectedDate }) =>
  (dispatch) => {
    dispatch({ type: Get_All_BookingsReq });
    axios
      .post("/api/bookings/allbookingsyear", { SelectedDate })
      .then((res) => {
        dispatch({ type: Get_All_BookingsSuc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Get_All_BookingsFail, payload: err });
      });
  };

const Report_Req = "Report_Req";
const Report_Suc = "Report_Suc";
const Report_Fail = "Report_Fail";
export const UploadReportAction =
  ({ reportdata }) =>
  (dispatch) => {
    dispatch({ type: Report_Req });
    axios
      .post("/api/bookings/addreport", { reportdata })
      .then((res) => {
        dispatch({ type: Report_Suc, payload: res.data });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Report_Fail, payload: err });
      });
  };

const Collected_Req = "Collected_Req";
const Collected_Suc = "Collected_Suc";
const Collected_Fail = " Collected_Fail";

export const UpdateBookingCollectedBy =
  ({ details }) =>
  (dispatch) => {
    dispatch({ type: Collected_Req });

    axios
      .post("/api/bookings/updatecollectedby", { details })
      .then((res) => {
        dispatch({ type: Collected_Suc, payload: res.data });
        alert("Assigned Successfully");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Collected_Fail, payload: err });
      });
  };

const SampleCollected_Req = "SampleCollected_Req";
const SampleCollected_Suc = "SampleCollected_Suc";
const SampleCollected_Fail = "SampleCollected_Fail";

export const UpdateSampleCollectedByActionAgain =
  ({ details }) =>
  (dispatch) => {
    dispatch({ type: SampleCollected_Req });

    axios
      .post("/api/bookings/samplecollection", { details })
      .then((res) => {
        dispatch({ type: SampleCollected_Suc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SampleCollected_Fail, payload: err });
      });
  };

const MoneyCollected_Req = "MoneyCollected_Req";
const MoneyCollected_Suc = "MoneyCollected_Suc";
const MoneyCollected_Fail = "MoneyCollected_Fail";

export const UpdateMoneyCollectionAction =
  ({ details }) =>
  (dispatch) => {
    dispatch({ type: MoneyCollected_Req });

    axios
      .post("/api/bookings/ismoneycollected", { details })
      .then((res) => {
        dispatch({ type: MoneyCollected_Suc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: MoneyCollected_Fail, payload: err });
      });
  };

const Get_AllEmp_BookingsReq = "Get_AllEmp_BookingsRed";
const Get_AllEmp_BookingsSuc = "Get_AllEmp_BookingsSuc";
const Get_AllEmp_BookingsFail = "Get_AllEmp_BookingsFail";

export const GetAllBookingsByEmpIdAction =
  ({ SelectedDate, empid }) =>
  (dispatch) => {
    dispatch({ type: Get_AllEmp_BookingsReq });
    axios
      .post("/api/bookings/allbookingsofemployee", { SelectedDate, empid })
      .then((res) => {
        dispatch({ type: Get_AllEmp_BookingsSuc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Get_AllEmp_BookingsFail, payload: err });
      });
  };

const CancelBooking_Req = "CancelBooking_Req";
const CancelBooking_Suc = "CancelBooking_Suc";
const CancelBooking_Fail = "CancelBooking_Fail";

export const CancelBookingAction =
  ({ details }) =>
  (dispatch) => {
    dispatch({ type: CancelBooking_Req });
    axios
      .post("/api/bookings/cancelbooking", { details })
      .then((res) => {
        dispatch({ type: CancelBooking_Suc, payload: res.data });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: CancelBooking_Fail, payload: err });
      });
  };

const SendMail_Req = "SendMail_Req";
const SendMail_Suc = "SendMail_Suc";
const SendMail_Fail = "SendMail_Fail";

export const SendMailEveryoneAction =
  ({ emailBody, title }) =>
  (dispatch) => {
    dispatch({ type: SendMail_Req });

    axios
      .post("/api/bookings/sendallmail", { emailBody , title})
      .then((res) => {
        dispatch({ type: SendMail_Suc, payload: res.data });
        alert('Mail Sent Successfully')
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SendMail_Fail, payload: err });
      });
  };




  export const SendMailCategoryAction =
  ({ emailBody, title, category }) =>
  (dispatch) => {
    dispatch({ type: SendMail_Req });

    axios
      .post("/api/bookings/sendcategorymail", { emailBody , title, category})
      .then((res) => {
        dispatch({ type: SendMail_Suc, payload: res.data });
        alert('Mail Sent Successfully')
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SendMail_Fail, payload: err });
      });
  };
