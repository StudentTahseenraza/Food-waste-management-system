import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Dashboard = () => {
  const [user, logout ] = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  console.log("User:", user); // Debug: Check if user is available
  console.log("Donations:", donations); // Debug: Check if donations are fetched

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/donations", {
          headers: {
            "x-auth-token": user.token,
          },
        });
        setDonations(response.data);
      } catch (err) {
        console.error("Failed to fetch donations", err);
      }
    };

    if (user) {
      fetchDonations();
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <div className="row">
          {/* User Profile Section */}
          <div className="col-lg-4">
            <div className="card profile-card">
              <div className="card-body">
                <h3 className="card-title">Profile</h3>
                <p className="card-text">
                  <strong>Email:</strong> {user?.email}
                </p>
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Donations Summary Section */}
          <div className="col-lg-8">
            <div className="card summary-card">
              <div className="card-body">
                <h3 className="card-title">Donations Summary</h3>
                <p className="card-text">
                  <strong>Total Donations:</strong> {donations.length}
                </p>
                <p className="card-text">
                  <strong>Pending Donations:</strong>{" "}
                  {donations.filter((d) => d.status === "Pending").length}
                </p>
                <p className="card-text">
                  <strong>Delivered Donations:</strong>{" "}
                  {donations.filter((d) => d.status === "Delivered").length}
                </p>
              </div>
            </div>

            {/* Recent Donations Section */}
            <div className="card recent-donations-card mt-4">
              <div className="card-body">
                <h3 className="card-title">Recent Donations</h3>
                {donations.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation) => (
                        <tr key={donation._id}>
                          <td>{donation.item}</td>
                          <td>{donation.quantity}</td>
                          <td>{donation.status}</td>
                          <td>
                            {new Date(donation.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No donations found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;