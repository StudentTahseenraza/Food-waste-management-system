import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Call the backend login API
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save the token in local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to the donation page
      navigate("/donate");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn1">
            Login
          </button>
        </form>
        <p>
          Dont have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </section>
  );
};

export default Login;