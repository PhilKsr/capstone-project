import mongoose from "mongoose";

const caravanSitesSchema = new mongoose.Schema({
  type: String,
});
const CaravanSite = mongoose.model("caravan_sites", caravanSitesSchema);

export default CaravanSite;
