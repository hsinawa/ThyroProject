import React from "react";
import "./nav.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { LogOutAdmin } from "../actions/AdminAction";
import AllTests from "../admin/TestsAdmin";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { CartReducer } from "../reducers/CartReducer";
import logo from "../Images/wellbe.png";

export const NavBar = () => {
  const dispatch = useDispatch();
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));
  const cartreducer = useSelector((state) => state.CartReducer);

  const { CartItem } = cartreducer;

  return (
    <div id="navbar">
      {admin ? (
        <p>
          <div className="grid-2">
            <p style={{ textAlign: "left", paddingLeft: "15%" }}>
              <a href="/admin">
                <img
                  src={logo}
                  alt="logo-image"
                  style={{
                    width: "70px",
                  }}
                />
              </a>
            </p>

            <p style={{ textAlign: "right", paddingRight: "15%" }}>
              <a
                href="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                <AddShoppingCartIcon style={{ verticalAlign: "-6px" }} />{" "}
                {CartItem.length}
              </a>
            </p>
          </div>
        </p>
      ) : (
       employee? (  <p>
        <div className="grid-2">
          <p style={{ textAlign: "left", paddingLeft: "15%" }}>
            <a href="/employeepage">
              <img
                src={logo}
                alt="logo-image"
                style={{
                  width: "70px",
                }}
              />
            </a>
          </p>

          <p style={{ textAlign: "right", paddingRight: "15%" }}>
            <a
              href="/cart"
              style={{ textDecoration: "none", color: "black" }}
            >
              <AddShoppingCartIcon style={{ verticalAlign: "-6px" }} />{" "}
              {CartItem.length}
            </a>
          </p>
        </div>
      </p>) :( <p>
        <div className="grid-2">
          <p style={{ textAlign: "left", paddingLeft: "15%" }}>
            <a href="/">
              <img
                src={logo}
                alt="logo-image"
                style={{
                  width: "70px",
                }}
              />
            </a>
          </p>

          <p style={{ textAlign: "right", paddingRight: "15%" }}>
            <a
              href="/cart"
              style={{ textDecoration: "none", color: "black" }}
            >
              <AddShoppingCartIcon style={{ verticalAlign: "-6px" }} />{" "}
              {CartItem.length}
            </a>
          </p>
        </div>
      </p> )
      )}

      <br />


    
    
    <br />
    
    </div>
  );
};

export default NavBar;
