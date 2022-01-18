import mongoose from "mongoose";

const themeParkSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const ThemePark = mongoose.model("theme_parks", themeParkSchema);

export default ThemePark;
