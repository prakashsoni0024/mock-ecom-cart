import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  qty: Number,
});

export default mongoose.model("Cart", cartSchema);
