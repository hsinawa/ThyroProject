import CheckCircle from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllBookingsByEmpIdAction } from '../actions/BookingAction'
import {GetBookingsBYEmpIdReducer} from '../reducers/BookingReducer'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BookingTestSkeleton } from '../components/BundleLoading';
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";


export const CartContainer1 = ({ i }) => {

  
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
      
        </Box>
      </div>
    );
  };
  



const TodaySchedule = () => {

    const employee = JSON.parse(localStorage.getItem('employee'))
    const dispatch = useDispatch()
    const [value, onChange] = React.useState(new Date());
    const SelectedDate = value.toString().substr(0, 15);

    const empid = employee._id 

    useEffect(()=>{
        dispatch(GetAllBookingsByEmpIdAction({SelectedDate,empid}))
    },[SelectedDate])

    const {Bookings, loading} = useSelector(state=>state.GetBookingsBYEmpIdReducer)

    return(
        <div>
          <h2> Check Your Schedule </h2>
          <Calendar onChange={onChange} value={value} />
          {loading && <BookingTestSkeleton />}
      {Bookings &&
        Bookings.map((i) => {
        
          if (+new Date(SelectedDate) === +new Date(i.date))
            return <CartContainer1 i={i} />;
        })}
          
        </div>
    )
}

export default TodaySchedule