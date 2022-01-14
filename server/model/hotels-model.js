import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  type: String,
});
const Hotel = mongoose.model("hotels", hotelSchema);

export default Hotel;
