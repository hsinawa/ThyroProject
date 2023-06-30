import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CartReducer } from "../reducers/CartReducer";

import Button from "@mui/material/Button";
import "./grid.css";
import validator from "validator";

//Material UI
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {
  Experimental_CssVarsProvider,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import { PlaceBookingAction } from "../actions/BookingAction";
import { BookingReducer } from "../reducers/BookingReducer";
import Loader from "./DotLoading";

export const AddressScreen = () => {
  const cartselectorstate = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const { CartItem } = cartselectorstate;
  const { loading } = useSelector((state) => state.BookingReducer);
  let countotal = CartItem.reduce((acc, item) => acc + item.price, 0);

  const [value, setValue] = React.useState(new Date());
  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [contactnumber, setcontactnumber] = useState();
  const [age, setage] = useState();
  const [gender, setgender] = useState("");
  //contact
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState();
  const [pincode, setpincode] = useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  var today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();

  var currentday = today.toString().substr(0, 15);

  var dd2 = today.getDate() + 7;

  var maxdate = yyyy + "-" + mm + "-" + dd2;

  var GettingTime = new Date().getTime();

  var NextTime = new Date(
    GettingTime + 1 * 60 * 60 * 1000
  ).toLocaleTimeString();

  var MinTime = NextTime.substring(0, 2);
  var SelectedDay = value?.toString().substring(0, 16);
  var Time = value?.$d;
  var SelectedTime = Time?.toString().substr(16);

  if (parseInt(MinTime) == 0) {
    MinTime = 23;
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
    } else {
      document.querySelector(".email-message").innerHTML = "Invalid Email";
    }

    if (contactnumber?.length == 10) {
    } else {
      document.querySelector(".contact-message").innerHTML = "Invalid Number";
    }

    if (validator.isEmail(email) && contactnumber?.length == 10) {
      const details = {
        name: name,
        lname: lname,
        email: email,
        contactnumber: contactnumber,
        address2: address2,
        address1: address1,
        city: city,
        pincode: pincode,
        orderamount: countotal,
        date: SelectedDay,
        time: SelectedTime,
        age:age,
        gender:gender
      };
      dispatch(PlaceBookingAction({ details }));
    }
  };

  return (
    <div>
      <div className="background-form">
        <br />
        <h3>Enter Your Details</h3>

        <hr />
        <form onSubmit={OnSubmitForm}>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
              spacing={3}
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            >
              {/* Name  */}
              <div className="grid-1">
                <TextField
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label=" Name"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />

                <TextField
                  value={lname}
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label=" Surname"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />
              </div>

              <div className="grid-2">
                <TextField
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  style={{ width: "90%", padding: "7px" }}
                />

                <FormControl style={{marginTop:'2%'}} >
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={(e) => setgender(e.target.value)}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Contat Details */}
              <div className="grid-1">
                <TextField
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label=" Email"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />

                <TextField
                  value={contactnumber}
                  onChange={(e) => {
                    setcontactnumber(e.target.value);
                  }}
                  type="number"
                  required
                  id="outlined-basic"
                  label=" Mobile Number"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />

                <p className="email-message" style={{ color: "red" }}></p>
                <p className="contact-message" style={{ color: "red" }}></p>
              </div>

              {/* Addresss */}

              <div className="grid-1">
                <TextField
                  value={address1}
                  onChange={(e) => {
                    setaddress1(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label="Address Line 1"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />

                <TextField
                  value={address2}
                  onChange={(e) => {
                    setaddress2(e.target.value);
                  }}
                  id="outlined-basic"
                  label="Address Line 2"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />
              </div>

              {/*  Pin Code and City */}
              <div className="grid-1">
                <TextField
                  value={pincode}
                  onChange={(e) => {
                    setpincode(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label="Pincode"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />

                <TextField
                  value={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  required
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  style={{ width: "99%", padding: "7px" }}
                />
              </div>

              <DesktopDatePicker
                label="Select a Date"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                disablePast
                maxDate={new Date(yyyy, mm - 1, dd2)}
              />

              {+new Date(currentday) === +new Date(SelectedDay) ? (
                <TimePicker
                  label="Select Time"
                  value={value}
                  onChange={handleChange}
                  minTime={dayjs().set("hour", MinTime)}
                  minutesStep={15}
                  renderInput={(params) => <TextField {...params} />}
                />
              ) : (
                <TimePicker
                  label="Select Time"
                  value={value}
                  onChange={handleChange}
                  minutesStep={15}
                  required
                  renderInput={(params) => <TextField {...params} />}
                />
              )}

              <Button variant="contained" size="large" type="submit">
                {loading ? <Loader /> : <span> Submit </span>}
              </Button>
            </Stack>
          </LocalizationProvider>
        </form>
        <br />
      </div>
    </div>
  );
};

export default AddressScreen;
