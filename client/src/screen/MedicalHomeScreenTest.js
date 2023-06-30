
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { GetTestMedReducer } from "../reducers/TestsReducer";
import { GetTestsByMedAction } from "../actions/TestsAction";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



//Material Ui Icons
import SickIcon from '@mui/icons-material/Sick';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FemaleIcon from '@mui/icons-material/Female';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';


export const MedicalTestsHomeScreen = () => {
    const [open, setOpen] = React.useState(false);
    const [openwomen, setOpenwomen] = React.useState(false);
    const [opencovid,setopencovid] = useState(false)
    const [openpreg,setopenpreg] = useState(false)
 

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

  
    const getalltests = useSelector(state=> state.GetTestMedReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetTestsByMedAction())
    } , [] )




    return(
        <div>
            <br/>
              <List
      sx={{ width: '80%',  bgcolor: '#F5F5F5	', marginLeft:'auto' , marginRight:'auto' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
  
   
      <ListItemButton onClick={handleClick}>
        <ListItemIcon >
          <SickIcon />
        </ListItemIcon>
        <ListItemText primary="Fever Profile" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <a href="/testtype/Fever" style={{textDecoration:'none' , color:'black' }} >
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
        <ListItemIcon >
          <FemaleIcon />
        </ListItemIcon>
        <ListItemText primary="Women Health" />
        {openwomen? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openwomen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <a href="/testtype/Women" style={{textDecoration:'none' , color:'black' }} >
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
        <ListItemIcon >
          <CoronavirusIcon />
        </ListItemIcon>
        <ListItemText primary="Covid 19" />
        {opencovid? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opencovid} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <a href="/testtype/Covid" style={{textDecoration:'none' , color:'black' }} >
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
        <ListItemIcon >
          <PregnantWomanIcon />
        </ListItemIcon>
        <ListItemText primary="Pregnancy" />
        {openpreg? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openpreg} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <a href="/testtype/Pregnancy" style={{textDecoration:'none' , color:'black' }} >
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

    <br/>


    
        </div>
    )
}

export default MedicalTestsHomeScreen