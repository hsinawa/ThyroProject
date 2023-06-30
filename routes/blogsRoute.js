const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BlogModel = require("../models/BlogsModel");

router.post("/addblog", (req, res) => {
  BlogModel.find({}, (err, docs) => {
    const blog = new BlogModel({
      heading: req.body.blogdata.heading,
      image: req.body.blogdata.image,
      IdOfPerson: req.body.blogdata.IdOfPerson,
      instagramLink: req.body.blogdata.instagramLink,
      facebookLink: req.body.blogdata.facebookLink,
      twitterLink: req.body.blogdata.twitterLink,
      linkedinLink: req.body.blogdata.linkedinLink,
      name: req.body.blogdata.name,
      email: req.body.blogdata.email,
      personalSite: req.body.blogdata.personal,
      category: req.body.blogdata.category,
      isVisible: req.body.blogdata.isVisible,
      paragraphs: req.body.blogdata.paragraphs,
      keypoints: req.body.blogdata.keypoints,
    });

    blog.save((err) => {
      if (err) {
        console.log("Error Caught", err);
        return res
          .status(400)
          .json({ message: `Something Went Wrong ${err} ` });
      } else {
        res.send({ message: "Blog Added Successfully" });
      }
    });
  });
});

router.get("/getallblog", (req, res) => {
  BlogModel.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.get("/getallvalidblogs", (req, res) => {
  BlogModel.find({ isVisible: true }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.get("/getallvalidblogsforhomescreen", (req, res) => {
  BlogModel.find({ isVisible: true })
    .sort({ totalViews: -1 }) // Sort by totalViews in descending order
    .limit(6) // Limit the result to 5 documents
    .exec((err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    });
});

router.post("/getblogbyid", (req, res) => {
  BlogModel.find({ _id: req.body.blogid }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/blogbyemployeeid", (req, res) => {
  BlogModel.find({ IdOfPerson: req.body.employeeId }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/approveblog", (req, res) => {
  BlogModel.findByIdAndUpdate(
    { _id: req.body.details.blogid },
    {
      isVisible: req.body.details.isVisible,
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

router.post("/increaseview", (req, res) => {
  BlogModel.findByIdAndUpdate(
    req.body.blogid,
    { $inc: { totalViews: 1 } },
    { new: true },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    }
  );
});

router.post("/getblogbycategory", (req, res) => {
  BlogModel.find({ category: req.body.category })
    .sort({ totalViews: -1 })
    .limit(5)
    .exec((err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    });
});

router.post("/getblogbyemployee", (req, res) => {
  BlogModel.find({ IdOfPerson: req.body.id, isVisible: true })
    .sort({ totalViews: -1 })
    .limit(9)
    .exec((err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    });
});

module.exports = router;
