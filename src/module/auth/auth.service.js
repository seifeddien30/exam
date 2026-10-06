import { userModel } from "../../model/user.model.js";
import { hashText, compareText } from "../../common/encryption.js";
import { env } from "../../service/env.service.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const signupR = async (req, res) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = await hashText(password, env.SALT_ROUNDS);
  const existedUser = await userModel.findOne({ email });
  if (existedUser) {
    return res.json({ message: "user already exist" });
  } else {
    const newUser = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    return res.json({ message: "user created successfully", user: newUser });
  }
};

export const loginR = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.json({ message: "invalid email or password" });
  } else {
    const isMatch = await compareText(password, user.password);
    if (!isMatch) {
      return res.json({ message: "invalid email or password" });
    }
    const loginToken = jwt.sign({ id: user._id }, env.JWT_SECRET, {
      expiresIn: "30minutes",
    });
    return res.json({ message: "login successful", token: loginToken });
  }
};
