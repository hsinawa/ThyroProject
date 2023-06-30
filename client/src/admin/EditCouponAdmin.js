import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  GetCouponByIdAction,
  UpdateCouponsAction,
} from "../actions/CouponAction";
import { GetCouponsByIDReducer } from "../reducers/CouponReducer";
const EditCoupon = () => {
  const dispatch = useDispatch();

  const { couponid } = useParams();

  const { loading, coupondata } = useSelector(
    (state) => state.GetCouponsByIDReducer
  );

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [value, setvalue] = useState();
  const [code, setcode] = useState("");
  const [email, setemail] = useState("");
  const [isValid, setisValid] = useState(true);
  const [minimumAmount, setminimumAmount] = useState();
  const [category, setcategory] = useState("");

  const UpdateCoupon = (e) => {
    e.preventDefault();

    const coupondata = {
      name: name,
      description: description,
      value:value,
      code:code,
      email:email,
      isValid:isValid,
      minimumAmount:minimumAmount,
      category:category
    };

    dispatch(UpdateCouponsAction(couponid, coupondata));
  };

  React.useEffect(() => {
    if (coupondata && coupondata.length > 0) {
      if (coupondata[0]._id === couponid) {
        setname(coupondata[0]?.name);
        setdescription(coupondata[0]?.description);
        setvalue(coupondata[0]?.value);
        setcode(coupondata[0]?.code);
        setcategory(coupondata[0]?.category);
        setemail(coupondata[0]?.email);
        setminimumAmount(coupondata[0]?.minimumAmount);
        setisValid(coupondata[0]?.isValid);
      } else {
        dispatch(GetCouponByIdAction({ couponid }));
      }
    } else {
      dispatch(GetCouponByIdAction({ couponid }));
    }
  }, [dispatch, couponid, coupondata]);

  return (
    <div>
      {loading && <CircularProgress />}

      <form onSubmit={UpdateCoupon}>
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
         
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "100%" }}
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          style={{ width: "80%" }}
        />
        <br />
        <br />

        <TextField
          required
          id="outlined-basic"
          label="Value"
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

        <TextField
          required
          id="outlined-basic"
          label="Min Amount"
          variant="outlined"
          style={{ width: "100%" }}
          value={minimumAmount}
          onChange={(e) => {
            setminimumAmount(e.target.value);
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
        <p>category</p>
        <select value={category} onChange={(e) => setcategory(e.target.value)}>
          <option value="Fever">Fever</option>
          <option value="Women">Women Health</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Fitness">Fitness</option>
          <option value="Covid">Covid 19</option>
          <option value="SeniorCitizen">Senior Citizen</option>
          <option value="Allergy">Allergy Profiles</option>
          <option value="Pregnancy">Pregnancy</option>
          <option value="Men">Men Health</option>
          <option value="Liver">Liver Profile</option>
          <option value="Kidney">Kidney Profiles</option>
          <option value="Vitamin">Vitamin Tests</option>
          <option value="Hormone">Hormone Tests</option>
          <option value="Arthritis">Arthritis</option>
          <option value="Cardio">Cardio</option>
        </select>

        <br />

        <br />

        <select
          value={isValid}
          onChange={(e) => {
            setisValid(e.target.value);
          }}
        >
          <option value={true}>Yes</option>
          <option value={false}> No</option>
        </select>
        <p style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            style={{ color: "white", backgroundColor: "black" }}
            type="submit"
            value='submit'
          >
            Update
          </Button>
        </p>
      </form>
    </div>
  );
};

export default EditCoupon;
