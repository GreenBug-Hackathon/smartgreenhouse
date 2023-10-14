import expressAsyncHandler from 'express-async-handler';
import * as userController from '../controllers/userController.js';
import {isAuth} from "../middleware/auth.js";
import express from 'express';
const userRouter = express.Router();

userRouter.put("/update", isAuth,  expressAsyncHandler(userController.updateProfile));
userRouter.get("/details", isAuth, expressAsyncHandler(userController.detailsUser));


export default userRouter;