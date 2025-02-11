import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Call the backend register API
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email,
          password,
        }
      );

      // Save the token in local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to the donation page
      navigate("/donate");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <h2>Register</h2>
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
            Register
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </section>
  );
};

export default Register;