import express from "express";

const router = express.Router();

let reservations = [];

// GET all reservations
router.get("/", (req, res) => {
  res.json(reservations);
});

// POST a new reservation
router.post("/", (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      date, 
      time, 
      guests, 
      experienceType, 
      vipRoom, 
      floralTheme, 
      chefNotes,
      isEvent,
      eventType,
      eventGuests,
      decorPreferences,
      buffetPreferences
    } = req.body;

    const newReservation = {
      id: Date.now().toString(),
      fullName,
      email,
      date,
      time,
      guests,
      experienceType: experienceType || "standard",
      vipRoom: vipRoom || null,
      floralTheme: floralTheme || null,
      chefNotes: chefNotes || null,
      isEvent: !!isEvent,
      eventType: eventType || null,
      eventGuests: eventGuests || null,
      decorPreferences: decorPreferences || [],
      buffetPreferences: buffetPreferences || [],
      status: "confirmed",
      createdAt: new Date().toISOString()
    };
    reservations.push(newReservation);
    console.log("New reservation booked (including event details):", newReservation);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: "Invalid reservation data", error: error.message });
  }
});

export default router;
