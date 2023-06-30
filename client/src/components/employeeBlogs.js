import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { borderRadius } from "@mui/system";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./blogs.css";
import { useDispatch } from "react-redux";
import { AddNewBlogAdminAction } from "../actions/BlogAction";


const EmployeeAddBlog = () => {
    const employee = JSON.parse(localStorage.getItem('employee'))
  const dispatch = useDispatch();
  const [heading, setheading] = useState("");
  const [personal, setpersonal] = useState("");
  const [instagramLink, setinstagramLink] = useState("");
  const [facebookLink, setfacebookLink] = useState("");
  const [twitterLink, settwitterLink] = useState("");
  const [linkedinLink, setlinkedinLink] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [isVisible, setisVisible] = useState(true);
  const [category,setcategory] = useState("");
  const [paragraphs, setParagraphs] = useState([
    {
      subheadings: "",
      details: "",
    },
  ]);

  const [keypoints, setkeypoints] = useState([
    {
      point: "",
    },
  ]);

  const addBlogs = () => {
    const blogdata = {
      name: name,
      email: email,
      keypoints: keypoints,
      paragraphs: paragraphs,
      IdOfPerson: employee._id,
      instagramLink: instagramLink,
      facebookLink: facebookLink,
      twitterLink: twitterLink,
      linkedinLink:linkedinLink,
      heading: heading,
      category:category,
      personal:personal,
      image: image,
      isVisible: false,
    };
    dispatch(AddNewBlogAdminAction({blogdata}))
  };

  const handleSubheadingsChange = (index, event) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index].subheadings = event.target.value;
    setParagraphs(updatedParagraphs);
  };

  const handleDetailsChange = (index, event) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index].details = event.target.value;
    setParagraphs(updatedParagraphs);
  };

  const addParagraph = () => {
    setParagraphs([...paragraphs, { subheadings: "", details: "" }]);
  };

  const removeParagraph = (index) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs.splice(index, 1);
    setParagraphs(updatedParagraphs);
  };

  const handlekeypointsChange = (index, event) => {
    const updatedkeypoints = [...keypoints];
    updatedkeypoints[index].point = event.target.value;
    setkeypoints(updatedkeypoints);
  };

  const addKeyPoint = () => {
    setkeypoints([...keypoints, { point: "" }]);
  };

  const removeKeyPoint = (index) => {
    const updatedkeypoints = [...keypoints];
    updatedkeypoints.splice(index, 1);
    setkeypoints(updatedkeypoints);
  };

  return (
    <div>
      <form onSubmit={addBlogs}>
        <div className="example-container">
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Heading of Blog"
            variant="outlined"
            style={{ width: "80%" }}
            value={heading}
            required
            onChange={(e) => {
              setheading(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            required
            style={{ width: "80%" }}
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            required
            style={{ width: "80%" }}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Image Link"
            variant="outlined"
            required
            style={{ width: "80%" }}
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Website Link"
            variant="outlined"
            style={{ width: "80%" }}
            value={personal}
            onChange={(e) => {
              setpersonal(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="FaceBook Link"
            variant="outlined"
            style={{ width: "80%" }}
            value={facebookLink}
            onChange={(e) => {
              setfacebookLink(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Instagram Link"
            variant="outlined"
            style={{ width: "80%" }}
            value={instagramLink}
            onChange={(e) => {
              setinstagramLink(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="LinkedIn Link"
            variant="outlined"
            style={{ width: "80%" }}
            value={linkedinLink}
            onChange={(e) => {
              setlinkedinLink(e.target.value);
            }}
          />

          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Twitter Link"
            variant="outlined"
            style={{ width: "80%" }}
            value={twitterLink}
            onChange={(e) => {
              settwitterLink(e.target.value);
            }}
          />

          <h3>Paragraph Section </h3>
          {paragraphs.map((paragraph, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <TextField
                variant="outlined"
                required
                id="outlined-basic"
                value={paragraph.subheadings}
                onChange={(event) => handleSubheadingsChange(index, event)}
                placeholder={`Subheadings ${index + 1} `}
                style={{ width: "80%" }}
              />

              <br />
              <br />

              <TextField
                variant="outlined"
                id="outlined-basic"
                required
                value={paragraph.details}
                onChange={(event) => handleDetailsChange(index, event)}
                placeholder={`Paragraph ${index + 1} `}
                style={{ width: "80%" }}
              />
              <br />
              <br />
              <Button
                className="remove-btn"
                variant="contained"
                size="large"
                onClick={() => removeParagraph(index)}
                style={{
                  color: "white",
                  backgroundColor: "#7C0A02",
                }}
              >
                Remove Paragraph
              </Button>
            </div>
          ))}

          <Button
            className="remove-btn"
            variant="contained"
            size="large"
            onClick={addParagraph}
            style={{ color: "white", backgroundColor: "#002D62" }}
          >
            &nbsp; &nbsp; Add Paragraph &nbsp; &nbsp;
          </Button>

          <br />
          <br />
          <br />
          <h3>Write Key Points </h3>
          {keypoints.map((keyp, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <TextField
                variant="outlined"
                required
                id="outlined-basic"
                value={keyp.point}
                onChange={(event) => handlekeypointsChange(index, event)}
                placeholder={`Keypoint ${index + 1} `}
                style={{ width: "80%" }}
              />

              <br />
              <br />
              <Button
                className="remove-btn"
                variant="contained"
                size="large"
                onClick={() => removeKeyPoint(index)}
                style={{
                  color: "white",
                  backgroundColor: "#7C0A02",
                }}
              >
                Remove Point
              </Button>
            </div>
          ))}

          <Button
            className="remove-btn"
            variant="contained"
            size="large"
            onClick={addKeyPoint}
            style={{ color: "white", backgroundColor: "#002D62" }}
          >
            &nbsp; &nbsp; Add Key Point &nbsp; &nbsp;
          </Button>
        </div>

        <br />
        <br />
        <br />
        <p>Select Category</p>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}

                    onChange={(e) => setcategory(e.target.value)}
                >
                    <br /><br />
                    <MenuItem value='All'>All</MenuItem> <br/>
                    <MenuItem value='Fever'>Fever</MenuItem><br/>
                    <MenuItem value='Women'>Women Health</MenuItem>
                    <MenuItem value='Diabetes'>Diabetes</MenuItem>
                    <MenuItem value='Fitness'>Fitness</MenuItem>
                    <MenuItem value='Covid'>Covid 19</MenuItem>
                    <MenuItem value='SeniorCitizen'>Senior Citizen</MenuItem>
                    <MenuItem value='Allergy'>Allergy Profiles</MenuItem>
                    <MenuItem value='Pregnancy'>Pregnancy</MenuItem>
                    <MenuItem value='Men'>Men Health</MenuItem>
                    <MenuItem value='Liver'>Liver Profile</MenuItem>
                    <MenuItem value='Kidney'>Kidney Profiles</MenuItem>
                    <MenuItem value='Vitamin'>Vitamin Tests</MenuItem>
                    <MenuItem value='Hormone'>Hormone Tests</MenuItem>
                    <MenuItem value='Arthritis'>Arthritis</MenuItem>
                    <MenuItem value='Cardio'>Cardio</MenuItem>


                </Select>
                <br />
        <br />

     

        <br />
        <br />
        <Button value="submit" type="submit" style={{
            backgroundColor:'green',
            color:'white',
            padding:'20px 40px 20px 40px'
        }} >
          Add Blog
        </Button>
      </form>
    </div>
  );
};

export default EmployeeAddBlog;
