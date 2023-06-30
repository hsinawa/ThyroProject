const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CouponModel = require("../models/CouponModel");

router.post("/addcoupons", (req, res) => {
  CouponModel.find({}, (err, docs) => {
    const coupon = new CouponModel({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      value: req.body.value,
      isValid: req.body.isValid,
      code: req.body.code,
      minimumAmount: req.body.minimumAmount,
      category: req.body.category,
      description: req.body.description,
      isindividual:req.body.isindividual
    });

    coupon.save((err) => {
      if (err) {
        return res
          .status(400)
          .json({ message: `Something Went Wrong ${err} ` });
      } else {
        res.send({ message: "Coupon Added Successfully" });
      }
    });
  });
});

router.get("/getallcoupons", (req, res) => {
  CouponModel.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.get("/getvalidcoupons", (req, res) => {
  CouponModel.find({ $and: [{ isValid: true }, { isindividual: false }] }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});





router.post("/deletecoupon", (req, res) => {
  CouponModel.findByIdAndDelete(req.body.id, (err) => {
    if (err) {
      return res.status(400).json({ message: `Something Went Wrong ${err} ` });
    } else {
      res.send({ message: "Deleted Successfully" });
    }
  });
});

router.post("/updatecoupon", (req, res) => {

  
  CouponModel.findByIdAndUpdate(
    req.body.couponid,
    {
      name: req.body.coupondata.name,
      email: req.body.coupondata.email,
      value: req.body.coupondata.value,
      isValid: req.body.coupondata.isValid,
      code: req.body.coupondata.code,
      minimumAmount: req.body.coupondata.minimumAmount,
      category: req.body.coupondata.category,
      description: req.body.coupondata.description,
    },
    (err) => {
      if (err)
        return res
          .status(400)
          .json({ message: `Something Went Wrong ${err} ` });
      else {
        res.send({ message: "Coupon Updated Successfully" });
      }
    }
  );
});

router.post("/couponbyid", (req, res) => {
  CouponModel.find({ _id: req.body.couponid }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});



router.post("/couponbycontact", (req, res) => {
  CouponModel.find({ phoneNumber: req.body.phoneNumber  }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

module.exports = router;
