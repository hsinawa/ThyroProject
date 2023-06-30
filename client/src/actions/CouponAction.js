import axios from "axios";

const CouponAdd_Req = "CouponAdd_Req";
const CouponAdd_Suc = "CouponAdd_Suc";
const CouponAdd_Fail = "CouponAdd_Fail";

export const AddNewCouponsAction = (coupondata) => (dispatch) => {
  dispatch({ type: CouponAdd_Req });
  axios
    .post("/api/coupons/addcoupons", coupondata)
    .then((res) => {
      dispatch({ type: CouponAdd_Suc, payload: res.data });
      alert("Coupon Added");
      window.location.href = "/admin/coupons";
    })
    .catch((err) => {
      dispatch({ type: CouponAdd_Fail });

      window.location.href = "/error";
      console.log("Error is ", err);
    });
};

const GetCoupons_Req = "GetCoupons_Req";
const GetCoupons_Suc = "GetCoupons_Suc";
const GetCoupons_Fail = "GetCoupons_Fail";

export const GetAllCouponsAction = () => (dispatch) => {
  dispatch({ type: GetCoupons_Req });
  axios
    .get("/api/coupons/getallcoupons")
    .then((res) => {
      dispatch({ type: GetCoupons_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetCoupons_Fail });

      console.log("Error is ", err);
    });
};

const GetValidCoupons_Req = "GetValidCoupons_Req";
const GetValidCoupons_Suc = "GetValidCoupons_Suc";
const GetValidCoupons_fail = "GetValidCoupons_Fail";

export const GetCouponsValidAction = () => (dispatch) => {
  dispatch({ type: GetValidCoupons_Req });

  axios
    .get("/api/coupons/getvalidcoupons")
    .then((res) => {
      dispatch({ type: GetValidCoupons_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetValidCoupons_fail, payload: err });
    });
};

const GetCouponsById_Req = "GetCouponsById_Req";
const GetCouponsById_Suc = "GetCouponsById_Suc";
const GetCouponsById_Fail = "GetCouponsById_Fail";

export const GetCouponByIdAction =
  ({ couponid }) =>
  (dispatch) => {
    dispatch({ type: GetCouponsById_Req });

    axios
      .post("/api/coupons/couponbyid", { couponid })
      .then((res) => {
        dispatch({ type: GetCouponsById_Suc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GetCouponsById_Fail, payload: err });
      });
  };

const GetCouponsByContact_Req = "GetCouponsByContact_Req";
const GetCouponsByContact_Suc = "GetCouponsByContact_Suc";
const GetCouponsByContact_Fail = "GetCouponsByContact_Fail";

export const GetCouponsByContactAction =
  ({ phoneNumber }) =>
  (dispatch) => {
    dispatch({ type: GetCouponsByContact_Req });

    axios
      .post("/api/coupons/couponbycontact", { phoneNumber })
      .then((res) => {
        dispatch({ type: GetCouponsByContact_Suc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GetCouponsByContact_Fail, payload: err });
      });
  };

export const DeleteCouponAction = (id) => (dispatch) => {
  dispatch({ type: "DELETE_Coupon_REQUEST" });

  axios
    .post("/api/coupons/deletecoupon", { id })
    .then((res) => {
      dispatch({ type: "DELETE_Coupon_SUCCESS", payload: res.data });
      alert("Deleted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_Coupon_FAILED", payload: err });
    });
};

const CoupUpdate_Req = "CoupUpdate_Req";
const CoupUpdate_Suc = "CoupUpdate_Suc";
const CoupUpdate_Fail = "CoupUpdate_Fail";

export const UpdateCouponsAction = (couponid, coupondata) => (dispatch) => {
  dispatch({ type: CoupUpdate_Req });

  axios
    .post("/api/coupons/updatecoupon", { couponid, coupondata })
    .then((res) => {
      dispatch({ type: CoupUpdate_Suc });
      alert("Updated");
      window.location.href = "/admin/coupons";
    })
    .catch((err) => {
      dispatch({ type: CoupUpdate_Fail });
    });
};
