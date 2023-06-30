import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { GetCouponsByContactAction } from "../actions/CouponAction";
import { GetCouponsByContactReducer } from "../reducers/CouponReducer";

//MUI
import DoneIcon from "@mui/icons-material/Done";

const CouponSearchPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [couponAvailable, setcouponAvailable] = useState({
    code: "",

    value: 0,
    isValid: true,
  });
  const Coupon = JSON.parse(sessionStorage.getItem("couponavail"));
  const CartItem = JSON.parse(localStorage.getItem("CartItem"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCouponsByContactAction({ phoneNumber }));
  }, [phoneNumber?.length === 10]);

  const { loading, error, coupondata } = useSelector(
    (state) => state.GetCouponsByContactReducer
  );

  const CouponAppliedFunction = (coupon) => {
    
    sessionStorage.setItem("couponavail", JSON.stringify(coupon));

    setcouponAvailable((prevCoupon) => {
      const updatedCoupon = {
        code: coupon.code,
        category: coupon.category,
        minimumAmount: coupon.minimumAmount,
        value: coupon.value,
        isValid: coupon.isValid,
      };

      const sessionData = JSON.parse(sessionStorage.getItem("couponavail"));
      const { code, value, minimumAmount, category } = sessionData;

      const updatedCartItem = CartItem.map((item) => {
        if (updatedCoupon.isValid && item.isValid) {
          if (item.category === updatedCoupon.category || updatedCoupon.category === 'All'  ) {
            const discountedPrice =
              item.price - item.price * (updatedCoupon.value * 0.01);
            item.isValid = false;
   
            item.CouponApplied = updatedCoupon.code;
            return { ...item, price: discountedPrice };
          }
        }
        return item;
      });

      localStorage.setItem("CartItem", JSON.stringify(updatedCartItem));

      return updatedCoupon;
    });

    window.location.href = "/cart";
  };

  return (
    <div>
    <div
      className="coupon-list"
      style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
      <TextField
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        required
        id="outlined-basic"
        label="Enter Phone Number"
        variant="outlined"
        style={{ width: "100%", padding: "3px" }}
      />
      {loading && <CircularProgress />}
      {error && <h4>Error is : {error} </h4>}
      {/* {phoneNumber?.length === 10 &&
        coupondata &&
        coupondata.map((coupon) => (
          <div className="coupon-item" key={coupon.id}>
            <div className="coupon-content">
              <h3>HI</h3>
              <p>Hello</p>
            </div>
          </div>
        ))} */}

      <div className="coupon-list">
        {phoneNumber?.length === 10 &&
          coupondata &&
          coupondata.map((coupon) => (
            <div className="coupon-item" key={coupon.id}>
              <div className="coupon-content">
                <h3>{coupon.code}</h3>
                <p>{coupon.description}</p>
              </div>
              {Coupon && coupon.name === Coupon.name ? (
                <button
                  className="apply-button"
                  style={{ backgroundColor: "#505050" }}
                  onClick={() => CouponAppliedFunction(coupon)}
                >
                  Applied <DoneIcon style={{ verticalAlign: "-6px" }} />
                </button>
              ) : (
                <button
                  className="apply-button"
                  onClick={() => CouponAppliedFunction(coupon)}
                >
                  Apply
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
    <br />  <br />
      <br />  <br />
      <br />  <br />  <br />
      <br />  <br />
      <br /><br />
      <br />
      <br />
      <br /><br />
      <br />
      <br /><br />
      <br />
    </div>
  );
};

export default CouponSearchPhone;
