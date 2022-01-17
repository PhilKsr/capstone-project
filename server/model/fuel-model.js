import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema({
  type: String,
});
const Fuel = mongoose.model("fuels", fuelSchema);

export default Fuel;
