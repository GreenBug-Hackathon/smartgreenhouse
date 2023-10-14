import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        _id: { type: String },
        qty: { type: Number },
        image: { type: String },
        price: { type: Number },
        title: { type: String },
        unit: { type: String },
        slug: { type: String },
        category: { type: String },
      },
    ],
    totalPrice: { type: Number, required: true },
    customer: {
      name: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;
