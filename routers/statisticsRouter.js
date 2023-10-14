import expressAsyncHandler from 'express-async-handler';
import * as statisticsController from '../controllers/statisticsController.js';
import express from 'express';
const statisticsRouter = express.Router();

statisticsRouter.get("/general", expressAsyncHandler(statisticsController.generalStatistics));


export default statisticsRouter;