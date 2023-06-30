import React from "react";

//MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";



const GridSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#002244",
        color: "white",
        marginBottom: "-10%",
        borderRadius: "10px",
        marginLeft:'auto',
        marginRight:'auto'
      }}
    >
      <Box sx={{ flexGrow: 1, mx:'auto' }} >
        <Grid container spacing={2}  >
          <Grid item xs={10} md={6} sx={{mx:'auto'}}>
            <Grid container spacing={2}  >
              <Grid item xs={4} md={4}  >
                <h3>About Us</h3>
                
                <p><a href='/aboutus' style={{textDecoration:'none', color:'white'}} > About WellBe </a> </p>
              
                <p><a href='/contactus' style={{textDecoration:'none', color:'white'}} > Contact Us</a> </p>
                
                <p><a href='/aboutdeveloper' style={{textDecoration:'none', color:'white'}} > About Developer </a> </p>
               
              </Grid>

              <Grid item xs={4} md={4}>
                <h3>Employees</h3>
                <p ><a href='/employeelogin' style={{textDecoration:'none', color:'white'}} > Employee Portal</a>  </p>
              </Grid>

              <Grid item xs={4} md={4}>
                <h3>For Users</h3>
                <p><a href='/trackingpage' style={{textDecoration:'none', color:'white'}} > Track Booking</a> </p>
                <p><a href='/applycoupons' style={{textDecoration:'none', color:'white'}} > Coupon Section</a> </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={6} sx={{mx:'auto'}}>
            <h3>Connect On</h3>
            <Grid container spacing={2}>
              <Grid item xs={2} md={2}>
                <p></p>
              </Grid>

              <Grid item xs={2} md={2}>
                <p title="FaceBook">
                  <Link
                    to={`https://www.facebook.com/profile.php?id=100094239630825`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <FacebookIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </Link>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="Instagram">
                  <Link
                    to={`https://instagram.com/wellbetests?igshid=MzNlNGNkZWQ4Mg==`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <InstagramIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </Link>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="Twitter">
                  <Link
                    to={`https://twitter.com/WellBeTests`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <TwitterIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </Link>
                </p>
              </Grid>
              <Grid item xs={2} md={2}>
                <p title="LinkedIn">
                  <Link
                    to={`https://www.linkedin.com/in/well-be-029a11280/`}
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    <LinkedInIcon
                      style={{ verticalAlign: "-6px", fontSize: "35px" }}
                    />
                  </Link>
                </p>
              </Grid>

              <Grid item xs={2} md={2}>
                <p></p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const LastSectionScreen = () => {
  return (
    <div  style={{marginTop:'20%'}}>
  

      <br />
      <br />
      <br />
      <br />

      <GridSection />
    </div>
  );
};

export default LastSectionScreen;
