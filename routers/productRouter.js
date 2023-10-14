import expressAsyncHandler from 'express-async-handler';
import * as productController from '../controllers/productController.js';
import express from 'express';
const productRouter = express.Router();


productRouter.get("/list", expressAsyncHandler(productController.productList));
productRouter.post("/create", expressAsyncHandler(productController.productCreate));
productRouter.get("/details/:id", expressAsyncHandler(productController.productDetails));
productRouter.put("/update/:id", expressAsyncHandler(productController.productUpdate));
productRouter.delete("/delete/:id", expressAsyncHandler(productController.productDelete));


export default productRouter;