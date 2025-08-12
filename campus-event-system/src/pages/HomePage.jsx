import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Event Page</h1>
      <p>Here you can explore and manage events.</p>

      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}
