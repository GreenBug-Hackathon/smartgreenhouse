import express from "express";
import connectDB from "./config/db.js";
import { routes } from "./routes.js";
import cors from "cors";
// import path from "path";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT =  6000;

connectDB();

// app.use(logger);
// app.use(cors(corsOptions));

app.use(cookieParser());

// app.use(express.static(path.join(path.resolve(), "public")));
app.use("/api/auth", routes.authRouter);
// app.use("/api/category", routes.categoryRouter);
// app.use("/api/product", routes.productRouter);
// app.use("/api/users", routes.userRouter);
// app.use("/api/statistics", routes.statisticsRouter);
// app.use("/api/order", routes.orderRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

