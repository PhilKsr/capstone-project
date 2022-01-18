import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    fuel: { type: String, required: true },
  },
});
const Fuel = mongoose.model("fuels", fuelSchema);

export default Fuel;
