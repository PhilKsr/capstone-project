import mongoose from "mongoose";

const ruinSchema = new mongoose.Schema({
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
const Ruin = mongoose.model("ruins", ruinSchema);

export default Ruin;
