const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      require,
    },

    IdOfPerson: {
      type: String,
      require,
    },

    instagramLink: {
      type: String,
      require,
      trim:true
    },

    facebookLink: {
      type: String,
      trim:true,
      require,
    },

    personalSite: {
      type: String,
      require,
      trim:true
    },

    twitterLink: {
      type: String,
      require,
      trim:true
    },
    linkedinLink: {
      type: String,
      require,
      trim:true
    },

    name: {
      type: String,
      require,
    },

    email: {
      type: String,
      require,
    },
    category: {
      type: String,
      default: "All",
      require,
    },
    likDetails: [
      {
        likeCount: {
          type: Number,
          default: 0,
          require,
        },
        name: {
          type: String,
          default: "",
          require,
        },
        email: {
          type: String,
          default: "",
          require,
        },
      },
    ],
    totalViews: {
      type: Number,
      default: 0,
      require,
    },
    paragraphs: [
      {
        subheadings: {
          type: String,
          require,
        },

        details: {
          type: String,
          require,
        },
      },
    ],

    keypoints: [
      {
        point: {
          type: String,
          require,
        },
      },
    ],

    isVisible: {
      type: Boolean,
      require,
      default: false,
    },

    image: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("BlogModel", BlogSchema);

module.exports = BlogModel;
