const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    contactDetails:{
        type: String,
      require,
    },
    message:{
        type: String,
        require,
    }

   
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("ContactModel", ContactSchema);

module.exports = ContactModel;
