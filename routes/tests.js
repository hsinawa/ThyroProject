const express = require("express");
const router = express.Router();

const Tests = require("../models/tests");

router.post("/addtest", (req, res) => {
  Tests.find({}, (err, docs) => {
    const test = new Tests({
      name: req.body.name,
      description: req.body.description,
      requirements: req.body.requirements,
      logourl: req.body.logourl,
      imageurl: req.body.imageurl,
      category: req.body.category,
      isPackage: req.body.isPackage,
      reporttime: req.body.reporttime,
      availability: req.body.availability,
      price: req.body.price,
      profit:req.body.profit,
      about: req.body.about,
      duration: req.body.duration,
      isValid:true,
      CouponApplied: typeof req.body.CouponApplied !== 'string'? 'No Coupon': req.body.CouponApplied ,
      testsincluded: req.body.testsincluded?.split(";"),
    });

    test.save((err) => {
      if (err) {
        return res
          .status(400)
          .json({ message: `Something Went Wrong ${err} ` });
      } else {
        
        res.send({ message: "Test Added Successfully" });
      }
    });
  });
});

router.get("/getalltests", (req, res) => {
  Tests.find({ isPackage: "false" }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.get("/getalltests2", (req, res) => {
  Tests.find({  }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      
      res.send(docs);
    }
  });
});

router.get("/getcombotest", (req, res) => {
  Tests.find({ isPackage: "true" }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/gettestbyid", (req, res) => {
  Tests.find({ _id: req.body.testid }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/getmedicaltests", (req, res) => {
  Tests.find({ availability: true }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/getcategorytests", (req, res) => {
  Tests.find({ category: req.body.categorytype }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      

      res.send(docs);
    }
  });
});


router.post('/deletetest' , (req,res)=>{

  Tests.findByIdAndDelete(req.body.id , (err)=>{

      if(err)
      {
          return res.status(400).json({message:`Something Went Wrong ${err} `})
      }
      else{
          res.send({message:'Deleted Successfully'})
      }

  } )

} );



router.post('/updateTest' , (req,res)=>{
  Tests.findByIdAndUpdate(req.body.testid , {
    name: req.body.testdata.name,
    description: req.body.testdata.description,
    requirements: req.body.testdata.requirements,
    logourl: req.body.testdata.logourl,
    imageurl: req.body.testdata.imageurl,
    category: req.body.testdata.category,
    isPackage: req.body.testdata.isPackage,
    reporttime: req.body.testdata.reporttime,
    availability: req.body.testdata.availability,
    price: req.body.testdata.price,
    profit:req.body.testdata.profit,
    about: req.body.testdata.about,
    duration: req.body.testdata.duration,
  } ,  (err)=>{
      if(err)
      return res.status(400).json({message:`Something Went Wrong ${err} `})

      else{
        
          res.send({message:'Test Updated Successfully'})
      }

  } )
} )




module.exports = router;
