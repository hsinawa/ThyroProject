const express = require("express");
const router = express.Router();
const moment = require("moment");
const Booking = require("../models/bookings");
var nodemailer = require("nodemailer");

router.post("/makebooking", (req, res) => {
  const { CartItem, details, Coupondata } = req.body;

  const book = new Booking({
    name: req.body.details.name,
    lname: req.body.details.lname,
    email: details.email,
    contactnumber: details.contactnumber,
    collectedby: "",
    bookedtests: CartItem,
    orderamount: details.orderamount,

    date: details.date,
    time: details.time,
    shippingaddress: {
      address1: details.address1,
      address2: details.address2,
      pincode: details.pincode,
      city: details.city,
    },
    isdelivered: "false",
    isSampleCollected: false,
    reporturl: "",
    gender: details.gender,
    age: details.age,
    status: false,

    CouponApplied:
      req.body.Coupondata && req.body.Coupondata.code !== null
        ? req.body.Coupondata.code
        : "No Coupon",
  });

  book.save((err) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send({ message: "Booking Placed Successfully Successful" });

      const HTMLTemplate = `<!DOCTYPE html>
<html>

<head>
    <title>Booking Confirmation</title>
    <style>
        #BackGround-3 {

            /* Created with https://www.css-gradient.com */
            /* Created with https://www.css-gradient.com */
            background: #2FD7E1;
            background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
            background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
            background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
            height: 200px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        }

        .grid-1 {
            display: grid;
            grid-template-columns: auto auto;
        }

        #upper-half {

            width: 80%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;

        }


        #BackGround-2 {

            background: #FAF9F6;

            height: 500px;
            width: 80%;
            height: fit-content;
            margin-top: -10%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


        }


 @media screen and (max-width:800px) {
            #BackGround-3 {

                /* Created with https://www.css-gradient.com */
                background: #2FD7E1;
                background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                height: 120px;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

            }


            #BackGround-2 {

                background: #FAF9F6;

                height: 450px;
                width: 70%;
                margin-top: -10%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


            }

            .grid-1 {
                display: block;
                grid-template-columns: auto;
            }

        }



        @media screen and (max-width:500px) {

            .grid-1 {
                display: grid;
                grid-template-columns: auto;
            }


            #BackGround-3 {

                /* Created with https://www.css-gradient.com */
                background: #2FD7E1;
                background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                height: 140px;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

            }


            #BackGround-2 {

                background: #FAF9F6;

                height: auto;
                width: 90%;
                margin-top: -20%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


            }
        }
    </style>
</head>

<body>

    <div>
        <h3> Hello ${details.name}! Your Booking has been confirmed! </h3>
        <p>Here are some quick details </p>
        <div id="BackGround-2" style="margin-top:'-10%'" >
            <br />
            <div>
                <div id='upper-half'>
                    <h2>
                        ${details.name} &nbsp; &nbsp;  ${details.lname}
                    </h2>
                    <h4>
                        Age: ${details.age} &nbsp; &nbsp; Gender: ${
        details.gender
      }
                    </h4>
                    <h4>
                    ${details.date} &nbsp; &nbsp; ${details.time.substr(0, 5)}
                    </h4>
                </div>
                <hr style="box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px" />
                <section style="text-align: left; margin-left: 10%; margin-right: auto" class="grid-1">
                   
                    <p>
                        <span style="font-weight: bold">Total Amount:</span>
                        ${details.orderamount} (${
        req.body.Coupondata && req.body.Coupondata.code !== null
          ? req.body.Coupondata.code
          : "No Coupon"
      } Applied)
                    </p>
                    <p>
                        <span style="font-weight: bold">Booked Tests:</span>
                        ${CartItem.map(
                          (i) =>
                            `<p>${i.name} &nbsp; &nbsp; &nbsp; ₹ ${i.price}</p>`
                        ).join("")}
                    </p>
                 
                    </p>
                    <p>
                        <span style="font-weight: bold">Contact Details:</span>
                        ${details.contactnumber}
                        <br />
                        <br />
                        <span style="font-weight: bold">Email:</span>
                        ${details.email}
                    </p>
                    <p>
                        <span style="font-weight: bold">Address:</span>
                        ${details.address1} &nbsp;
                        ${details.address2} ,
                        ${details.city} ,
                        ${details.pincode}
                    </p>
                    <p>
                        <span style="font-weight: bold">Status:</span>
                        <span style="color: #800000">
                            In-Process

                        </span>
                    </p>
                </section>

            </div>
        </div>
        <br />
        <br />

        <p> For more details <a href=${
          process.env.TrackingLink
        }>click here</a> </p>
        <h4> Stay Healthy,</h4>
        <h4> Team WellBe!</h4>
    </div>

</body>

</html>`;

      const msg = {
        from: "awanishsampleprojects@gmail.com",
        to: `${details.email}`,
        subject: `Booking Confirmation for ${CartItem[0]?.name}`,
        html: HTMLTemplate,
      };
      nodemailer
        .createTransport({
          service: "gmail",
          auth: {
            user: process.env.EmailId,
            pass: process.env.EmailPassKey,
          },
          port: 465,
          host: `smtp.gmail.com`,
        })
        .sendMail(msg, (err) => {
          if (err) {
            console.log("Error is", err);
          } else {
            console.log("Email sent");
          }
        });
    }
  });
});

router.post("/bookingsbycontact", (req, res) => {
  Booking.find({ contactnumber: req.body.contactnumber }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/bookingsbyid", (req, res) => {
  Booking.find({ _id: req.body.id }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/allbookings", (req, res) => {
  const selectedDate = req.body.SelectedDate;

  const modifiedDate = (
    selectedDate.slice(0, 3) +
    ", " +
    selectedDate.slice(3).trim()
  ).trim();

  const formattedDate = moment(modifiedDate, "ddd, MMM DD YYYY").format(
    "ddd, DD MMM YYYY"
  );

  Booking.find({ date: formattedDate }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/allbookingsmonth", (req, res) => {
  const selectedDate = req.body.SelectedDate;

  const trimmedDate = selectedDate.substring(4, 7);

  Booking.find(
    { date: { $regex: new RegExp(`, \\d{2} ${trimmedDate} 2023`) } },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    }
  );
});

router.post("/allbookingsyear", (req, res) => {
  const selectedDate = req.body.SelectedDate;

  Booking.find(
    {
      date: {
        $regex: new RegExp(`\\b${selectedDate}\\b`),
      },
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

router.post("/addreport", (req, res) => {
  Booking.findByIdAndUpdate(
    { _id: req.body.reportdata.id },
    {
      reporturl: req.body.reportdata.reporturl,
      isdelivered: "true",
      isSampleCollected: true,
      status: true,
    },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);

        const HTMLTemplate = `<!DOCTYPE html>
        <html>
        
        <head>
            <title>Booking Assigned</title>
            <style>

            .my-button {
              display: inline-block;
              padding: 12px 24px;
              font-size: 16px;
              font-weight: bold;
              text-align: center;
              text-decoration: none;
              background-color: #4CAF50;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            
            .my-button:hover {
              background-color: #45a049;
            }

            
                #BackGround-3 {
        
                    /* Created with https://www.css-gradient.com */
                    /* Created with https://www.css-gradient.com */
                    background: #2FD7E1;
                    background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                    height: 200px;
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                }
        
                .grid-1 {
                    display: grid;
                    grid-template-columns: auto auto;
                }
        
                #upper-half {
        
                    width: 80%;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
        
                }
        
        
                #BackGround-2 {
        
                    background: #FAF9F6;
        
                    height: 500px;
                    width: 80%;
                    height: fit-content;
                    margin-top: -10%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                }
        
        
         @media screen and (max-width:800px) {
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 120px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: 450px;
                        width: 70%;
                        margin-top: -10%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
        
                    .grid-1 {
                        display: block;
                        grid-template-columns: auto;
                    }
        
                }
        
        
        
                @media screen and (max-width:500px) {
        
                    .grid-1 {
                        display: grid;
                        grid-template-columns: auto;
                    }
        
        
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 140px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: auto;
                        width: 90%;
                        margin-top: -20%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
                }
            </style>
        </head>
        
        <body>
        
            <div>
                <h3> Hello ${
                  docs.name
                }! Your  booking is now complete and report has been uploaded. </h3>
                
                <p>Here are some quick details </p>
                <div id="BackGround-2" style="margin-top:'-10%'" >
                    <br />
                    <div>
                        <div id='upper-half'>
                            <h2>
                                ${docs.name} &nbsp; &nbsp;  ${docs.lname}
                            </h2>
                            <h4>
                                Age: ${docs.age} &nbsp; &nbsp; Gender: ${
          docs.gender
        }
                            </h4>
                            <h4>
                            ${docs.date} &nbsp; &nbsp; ${docs.time.substr(0, 5)}
                            </h4>
                        </div>
                        <hr style="box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px" />
                        <section style="text-align: left; margin-left: 10%; margin-right: auto" class="grid-1">
                           
                            <p>
                                <span style="font-weight: bold">Total Amount:</span>
                                ${docs.orderamount} 
                            </p>
                            <p>
                                <span style="font-weight: bold">Booked Tests:</span>
                                ${docs.bookedtests
                                  .map(
                                    (i) =>
                                      `<p>${i.name} &nbsp; &nbsp; &nbsp; ₹ ${i.price}</p>`
                                  )
                                  .join("")}
                            </p>
                         
                            </p>
                            <p>
                                <span style="font-weight: bold">Contact Details:</span>
                                ${docs.contactnumber}
                                <br />
                                <br />
                                <span style="font-weight: bold">Email:</span>
                                ${docs.email}
                            </p>
                            <p>
                                <span style="font-weight: bold">Address:</span>
                                ${docs.shippingaddress.address1} &nbsp;
                                ${docs.shippingaddress.address2} ,
                                ${docs.shippingaddress.city} ,
                                ${docs.shippingaddress.pincode}
                            </p>
                            <p>
                                <span style="font-weight: bold">Status:</span>
                                <span style="color: #008000">
                                    Completed
        
                                </span>
                            </p>
                        </section>
        <hr/>
        <a href = '${
          req.body.reportdata.reporturl
        }' style="text-decoration:none;" >
        <button class="my-button">View Report</button>
        </a>
                    </div>
                </div>
                <br />
                <br />
        
                <p> For more details <a href=${
                  process.env.TrackingLink
                }>click here</a> </p>
                <h4> Stay Healthy,</h4>
                <h4> Team WellBe!</h4>
            </div>
        
        </body>
        
        </html>`;
        const msg = {
          from: "awanishsampleprojects@gmail.com",
          to: `${docs.email}`,
          subject: `Booking Completed ${docs.bookedtests[0].name} `,
          html: HTMLTemplate,
        };
        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: process.env.EmailId,
              pass: process.env.EmailPassKey,
            },
            port: 465,
            host: `smtp.gmail.com`,
          })
          .sendMail(msg, (err) => {
            if (err) {
              console.log("Error is", err);
            } else {
              console.log("Email sent for Completion");
            }
          });
      }
    }
  );
});

router.post("/updatecollectedby", (req, res) => {
  const { details } = req.body;

  Booking.findByIdAndUpdate(
    { _id: req.body.details.id },
    {
      collectedby: req.body.details.collectedby,
      employeeId: req.body.details.employeeId,
    },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);

        const HTMLTemplate = `<!DOCTYPE html>
        <html>
        
        <head>
            <title>Booking Assigned</title>
            <style>
                #BackGround-3 {
        
                    /* Created with https://www.css-gradient.com */
                    /* Created with https://www.css-gradient.com */
                    background: #2FD7E1;
                    background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                    height: 200px;
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                }
        
                .grid-1 {
                    display: grid;
                    grid-template-columns: auto auto;
                }
        
                #upper-half {
        
                    width: 80%;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
        
                }
        
        
                #BackGround-2 {
        
                    background: #FAF9F6;
        
                    height: 500px;
                    width: 80%;
                    height: fit-content;
                    margin-top: -10%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                }
        
        
         @media screen and (max-width:800px) {
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 120px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: 450px;
                        width: 70%;
                        margin-top: -10%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
        
                    .grid-1 {
                        display: block;
                        grid-template-columns: auto;
                    }
        
                }
        
        
        
                @media screen and (max-width:500px) {
        
                    .grid-1 {
                        display: grid;
                        grid-template-columns: auto;
                    }
        
        
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 140px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: auto;
                        width: 90%;
                        margin-top: -20%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
                }
            </style>
        </head>
        
        <body>
        
            <div>
                <h3> A New Booking #${
                  details.id
                } has been assigned to you! Check  Your profile </h3>
                <p>Here are some quick details </p>
                <div id="BackGround-2" style="margin-top:'-10%'" >
                    <br />
                    <div>
                        <div id='upper-half'>
                            <h2>
                                ${docs.name} &nbsp; &nbsp;  ${docs.lname}
                            </h2>
                            <h4>
                                Age: ${docs.age} &nbsp; &nbsp; Gender: ${
          docs.gender
        }
                            </h4>
                            <h4>
                            ${docs.date} &nbsp; &nbsp; ${docs.time.substr(0, 5)}
                            </h4>
                        </div>
                        <hr style="box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px" />
                        <section style="text-align: left; margin-left: 10%; margin-right: auto" class="grid-1">
                           
                            <p>
                                <span style="font-weight: bold">Total Amount:</span>
                                ${docs.orderamount} 
                            </p>
                            <p>
                                <span style="font-weight: bold">Booked Tests:</span>
                                ${docs.bookedtests
                                  .map(
                                    (i) =>
                                      `<p>${i.name} &nbsp; &nbsp; &nbsp; ₹ ${i.price}</p>`
                                  )
                                  .join("")}
                            </p>
                         
                            </p>
                            <p>
                                <span style="font-weight: bold">Contact Details:</span>
                                ${docs.contactnumber}
                                <br />
                                <br />
                                <span style="font-weight: bold">Email:</span>
                                ${docs.email}
                            </p>
                            <p>
                                <span style="font-weight: bold">Address:</span>
                                ${docs.shippingaddress.address1} &nbsp;
                                ${docs.shippingaddress.address2} ,
                                ${docs.shippingaddress.city} ,
                                ${docs.shippingaddress.pincode}
                            </p>
                            <p>
                                <span style="font-weight: bold">Status:</span>
                                <span style="color: #800000">
                                    In-Process
        
                                </span>
                            </p>
                        </section>
        
                    </div>
                </div>
                <br />
                <br />
        
                <p> For more details <a href='/tracking'>click here</a> </p>
                <h4> Stay Healthy,</h4>
                <h4> Team WellBe!</h4>
            </div>
        
        </body>
        
        </html>`;
        const msg = {
          from: "awanishsampleprojects@gmail.com",
          to: `${details.email}`,
          subject: `Assigned New Test #${details.id}`,
          html: HTMLTemplate,
        };
        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: process.env.EmailId,
              pass: process.env.EmailPassKey,
            },
            port: 465,
            host: `smtp.gmail.com`,
          })
          .sendMail(msg, (err) => {
            if (err) {
              console.log("Error is", err);
            } else {
              console.log("Email sent to for Completetion");
            }
          });
      }
    }
  );
});

router.post("/samplecollection", (req, res) => {
  Booking.findByIdAndUpdate(
    { _id: req.body.details.id },
    {
      isSampleCollected: req.body.details.isSampleCollected,
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

router.post("/cancelbooking", (req, res) => {
  Booking.findByIdAndUpdate(
    { _id: req.body.details.id },
    {
      isdelivered: "Cancelled",
    },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);

        const HTMLTemplate = `<!DOCTYPE html>
        <html>
        
        <head>
            <title>Booking Assigned</title>
            <style>
                #BackGround-3 {
        
                    /* Created with https://www.css-gradient.com */
                    /* Created with https://www.css-gradient.com */
                    background: #2FD7E1;
                    background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                    background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                    height: 200px;
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                }
        
                .grid-1 {
                    display: grid;
                    grid-template-columns: auto auto;
                }
        
                #upper-half {
        
                    width: 80%;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
        
                }
        
        
                #BackGround-2 {
        
                    background: #FAF9F6;
        
                    height: 500px;
                    width: 80%;
                    height: fit-content;
                    margin-top: -10%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                }
        
        
         @media screen and (max-width:800px) {
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 120px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: 450px;
                        width: 70%;
                        margin-top: -10%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
        
                    .grid-1 {
                        display: block;
                        grid-template-columns: auto;
                    }
        
                }
        
        
        
                @media screen and (max-width:500px) {
        
                    .grid-1 {
                        display: grid;
                        grid-template-columns: auto;
                    }
        
        
                    #BackGround-3 {
        
                        /* Created with https://www.css-gradient.com */
                        background: #2FD7E1;
                        background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                        background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                        height: 140px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        
                    }
        
        
                    #BackGround-2 {
        
                        background: #FAF9F6;
        
                        height: auto;
                        width: 90%;
                        margin-top: -20%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 15px;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
        
                    }
                }
            </style>
        </head>
        
        <body>
        
            <div>
                <h3> Hello ${docs.name}! Your booking has been cancelled! </h3>
                <p>Hope to Serve you again </p>
                <p>Here are some quick details </p>
                <div id="BackGround-2" style="margin-top:'-10%'" >
                    <br />
                    <div>
                        <div id='upper-half'>
                            <h2>
                                ${docs.name} &nbsp; &nbsp;  ${docs.lname}
                            </h2>
                            <h4>
                                Age: ${docs.age} &nbsp; &nbsp; Gender: ${
          docs.gender
        }
                            </h4>
                            <h4>
                            ${docs.date} &nbsp; &nbsp; ${docs.time.substr(0, 5)}
                            </h4>
                        </div>
                        <hr style="box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px" />
                        <section style="text-align: left; margin-left: 10%; margin-right: auto" class="grid-1">
                           
                            <p>
                                <span style="font-weight: bold">Total Amount:</span>
                                ${docs.orderamount} 
                            </p>
                            <p>
                                <span style="font-weight: bold">Booked Tests:</span>
                                ${docs.bookedtests
                                  .map(
                                    (i) =>
                                      `<p>${i.name} &nbsp; &nbsp; &nbsp; ₹ ${i.price}</p>`
                                  )
                                  .join("")}
                            </p>
                         
                            </p>
                            <p>
                                <span style="font-weight: bold">Contact Details:</span>
                                ${docs.contactnumber}
                                <br />
                                <br />
                                <span style="font-weight: bold">Email:</span>
                                ${docs.email}
                            </p>
                            <p>
                                <span style="font-weight: bold">Address:</span>
                                ${docs.shippingaddress.address1} &nbsp;
                                ${docs.shippingaddress.address2} ,
                                ${docs.shippingaddress.city} ,
                                ${docs.shippingaddress.pincode}
                            </p>
                            <p>
                                <span style="font-weight: bold">Status:</span>
                                <span style="color: #800000">
                                    Cancelled
        
                                </span>
                            </p>
                        </section>
        
                    </div>
                </div>
                <br />
                <br />
        
                <p> For more details <a href=${
                  process.env.TrackingLink
                }>click here</a> </p>
                <h4> Stay Healthy,</h4>
                <h4> Team WellBe!</h4>
            </div>
        
        </body>
        
        </html>`;
        const msg = {
          from: "awanishsampleprojects@gmail.com",
          to: `${docs.email}`,
          subject: `Cancellation: ${docs.bookedtests[0].name} `,
          html: HTMLTemplate,
        };
        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: process.env.EmailId,
              pass: process.env.EmailPassKey,
            },
            port: 465,
            host: `smtp.gmail.com`,
          })
          .sendMail(msg, (err) => {
            if (err) {
              console.log("Error is", err);
            } else {
              console.log("Email sent for Cancellation");
            }
          });
      }
    }
  );
});

router.post("/ismoneycollected", (req, res) => {
  Booking.findByIdAndUpdate(
    { _id: req.body.details.id },
    {
      isMoneyCollected: req.body.details.isMoneyCollected,
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

router.get("/bydatebookings", (req, res) => {
  const selectedDate = moment(req.query.date).startOf("day"); // Assuming the date is passed as a query parameter named 'date'

  Booking.find({ date: selectedDate }, (err, bookings) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }

    res.send(bookings);
  });
});

router.post("/allbookingsofemployee", (req, res) => {
  const selectedDate = req.body.SelectedDate;
  const empid = req.body.empid;

  const modifiedDate = (
    selectedDate.slice(0, 3) +
    ", " +
    selectedDate.slice(3).trim()
  ).trim();

  const formattedDate = moment(modifiedDate, "ddd, MMM DD YYYY").format(
    "ddd, DD MMM YYYY"
  );

  Booking.find(
    { date: formattedDate, employeeId: req.body.empid },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send(docs);
      }
    }
  );
});

router.post("/sendallmail", (req, res) => {
  const uniqueEmails = new Set();
  const { emailBody } = req.body;
  Booking.find(
    {},

    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send({ message: "Mail Sent" });

        docs.map((i) => {
          uniqueEmails.add(i.email);
        });

        const emailArray = Array.from(uniqueEmails);
        const HTMLTemplate = `<!DOCTYPE html>
        <html>
        
        <head>
            <title>${req.body.title}</title>
    
        </head>
        
        <body>
        
            <div>
            ${emailBody
              .map(
                (i) =>
                  `
                <div style="width:80%; margin-left: auto; margin-right: auto;" >
                <h3 style="text-align: justify;" > ${i.heading} </h3>
                <img src=${i.image} alt="Image" style="display: block; margin: 0 auto; width:60%"/>
                
                <p style="color: #707070;" >
                ${i.body}
                </p>
                  </div>`
              )
              .join("")}
            </div>
        
        </body>
        
        </html>`;

        emailArray.map((i) => {
          const msg = {
            from: "awanishsampleprojects@gmail.com",
            to: `${i}`,
            subject: `${req.body.title}`,
            html: HTMLTemplate,
          };
          nodemailer
            .createTransport({
              service: "gmail",
              auth: {
                user: process.env.EmailId,
                pass: process.env.EmailPassKey,
              },
              port: 465,
              host: `smtp.gmail.com`,
            })
            .sendMail(msg, (err) => {
              if (err) {
                console.log("Error is", err);
              } else {
                console.log("Email sent to", i);
              }
            });
        });
      }
    }
  );
});

router.post("/sendcategorymail", (req, res) => {
  const uniqueEmails = new Set();
  const { emailBody, category } = req.body;

  Booking.find(
    { "bookedtests.category": category },

    (err, docs) => {
      if (err) {
        console.log("Error is", err);
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        res.send({ message: "Mail Sent" });

        docs.map((i) => {
          uniqueEmails.add(i.email);
        });

        const emailArray = Array.from(uniqueEmails);
        const HTMLTemplate = `<!DOCTYPE html>
        <html>
        
        <head>
            <title>${req.body.title}</title>
        
        </head>
        
        <body>
        
            <div>
            ${emailBody
              .map(
                (i) =>
                  `
                <div style="width:80%; margin-left: auto; margin-right: auto;" >
                <h3 style="text-align: justify;" > ${i.heading} </h3>
                <img src=${i.image} alt="Image" style="display: block; margin: 0 auto; width:60%"/>
                
                <p style="color: #707070;" >
                ${i.body}
                </p>
                  </div>`
              )
              .join("")}
            </div>
        
        </body>
        
        </html>`;

        emailArray.map((i) => {
          const msg = {
            from: "awanishsampleprojects@gmail.com",
            to: `${i}`,
            subject: `${req.body.title}`,
            html: HTMLTemplate,
          };
          nodemailer
            .createTransport({
              service: "gmail",
              auth: {
                user: process.env.EmailId,
                pass: process.env.EmailPassKey,
              },
              port: 465,
              host: `smtp.gmail.com`,
            })
            .sendMail(msg, (err) => {
              if (err) {
                console.log("Error is", err);
              } else {
                console.log("Email sent to", i);
              }
            });
        });
      }
    }
  );
});

module.exports = router;
