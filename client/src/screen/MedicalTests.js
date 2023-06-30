import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { GetTestMedReducer } from "../reducers/TestsReducer";
import { GetTestsByMedAction } from "../actions/TestsAction";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Material Ui Icons
import SickIcon from "@mui/icons-material/Sick";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import FemaleIcon from "@mui/icons-material/Female";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import diab from "../Images/diab.svg";
import ElderlyIcon from '@mui/icons-material/Elderly';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import MaleIcon from '@mui/icons-material/Male';
import kidney from "../Images/k2.png";
import HealingIcon from '@mui/icons-material/Healing';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import WcIcon from '@mui/icons-material/Wc';
import FavoriteIcon from '@mui/icons-material/Favorite';



export const MedicalTests = () => {
  const [open, setOpen] = React.useState(false);
  const [openwomen, setOpenwomen] = React.useState(false);
  const [opencovid, setopencovid] = useState(false);
  const [openpreg, setopenpreg] = useState(false);
  const [openfitness, setopenfitness] = useState(false);
  const [opendiab, setopendiab] = useState(false);
  const [opensenior, setopensenior] = useState(false);
  const [openallergy, setopenallergy] = useState(false);
  const [openmen, setopenmen] = useState(false);
  const [openliver, setopenliver] = useState(false);
  const [openkidney, setopenkidney] = useState(false);
  const [openarthritis, setopenarthritis] = useState(false);
  const [openvitamins, setopenvitamins] = useState(false);
  const [openhormones, setopenhormones] = useState(false);
  const [opencard, setopencard] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpenwomen(!openwomen);
  };

  const handleClickcovid = () => {
    setopencovid(!opencovid);
  };

  const handleClickpreg = () => {
    setopenpreg(!openpreg);
  };

  const handleClickFitness = () => {
    setopenfitness(!openfitness);
  };

  const handleClickdiab = () => {
    setopendiab(!opendiab);
  };

  const handleClicksenior = () => {
    setopensenior(!opensenior);
  };

  const handleClickallergy = () => {
    setopenallergy(!openallergy);
  };

  const handleClickmen = () => {
    setopenmen(!openmen);
  };

  const handleClickliver = () => {
    setopenliver(!openliver);
  };

  const handleClickkidney = () => {
    setopenkidney(!openkidney);
  };

  const handleClickarthritis = () => {
    setopenarthritis(!openarthritis);
  };

  const handleClickvitamins = () => {
    setopenvitamins(!openvitamins);
  };


  const handleClickhormones = () => {
    setopenhormones(!openhormones);
  };

  const handleClickCard = () => {
    setopencard(!opencard);
  };



  return (
    <div>
      <br />
      <List
        sx={{
          width: "80%",
          bgcolor: "#F5F5F5	",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Medical Tests
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SickIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Fever Profile" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Fever" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick1}>
          <ListItemIcon>
            <FemaleIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Women Health" />
          {openwomen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openwomen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Women" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickcovid}>
          <ListItemIcon>
            <CoronavirusIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Covid 19" />
          {opencovid ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opencovid} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Covid" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickpreg}>
          <ListItemIcon>
            <PregnantWomanIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Pregnancy" />
          {openpreg ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openpreg} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Pregnancy" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickFitness}>
          <ListItemIcon>
            <FitnessCenterIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Fitness" />
          {openfitness ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openfitness} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Fitness" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickdiab}>
          <ListItemIcon>
            <img src={diab} alt="Diabetes" />
          </ListItemIcon>
          <ListItemText primary="Diabetes" />
          {opendiab ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opendiab} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Diabetes" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>



        <ListItemButton onClick={handleClicksenior}>
          <ListItemIcon>
         <ElderlyIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Senior Citizen" />
          {opensenior ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opensenior} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/SeniorCitizen" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>




        <ListItemButton onClick={handleClickCard}>
          <ListItemIcon>
          <FavoriteIcon style={{color:'black'}}  />
          </ListItemIcon>
          <ListItemText primary="Heart Related" />
          {opencard ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opencard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Cardio" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>






        <ListItemButton onClick={handleClickallergy}>
          <ListItemIcon>
         <CleanHandsIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Allergy Profiles" />
          {openallergy ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openallergy} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Allergy" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>


        <ListItemButton onClick={handleClickmen}>
          <ListItemIcon>
         <MaleIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Men" />
          {openmen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openmen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Men" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>



        <ListItemButton onClick={handleClickkidney}>
          <ListItemIcon>
          <img src="https://img.icons8.com/material/24/null/kidney.png" alt='Kidney' />
          </ListItemIcon>
          <ListItemText primary="Kidney" />
          {openkidney ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openkidney} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Kidney" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>


        <ListItemButton onClick={handleClickliver}>
          <ListItemIcon>
          <img src="https://img.icons8.com/material/24/null/liver.png" alt='Liver' />
          </ListItemIcon>
          <ListItemText primary="Liver Profiles" />
          {openliver ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openliver} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Liver" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>



        <ListItemButton onClick={handleClickarthritis}>
          <ListItemIcon>
          <HealingIcon style={{color:'black'}}  />
          </ListItemIcon>
          <ListItemText primary="Arthritis" />
          {openarthritis ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openarthritis} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Arthritis" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>



        <ListItemButton onClick={handleClickvitamins}>
          <ListItemIcon>
          <LocalPharmacyIcon style={{color:'black'}}  />
          </ListItemIcon>
          <ListItemText primary="Vitamin Tests" />
          {openvitamins ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openvitamins} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Vitamin" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>



        <ListItemButton onClick={handleClickhormones}>
          <ListItemIcon>
          <WcIcon style={{color:'black'}}  />
          </ListItemIcon>
          <ListItemText primary="Hormone Tests" />
          {openhormones ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openhormones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a href="/testtype/Hormone" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FindInPageIcon />
                </ListItemIcon>

                <ListItemText primary="View All Packages" />
              </ListItemButton>
            </a>
          </List>
        </Collapse>




      </List>

      <br />
    </div>
  );
};

export default MedicalTests;
