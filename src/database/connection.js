import mongoose from "mongoose";
import { env } from "../service/env.service.js";

export const databaseConnection = () => {
  mongoose
    .connect(env.DATABASE_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
