import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Burgers", "Drinks", "Desserts"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  dietary: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
