import { Router } from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "./booking.service.js";
const router = Router();

router.post("/booking", async (req, res) => {
  try {
    await createBooking(req, res);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
});

router.get("/booking", async (req, res) => {
  try {
    await getBookings(req, res);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
});

router.get("/booking/:id", async (req, res) => {
  try {
    await getBookingById(req, res);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
});

router.patch("/booking/:id", async (req, res) => {
  try {
    await updateBooking(req, res);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
});

router.delete("/booking/:id", async (req, res) => {
  try {
    await deleteBooking(req, res);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
});
export default router;
