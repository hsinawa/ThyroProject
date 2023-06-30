import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCouponsValidAction } from "../actions/CouponAction";
import { GetValidCouponsReducer } from "../reducers/CouponReducer";
import "./coup.css";

//MUI
import DoneIcon from "@mui/icons-material/Done";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const ApplyCoupons = () => {
  const dispatch = useDispatch();
  const Coupon = JSON.parse(sessionStorage.getItem("couponavail"));
  const CartItem = JSON.parse(localStorage.getItem("CartItem"));
  const { loading, error, couponsvalid } = useSelector(
    (state) => state.GetValidCouponsReducer
  );

  useEffect(() => {
    dispatch(GetCouponsValidAction());
  }, []);

 
  
  const [couponAvailable, setcouponAvailable] = useState({
    code: "",
    category: "",
    minimumAmount: 0,
    value: 0,
    isValid: true,
    CouponApplied: "",
  });

  

  const CouponAppliedFunction = (coupon) => {
    sessionStorage.setItem("couponavail", JSON.stringify(coupon));

    setcouponAvailable((prevCoupon) => {
      const updatedCoupon = {
        code: coupon.code,
        category: coupon.category,
        minimumAmount: coupon.minimumAmount,
        value: coupon.value,
        isValid: coupon.isValid,
        CouponApplied: coupon.code,
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
    <div className="apply-coupons-container">
      <h2>Apply Coupon</h2>
      {loading && <CircularProgress />}
      {error && <div>Error: {error}</div>}
      <div className="coupon-list">
        {couponsvalid.map((coupon) => (
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

      <br />
      <h2>OR</h2>
      <br />
      <h3>
        <a
          href="/phonecoupon"
          style={{ textDecoration: "none", color: "#1560bd" }}
        >
          <PhoneIphoneIcon style={{ verticalAlign: "-6px" }} /> Unlock savings
          with your phone number search.
        </a>
      </h3>

      
    </div>
    <br />
      <br />  <br />
      <br />  <br />
      <br />  <br />
      <br />
    </div>
  );
};

export default ApplyCoupons;
