const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("strictQuery", false);

var leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var leaders = mongoose.model("leaders", leaderSchema);
module.exports = leaders;
