import React from "react";
import "./about.css";

//MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import PeopleIcon from '@mui/icons-material/People';


//Static Files
import blood from "../Images/bloodtest.gif";
import accurate from "../Images/accurateresults.png";
import healthcare from "../Images/healthcare.png";
import customers from "../Images/customers.png";
import rating from "../Images/rating.jpeg";
import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(70000);
  let counterTimeout;

  const counter = (minimum, maximum) => {
    let i = minimum;
    const timeout = () => {
      setCount(i);
      i++;
      if (i <= maximum) {
        counterTimeout = setTimeout(timeout, 3000);
      }
    };
    timeout();
  };

  React.useEffect(() => {
    counter(70000, 71000);
    return () => {
      clearTimeout(counterTimeout);
    };
  }, []);

  return (
    <div>
      <h1 id='stats-number'>{count}</h1>
    </div>
  );
};






const testimonialsData = [
  {
    id: 1,
    name: "Vicky Kashyap",
    value:4.5,
    comment:
      "Excellent service and very polite & well groomed staff at the center, the response also so quick at any time at the low cost .",
  },
  {
    id: 2,
    name: "Nishant Kumar",
    value:5,
    comment:
      "Excellent service and very polite person in the centres and the owner is also very polite and the response also so quick at any time at the low cost ",
  },
  {
    id: 3,
    name: "Shubham Arya",
    value:4,
    comment:
      "Thyrocare Noida- Mr Diwakar and Mr Kamlesh have been so helpful and considerate even when there is so much pressure on them. They don’t keep you hanging for a long time and conduct your test as soon as possible.",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6}>
        <img src={rating} id="image-about" />
        </Grid>

          <Grid item xs={12} sm={6}>
            <div className="testimonial-slider">
              <h2>Our Customers Say</h2>
              <div className="testimonial">
                <p>{testimonialsData[activeIndex].comment}</p>
                <Rating name="read-only" value={testimonialsData[activeIndex].value} readOnly />
                <p className="testimonial-name">
                  - {testimonialsData[activeIndex].name}
                </p>
              </div>
              <div className="slider-controls">
                <button className="prev-button" onClick={handlePrev}>
                  &#8249;
                </button>
                <button className="next-button" onClick={handleNext}>
                  &#8250;
                </button>
              </div>
            </div>
          </Grid>
         
        </Grid>
      </Box>
    </>
  );
};


const TotalCustomersServed = () => {
  return (
    <div className="total-customers-container">
      <div className="icon-container">
        <PeopleIcon  />
      </div>
      <div className="text-container">
        <h3 className="title">Total Customers Served</h3>
        <p className="count"><Counter /></p>
      </div>
    </div>
  );
};


const AboutWellBe = () => {
  return (
    <div>
      <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={blood} id="image-about" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2
              className="sub-heading"
              style={{
                paddingLeft: "5%",
                marginTop: "10%",
                textAlign: "center",
              }}
            >
              What we do?
            </h2>
            <p
              style={{
                textAlign: "justify",
                marginTop: "5%",
                color: "#505050",
              }}
            >
              At Well Be, we are committed to providing high-quality and
              affordable diagnostic services to our customers. Well Be has
              Thyrocare as a lab partner, leading diagnostic laboratory in
              Noida, we have a team of experienced and skilled professionals who
              are dedicated to delivering accurate and timely results. Thank you
              for choosing Well Be for your diagnostic needs. We are excited to
              serve you and assist you in achieving optimal health and wellness.
            </p>
          </Grid>
        </Grid>
      </Box>

      <br />
      <h2
        className="sub-heading"
        style={{ paddingLeft: "5%", marginTop: "5%", textAlign: "center" }}
      >
        Our Mission
      </h2>

      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 24 }}>
          <Grid item xs={12} sm={12} md={8}>
            <img
              src={healthcare}
              style={{
                height: "200px",
                width: "200px",
              }}
            />

            <h3>Accessible Healthcare</h3>
            <p
              style={{
                textAlign: "justify",
                marginTop: "5%",
                color: "#505050",
              }}
            >
              Our mission is to make healthcare accessible and affordable to
              all, irrespective of location or socioeconomic status. We offer a
              range of competitively priced diagnostic services, collaborating
              closely with healthcare providers to meet their patients' needs.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <img
              src={accurate}
              style={{
                height: "200px",
                width: "200px",
              }}
            />

            <h3>Accurate Results</h3>
            <p
              style={{
                textAlign: "justify",
                marginTop: "5%",
                color: "#505050",
              }}
            >
              To ensure accurate and reliable results, we utilize
              state-of-the-art technology and equipment. We adhere to the
              highest standards of quality and safety and hold accreditation
              from leading regulatory bodies in the healthcare industry.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <img
              src={customers}
              style={{
                height: "200px",
                width: "200px",
              }}
            />

            <h3>Happy Customers</h3>
            <p
              style={{
                textAlign: "justify",
                marginTop: "5%",
                color: "#505050",
              }}
            >
              At Well Be, we value our customers and strive to provide a
              stress-free diagnostic experience. Our friendly and knowledgeable
              staff are always available to address your concerns and provide
              the support you need.
            </p>
          </Grid>
        </Grid>
      </Box>
<br/><br/>
<h2
        className="sub-heading"
        style={{  marginTop: "5%", textAlign: "center" }}
      >
        Testimonials
      </h2>
      <TestimonialSlider />





<TotalCustomersServed />

    </div>
  );
};

export default AboutWellBe;
