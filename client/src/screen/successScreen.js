import React from 'react'
// import contactsucess from '../Images/contactsucess.jpg'

const SuccessPage = () => {

    const styles = `
 .success-container
 {
     width:70%;
     margin-left:auto;
     margin-right:auto;
 }


 @media screen and (max-width:600px)
 {
    .success-container
    {
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
 }

  `;


    return(
        <div>
           
           <style>{styles}</style>
            <div className='success-container' >
            <div class="success-animation">
<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>

<h1 style={{color:'#002D62'}} >Thankyou for Contacting! </h1>

<h3 style={{color:'#5072A7'}} >Your Message has been Received</h3>
<h3 style={{color:'#5072A7'}} >You'll be contacted shortly</h3>
    </div>
        </div>
    )
}

export default SuccessPage