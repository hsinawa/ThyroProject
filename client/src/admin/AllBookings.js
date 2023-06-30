import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBookingsAction,
  UploadReportAction,
} from "../actions/BookingAction";
import { GetBookingsAllReducer } from "../reducers/BookingReducer";
import Calendar from "react-calendar";
import "./react-calendar.css";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularStatic from "../components/loading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { BookingTestSkeleton } from "../components/BundleLoading";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

//Firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";

export const CartContainer1 = ({ i }) => {
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    float: "right",
  }));

  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [reporturl, setreporturl] = useState("");

  const imagesListRef = ref(storage, "pdf/");
  const uploadFile = () => {
    if (pdfUpload == null) return;
    const imageRef = ref(storage, `pdf/${i.name}-${i.contactnumber}-${i._id}`);
    uploadBytes(imageRef, pdfUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);

        document.getElementById(
          "message-show"
        ).innerHTML = `Uploaded Successfully`;
        setreporturl(url);
        const reportdata = {
          reporturl: url,
          id: i._id,
        };

        dispatch(UploadReportAction({ reportdata }));
      });
    });
  };

  return (
    <div className="Cart-Box">
      <Box sx={{ flexGrow: 1 }}>
        {i.isdelivered === "true" ? (
          <p
            style={{
              padding: "5px",
              backgroundColor: "green",

              borderRadius: "10px",
              color: "white",
            }}
          >
            {" "}
            {i.date}{" "}
          </p>
        ) : (
          <p
            style={{
              padding: "5px",
              backgroundColor: "#800000",
              borderRadius: "10px",
              color: "white",
            }}
          >
            {" "}
            {i.date}{" "}
          </p>
        )}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2 style={{ color: "black" }}> {i.name} </h2>
          </Grid>
          <Grid item xs={2}>
            <h4 style={{ color: "#002D62" }}> Price: ₹{i.orderamount} </h4>
          </Grid>

          <Grid item xs={8}>
            <p style={{ color: "#313131" }}>
              Status:
              {i.isdelivered === "true" ? (
                <span style={{ color: "green" }}>
                  Completed{" "}
                  <CheckCircleIcon
                    style={{
                      verticalAlign: "-6px",
                      color: "green",
                    }}
                  />
                </span>
              ) : i.isdelivered === "false" ? (
                <span style={{ color: "#800000" }}>
                  In-Process{" "}
                  <PendingActionsIcon
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
          </Grid>

          <Grid item xs={2}>
            <a
              href={`bookingdetail/${i._id}`}
              style={{ textDecoration: "none" }}
            >
              <h4
                style={{
                  color: "white",
                  borderRadius: "8px",
                  padding: "3px",
                  backgroundColor: "#002D62",
                }}
              >
                {" "}
                View More{" "}
              </h4>
            </a>
          </Grid>
        </Grid>
        <hr />
        Money Collected :{" "}
        {i.isMoneyCollected === true ? (
          <DoneIcon style={{ color: "green", textAlign: "6px" }} />
        ) : (
          <CloseIcon style={{ color: "red", textAlign: "6px" }} />
        )}
        <hr />
        <input
          type="file"
          onChange={(event) => {
            setpdfUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}> Upload Image</button>
        <div id="message-show" style={{ color: "green" }}></div>
        <br />
        <br />
      </Box>
    </div>
  );
};

const AllBookingsAdmin = () => {
  const dispatch = useDispatch();

  const AllBookingsState = useSelector((state) => state.GetBookingsAllReducer);
  const { Bookings, loading } = AllBookingsState;
  const [value, onChange] = React.useState(new Date());
  const SelectedDate = value.toString().substr(0, 15);

  useEffect(() => {
    dispatch(GetAllBookingsAction({ SelectedDate }));
  }, [SelectedDate]);

  var TotalMoney = 0;
  var MoneyCollected = 0;
  var profit = 0;

  if (Bookings && Bookings.length > 0) {
    Bookings.map((i) => {
      if (i.isSampleCollected) {
        TotalMoney += i.orderamount;
        if (i.isMoneyCollected) {
          MoneyCollected += i.orderamount;
        }

        i.bookedtests.map((j) => {
          profit += j.profit;
        });
      }
    });
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      {loading && <BookingTestSkeleton />}
      {Bookings && (
        <p>
          {" "}
          <h3> Total Money Earned= {TotalMoney} </h3>
          <h3> Total Collected from Employees = {MoneyCollected} </h3>
          <h3> Profit Earned = {TotalMoney-profit}</h3>
        </p>
      )}

      {Bookings &&
        Bookings.reverse().map((i) => {
          if (+new Date(SelectedDate) === +new Date(i.date))
            return <CartContainer1 i={i} />;
        })}
    </div>
  );
};

export default AllBookingsAdmin;
