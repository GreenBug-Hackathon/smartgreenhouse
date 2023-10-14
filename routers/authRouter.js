import expressAsyncHandler from 'express-async-handler';
import * as authController from '../controllers/authController.js';
import express from 'express';
const authRouter = express.Router();


authRouter.post("/login", expressAsyncHandler(authController.login));
authRouter.post("/register", expressAsyncHandler(authController.register));


export default authRouter;