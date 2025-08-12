import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
        {/* Left side - Menu */}
        <div className="flex space-x-6">
          <Link to="/events" className="hover:text-yellow-400">Events</Link>
          <Link to="/calendars" className="font-bold hover:text-yellow-400">Calendars</Link>
          <Link to="/discover" className="hover:text-yellow-400">Discover</Link>
        </div>

        {/* Middle - Time */}
        <div className="text-sm text-gray-300">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+5:30
        </div>

        {/* Right side - Create Event + Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/create-event")}
            className="text-white hover:text-yellow-400 font-semibold"
          >
            Create Event
          </button>
          <button className="hover:text-yellow-400">🔍</button>
          <button className="hover:text-yellow-400">🔔</button>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            🙂
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to the Event Page</h1>
        <p className="mt-2 text-gray-600">Here you can explore and manage events.</p>
      </div>
    </div>
  );
}
