const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },

    phoneNumber: {
      type: Number,
      require,
    },

    isindividual : {
      type: Boolean,
      default:false,
      require,
    },

    value: {
      type: Number,
      require,
    },

    isValid: {
      type: Boolean,
      require,
    },

    description: { type: String, require },

    code: {
      type: String,
      require,
    },
    minimumAmount: {
      type: Number,
      require,
    },
    category: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const CouponModel = mongoose.model("CouponModel", CouponSchema);

module.exports = CouponModel;
