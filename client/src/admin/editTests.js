import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetTestsByIdAction, UpdateTestsAction } from "../actions/TestsAction";
import { GetTestsByIDReducer } from "../reducers/TestsReducer";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress, FormControl, Select } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const EditTestAdmin = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const testid = id;

  const gettestbyid = useSelector((state) => state.GetTestsByIDReducer);
  const { loading, success, error, testsdata } = gettestbyid;

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [requirements, setrequirements] = useState("");

  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [isPackage, setisPackage] = useState("");
  const [duration, setduration] = useState("");
  const [reporttime, setreporttime] = useState();
  const [availability, setavailability] = useState();
  const [price, setprice] = useState();
  const [about, setabout] = useState("");
  const [profit, setprofit] = useState();
  const [testsincluded, settestsincluded] = useState("");

  const EditTestFunction = (e) => {
    e.preventDefault();

    const testdata = {
      name: name,
      description: description,
      requirements: requirements,

      imageurl: imageurl,
      category: category,
      isPackage: isPackage,
      reporttime: reporttime,
      availability: availability,
      price: price,
      about: about,
      duration: duration,
      profit: profit,
      testsincluded: testsincluded,
    };

    dispatch(UpdateTestsAction(testid, testdata));
  };

  React.useEffect(() => {
    if (testsdata && testsdata.length > 0) {
      if (testsdata[0]._id === testid) {
        setname(testsdata[0]?.name);
        setdescription(testsdata[0]?.description);
        setrequirements(testsdata[0]?.requirements);
        setimageurl(testsdata[0]?.imageurl);
        setcategory(testsdata[0]?.category);
        setisPackage(testsdata[0]?.isPackage);
        setduration(testsdata[0]?.duration);
        setreporttime(testsdata[0]?.reporttime);
        setavailability(testsdata[0]?.availability);
        setprice(testsdata[0]?.price);
        setabout(testsdata[0]?.about);
        setprofit(testsdata[0]?.profit);
      } else {
        dispatch(GetTestsByIdAction({ testid }));
      }
    } else {
      dispatch(GetTestsByIdAction({ testid }));
    }
  }, [dispatch, testid, testsdata]);

  return (
    <div>
      {loading && <CircularProgress />}

      {testsdata && (
        <p>
          <h2>Update Test</h2>

          <form onSubmit={EditTestFunction} noValidate>
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
              label="Price"
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

            <br />
            <br />
            <p>Select Category</p>

            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
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
        </p>
      )}
    </div>
  );
};

export default EditTestAdmin;
