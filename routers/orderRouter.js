import expressAsyncHandler from 'express-async-handler';
import * as orderController from '../controllers/orderController.js';
import express from 'express';
const orderRouter = express.Router();


orderRouter.get("/list", expressAsyncHandler(orderController.orderList));
orderRouter.post("/create", expressAsyncHandler(orderController.orderCreate));
// productRouter.get("/details/:id", expressAsyncHandler(productController.productDetails));
// productRouter.put("/update/:id", expressAsyncHandler(productController.productUpdate));
// productRouter.delete("/delete/:id", expressAsyncHandler(productController.productDelete));


export default orderRouter;