const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ContactModel = require("../models/contactModel");



router.post("/contactmessage", (req, res) => {
    ContactModel.find({}, (err, docs) => {
      const contact = new ContactModel({
        name: req.body.contactdata.name,
        contactDetails: req.body.contactdata.contactdetails,
        message: req.body.contactdata.message,
       
      });
  
      contact.save((err) => {
        if (err) {
          return res
            .status(400)
            .json({ message: `Something Went Wrong ${err} ` });
        } else {
          res.send({ message: "Contacted  Successfully" });
        }
      });
    });
  });




  router.get("/getcontacts", (req, res) => {
    ContactModel.find({}, (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    });
  });

module.exports = router;
