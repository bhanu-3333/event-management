import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Campus Event Management System</h1>
      <Link to="/login">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Login</button>
      </Link>
    </div>
  );
}
