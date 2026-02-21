import mongoose, { Schema } from "mongoose";

// Define image Schema
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    // To determine if this is the main image to display
    isMain: {
      type: Boolean,
      default: false,
    },
  },
});

// Define Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["skincare", "makeup", "fragrance", "haircare", "nail care"],
      required: true,
    },
    skinType: {
      type: String,
      enum: ["oily", "dry", "combination", "sensitive", "normal"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [imageSchema],
    // reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
