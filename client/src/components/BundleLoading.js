import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import "./skeleton.css";
export const ThreeBoxSkeleton = () => {
 
  return (
    <>
        <div style={{
            width:'90%', marginLeft:'auto', marginRight:'auto'
        }}   >
      <Skeleton variant="rectangular" style={{ margin: "auto", height:'300px', borderRadius:'12px' }} />
   
      </div>
      <br/>
    </>
  );
};


export const BookingTestSkeleton = () =>{

  return (
    <>
        <div style={{
            width:'90%', marginLeft:'auto', marginRight:'auto'
        }}   >
      <Skeleton variant="rectangular" style={{ margin: "auto", height:'150px', borderRadius:'12px', marginTop:'5%' }} />
   
      </div>
      <br/>
    </>
  );

}
