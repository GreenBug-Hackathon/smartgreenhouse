import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
export const categoryList = async (req, res) => {
  try {
    const categories = await Category.find({});
    const categoriesWithProductCount = [];
    for (const category of categories) {
      // Count the number of products associated with this category
      const productCount = await Product.countDocuments({
        category: category._id,
      });

      // Create a new object with the category details and product count
      const categoryWithCount = {
        _id: category._id,
        title: category.title,
        // Add any other category properties you want to include
        productCount: productCount,
      };

      // Add the modified category to the array
      categoriesWithProductCount.push(categoryWithCount);
    }
    res.send(categoriesWithProductCount);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const categoryCreate = async (req, res) => {
  try {
    const { title } = req.body;

    const category = new Category({
      title,
    });

    const createdCategory = await category.save();

    res.send(createdCategory);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const categoryDetails = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const categoryUpdate = async (req, res) => {
  try {
    const { id } = req.params; // Change this to use 'id' instead of '_id'
    const { title } = req.body;

    // Find category by id
    const category = await Category.findById(id);

    if (!category) {
      // Handle the case where the category is not found
      return res.status(404).send({ message: "Category not found" });
    }
    // Update category data
    category.title = title;

    const updatedCategory = await category.save();

    res.send(updatedCategory);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Error" });
  }
};

export const categoryDelete = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.deleteOne(); // Use deleteOne to remove the category
      res.send({ message: "Category Deleted" });
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
