import React, { Suspense } from "react";
import { Carousel } from "react-carousel-minimal";
import ContactDetails from "../components/contact";
import "./home.css";
import are from "../Images/are.png";
import sayd from "../Images/sayd.png";
import yboe from "../Images/yboe.png";
import GetTestsByDiagnostics from "./Diagnostics";
import ComboTests from "./ComboTest";
import MedicalTests from "./MedicalTests";
import MedicalTestsHomeScreen from "./MedicalHomeScreenTest";
import TrackBooking from "../components/TrackBooking";
import { ThreeBoxSkeleton } from "../components/BundleLoading";
import AboutWellBe from "./AboutUs";
import BlogGrid from "./blogGrid";
import LastSectionScreen from "./EndSectionScreen";
import DocumentMeta from "react-document-meta";

//MUI Accordian
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "6px",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  borderRadius: "12px",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can I book a test for someone else?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Discover the convenience of booking blood tests for others with Yes!
            WellBe. Easily schedule tests for your loved ones by simply entering
            their credentials during the booking process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the method of report delivery to me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Receive the electronic version of your reports directly in your
            registered email ID within 24 to 48 hours of sample collection,
            varying based on transit time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Discover WellBe's trusted laboratory partner.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Experience the collaboration between WellBe and{" "}
            <a
              href="https://www.thyrocare.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Thyrocare{" "}
            </a>
            , our esteemed lab partner, ensuring top-quality testing services.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const HomeScreen = () => {
  const data = [
    {
      image: are,
      caption: " ",
    },
    {
      image: sayd,
      caption: " ",
    },
    {
      image: yboe,
      caption: " ",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const meta = {
    title: "WellBe",
    description: "Blood test booking in Noida",

    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "react,meta,document,html,wellbe, well, be, blood test, booking, noida, thyrocare, covidtest, covid19, corona, diabetes, healthcare, well be, best in noida",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <div>
        <Carousel
          data={data}
          time={3500}
          width="820px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
        <br />
        <br />
        <div className="grid-2">
          <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
            Top Diagnostic Tests
          </h2>
          <h3 style={{ paddingLeft: "15%" }}>
            <a
              href="/alltests"
              style={{ textDecoration: "none", color: "#1560bd" }}
            >
              View All
            </a>
          </h3>
        </div>
        <Suspense fallback={<ThreeBoxSkeleton />}>
          <GetTestsByDiagnostics />
        </Suspense>
        <div className="grid-2">
          <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
            Checkup Packages
          </h2>
          <h3 style={{ paddingLeft: "15%" }}>
            <a
              href="/allcombos"
              style={{ textDecoration: "none", color: "#1560bd" }}
            >
              View All
            </a>
          </h3>
        </div>
        <ComboTests />
        <ContactDetails />
        <div className="grid-2">
          <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
            Medical Tests
          </h2>
          <h3 style={{ paddingLeft: "15%" }}>
            <a
              href="/medicaltest"
              style={{ textDecoration: "none", color: "#1560bd" }}
            >
              View All
            </a>
          </h3>
        </div>
        <div
          style={{
            backgroundColor: "#E8E8E8",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          id="medical-test"
        >
          <MedicalTestsHomeScreen />
        </div>
        <br />
        <br />
        <br />
        <TrackBooking />
        <h2 className="sub-heading">About Us</h2>
        <AboutWellBe />
        <br />
        <br /> <br />
        <br />
        <div className="grid-2">
          <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
            Blogs Section
          </h2>
          <h3 style={{ paddingLeft: "15%" }}>
            <a
              href="/allblogs"
              style={{ textDecoration: "none", color: "#1560bd" }}
            >
              View All
            </a>
          </h3>
        </div>
        <BlogGrid />
        <br />
        <br /> <br />
        <br />
        <p
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CustomizedAccordions />
        </p>
      </div>
    </DocumentMeta>
  );
};

export default HomeScreen;
