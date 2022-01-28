import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String },
  },
  geometry: {
    type: { type: String },
    coordinates: { type: Array, required: true },
  },
});
const Fuel = mongoose.model("fuels", fuelSchema);

export default Fuel;
