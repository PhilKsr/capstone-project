import mongoose from "mongoose";

const themeParkSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
  geometry: {
    type: { type: String },
    coordinates: { type: Array, required: true },
  },
});
const ThemePark = mongoose.model("theme_parks", themeParkSchema);

export default ThemePark;
