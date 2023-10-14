import expressAsyncHandler from 'express-async-handler';
import * as categoryController from '../controllers/categoryController.js';
import express from 'express';
const categoryRouter = express.Router();


categoryRouter.get("/list", expressAsyncHandler(categoryController.categoryList));
categoryRouter.post("/create", expressAsyncHandler(categoryController.categoryCreate));
categoryRouter.get("/details/:id", expressAsyncHandler(categoryController.categoryDetails));
categoryRouter.put("/update/:id", expressAsyncHandler(categoryController.categoryUpdate));
categoryRouter.delete("/delete/:id", expressAsyncHandler(categoryController.categoryDelete));


export default categoryRouter;