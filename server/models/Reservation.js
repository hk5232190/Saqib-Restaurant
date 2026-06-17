import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Stored as ISO string YYYY-MM-DD
    required: true,
  },
  time: {
    type: String, // Stored as HH:mm
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 20,
  },
  status: {
    type: String,
    enum: ["confirmed", "cancelled", "completed"],
    default: "confirmed",
  }
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
