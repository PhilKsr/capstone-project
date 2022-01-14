import mongoose from "mongoose";

const campSitesSchema = new mongoose.Schema({
  type: String,
});
const CampSite = mongoose.model("camp_sites", campSitesSchema);

export default CampSite;
