// Import your route handlers
import authRouter from "./routers/authRouter.js"; 
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import statisticsRouter from "./routers/statisticsRouter.js";
// Export the route handlers
export const routes = {
  authRouter,
  categoryRouter,
  productRouter,
  userRouter,
  statisticsRouter,
};
