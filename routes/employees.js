const express = require("express");
const router = express.Router();
const Employee = require("../models/employees");

router.post("/addemployee", (req, res) => {
  Employee.find({}, (err, docs) => {
    const emp = new Employee({
      name: req.body.name,
      lname: req.body.lname,
      email: req.body.email,
      contactnumber: req.body.contactnumber,
      totalTests: req.body.totalTests,
      about: req.body.about,
      password:req.body.password ,
      hobbies: req.body.hobbies?.split(";"),
    });

    emp.save((err) => {
      if (err) {
        return res
          .status(400)
          .json({ message: `Something Went Wrong ${err} ` });
      } else {
        res.send({ message: "Employee Added Successfully" });
      }
    });
  });
});

router.get("/getemployee", (req, res) => {
  Employee.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      
      res.send(docs);
    }
  });
});

router.post("/deleteemployee", (req, res) => {
  Employee.findByIdAndDelete(req.body.id, (err) => {
    if (err) {
      return res.status(400).json({ message: `Something Went Wrong ${err} ` });
    } else {
      res.send({ message: "Deleted Successfully" });
    }
  });
});


router.post("/getempbyid", (req, res) => {
  Employee.find({ _id: req.body.employeeId }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
     
      res.send(docs);
    }
  });
});

router.post('/login' , (req,res)=>{

  

  Employee.find( {contactnumber:req.body.contactnumber , password:req.body.password } , (err,docs)=>{
      if(docs.length>0)
      {
          const localsave = {
              name : docs[0].name ,
              _id:docs[0]._id ,
              email : docs[0].email 
          }

          res.send(localsave)
      }
      else
      {
          return res.status(400).json({message:'Something Went Wrong'})
      }
  } )
} )


router.post("/updatetestcount", (req, res) => {
  Employee.findByIdAndUpdate(
    { _id: req.body.employeeId },
    {
      totalTests: req.body.totalTests,
    },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
       
        res.send(docs);
      }
    }
  );
});


module.exports = router;
