import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Event Management System</h1>
      <button style={styles.button} onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
