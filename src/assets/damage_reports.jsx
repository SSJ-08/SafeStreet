// import React, { useState,useEffect } from "react";
// import "../App.css";
// import "leaflet/dist/leaflet.css"; 
// import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
// import { useLocation } from "react-router-dom";
// import jsPDF from "jspdf";
// import axios from "axios";



// console.log("DamageReports Component Loaded!");

// const BACKEND_URL = "http://localhost:8000"; // 🔁 Change to your server if needed


// const generatePDF = (report) => {
//   const doc = new jsPDF();

//   doc.setFontSize(16);
//   doc.text("SafeStreet Damage Report Summary", 20, 20);

//   doc.setFontSize(12);
//   doc.text(`Location: ${report.location}`, 20, 40);
//   doc.text(`Summary: ${report.summary}`, 20, 50);
//   doc.text(`Status: ${report.status}`, 20, 60);
//   doc.text(`Date: ${new Date(report.createdAt).toLocaleDateString()}`, 20, 70);

//   const summaryText = `This report highlights damage at ${report.location}. Summary: ${report.summary}. Status: ${report.status}.`;

//   doc.text("Details:", 20, 90);
//   doc.text(doc.splitTextToSize(summaryText, 170), 20, 100);
//   doc.save(`Damage_Report_${report._id}.pdf`);
// };



// const Damage_Reports = () => {
//   const location=useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const filter = queryParams.get("filter");
//   const [emailSending, setEmailSending] = useState(false);
//   const [reports, setReports] = useState([
//     { id: 1, location: "Mumbai, Maharashtra", severity: "High", status: "Pending", date: "2025-02-25", lat:19.0760,lng:72.8777 },
//     { id: 2, location: "Delhi", severity: "Medium", status: "Resolved", date: "2025-02-20",lat: 28.7041, lng: 77.1025},
//     { id: 3, location: "Bangalore, Karnataka", severity: "High", status: "Pending", date: "2025-03-05",lat: 12.9716, lng: 77.5946 },
//     { id: 4, location: "Hyderabad, Telangana", severity: "Low", status: "Resolved", date: "2025-03-02",lat: 17.3850, lng: 78.4867 },
//     { id: 5, location: "Chennai, Tamil Nadu", severity: "Medium", status: "In Progress", date: "2025-03-10",lat: 13.0827, lng: 80.2707  },
//     { id: 6, location: "Kolkata, West Bengal", severity: "High", status: "Pending", date: "2025-03-08",lat: 22.5726, lng: 88.3639 },
//     { id: 7, location: "Pune, Maharashtra", severity: "Low", status: "Resolved", date: "2025-02-28",lat: 18.5204, lng: 73.8567 },
//     { id: 8, location: "Ahmedabad, Gujarat", severity: "Medium", status: "In Progress", date: "2025-03-12",lat: 23.0225, lng: 72.5714 },
//     { id: 9, location: "Jaipur, Rajasthan", severity: "High", status: "Pending", date: "2025-03-15",lat: 26.9124, lng: 75.7873 },
//     { id: 10, location: "Lucknow, Uttar Pradesh", severity: "Medium", status: "Resolved", date: "2025-03-18",lat: 26.8467, lng: 80.9462 },
//     { id: 11, location: "Indore, Madhya Pradesh", severity: "High", status: "Pending", date: "2025-03-22" ,lat: 22.7196, lng: 75.8577},
//     { id: 12, location: "Bhopal, Madhya Pradesh", severity: "Low", status: "Resolved", date: "2025-03-25",lat: 23.2599, lng: 77.4126 },
//     { id: 13, location: "Thiruvananthapuram, Kerala", severity: "Medium", status: "In Progress", date: "2025-03-28",lat: 8.5241, lng: 76.9366},
//     { id: 14, location: "Patna, Bihar", severity: "High", status: "Pending", date: "2025-04-02" ,lat: 25.5941, lng: 85.1376},
//     { id: 15, location: "Chandigarh", severity: "Low", status: "Resolved", date: "2025-04-05",lat: 30.7333, lng: 76.7794 },
//     { id: 16, location: "Guwahati, Assam", severity: "Medium", status: "In Progress", date: "2025-04-10",lat: 26.1445, lng: 91.7362 },
//     { id: 17, location: "Coimbatore, Tamil Nadu", severity: "High", status: "Pending", date: "2025-04-12",lat: 11.0168, lng: 76.9558  },
//     { id: 18, location: "Mysore, Karnataka", severity: "Low", status: "Resolved", date: "2025-04-15",lat: 12.2958, lng: 76.6394 },
//     { id: 19, location: "Nagpur, Maharashtra", severity: "Medium", status: "In Progress", date: "2025-04-18",lat: 21.1458, lng: 79.0882},
//     { id: 20, location: "Visakhapatnam, Andhra Pradesh", severity: "High", status: "Pending", date: "2025-04-20",lat: 17.6868, lng: 83.2185}
//   ]);
  

//   const [filteredReports,setFilteredReports] = useState(reports);

//   useEffect(() => {
//     if (filter === "pending") {
//       setFilteredReports(reports.filter(report => report.status === "Pending"));
//     } else if (filter === "resolved") {
//       setFilteredReports(reports.filter(report => report.status === "Resolved"));
//     } else if (filter === "critical") {
//       setFilteredReports(reports.filter(report => report.severity === "High"));
//     } else if (filter === "new") {
//       setFilteredReports(reports.filter(report => report.status === "New"));
//     } else {
//       setFilteredReports(reports); // Show all reports
//     }
//   }, [filter,reports]);

//   const sendEmailNotification = async (recipient, report) => {
//     setEmailSending(true);
//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to: recipient,
//           subject: `Damage Report ID ${report.id} - ${report.severity} Severity`,
//           text: `This is to inform you that we have received your report and understand the severity of the report. We assure you that the problem will be solved as soon as possible keeping the risk of the travelers in mind`,
//           html: `<p><strong>Damage Report</strong></p><p>Location: ${report.location}</p><p>Severity: ${report.severity}</p><p>Status: ${report.status}</p><p>Date: ${report.date}</p>`,
//         }),
//       });
  
//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email.");
//       }
//     } catch (err) {
//       console.error("Error sending email:", err);
//       alert("Error sending email.");
//     } finally {
//       setEmailSending(false);
//     }
//   };
  

//   return (
//     <div className="damage-reports-container">
//       <h1 className="damage-reports-header">Damage Reports</h1>

//       {/* Layout for Table + Map */}
//       <div className="damage-reports-content">
//         {/* Damage Reports Table */}
//         <div className="damage-reports-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Location</th>
//                 <th>Severity</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredReports.map((report) => (
//                 <tr key={report.id}>
//                   <td>{report.id}</td>
//                   <td>{report.location}</td>
//                   <td className={report.severity === "High" ? "high-severity" : "medium-severity"}>
//                     {report.severity}
//                   </td>
//                   <td className={report.status === "Resolved" ? "status-resolved" : "status-pending"}>
//                     {report.status}
//                   </td>
//                   <td>{report.date}</td>
//                   {/* <td>
//                     {report.status === "Pending" && (
//                     <button onClick={() => sendEmailNotification("sravanijanak@gmail.com", report)} disabled={emailSending}>
//                     {emailSending ? "Sending..." : "Send Email"}
//                   </button>
                  
//                     )}
//                   </td> */}

//               <td>
//                 {report.status === "Pending" && (
//                   <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
//                     <button
//                       onClick={() => sendEmailNotification("sravanijanak@gmail.com", report)}
//                       disabled={emailSending}
//                       className="action-button send-email-button"
//                     >
//                       {emailSending ? "Sending..." : "Send Email"}
//                     </button>

                    
//                   </div>
//                 )}
//               </td>

//               <td>
//               <button
//                 onClick={() => generatePDF(report)}
//                 className="action-button download-pdf-button"
//               >
//                 Download Summary Report
//               </button>
//               </td>
                   


//                 </tr>
                
//               ))}
//             </tbody>
//           </table>
//         </div>

       
//         <div className="map-container">
//           <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="leaflet-container">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//             {filteredReports.map((report) => (
//               <Marker key={report.id} position={[report.lat, report.lng]}>
//                 <Popup>
//                   <strong>{report.location}</strong> <br />
//                   Severity: {report.severity} <br />
//                   Status: {report.status} <br />
//                   Date: {report.date}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Damage_Reports;






import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import jsPDF from "jspdf";

const BACKEND_URL = "http://localhost:8000"; // 🔁 Change to your server if needed

const generatePDF = (report) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("SafeStreet Damage Report Summary", 20, 20);

  doc.setFontSize(12);
  doc.text(`Location: ${report.location}`, 20, 40);
  doc.text(`Summary: ${report.summary}`, 20, 50);
  doc.text(`Status: ${report.status}`, 20, 60);
  doc.text(`Date: ${new Date(report.createdAt).toLocaleDateString()}`, 20, 70);

  const summaryText = `This report highlights damage at ${report.location}. Summary: ${report.summary}. Status: ${report.status}.`;

  doc.text("Details:", 20, 90);
  doc.text(doc.splitTextToSize(summaryText, 170), 20, 100);
  doc.save(`Damage_Report_${report._id}.pdf`);
};

const DamageReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/upload/all`);
      setReports(res.data);
    } catch (error) {
      console.error("Failed to fetch reports:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendToAuthorities = async (report) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/receive-report`, {
        imageUrl: `${BACKEND_URL}${report.imageUrl}`,
        location: report.location,
        summary: report.summary,
        date: report.createdAt,
        status: report.status || "Pending",
      });

      if (res.status === 200) {
        alert("✅ Report sent to authorities!");
        fetchReports(); // Refresh reports after sending
      } else {
        alert("Failed to send report.");
      }
    } catch (error) {
      console.error("❌ Send to authorities error:", error);
      alert("Error sending report.");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="damage-reports-container">
      <h1 className="damage-reports-header">Damage Reports</h1>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <div className="damage-reports-content">
          <div className="damage-reports-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Location</th>
                  <th>Summary</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={report._id || index}>
                    <td>{index + 1}</td>
                    <td>{report.location}</td>
                    <td>{report.summary}</td>
                    <td>{report.status}</td>
                    <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleSendToAuthorities(report)}
                        className="action-button send-email-button"
                      >
                        Send to Authorities
                      </button>
                      <button
                        onClick={() => generatePDF(report)}
                        className="action-button download-pdf-button"
                        style={{ marginTop: "10px" }}
                      >
                        Download PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="map-container">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="leaflet-container">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {reports.map((report, index) =>
                typeof report.latitude === "number" && typeof report.longitude === "number" ? (
                  <Marker key={index} position={[report.latitude, report.longitude]}>
                    <Popup>
                      <strong>{report.location}</strong> <br />
                      Summary: {report.summary} <br />
                      Status: {report.status} <br />
                      Date: {new Date(report.createdAt).toLocaleDateString()}
                    </Popup>
                  </Marker>
                ) : null
              )}
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default DamageReports;
