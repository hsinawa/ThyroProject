import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetAllTestsReducer } from "../reducers/TestsReducer";
import { GetAllTestsAction, GetTestsByIdAction } from "../actions/TestsAction";
import CircularStatic from "../components/loading";
import EditIcon from "@mui/icons-material/Edit";

import { GetTestsByIDReducer } from "../reducers/TestsReducer";
import "./testdes.css";
import React from "react";
import { AddToCart } from "../actions/CartAction";

//Material UI
import SummarizeIcon from "@mui/icons-material/Summarize";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddIcon from "@mui/icons-material/Add";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import ContactDetails from "../components/contact";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BlogRecommendationGrid from "../components/BlogRecommendationGrid";

export const TestDescription = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const testid = id;

  const gettestbyid = useSelector((state) => state.GetTestsByIDReducer);
  const { loading, success, error, testsdata } = gettestbyid;

  const addtocart = () => {
    dispatch(AddToCart(testsdata[0]));
  };

  const booknow = () =>{
    dispatch(AddToCart(testsdata[0]));
    window.location.href='/address'
  }

  useEffect(() => {
    dispatch(GetTestsByIdAction({ testid }));
  }, []);

  return (
    <div>
      <div id="BackGround-1"></div>
      <div id="BackGround-2">
        <br />
        {loading && <CircularProgress />}
        {testsdata && (
          <p>
            <h2> {testsdata[0].name} </h2>

            <p> {testsdata[0].des} </p>
            <p
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#808080",
                textAlign:'justify'
              }}
            >
              {" "}
              {testsdata[0].description}{" "}
            </p>

            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />

            <section
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginRight: "auto",
              }}
            >
              <p>
                {" "}
                <GppGoodIcon style={{ verticalAlign: "-6px" }} /> Certified Labs{" "}
              </p>
              <p>
                {" "}
                <SummarizeIcon style={{ verticalAlign: "-6px" }} /> E-Report
                Available in {testsdata[0].reporttime} {testsdata[0].duration}{" "}
              </p>
              <p>
                {" "}
                <MonitorHeartIcon style={{ verticalAlign: "-6px" }} />{" "}
                Prerequisite: {testsdata[0].requirements}{" "}
              </p>
            </section>

            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />
            <h2> ₹ {testsdata[0].price} </h2>

            <section
              className="grid-1"
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
            >
              <Button
                variant="outlined"
                style={{ width: "80%", margin: "2%" }}
                onClick={addtocart}
              >
                Add to Cart
              </Button>

              <Button
                variant="contained"
                style={{ width: "80%", margin: "2%" }}
                onClick={booknow}
              >
                Book Now
              </Button>
              <br />
            </section>
            <br /> <br />
          </p>
        )}
      </div>

      <div
        style={{
          textAlign: "left",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {testsdata && (
          <p>
            {testsdata[0].isPackage=="true"  ? (
              <p>
                <h4>Package Tests Included in {testsdata[0].name} </h4>
                <br />
                {testsdata[0].testsincluded.map((i) => {
                  return (
                    <ul>
                      {" "}
                      <li> {i} </li>{" "}
                    </ul>
                  );
                })}
              </p>
            ) : null}
          </p>
        )}
      </div>

<br/><br/>
{testsdata&&(<BlogRecommendationGrid category = {testsdata[0]?.category} />)}


    </div>
  );
};

export default TestDescription;
