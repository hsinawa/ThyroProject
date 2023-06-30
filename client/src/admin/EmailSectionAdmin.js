import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SendMailCategoryAction, SendMailEveryoneAction } from "../actions/BookingAction";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  addButton: {
    alignSelf: "flex-start",
  },
}));

const EveryOneMail = () => {
  const classes = useStyles();
  const [title, settitle] = useState("");

  const [emailBody, setEmailBody] = useState([
    {
      heading: "",
      image: "",
      body: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedEmailBody = [...emailBody];
    updatedEmailBody[index][field] = value;
    setEmailBody(updatedEmailBody);
  };

  const handleAddItem = () => {
    const newItem = {
      heading: "",
      image: "",
      body: "",
    };
    setEmailBody([...emailBody, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedEmailBody = [...emailBody];
    updatedEmailBody.splice(index, 1);
    setEmailBody(updatedEmailBody);
  };

  const renderEmailBodyInputs = () => {
    return emailBody.map((email, index) => (
      <div key={index}>
        <TextField
          variant="outlined"
          required
          id="outlined-basic"
          placeholder={`Heading ${index + 1} `}
          style={{ width: "80%" }}
          value={email.heading}
          onChange={(e) => handleInputChange(index, "heading", e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Image"
          variant="outlined"
          required
          style={{ width: "80%" }}
          id="outlined-basic"
          placeholder={`Image Link ${index + 1} `}
          value={email.image}
          onChange={(e) => handleInputChange(index, "image", e.target.value)}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          required
          style={{ width: "80%" }}
          id="outlined-basic"
          placeholder={`Body ${index + 1} `}
          label="Body"
          value={email.body}
          onChange={(e) => handleInputChange(index, "body", e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleDeleteItem(index)}
          className={classes.deleteButton}
        >
          Delete this Section
        </Button>
        <hr />
      </div>
    ));
  };

  const dispatch = useDispatch();
  const sendMail = () => {
    dispatch(SendMailEveryoneAction({ emailBody, title }));
  };

  return (
    <div>
      <br />
      <h3>Write Content of Email</h3>
      <br />
      <br />
      <TextField
        variant="outlined"
        required
        style={{ width: "80%" }}
        id="outlined-basic"
        placeholder={`Enter Title of Mail`}
        label="Title Of Email"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />

      <br />
      <br />

      <div className="example-container">
        {renderEmailBodyInputs()}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem}
          className={classes.addButton}
        >
          Add More
        </Button>
      </div>

      <br />
      <br />
      <br />

      <Button
        variant="contained"
        color="primary"
        onClick={sendMail}
        className={classes.addButton}
      >
        Send Mail
      </Button>
    </div>
  );
};

const OnlycategoryMail = () => {
  const classes = useStyles();
  const [category, setcategory] = useState("");
  const [title, settitle] = useState("");

  const [emailBody, setEmailBody] = useState([
    {
      heading: "",
      image: "",
      body: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedEmailBody = [...emailBody];
    updatedEmailBody[index][field] = value;
    setEmailBody(updatedEmailBody);
  };

  const handleAddItem = () => {
    const newItem = {
      heading: "",
      image: "",
      body: "",
    };
    setEmailBody([...emailBody, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedEmailBody = [...emailBody];
    updatedEmailBody.splice(index, 1);
    setEmailBody(updatedEmailBody);
  };

  const renderEmailBodyInputs = () => {
    return emailBody.map((email, index) => (
      <div key={index}>
        <TextField
          variant="outlined"
          required
          id="outlined-basic"
          placeholder={`Heading ${index + 1} `}
          style={{ width: "80%" }}
          value={email.heading}
          onChange={(e) => handleInputChange(index, "heading", e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Image"
          variant="outlined"
          required
          style={{ width: "80%" }}
          id="outlined-basic"
          placeholder={`Image Link ${index + 1} `}
          value={email.image}
          onChange={(e) => handleInputChange(index, "image", e.target.value)}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          required
          style={{ width: "80%" }}
          id="outlined-basic"
          placeholder={`Body ${index + 1} `}
          label="Body"
          value={email.body}
          onChange={(e) => handleInputChange(index, "body", e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleDeleteItem(index)}
          className={classes.deleteButton}
        >
          Delete this Section
        </Button>
        <hr />
      </div>
    ));
  };

  const dispatch = useDispatch();
  const sendMailCategory = () => {
    dispatch(SendMailCategoryAction({ emailBody, title, category }));
  };
  return (
    <div>
      <h3>Select Category</h3>

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

      {category?.length > 0 && (
          <div>
                  <br />
      <br />
      <h3>Write Content of Email</h3>
      <br />
      <br />
      <TextField
        variant="outlined"
        required
        style={{ width: "80%" }}
        id="outlined-basic"
        placeholder={`Enter Title of Mail`}
        label="Title Of Email"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
        <div className="example-container">
          {renderEmailBodyInputs()}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddItem}
            className={classes.addButton}
          >
            Add More
          </Button>
        </div>

        <br />
      <br />
      <br />

      <Button
        variant="contained"
        color="primary"
        onClick={sendMailCategory}
        className={classes.addButton}
      >
        Send Mail
      </Button>

        </div>
      )}


    </div>
  );
};

const AdminEmailSection = () => {
  const [option, setoption] = useState("");

  return (
    <div>
      Admin Will Write Email
      <p>Send Email to:</p>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={option}
        onChange={(e) => setoption(e.target.value)}
      >
        <br />
        <br />

        <MenuItem value="Everyone">Everyone</MenuItem>
        <MenuItem value="Category">Specific Category</MenuItem>
      </Select>
      {option === "Everyone" && <EveryOneMail />}
      {option === "Category" && <OnlycategoryMail />}
    </div>
  );
};

export default AdminEmailSection;
