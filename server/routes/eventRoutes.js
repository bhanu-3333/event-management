import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Create Event
router.post("/", async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    if (!title || !description || !date || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new Event({ title, description, date, location });
    const savedEvent = await newEvent.save();

    res.status(201).json({ message: "Event created successfully", event: savedEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
});

// Get All Events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // sorted by date
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
});

export default router;
