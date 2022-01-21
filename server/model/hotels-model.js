import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const Hotel = mongoose.model("hotels", hotelSchema);

export default Hotel;
