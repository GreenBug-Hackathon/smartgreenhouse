import Category from "../models/categoryModel.js";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

export const generalStatistics = async (req, res) => {
  try {
    const totalProduct = await Product.countDocuments({});
    const totalPendingOrders = await Order.countDocuments({})
      .where("status")
      .equals("Pending");

    const totalDeliveredOrders = await Order.countDocuments({})
      .where("status")
      .equals("Delivered");

    const totalCancelledOrders = await Order.countDocuments({})
      .where("status")
      .equals("Cancelled");

    const totalWhatsappOrders = await Order.countDocuments({})
      .where("status")
      .equals("Cancelled");

    const totalCategories = await Category.countDocuments({});

    res.send({
      totalProduct,
      totalPendingOrders,
      totalDeliveredOrders,
      totalCancelledOrders,
      totalWhatsappOrders,
      totalCategories,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during login" });
  }
};
