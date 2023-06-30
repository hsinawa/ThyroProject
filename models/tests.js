const mongoose = require("mongoose");

const TestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    price: {
      type: Number,
      require,
    },
    category: {
      type: String,
      require,
    },
    isPackage: {
      type: String,
      require,
    },
    about: {
      type: String,
      require,
    },
    description: {
      type: String,
      require,
    },
    reporttime: {
      type: String,
      require,
    },
    requirements: {
      type: String,
      require,
    },
    availability: {
      type: Boolean,
      require,
    },
    profit:{  type: Number,
      require, },

    imageurl: {
      type: String,
      require,
    },
    duration: {
      type: String,
      require,
    },
    testsincluded: [
      {
        type: String,
        require,
      },
    ],
    isValid: {
      type: Boolean,
      default: true,
      require,
    },
    CouponApplied: { type: String, require },
  },
  { timestamps: true }
);

const TestModel = mongoose.model("TestModel", TestSchema);

module.exports = TestModel;
