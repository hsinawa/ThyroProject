import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ContactSendAction } from "../actions/contactAction";
import Loader from "./DotLoading";
import SendIcon from '@mui/icons-material/Send';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const ContactForm = () => {

    const [name,setname] = useState('')
    const [contactdetails,setcontactdetails] = useState('')
    const [message,setmessage] = useState('')
    const [isLoading,setisLoading] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('');

  const handleChange = (e) => {
    
    if (e.target.value !== '') {
      setBackgroundColor('grey');
    } else {
      setBackgroundColor('');
    }
  };


    const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactdata = {
        name:name,
        contactdetails:contactdetails,
        message:message
    }

    setisLoading(true)

    dispatch(ContactSendAction({contactdata}))
  };


  const boxScreen= {
width:'80%',
marginLeft:'auto',
marginRight:'auto',
boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  }

  return (
      <div>
   <br/><br/>
   
          <div style={boxScreen} >
    <form
      onSubmit={handleSubmit}
     style={{width:'90%', marginLeft:'auto', marginRight:'auto'}}
    ><br/>
        <h2> Get in Touch <ConnectWithoutContactIcon style={{verticalAlign:'-6px', fontSize:'30px'}}  /> </h2>
        <br/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              fullWidth
              value={name}
              onChange={ (e)=>{ setname(e.target.value) } }
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Details"
              fullWidth
              value={contactdetails}
              onChange={ (e)=>{ setcontactdetails(e.target.value)}  }
              variant="outlined"
              required
            />
          </Grid>
        </Grid>
      </Box>

      <TextField
        label="Enter Message"
        fullWidth
        value={message}
        onChange={ (e)=>{ setmessage(e.target.value) } }
        variant="outlined"
        required
        multiline
        rows={4}
        style={{ margin: "20px 0" }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth style={{
          backgroundColor:'#0a2351'
      }} >
          {isLoading?(<Loader/>):(<p style={{fontSize:'15px'}} >Just Send <SendIcon style={{verticalAlign:'-6px'}} /> </p>)}
        
      </Button>
      <br/><br/>
    </form>
    <br/><br/></div>
    </div>
  );
};

export default ContactForm;
