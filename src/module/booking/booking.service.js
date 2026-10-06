import { BookingModel } from "../../model/booking.model.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
export const createBooking = async (req, res) => {
  const { title, bookingDate } = req.body;
  let userAuth = authMiddleware(req, res, () => {});
  if (!userAuth) {
    return res.json({ message: "access denied" });
  } else {
    if (bookingDate < new Date()) {
      return res.json({ message: "Booking date cannot be in the past" });
    } else {
      const booking = new bookingMode.insertOne({
        title,
        bookingDate,
        userId: userAuth.user.id,
      });
    }
  }

  return res.json({ message: "Booking created successfully" });
};

export const getBookings = async (req, res) => {
  let userAuth = authMiddleware(req, res, () => {});
  if (!userAuth) {
    return res.json({ message: "access denied" });
  } else {
    const bookings = await BookingModel.find({ userId: userAuth.user.id });
    return res.json({ bookings });
  }
};
export const getBookingById = async (req, res) => {
  const { id } = req.params;
  let userAuth = authMiddleware(req, res, () => {});
  if (!userAuth) {
    return res.json({ message: "access denied" });
  } else {
    const booking = await BookingModel.findOne({
      _id: id,
      userId: userAuth.user.id,
    });
    if (!booking) {
      return res.json({ message: "Booking not found" });
    }
    return res.json({ booking });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { title, bookingDate } = req.body;
  let userAuth = authMiddleware(req, res, () => {});
  if (!userAuth) {
    return res.json({ message: "access denied" });
  } else {
    const booking = await BookingModel.findOne({
      _id: id,
      userId: userAuth.user.id,
    });
    if (!booking) {
      return res.json({ message: "Booking not found" });
    }
    if (bookingDate < new Date()) {
      return res.json({ message: "Booking date cannot be in the past" });
    }
    booking.title = title;
    booking.bookingDate = bookingDate;
    await booking.save();
    return res.json({ message: "Booking updated successfully" });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  let userAuth = authMiddleware(req, res, () => {});
  if (!userAuth) {
    return res.json({ message: "access denied" });
  } else {
    const booking = await BookingModel.findOne({
      _id: id,
      userId: userAuth.user.id,
    });
    if (!booking) {
      return res.json({ message: "Booking not found" });
    }
    await BookingModel.deleteOne({ _id: id, userId: userAuth.user.id });
    return res.json({ message: "Booking deleted successfully" });
  }
};
