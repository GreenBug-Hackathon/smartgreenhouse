import Order from "../models/orderModel.js";
export const orderList = async (req, res) => {
  try {
    // Get all orders
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const orderCreate = async (req, res) => {
  try {
    console.log(req.body); 
    if (req.body.order.orderItems?.length === 0) {
      res.status(400).send({ message: "There is no product" });
    } else {
      const order = new Order({
        orderItems: req.body.order.orderItems,
        totalPrice: req.body.order.totalPrice,
        customer: req.body.order.customer,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error });
  }
};

// export const productDetails = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.send(product);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send({ message: "Error" });
//   }
// };

// export const productUpdate = async (req, res) => {
//   try {
//     const { id } = req.params; // Change this to use 'id' instead of '_id'
//     const { title, price, unit, description, image,
// category } = req.body;

//     // Find product by id
//     const product = await Product.findById(id);

//     if (!product) {
//       // Handle the case where the product is not found
//       return res.status(404).send({ message: "Product not found" });
//     }

//     // Update product data
//     product.title = title;
//     product.unit = unit;
//     product.price = price;
//     product.description = description;
//     product.image = image;
//     product.category = category;

//     const updatedProduct = await product.save();

//     res.send(updatedProduct);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send({ message: "Error" });
//   }
// };

// export const productDelete = async (req, res) => {
//   try {
//     // Delete product by id
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       await product.deleteOne(); // Use deleteOne to remove the product
//       res.send({ message: "Product Deleted" });
//     } else {
//       res.status(404).send({ message: "Product Not Found" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send({ message: "Error" });
//   }
// };
