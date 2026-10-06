import mongoose from "mongoose";
import { env } from "../service/env.service.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  },
  {
    timestamp: true,
  },
);

export const userModel = mongoose.model("User", userSchema);
