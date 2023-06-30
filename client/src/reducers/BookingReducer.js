const Booking_Req = "PLACE_Booking_REQUEST";
const Booking_Suc = "PLACE_Booking_SUCCESS";
const Booking_Fail = "PLACE_ORDER_FAILED";

export const BookingReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Booking_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Booking_Suc}`:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case `${Booking_Fail} `:
      return {
        ...state,
        loading: true,
        success: false,
      };

    default:
      return state;
  }
};

const Bookings_Req = "Get_Bookings_Request";
const Booking_Success = "Get_Bookings_Success";
const Bookings_Fail = "Get_Bookings_Failed";

export const GetBookingsContactReducer = (state = { Bookings: [] }, action) => {
  switch (action.type) {
    case `${Bookings_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Booking_Success}`:
      return {
        ...state,
        loading: false,
        Bookings: action.payload,
      };

    case `${Bookings_Fail}`:
      return {
        ...state,
        loading: true,
        error: false,
        Bookings: action.payload,
      };

    default:
      return state;
  }
};

const Booking_Id_Req = "Get_Bookings_ById_Req";
const Booking_Id_Success = "Get_Bookings_ById_Success";
const Booking_Id_Fail = "Get_Bookings_ById_Fail";

export const GetBookingsIdReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Booking_Id_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Booking_Id_Success}`:
      return {
        ...state,
        loading: false,
        Bookings: action.payload,
      };

    case `${Booking_Id_Fail}`:
      return {
        ...state,
        loading: true,
        error: false,
        Bookings: action.payload,
      };

    default:
      return state;
  }
};

const Get_All_BookingsReq = "Get_All_BookingsRed";
const Get_All_BookingsSuc = "Get_All_BookingsSuc";
const Get_All_BookingsFail = "Get_All_BookingsFail";

export const GetBookingsAllReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Get_All_BookingsReq}`:
      return {
        ...state,
        loading: true,
      };

    case `${Get_All_BookingsSuc}`:
      return {
        ...state,
        loading: false,
        Bookings: action.payload,
      };

    case `${Get_All_BookingsFail}`:
      return {
        ...state,
        loading: true,
        error: false,
        Bookings: action.payload,
      };

    default:
      return state;
  }
};





const Get_AllEmp_BookingsReq = "Get_AllEmp_BookingsRed";
const Get_AllEmp_BookingsSuc = "Get_AllEmp_BookingsSuc";
const Get_AllEmp_BookingsFail = "Get_AllEmp_BookingsFail";

export const GetBookingsBYEmpIdReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Get_AllEmp_BookingsReq}`:
      return {
        ...state,
        loading: true,
      };

    case `${Get_AllEmp_BookingsSuc}`:
      return {
        ...state,
        loading: false,
        Bookings: action.payload,
      };

    case `${Get_AllEmp_BookingsFail}`:
      return {
        ...state,
        loading: true,
        error: false,
        Bookings: action.payload,
      };

    default:
      return state;
  }
};