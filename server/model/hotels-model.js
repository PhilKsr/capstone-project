import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
});
const Hotel = mongoose.model("hotels", hotelSchema);

export default Hotel;
