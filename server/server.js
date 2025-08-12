import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eventdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema & Model
const EventSchema = new mongoose.Schema({
  eventName: String,
  start: String,
  end: String,
  location: String,
  description: String,
  tickets: String,
  requireApproval: Boolean,
  capacity: String
});

const Event = mongoose.model("Event", EventSchema);

// Create Event API
app.post("/api/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Events API
app.get("/api/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.listen(5000, () => console.log("Server running on port 5000"));
