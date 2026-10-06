import { Router } from "express";
import { signupR, loginR } from "./auth.service.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    await signupR(req, res);
  } catch (error) {
    console.log(error);
    res.json({ message: "internal sever error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    await loginR(req, res);
  } catch (error) {
    console.log(error);
    res.json({ message: "internal sever error" });
  }
});

export default router;
