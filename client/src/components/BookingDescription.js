import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

//MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {
  CancelBookingAction,
  GetBookingByIdAction,
  UpdateMoneyCollectionAction,
  UpdateSampleCollectedByActionAgain,
} from "../actions/BookingAction";

import CircularStatic from "./loading";

//CSS
import "./booking.css";
import CheckCircle from "@mui/icons-material/CheckCircle";
import PendingActions from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@material-ui/core";
import {
  EmployeeTestCountAction,
  GetEmployeeById,
} from "../actions/employeeAction";
import { GetEmployeeByIDReducer } from "../reducers/EmployeeReducer";

const steps = ["Booking Confirmed", "Sample Collected", "Report is Ready"];

const BookingDescription = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));
  var stepc = 1;

  const { loading, Bookings } = useSelector(
    (state) => state.GetBookingsIdReducer
  );

  const [isSampleCollected, setisSampleCollected] = useState(
    Bookings?.length > 0 ? Bookings[0].isSampleCollected : null
  );

  const [isMoneyCollected, setisMoneyCollected] = useState(
    Bookings?.length > 0 ? Bookings[0].isMoneyCollected : null
  );

  useEffect(() => {
    dispatch(GetBookingByIdAction({ id }));
  }, [id]);

  useEffect(() => {
    if (Bookings?.length > 0) {
      const employeeId = Bookings[0]?.employeeId;
      dispatch(GetEmployeeById({ employeeId }));
    }
  }, [Bookings]);

  const getEmployeeBy = useSelector((state) => state.GetEmployeeByIDReducer);
  const { employeedata } = getEmployeeBy;

  if (Bookings && Bookings[0].isSampleCollected) {
    stepc = 2;
  }

  if (Bookings && Bookings[0].isdelivered === "true") {
    stepc = 3;
  }

  const [totalTests, settotalTests] = useState();

  useEffect(() => {
    if (employeedata && employeedata?.length > 0) {
      settotalTests(employeedata[0]?.totalTests + 1);
    }
  }, [employeedata]);

  const updateCollectedBy = () => {
    if (Bookings && employeedata) {
      
      const details = {
        isSampleCollected: isSampleCollected,
        id: Bookings[0]._id,
        isMoneyCollected: isMoneyCollected,
      };
      const employeeId = Bookings[0]?.employeeId;

      dispatch(UpdateSampleCollectedByActionAgain({ details }));
       dispatch(EmployeeTestCountAction({ employeeId, totalTests }));
    }
  };

  const cancelBooking = (e) => {
    e.preventDefault();

    const r = window.confirm("Do you want to Cancel?");
    if (r === true) {
      if (Bookings) {
        const details = {
          id: Bookings[0]?._id,
        };
        dispatch(CancelBookingAction({ details }));
      }
    } else {
      return;
    }
  };

  const updateMoneyCollectedBy = (e) => {
    e.preventDefault();
    if (Bookings && Bookings?.length > 0) {
      const details = {
        id: Bookings[0]._id,
        isMoneyCollected: isMoneyCollected,
      };

      dispatch(UpdateMoneyCollectionAction({ details }));
    }
  };

  return (
    <div>
      <div id="BackGround-3"></div>
      <div id="BackGround-2">
        <br />
        {loading && <CircularStatic />}

        {Bookings && (
          <div>
            <h2>
              {" "}
              {Bookings[0].name} {Bookings[0].lname}{" "}
            </h2>
            <h4>
              {" "}
              Age: {Bookings[0].age} &nbsp; &nbsp; Gender: {Bookings[0].gender}{" "}
            </h4>
            <h4>
              {" "}
              {Bookings[0].date} &nbsp; &nbsp; Time :{" "}
              {Bookings[0].time.substr(0, 5)}{" "}
            </h4>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={stepc} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label} style={{ color: "green" }}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />

            <section
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginRight: "auto",
              }}
              className="grid-1"
            >
              <p>
                <span style={{ fontWeight: "bold" }}> Booked On:</span>{" "}
                {new Date(Bookings[0].createdAt).toLocaleString().substr(0, 10)}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Total Amount:</span> ₹{" "}
                {Bookings[0].orderamount} ({Bookings[0].CouponApplied} Applied )
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Booked Tests:</span>{" "}
                {Bookings[0].bookedtests.map((t) => {
                  return (
                    <p>
                      {t.name} &nbsp; &nbsp; &nbsp; ₹ {t.price}
                    </p>
                  );
                })}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Contact Details:</span>{" "}
                {Bookings[0].contactnumber}
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}> Email:</span>{" "}
                {Bookings[0].email.length > 0 ? (
                  <>{Bookings[0].email}</>
                ) : (
                  <>-</>
                )}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Address:</span>{" "}
                {Bookings[0].shippingaddress.address1} &nbsp;{" "}
                {Bookings[0].shippingaddress.address2} ,{" "}
                {Bookings[0].shippingaddress.city} ,{" "}
                {Bookings[0].shippingaddress.pincode}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Status:</span>{" "}
                {Bookings[0].isdelivered === "true" ? (
                  <span style={{ color: "green" }}>
                    Completed{" "}
                    <CheckCircle
                      style={{
                        verticalAlign: "-6px",
                        color: "green",
                      }}
                    />
                  </span>
                ) : Bookings[0].isdelivered === "false" ? (
                  <span style={{ color: "#800000" }}>
                    In-Process{" "}
                    <PendingActions
                      style={{
                        verticalAlign: "-6px",
                        color: "#800000",
                      }}
                    />
                  </span>
                ) : (
                  <span style={{ color: "#800000" }}>
                    Cancelled{" "}
                    <CancelIcon
                      style={{
                        verticalAlign: "-6px",
                        color: "#800000",
                      }}
                    />
                  </span>
                )}
              </p>
            </section>
            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />
            <section
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginRight: "auto",
              }}
              className="grid-1"
            >
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Sample Collected By:
                </span>{" "}
                <a
                  href={`/aboutemp/${Bookings[0].employeeId}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {Bookings[0].collectedby}
                </a>
              </p>

              {Bookings[0].isdelivered === "true" ? (
                <a href={`${Bookings[0].reporturl}`} target="_blank" download>
                  <Button
                    variant="outlined"
                    style={{ width: "80%", margin: "2%" }}
                  >
                    View Report
                  </Button>
                </a>
              ) : Bookings[0].isSampleCollected === false ? (
                <Button
                  variant="outlined"
                  style={{ width: "80%", margin: "2%" }}
                  onClick={cancelBooking}
                >
                  Cancel Booking
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  style={{ width: "80%", margin: "2%" }}
                >
                  In-Process
                </Button>
              )}
            </section>

            {admin ? (
              <>
                {" "}
                <form onSubmit={updateCollectedBy}>
                  <h3>Is Sample Collected?</h3>{" "}
                  <select
                    value={isSampleCollected}
                    onChange={(e) => {
                      setisSampleCollected(e.target.value);
                    }}
                  >
                    <option value={null}>Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>{" "}
                  </select>{" "}
                  <Button variant="contained" type="submit" value="submit">
                    Update
                  </Button>
                </form>
              </>
            ) : null}

            {admin ? (
              <>
                {" "}
                <form onSubmit={updateMoneyCollectedBy}>
                  <h3>Is Money Collected?</h3>{" "}
                  <select
                    value={isMoneyCollected}
                    onChange={(e) => {
                      setisMoneyCollected(e.target.value);
                    }}
                  >
                    <option value={null}>Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>{" "}
                  </select>{" "}
                  <Button variant="contained" type="submit" value="submit">
                    Update
                  </Button>
                </form>
              </>
            ) : null}

            {employee ? (
              <>
                {" "}
                <form onSubmit={updateCollectedBy}>
                  <h3>Is Sample Collected?</h3>{" "}
                  <select
                    value={isSampleCollected}
                    onChange={(e) => {
                      setisSampleCollected(e.target.value);
                    }}
                  >
                    <option value={null}>Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>{" "}
                  </select>{" "}
                  <Button variant="contained" type="submit" value="submit">
                    Update
                  </Button>
                </form>
              </>
            ) : null}
          </div>
        )}
      </div>
      <br />
      <br />
    </div>
  );
};

export default BookingDescription;
