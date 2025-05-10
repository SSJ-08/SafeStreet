import { useEffect, useState } from "react";
import "../App.css";
function EmailHistory() {
  const [emails, setEmails] = useState([]);

  // useEffect(() => {
  //   async function fetchEmails() {
  //     try {
  //       const response = await fetch("/api/emails"); 
  //       const data = await response.json();
  //       setEmails(data);
  //     } catch (error) {
  //       console.error("Failed to fetch emails:", error);
  //     }
  //   }

  //   fetchEmails();
  // }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/emails')
      .then(response => response.json())
      .then(data => {
        console.log(data); // See if you get your emails here
        setEmails(data);
      })
      .catch(error => console.error('Error fetching emails:', error));
  }, []);

  return (
    <div>
      <h2>Email History</h2>
      {emails.length === 0 ? (
        <p>No emails found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>To</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr key={index}>
                <td>{email.to}</td>
                <td>{email.subject}</td>
                <td>{email.text}</td>
                <td>{new Date(email.sentAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmailHistory;