import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { AddNewTestsAction } from "../actions/TestsAction";
import { Button } from "@material-ui/core";

export const AddTestsAdmin = () => {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [requirements, setrequirements] = useState("");
  const [logourl, setlogourl] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [isPackage, setisPackage] = useState("");
  const [duration, setduration] = useState("");
  const [reporttime, setreporttime] = useState();
  const [availability, setavailability] = useState();
  const [price, setprice] = useState();
  const [about, setabout] = useState("");
  const [testsincluded, settestsincluded] = useState("");
  const [profit, setprofit] = useState();

  const AddTestFunction = (e) => {
    e.preventDefault();

    const testdata = {
      name: name,
      description: description,
      requirements: requirements,
      logourl: logourl,
      imageurl: imageurl,
      category: category,
      isPackage: isPackage,
      reporttime: reporttime,
      availability: availability,
      price: price,
      about: about,
      duration: duration,
      testsincluded: testsincluded,
      profit: profit,
    };

    dispatch(AddNewTestsAction(testdata));
  };

  return (
    <div>
      <h3>Add New Tests Here</h3>

      <form onSubmit={AddTestFunction} noValidate>
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
          label="About-Front Page"
          variant="outlined"
          style={{ width: "100%" }}
          value={about}
          onChange={(e) => {
            setabout(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Requirements"
          variant="outlined"
          style={{ width: "100%" }}
          value={requirements}
          onChange={(e) => {
            setrequirements(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <br />
        <br />
        <div
          className="grid-1"
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <TextField
            required
            id="outlined-basic"
            label="Report Time"
            variant="outlined"
            style={{ width: "100%" }}
            value={reporttime}
            onChange={(e) => {
              setreporttime(e.target.value);
            }}
            style={{ width: "80%" }}
          />

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={duration}
            onChange={(e) => setduration(e.target.value)}
          >
            <br />
            <br />

            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Hrs">Hrs</MenuItem>
            <MenuItem value="Days">Days</MenuItem>
          </Select>
        </div>

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Price"
          variant="outlined"
          style={{ width: "100%" }}
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
          style={{ width: "80%" }}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Cost Price"
          variant="outlined"
          style={{ width: "100%" }}
          value={profit}
          onChange={(e) => {
            setprofit(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Image"
          variant="outlined"
          style={{ width: "100%" }}
          value={imageurl}
          onChange={(e) => {
            setimageurl(e.target.value);
          }}
          style={{ width: "80%" }}
        />

        <p>Is Package</p>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={isPackage}
          onChange={(e) => setisPackage(e.target.value)}
        >
          <br />
          <br />

          <MenuItem value="">Select</MenuItem>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </Select>

        <br />
        <br />

        {isPackage == "true" ? (
          <p>
            <TextField
              required
              id="outlined-basic"
              label="Enter Test included by ;"
              variant="outlined"
              style={{ width: "100%" }}
              value={testsincluded}
              onChange={(e) => {
                settestsincluded(e.target.value);
              }}
              style={{ width: "80%" }}
            />
          </p>
        ) : null}

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
        <p>
          <FormLabel id="demo-radio-buttons-group-label">
            Is Available?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={availability}
            onChange={(e) => {
              setavailability(e.target.value);
            }}
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Yes"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="No"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </RadioGroup>
        </p>
        <br />
        <br />
        <p style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            style={{ color: "white", backgroundColor: "black" }}
            type="submit"
          >
            Submit
          </Button>
        </p>
      </form>
    </div>
  );
};

export default AddTestsAdmin;
