const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require,
    },
    lname: {
      type: String,
      trim: true,
      require,
    },
    email: {
      type: String,
      trim: true,
      require,
    },
    contactnumber: {
      type: Number,
      trim: true,
      require,
    },
    collectedby: {
      type: String,
      require,
    },
    employeeId: {
      type: String,
      require,
    },
    gender: {
      type: String,
      require,
    },
    age: { type: String, require },
    bookedtests: [
      {
        name: { type: String, require },

        _id: { type: String, require },
        price: { type: Number, require },
        profit: { type: Number, require },
        category: { type: String, require },
      },
    ],
    shippingaddress: {
      address1: { type: String, require },
      address2: { type: String, require },
      city: { type: String, require },
      pincode: { type: Number, require },
    },

    orderamount: { type: Number, require },

    isdelivered: { type: String, require },
    isSampleCollected: { type: Boolean, require },
    reporturl: {
      type: String,
      require,
    },
    CouponApplied: { type: String, require, default: "No Coupon" },
    status: { type: Boolean, require },
    date: { type: String, require },
    time: { type: String, require },
    isMoneyCollected: { type: Boolean, require, default: false },
    
  },
  { timestamps: true }
);

const BookingModel = mongoose.model("BookingModel", BookingSchema);

module.exports = BookingModel;
