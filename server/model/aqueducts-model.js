import mongoose from "mongoose";

const aqueductsSchema = new mongoose.Schema({
  type: String,
});
const Aqueduct = mongoose.model("aqueducts", aqueductsSchema);

export default Aqueduct;
