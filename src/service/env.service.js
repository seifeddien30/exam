import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./src/.env") });
const port = process.env.PORT;
export const env = {
  PORT: port,
  DATABASE_URL: process.env.DATABASE_URL,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
};
