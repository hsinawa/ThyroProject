const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
      trim: true,
    },
    lname: {
      type: String,
      require,
      trim: true,
    },
    password :{
      type: String,
      require,
      trim: true,
    },
    image: {
      type: String,
      require,
      trim: true,
    },
    email: {
      type: String,
      require,
      trim: true,
    },
    contactnumber: {
      type: Number,
      require,
      trim: true,
    },
    totalTests: {
      type: Number,
      require,
    },
    image: {
      type: String,
      require,
    },
    about: {
      type: String,
      require,
    },
    hobbies: [
      {
        type: String,
        require,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);

module.exports = EmployeeModel;
