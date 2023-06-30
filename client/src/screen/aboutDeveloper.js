import React from "react";
import awanish from "../Images/am.png";
import "./developer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const AboutDeveloper = () => {
  return (
    <div  >



      <h1 id="abtd">About Developer</h1>

      <div className="grid">
        <img className="image-developer" src={awanish} alt="AwanishDeveloper" />

        <p>
          <h1 id="am">Awanish Mishra</h1>

          <h4 id="abouttext">B.Tech Graduate</h4>
          <p style={{width:'80%', marginLeft:'auto', marginRight:'auto', color:'#808080', textAlign:'center'}} > This Entire Application is developed entirely by me. Here's my contact Details  </p>
          <br />
          <i class="fas fa-envelope" aria-hidden="true" id="lowertext"></i>
          <a
            href='href="awanishmishra003@gmail.com"'
            style={{ textDecoration: "none", color: "black" }}
          >
            <span id="lowertext" style={{ fontSize: "20px" }}>
              awanishmishra003@gmail.com
            </span>
          </a>
        </p>
      </div>

      <Grid container spacing={2} sx={{ width: "80%", mx: "auto" }}>
      <Grid item xs={2} md={2}>
          <p >
           
          </p>
        </Grid>



        <Grid item xs={2} md={2}>
          <p title="Twitter">
            <Link
              to={`https://github.com/hsinawa`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
            >
              <GitHubIcon style={{ verticalAlign: "-6px", fontSize: "35px" }} />
            </Link>
          </p>
        </Grid>

        <Grid item xs={2} md={2}>
          <p title="Instagram">
            <Link
              to={`https://www.instagram.com/awanish.mishra/`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
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
              to={`https://twitter.com/Awanish92375091`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
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
              to={`https://www.linkedin.com/in/awanish-mishra-941a93195/`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
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
      <br />
      <br />  <br />
      <br />  <br />
      <br />  <br />
      <br /><br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutDeveloper;
