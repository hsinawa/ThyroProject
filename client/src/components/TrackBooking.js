import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Button } from '@mui/material';



const TrackBooking = () => {
    return(
        <div>
              <div id='track-box' className='grid-1' >
               <p>
               Track Your Booking
                   </p>

                   <p className='button-style' >
                       < a href='/trackingpage' style={{textDecoration:'none'}} >
                     <Button variant="contained"
                     
                     id='button-1'

                     > <PersonPinIcon/> &nbsp; Track Here</Button>
                  </a>
                   </p>

           </div>

        </div>
    )
}

export default TrackBooking