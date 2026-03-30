import express, { type ErrorRequestHandler } from "express";
import userRoutes from "./routes/user.routes.js";
import { ErrorHandler } from "./middlewares/ResponseHandlers.js";

const app = express();



app.use(express.json());


app.use("/api/v1/users", userRoutes);


app.use(ErrorHandler as unknown as ErrorRequestHandler)
export default app;