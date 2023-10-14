import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    discount: { type: Number, default: 0, required: true },
    discountedPrice: { type: Number, default: 0, required: true },
    image: { type: String, required: true },
    unit: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String },
});

const Product = mongoose.model("Product", productSchema);

export default Product;