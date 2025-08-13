import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create event");
      }

      const result = await res.json();
      console.log("✅ Event Created:", result);

      navigate("/events");
    } catch (error) {
      console.error("❌ Error creating event:", error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Create Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-3 rounded-lg bg-gray-700 border border-gray-600"
              required
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="p-3 rounded-lg bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-3 rounded-lg bg-gray-700 border border-gray-600"
              required
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="p-3 rounded-lg bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />

          <div className="flex justify-between items-center">
            <label>Tickets:</label>
            <select
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="bg-gray-700 p-2 rounded border border-gray-600"
            >
              <option>Free</option>
              <option>Paid</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label>Require Approval</label>
            <input
              type="checkbox"
              checked={requireApproval}
              onChange={(e) => setRequireApproval(e.target.checked)}
            />
          </div>



          <input
            type="text"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
}
