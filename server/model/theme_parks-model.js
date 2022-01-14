import mongoose from "mongoose";

const themeParkSchema = new mongoose.Schema({
  type: String,
});
const ThemePark = mongoose.model("theme_parks", themeParkSchema);

export default ThemePark;
