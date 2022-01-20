import mongoose from "mongoose";

const themeParkSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const ThemePark = mongoose.model("theme_parks", themeParkSchema);

export default ThemePark;
