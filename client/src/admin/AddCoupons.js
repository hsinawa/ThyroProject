import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCouponsAction } from "../actions/CouponAction";

const AddCouponsAdmin = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [value, setvalue] = useState();
  const [code, setcode] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [isValid, setisValid] = useState(true);
  const [minimumAmount, setminimumAmount] = useState();
  const [category, setcategory] = useState("");
  const [isindividual,setisindividual] = useState(false)

  const AddCoupon = () => {
    const coupondata = {
      name: name,
      description: description,
      value: value,
      code: code,
      phoneNumber:phoneNumber,
      isValid:isValid,
      minimumAmount: minimumAmount,
      category: category,
      isindividual:isindividual
    };

    dispatch(AddNewCouponsAction(coupondata));
  };

  return (
    <div>
      <form onSubmit={AddCoupon}>
        <h2>Add Coupons</h2>

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Description"
          variant="outlined"
          style={{ width: "100%" }}
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Value in %"
          variant="outlined"
          style={{ width: "100%" }}
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          style={{ width: "80%" }}
        />



        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Code"
          variant="outlined"
          style={{ width: "100%" }}
          value={code}
          onChange={(e) => {
            setcode(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        

        <br />
        <br />
        <p>Select Category</p>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <br />
          <br />
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Fever">Fever</MenuItem>
          <MenuItem value="Women">Women Health</MenuItem>
          <MenuItem value="Diabetes">Diabetes</MenuItem>
          <MenuItem value="Fitness">Fitness</MenuItem>
          <MenuItem value="Covid">Covid 19</MenuItem>
          <MenuItem value="SeniorCitizen">Senior Citizen</MenuItem>
          <MenuItem value="Allergy">Allergy Profiles</MenuItem>
          <MenuItem value="Pregnancy">Pregnancy</MenuItem>
          <MenuItem value="Men">Men Health</MenuItem>
          <MenuItem value="Liver">Liver Profile</MenuItem>
          <MenuItem value="Kidney">Kidney Profiles</MenuItem>
          <MenuItem value="Vitamin">Vitamin Tests</MenuItem>
          <MenuItem value="Hormone">Hormone Tests</MenuItem>
          <MenuItem value="Arthritis">Arthritis</MenuItem>
          <MenuItem value="Cardio">Cardio</MenuItem>
        </Select>


        <br />
        <br />
        <p>Is Valid?</p>
        <Select value={isValid} onChange= { (e)=>{
            setisValid(e.target.value)
        } } >
            <MenuItem value={true} >Yes</MenuItem>
            <MenuItem value={false} >No</MenuItem>
            </Select>



            <p>for Individual?</p>
        <Select value={isindividual} onChange= { (e)=>{
            setisindividual(e.target.value)
        } } >
            <MenuItem value={true} >Yes</MenuItem>
            <MenuItem value={false} >No</MenuItem>
            </Select>   
            <br />
        <br />

        {
          isindividual&&(

        <TextField
          
          id="outlined-basic"
          label="Enter Phone Number"
          variant="outlined"
          style={{ width: "100%" }}
          value={phoneNumber}
          onChange={(e) => {
            setphoneNumber(e.target.value);
          }}
          style={{ width: "80%" }}
        />
          )
        }     

        <p style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            style={{ color: "white", backgroundColor: "black" }}
            type="submit"
          >
            Add Now
          </Button>
        </p>
      </form>
    </div>
  );
};

export default AddCouponsAdmin;
