import mongoose from "mongoose";

const castleSchema = new mongoose.Schema({
  type: String,
});
const Castle = mongoose.model("castles", castleSchema);

export default Castle;
