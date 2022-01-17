import mongoose from "mongoose";

const castleSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const Castle = mongoose.model("castles", castleSchema);

export default Castle;
