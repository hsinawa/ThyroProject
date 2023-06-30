import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookingsByPhoneNumberAction } from "../actions/BookingAction";
import CartContainer from "../components/CartContainer";
import { GetBookingsContactReducer } from "../reducers/BookingReducer";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularStatic from "../components/loading";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";


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
                <span style={{color:'green'}} >
                  Completed <CheckCircleIcon style={{
                      verticalAlign:'-6px',
                      color:'green'
                  }} />
                </span>
              ) : i.isdelivered === "false" ? (
                <span style={{color:'#800000'}} >
                In-Process <PendingActionsIcon style={{
                    verticalAlign:'-6px',
                    color:'#800000'
                }} />
              </span>
              ) : (
                <span style={{color:'#800000'}} >
                Cancelled <CancelIcon style={{
                    verticalAlign:'-6px',
                    color:'#800000'
                }} />
              </span>
              )}
            </p>
          </Grid>

          <Grid item xs={2}>
            <a
              href={`bookingdetail/${i._id}`}
              style={{ textDecoration: "none" }}
            >
              <h4 style={{ color: "white" , borderRadius:'8px' , padding:'3px' , backgroundColor:'#002D62' }}> View More </h4>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const BookingResult = () => {
  const { Bookings, loading, error } = useSelector(
    (state) => state.GetBookingsContactReducer
  );
  const dispatch = useDispatch();
  const tempdetail = JSON.parse(sessionStorage.getItem("booking"));
  const contactnumber = parseInt(tempdetail);

  useEffect(() => {
    dispatch(GetBookingsByPhoneNumberAction({ contactnumber }));
  }, []);

  const [visible, setVisible] = useState(5);

  const loadMore = () => {
    setVisible((prev) => prev + 5);
  };

  return (
    <div>
      <h2>Order History</h2>
      {loading && <CircularStatic />}
      {Bookings &&
        Bookings.reverse(). slice(0, visible).map((i) => {
          return <CartContainer1 i={i} />;
        })}

<br/><br/>
{Bookings && visible < Bookings.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}
    </div>
  );
};

export default BookingResult;
