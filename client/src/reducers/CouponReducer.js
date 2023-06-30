const GetCoupons_Req = "GetCoupons_Req";
const GetCoupons_Suc = "GetCoupons_Suc";
const GetCoupons_Fail = "GetCoupons_Fail";

export const GetAllCouponsReducer = (state = { coupons: [] }, action) => {
  switch (action.type) {
    case GetCoupons_Req:
      return {
        ...state,
        loading: true,
      };

    case GetCoupons_Suc:
      return {
        ...state,
        loading: false,
        coupons: action.payload,
      };

    case GetCoupons_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};

const GetCouponsById_Req = "GetCouponsById_Req";
const GetCouponsById_Suc = "GetCouponsById_Suc";
const GetCouponsById_Fail = "GetCouponsById_Fail";

export const GetCouponsByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case GetCouponsById_Req:
      return {
        ...state,
        loading: true,
      };

    case GetCouponsById_Suc:
      return {
        ...state,
        loading: false,
        success: true,
        coupondata: action.payload,
      };

    case GetCouponsById_Fail:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};





const GetCouponsByContact_Req = "GetCouponsByContact_Req";
const GetCouponsByContact_Suc = "GetCouponsByContact_Suc";
const GetCouponsByContact_Fail = "GetCouponsByContact_Fail";


  export const GetCouponsByContactReducer = (state = {}, action) => {
    switch (action.type) {
      case GetCouponsByContact_Req:
        return {
          ...state,
          loading: true,
        };
  
      case GetCouponsByContact_Suc:
        return {
          ...state,
          loading: false,
          success: true,
          coupondata: action.payload,
        };
  
      case GetCouponsByContact_Fail:
        return {
          ...state,
          loading: true,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };






const GetValidCoupons_Req = "GetValidCoupons_Req";
const GetValidCoupons_Suc = "GetValidCoupons_Suc";
const GetValidCoupons_fail = "GetValidCoupons_Fail";

export const GetValidCouponsReducer = (
  state = { couponsvalid: [] },
  action
) => {
  switch (action.type) {
    case GetValidCoupons_Req:
      return {
        ...state,
        loading: true,
      };

    case GetValidCoupons_Suc:
      return {
        ...state,
        loading: false,
        couponsvalid: action.payload,
      };

    case GetValidCoupons_fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};
