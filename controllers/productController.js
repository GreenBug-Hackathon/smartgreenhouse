import bcrypt from "bcryptjs";
import Product from "../models/productModel.js";

export const productList = async (req, res) => {
  try {
    // Get all products
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const productCreate = async (req, res) => {
  try {
    const {
      title,
      category,
      price,
      discount,
      discountedPrice,
      image,
      unit,
      description,
      slug,
    } = req.body;

    const product = new Product({
      title,
      category,
      price,
      discount,
      discountedPrice,
      image,
      unit,
      description,
      slug,
    });

    const createdProduct = await product.save();

    res.send(createdProduct);
  } catch (error) {
    console.error("Error during creating product:", error);
    res.status(500).send({ message: "Error during creating product" });
  }
};

export const productDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const productUpdate = async (req, res) => {
  try {
    const { id } = req.params; // Change this to use 'id' instead of '_id'
    const { title, price, unit, description, image, 
category } = req.body;

    // Find product by id
    const product = await Product.findById(id);

    if (!product) {
      // Handle the case where the product is not found
      return res.status(404).send({ message: "Product not found" });
    }

    // Update product data
    product.title = title;
    product.unit = unit;
    product.price = price;
    product.description = description;
    product.image = image;
    product.category = category;

    const updatedProduct = await product.save();

    res.send(updatedProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const productDelete = async (req, res) => {
  try {
    // Delete product by id
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne(); // Use deleteOne to remove the product
      res.send({ message: "Product Deleted" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};
