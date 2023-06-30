const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const wbm = require("wbm");

const bookingroute = require("./routes/bookings");
const testroute = require("./routes/tests");
const adminroute = require("./routes/admin");
const EmployeeRoute = require("./routes/employees");
const CouponRoute = require("./routes/couponRoutes");
const BlogRoute = require("./routes/blogsRoute");
const ContactRoute = require("./routes/contactRoute");

app.use(bodyparser.json());
const path = require("path");
let dbconnection = require("./auth");


app.use("/api/bookings/", bookingroute);
app.use("/api/tests/", testroute);
app.use("/api/admin", adminroute);
app.use("/api/employees/", EmployeeRoute);
app.use("/api/coupons/", CouponRoute);
app.use("/api/blogs/", BlogRoute);
app.use("/api/contact/", ContactRoute);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




const port = process.env.PORT || 9901;

app.listen(port, () => {
  console.log("Server started of Well Be");
});
