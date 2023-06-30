import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebase";
import "./track.css";
import OtpInput from "react-otp-input";

//Material Ui
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';




const TrackBookings = () => {
  const dispatch = useDispatch();

  const [otp, setotp] = useState();

  const [contactnumber, setcontactnumber] = useState();
  const [verify, setverify] = useState();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  const ProceedFurther = ()=>{

    const nextpage = () =>{
        sessionStorage.setItem('booking' , JSON.stringify(contactnumber) )
        window.location.href='/showbookings'
    }

    return (
        <div onClick={nextpage} style={{cursor:"pointer"}} >
           <br/><br/>
           <p id='proceed-button' >
                        Next <NavigateNextIcon style={{verticalAlign:'-6px'}} />
           </p>

        </div>
    )
}




  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();

    const phoneNumber = "+91" + contactnumber;

    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        document.querySelector('.otp-sent').innerHTML='OTP Sent'
      })
      .catch((error) => {
        console.log("SMS not sent", error);
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
 
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        setverify(1);
       

        // window.location.href='/resetpassword'
        setverify(1);

      })
      .catch((error) => {
        alert("Invalid OTP");
        setverify(0);
        window.location.reload();
        setverify(0);
      });
  };

  const sendmail = (e) => {
    e.preventDefault();

    if (verify == 1) {
      window.location.href = "/resetpassword";
    } else {
      alert("Something went wrong");
      window.href.reload();
    }
  };

  return (
    <div>
      <section
        style={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}
        id="Outer-Box"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={10}>
              <TextField
                id="outlined-basic"
                label="Number"
                variant="outlined"
                style={{ width: "90%" }}
                type="number"
                value={contactnumber}
                required
                onChange={(e) => {
                  setcontactnumber(e.target.value);
                }}
              />

              <p className='otp-sent' style={{color:'green'}} ></p>
            </Grid>
            <Grid xs={4} md={2}>
              <Button
                variant="contained"
                id="button-design"
                onClick={onSignInSubmit}
              >
                Create otp
              </Button>
            </Grid>
            <Grid xs={6} md={10}>
              <TextField
                id="outlined-basic"
                label="Verify"
                variant="outlined"
                style={{ width: "90%" }}
                value={otp}
                required
                onChange={(e) => {
                  setotp(e.target.value);
                }}
              />
            </Grid>
            <Grid xs={4} md={2}>
              <Button
                variant="contained"
                id="button-design"
                onClick={onSubmitOTP}
              >
                Verify OTP
              </Button>
              <div id="sign-in-button"></div>
            </Grid>
          </Grid>
        </Box>
      </section>

              {
                  verify==1?<ProceedFurther />:null
              }  
  <br />
      <br />
      <br /><br />
      <br />
      <br /><br />
      <br />  <br />
      <br />
      <br /><br />
      <br />
      <br /><br />
      <br />
    </div>
  );
};

export default TrackBookings;
