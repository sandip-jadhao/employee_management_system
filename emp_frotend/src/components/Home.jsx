import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import "../styles/Home.css";

function Home() {

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginId === "admin" && password === "password") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid login credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginId("");
    setPassword("");
  };

  if (isLoggedIn) {
    return <EmployeeList onLogout={handleLogout}/>;
  }

  return (
    <div className="home-container">

      <form className="login-form" onSubmit={handleLogin}>

        <h2 className="login-title">Admin Login</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="text"
          placeholder="Login ID"
          className="login-input"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>

      </form>

    </div>
  );
}

export default Home;
