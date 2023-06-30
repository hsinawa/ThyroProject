import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartContainer from "./CartContainer";
import "./contact.css";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const CartScreen = () => {
  const cartselectorstate = useSelector((state) => state.CartReducer);

  const { CartItem } = cartselectorstate;

  let countotal = CartItem.reduce((acc, item) => acc + item.price, 0);

  const Cart = JSON.parse(localStorage.getItem("CartItem"));

  return (
    <div>
      {CartItem.map((i) => {
        return (
          <div className="Cart-Box">
            <CartContainer i={i} />
            <br />{" "}
          </div>
        );
      })}

      <div className="grid-1">
        <h2 style={{ color: "#0a2351", paddingTop: "15px" }}>
          Subtotal: ₹{countotal}{" "}
          {Cart &&
            Cart.map((i) => {
              if (i.CouponApplied !== "No Coupon") {
                return (
                  <span
                    style={{
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    {" "}
                    ( {i.CouponApplied} ){" "}
                  </span>
                );
              }
            })}
        </h2>

        <p>
          <a href="/address" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ width: "50%", margin: "2%" }}>
              Book Now
            </Button>
          </a>
        </p>

        <a href="/applycoupons" style={{ textDecoration: "none" }}>
          <h3 style={{ paddingTop: "15px" }} id="coupon">
            <LocalOfferIcon style={{ verticalAlign: "-6px" }} /> Apply Coupon
          </h3>
        </a>
      </div>
    </div>
  );
};

export default CartScreen;
