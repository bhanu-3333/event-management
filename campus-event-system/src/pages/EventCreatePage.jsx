import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventCreatePage.css"; // Import CSS file

export default function EventCreatePage() {
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [tickets, setTickets] = useState("Free");
  const [requireApproval, setRequireApproval] = useState(false);
  const [capacity, setCapacity] = useState("Unlimited");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      eventName,
      start: `${startDate} ${startTime}`,
      end: `${endDate} ${endTime}`,
      location,
      description,
      tickets,
      requireApproval,
      capacity,
    };

    const res = await fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      alert("Event Created Successfully!");
      navigate("/home");
    } else {
      alert("Error creating event");
    }
  };

  return (
    <div className="event-container">
      <h1>Create Event</h1>
      <form className="event-form" onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input value={eventName} onChange={(e) => setEventName(e.target.value)} required />

        <div className="row">
          <div>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </div>
          <div>
            <label>Start Time:</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
          </div>
        </div>

        <div className="row">
          <div>
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </div>
          <div>
            <label>End Time:</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
          </div>
        </div>

        <label>Location:</label>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Tickets:</label>
        <select value={tickets} onChange={(e) => setTickets(e.target.value)}>
          <option>Free</option>
          <option>Paid</option>
        </select>

        <label className="checkbox">
          <input type="checkbox" checked={requireApproval} onChange={(e) => setRequireApproval(e.target.checked)} />
          Require Approval
        </label>

        <label>Capacity:</label>
        <input value={capacity} onChange={(e) => setCapacity(e.target.value)} />

        <button type="submit" className="submit-btn">Create Event</button>
      </form>
    </div>
  );
}
