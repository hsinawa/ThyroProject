import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import './contact.css'
import Button from '@mui/material/Button';

export const ContactDetails = () => {
    return(
        <div>
          
           <div id='call-box' className='grid-1' >
               <p>
               Need Help with Your Booking?
                   </p>

                   <p className='button-style' >
                       < a href='tel:+919654965497' style={{textDecoration:'none'}} >
                     <Button variant="contained"
                     
                     id='button-1'

                     > <CallIcon/> &nbsp; Call Now</Button>
                  </a>
                   </p>

           </div>

           
        </div>
    )
}

export default ContactDetails