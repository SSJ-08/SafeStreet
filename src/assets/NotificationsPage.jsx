import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";

const BACKEND_URL = "http://localhost:8000";

const NotificationsPage = () => {
  const [newReports, setNewReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewReports = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/reports/new`); // or your endpoint to get new reports
        setNewReports(res.data);
      } catch (error) {
        console.error("Failed to fetch new reports", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewReports();
  }, []);

  if (loading) return <p>Loading notifications...</p>;

  if (newReports.length === 0) return <p>No new damage reports.</p>;

  return (
    <div>
      <h2>New Damage Reports</h2>
      <ul>
        {newReports.map((report) => (
          <li key={report._id}>
            🛠️ Damage report received at {new Date(report.date).toLocaleString()} - Location: {report.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
