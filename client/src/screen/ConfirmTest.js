import React from 'react'
import TrackBooking from '../components/TrackBooking'

import './grid.css'
const ConfirmationScreen = () => {

    const GetDetails = JSON.parse(sessionStorage.getItem('Details'))

    return(
        <div style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' }} >
         <h2> Your Booking has been Confirmed! </h2>
          <div class="success-animation">
<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>
<TrackBooking />
        </div>
    )
}

export default ConfirmationScreen