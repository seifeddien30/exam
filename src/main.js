import express from "express";
import { env } from "./service/env.service.js";
import { databaseConnection } from "./database/connection.js";
import authRouter from "./module/auth/auth.controller.js";
import bookingRouter from "./module/booking/booking.controller.js";
databaseConnection();
const app = express();

app.use(express.json());
app.use("/api", authRouter);
app.use("/api", bookingRouter);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
