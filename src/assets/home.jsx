// // import React from 'react';
// // import { useEffect, useState } from 'react';
// // import axios from 'axios'; 
// // import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill, BsFillBellFill} from 'react-icons/bs'
// // import { TbReportSearch } from "react-icons/tb";
// // import { FaRegHourglassHalf } from "react-icons/fa6";
// // import { TiTick } from "react-icons/ti";
// // import { AiFillAlert } from "react-icons/ai";
// // import { SlCalender } from "react-icons/sl";
// // import { MdCategory } from "react-icons/md";
// // import { useNavigate } from 'react-router-dom';
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid ,Cell} from 'recharts';

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { TbReportSearch } from "react-icons/tb";
// // import { FaRegHourglassHalf } from "react-icons/fa";
// // import { TiTick } from "react-icons/ti";
// // import { AiFillAlert } from "react-icons/ai";
// // import { SlCalender } from "react-icons/sl";
// // import { MdCategory } from "react-icons/md";


// // import {
// //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Cell
// // } from 'recharts';

// // const BACKEND_URL = "http://localhost:8000";

// // const Home=()=>{
// //     const navigate = useNavigate();
// //     const [reports, setReports] = useState([]);
// //     useEffect(() => {
// //     const fetchReports = async () => {
// //       try {
// //         const res = await axios.get(`${BACKEND_URL}/api/reports`);
// //         setReports(res.data);
// //       } catch (error) {
// //         console.error("Error fetching reports:", error);
// //       }
// //     };

// //     fetchReports();
// //   }, []);
      

// // // useEffect(() => {
// // //     axios.get('/api/reports')  // Replace with actual endpoint
// // //         .then(response => {
// // //             const data = response.data;

// // //             // Aggregating data by damageType for 'Pending' reports
// // //             const damageTypeCounts = data
// // //                 .filter(report => report.status === 'Pending')
// // //                 .reduce((acc, report) => {
// // //                     const type = report.damageType || 'Unknown';  
// // //                     acc[type] = (acc[type] || 0) + 1;
// // //                     return acc;
// // //                 }, {});

// // //             // Formatting data for the chart
// // //             const chartData = Object.entries(damageTypeCounts).map(([type, count]) => ({
// // //                 damageType: type,
// // //                 count
// // //             }));

// // //             setReports(chartData);  // Save to state
// // //         })
// // //         .catch(error => {
// // //             console.error('Error fetching reports:', error);
// // //         });
// // // }, []);



// // const total = reports.length;
// //   const pending = reports.filter(r => r.status?.toLowerCase() === "pending").length;
// //   const resolved = reports.filter(r => r.status?.toLowerCase() === "resolved").length;
// //   const critical = reports.filter(r => r.summary?.toLowerCase().includes("critical")).length;

// //   const past7Days = reports.filter(r => {
// //     const reportDate = new Date(r.date);
// //     const sevenDaysAgo = new Date();
// //     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
// //     return reportDate >= sevenDaysAgo;
// //   }).length;

// //   // Bar chart by damage summary keyword
// //   const damageTypes = reports.reduce((acc, report) => {
// //     const type = report.summary?.toLowerCase().includes("pothole") ? "Potholes"
// //                 : report.summary?.toLowerCase().includes("crack") ? "Cracks"
// //                 : report.summary?.toLowerCase().includes("surface") ? "Surface Damage"
// //                 : "Other";
// //     acc[type] = (acc[type] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const chartData = Object.entries(damageTypes).map(([damageType, count]) => ({ damageType, count }));


// //     return (
// //         <main className='main-container'>
// //             <div className='main-title'>
// //                 <h3>DASHBOARD</h3>
// //             </div>
    
// //             <div className='main-cards'>
// //                  <div className='card'>
// //                 <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=all")}>
// //                     <h3>Total Reports</h3>
// //                     <TbReportSearch className='card_icon'/>
// //                 </div>
// //                 <h1>130</h1>
// //                 </div>
    
// //                 <div className='card'>
// //                 <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=pending")}>
// //                     <h3>Pending Reports</h3>
// //                     <FaRegHourglassHalf className='card_icon'/>
// //                 </div>
// //                 <h1>42</h1>
// //                 </div>
    
// //                 <div className='card'>
// //                 <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=resolved")}>
// //                     <h3>Resolved Reports</h3>
// //                     <TiTick className='card_icon'/>
// //                 </div>
// //                 <h1>75</h1>
// //                 </div>
    
// //                 <div className='card'>
// //                 <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=critical")}>
// //                     <h3>Critical Issues</h3>
// //                     <AiFillAlert className='card_icon'/>
// //                 </div>
// //                 <h1>42</h1>
// //                 </div>   
    
// //                  <div className='card'>
// //                 <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=new")}>
// //                     <h3>Reports In The Past 7 Days</h3>
// //                     <SlCalender className='card_icon'/>
// //                 </div>
// //                 <h1>42</h1>
// //                 </div> 
    
// //                 <div className='card'>
// //                 <div className='card-inner'>
// //                     <h3>Reports By Category</h3>
// //                     <MdCategory className='card_icon'/>
// //                 </div>
// //                 <h1>42</h1>
// //                 </div>  
                 
// //             </div>
// //             <div>
// //             </div>
// //             {/* <div className="damage-container">
// //                 <h1 className="chart-title">Pending Reports by Damage Type</h1>
// //                 <ResponsiveContainer width="100%" height={350}>
// //                     <BarChart data={reports}>
// //                         <CartesianGrid strokeDasharray="3 3" />
// //                         <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
// //                         <YAxis allowDecimals={false} />
// //                         <Tooltip />
// //                         <Legend />
// //                         <Bar dataKey="count" fill="#ff6b6b" name="Pending Reports" />
// //                     </BarChart>
// //                 </ResponsiveContainer>
// //             </div> */}
// //             <h1>DAMAGE OVERVIEW</h1>
// //             <ResponsiveContainer width="100%" height={350}>
// //             <BarChart data={reports}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
// //                 <YAxis allowDecimals={false} />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Bar className='bar' dataKey="count" name="Pending Reports">
// //                 {reports.map((entry, index) => {
// //                     let color = "#8884d8"; // default fallback
// //                     switch (entry.damageType) {
// //                     case 'Potholes':
// //                         color = "#FF6B6B";
// //                         break;
// //                     case 'Cracks':
// //                         color = '#6BFF6B';
// //                         break;
// //                     case 'Surface Damage':
// //                         color ="#6B6BFF";
// //                         break;
// //                     case 'Other':
// //                         color = "#FFD166";
// //                         break;
// //                     }
// //                     return <Cell key={'cell-${index}'} fill={color} />;
// //                 })}
// //                 </Bar>
// //             </BarChart>
// //             </ResponsiveContainer>


// //         </main>       
// //         )
// // }

// // export default Home




// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // import {
// //   TbReportSearch
// // } from "react-icons/tb";
// // import {
// //   FaRegHourglassHalf
// // } from "react-icons/fa6";
// // import {
// //   TiTick
// // } from "react-icons/ti";
// // import {
// //   AiFillAlert
// // } from "react-icons/ai";
// // import {
// //   SlCalender
// // } from "react-icons/sl";
// // import {
// //   MdCategory
// // } from "react-icons/md";

// // import {
// //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Cell
// // } from 'recharts';

// // const BACKEND_URL = "http://localhost:8000";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const [reports, setReports] = useState([]);

// //   useEffect(() => {
// //     const fetchReports = async () => {
// //       try {
// //         const res = await axios.get(`${BACKEND_URL}/api/reports`);
// //         setReports(res.data);
// //       } catch (error) {
// //         console.error("Error fetching reports:", error);
// //       }
// //     };

// //     fetchReports();
// //   }, []);

// //   // Derived statistics
// //   const total = reports.length;
// //   const pending = reports.filter(r => r.status?.toLowerCase() === "pending").length;
// //   const resolved = reports.filter(r => r.status?.toLowerCase() === "resolved").length;
// //   const critical = reports.filter(r => r.summary?.toLowerCase().includes("critical")).length;

// //   const past7Days = reports.filter(r => {
// //     const reportDate = new Date(r.date);
// //     const sevenDaysAgo = new Date();
// //     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
// //     return reportDate >= sevenDaysAgo;
// //   }).length;

// //   // Damage type summary
// //   const damageTypes = reports.reduce((acc, report) => {
// //     const summary = report.summary?.toLowerCase() || '';
// //     const type =
// //       summary.includes("pothole") ? "Potholes" :
// //       summary.includes("crack") ? "Cracks" :
// //       summary.includes("surface") ? "Surface Damage" :
// //       "Other";

// //     acc[type] = (acc[type] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const chartData = Object.entries(damageTypes).map(([damageType, count]) => ({ damageType, count }));

// //   return (
// //     <main className='main-container'>
// //       <div className='main-title'>
// //         <h3>DASHBOARD</h3>
// //       </div>

// //       <div className='main-cards'>
// //         <div className='card'>
// //           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=all")}>
// //             <h3>Total Reports</h3>
// //             <TbReportSearch className='card_icon' />
// //           </div>
// //           <h1>{total}</h1>
// //         </div>

// //         <div className='card'>
// //           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=pending")}>
// //             <h3>Pending Reports</h3>
// //             <FaRegHourglassHalf className='card_icon' />
// //           </div>
// //           <h1>{pending}</h1>
// //         </div>

// //         <div className='card'>
// //           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=resolved")}>
// //             <h3>Resolved Reports</h3>
// //             <TiTick className='card_icon' />
// //           </div>
// //           <h1>{resolved}</h1>
// //         </div>

// //         <div className='card'>
// //           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=critical")}>
// //             <h3>Critical Issues</h3>
// //             <AiFillAlert className='card_icon' />
// //           </div>
// //           <h1>{critical}</h1>
// //         </div>

// //         <div className='card'>
// //           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=new")}>
// //             <h3>Reports In The Past 7 Days</h3>
// //             <SlCalender className='card_icon' />
// //           </div>
// //           <h1>{past7Days}</h1>
// //         </div>

// //         <div className='card'>
// //           <div className='card-inner'>
// //             <h3>Reports By Category</h3>
// //             <MdCategory className='card_icon' />
// //           </div>
// //           <h1>{chartData.length}</h1>
// //         </div>
// //       </div>

// //       <h1>DAMAGE OVERVIEW</h1>
// //       <ResponsiveContainer width="100%" height={350}>
// //         <BarChart data={chartData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
// //           <YAxis allowDecimals={false} />
// //           <Tooltip />
// //           <Legend />
// //           <Bar dataKey="count" name="Damage Reports">
// //             {chartData.map((entry, index) => {
// //               let color = "#8884d8";
// //               switch (entry.damageType) {
// //                 case 'Potholes': color = "#FF6B6B"; break;
// //                 case 'Cracks': color = '#6BFF6B'; break;
// //                 case 'Surface Damage': color = "#6B6BFF"; break;
// //                 case 'Other': color = "#FFD166"; break;
// //                 default: break;
// //               }
// //               return <Cell key={`cell-${index}`} fill={color} />;
// //             })}
// //           </Bar>
// //         </BarChart>
// //       </ResponsiveContainer>
// //     </main>
// //   );
// // };

// // export default Home;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//   TbReportSearch
// } from "react-icons/tb";
// import {
//   FaRegHourglassHalf
// } from "react-icons/fa6";
// import {
//   TiTick
// } from "react-icons/ti";
// import {
//   AiFillAlert
// } from "react-icons/ai";
// import {
//   SlCalender
// } from "react-icons/sl";
// import {
//   MdCategory
// } from "react-icons/md";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Cell
// } from 'recharts';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const BACKEND_URL = "http://localhost:8000";

// const Home = () => {
//   const navigate = useNavigate();
//   const [reports, setReports] = useState([]);
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const res = await axios.get(`${BACKEND_URL}/api/reports`);
//         setReports(res.data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   const filteredReports = reports.filter(report => {
//     const statusMatch = statusFilter === "all" || report.status?.toLowerCase() === statusFilter;
//     const reportDate = new Date(report.date);
//     const dateMatch =
//       (!startDate || reportDate >= startDate) &&
//       (!endDate || reportDate <= endDate);
//     return statusMatch && dateMatch;
//   });

//   const total = filteredReports.length;
//   const pending = filteredReports.filter(r => r.status?.toLowerCase() === "pending").length;
//   const resolved = filteredReports.filter(r => r.status?.toLowerCase() === "resolved").length;
//   const critical = filteredReports.filter(r => r.summary?.toLowerCase().includes("critical")).length;

//   const past7Days = filteredReports.filter(r => {
//     const reportDate = new Date(r.date);
//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//     return reportDate >= sevenDaysAgo;
//   }).length;

//   const damageTypes = filteredReports.reduce((acc, report) => {
//     const summary = report.summary?.toLowerCase() || '';
//     const type =
//       summary.includes("pothole") ? "Potholes" :
//       summary.includes("crack") ? "Cracks" :
//       summary.includes("surface") ? "Surface Damage" :
//       "Other";
//     acc[type] = (acc[type] || 0) + 1;
//     return acc;
//   }, {});

//   const chartData = Object.entries(damageTypes).map(([damageType, count]) => ({ damageType, count }));

//   return (
//     <main className='main-container'>
//       <div className='main-title'>
//         <h3>DASHBOARD</h3>
//       </div>

//       {/* Filter Controls */}
//       <div className="filters" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
//         <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
//           <option value="all">All Statuses</option>
//           <option value="pending">Pending</option>
//           <option value="resolved">Resolved</option>
//           <option value="critical">Critical</option>
//         </select>

//         <div>
//           <label>From: </label>
//           <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//         </div>

//         <div>
//           <label>To: </label>
//           <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
//         </div>
//       </div>

//       {/* Cards */}
//       <div className='main-cards'>
//         <div className='card'>
//           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=all")}>
//             <h3>Total Reports</h3>
//             <TbReportSearch className='card_icon' />
//           </div>
//           <h1>{total}</h1>
//         </div>

//         <div className='card'>
//           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=pending")}>
//             <h3>Pending Reports</h3>
//             <FaRegHourglassHalf className='card_icon' />
//           </div>
//           <h1>{pending}</h1>
//         </div>

//         <div className='card'>
//           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=resolved")}>
//             <h3>Resolved Reports</h3>
//             <TiTick className='card_icon' />
//           </div>
//           <h1>{resolved}</h1>
//         </div>

//         <div className='card'>
//           <div className='card-inner' onClick={() => navigate("/damage_reports?filter=critical")}>
//             <h3>Critical Issues</h3>
//             <AiFillAlert className='card_icon' />
//           </div>
//           <h1>{critical}</h1>
//         </div>

//         <div className='card'>
//           <div className='card-inner'>
//             <h3>Reports In The Past 7 Days</h3>
//             <SlCalender className='card_icon' />
//           </div>
//           <h1>{past7Days}</h1>
//         </div>

//         <div className='card'>
//           <div className='card-inner'>
//             <h3>Reports By Category</h3>
//             <MdCategory className='card_icon' />
//           </div>
//           <h1>{chartData.length}</h1>
//         </div>
//       </div>

//       {/* Bar Chart */}
//       <h1>DAMAGE OVERVIEW</h1>
//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
//           <YAxis allowDecimals={false} />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" name="Damage Reports">
//             {chartData.map((entry, index) => {
//               let color = "#8884d8";
//               switch (entry.damageType) {
//                 case 'Potholes': color = "#FF6B6B"; break;
//                 case 'Cracks': color = '#6BFF6B'; break;
//                 case 'Surface Damage': color = "#6B6BFF"; break;
//                 case 'Other': color = "#FFD166"; break;
//                 default: break;
//               }
//               return <Cell key={`cell-${index}`} fill={color} />;
//             })}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>

//             {/* Filtered Report List */}
//       <div style={{ marginTop: '2rem' }}>
//         <h2>Filtered Reports</h2>
//         {filteredReports.length === 0 ? (
//           <p>No reports found for the selected filters.</p>
//         ) : (
//           <table style={{
//             width: '100%',
//             borderCollapse: 'collapse',
//             marginTop: '1rem',
//             fontSize: '14px'
//           }}>
//             <thead>
//               <tr style={{ backgroundColor: '#f2f2f2' }}>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Summary</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredReports.map((report, index) => (
//                 <tr key={index}>
//                   <td style={{ border: '1px solid #ccc', padding: '8px' }}>
//                     {new Date(report.date).toLocaleDateString()}
//                   </td>
//                   <td style={{ border: '1px solid #ccc', padding: '8px' }}>
//                     {report.status}
//                   </td>
//                   <td style={{ border: '1px solid #ccc', padding: '8px' }}>
//                     {report.summary}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//     </main>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { TbReportSearch } from "react-icons/tb";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { AiFillAlert } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdCategory } from "react-icons/md";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BACKEND_URL = "http://localhost:8000";

const Home = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [severityData, setSeverityData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/reports`);
        setReports(res.data);
        generateSeverityData(res.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  const filteredReports = reports.filter(report => {
    const statusMatch =
      statusFilter === "all" ||
      (statusFilter === "critical"
        ? report.summary?.toLowerCase().includes("critical")
        : report.status?.toLowerCase() === statusFilter);
    const reportDate = new Date(report.date);
    const dateMatch =
      (!startDate || reportDate >= startDate) &&
      (!endDate || reportDate <= endDate);
    return statusMatch && dateMatch;
  });

  const total = filteredReports.length;
  const pending = filteredReports.filter(r => r.status?.toLowerCase() === "pending").length;
  const resolved = filteredReports.filter(r => r.status?.toLowerCase() === "resolved").length;
  const critical = filteredReports.filter(r => r.summary?.toLowerCase().includes("critical")).length;
  const COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#8884d8"];

  const past7Days = filteredReports.filter(report => {
  const reportDate = new Date(report.date);
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return reportDate >= sevenDaysAgo;
}).length;


  // const damageTypes = filteredReports.reduce((acc, report) => {
  //   const summary = report.summary?.toLowerCase() || '';
  //   const type =
  //     summary.includes("pothole") ? "Potholes" :
  //     summary.includes("crack") ? "Cracks" :
  //     summary.includes("surface") ? "Surface Damage" :
  //     "Other";
  //   acc[type] = (acc[type] || 0) + 1;
  //   return acc;
  // }, {});
  const damageTypes = filteredReports.reduce((acc, report) => {
  const summary = report.summary?.toLowerCase() || '';
  const type =
    summary.includes("pothole") ? "Potholes" :
    summary.includes("crack") ? "Cracks" :
    summary.includes("surface") ? "Surface Damage" :
    "Other";

  acc[type] = (acc[type] || 0) + 1;
  return acc;
}, {});

const chartData = Object.entries(damageTypes).map(([damageType, count]) => ({ damageType, count }));



// Generate  Pie Chart
  const generateSeverityData = (reports) => {
    const severityCounts = reports.reduce((acc, report) => {
      const severity = report.severity || "Unknown";
      acc[severity] = (acc[severity] || 0) + 1;
      return acc;
    }, {});

    const data = Object.entries(severityCounts).map(([severity, count]) => ({
      name: severity,
      value: count,
    }));

    setSeverityData(data);
  };
 

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      {/* Filter Controls */}
      <div className="filters" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="critical">Critical</option>
        </select>

        <div>
          <label>From: </label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>

        <div>
          <label>To: </label>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        </div>
      </div>

      {/* Cards */}
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner' onClick={() => navigate("/damage_reports?filter=all")}>
            <h3>Total Reports</h3>
            <TbReportSearch className='card_icon' />
          </div>
          <h1>{total}</h1>
        </div>

        <div className='card'>
          <div className='card-inner' onClick={() => navigate("/damage_reports?filter=pending")}>
            <h3>Pending Reports</h3>
            <FaRegHourglassHalf className='card_icon' />
          </div>
          <h1>{pending}</h1>
        </div>

        <div className='card'>
          <div className='card-inner' onClick={() => navigate("/damage_reports?filter=resolved")}>
            <h3>Resolved Reports</h3>
            <TiTick className='card_icon' />
          </div>
          <h1>{resolved}</h1>
        </div>

        <div className='card'>
          <div className='card-inner' onClick={() => navigate("/damage_reports?filter=critical")}>
            <h3>Critical Issues</h3>
            <AiFillAlert className='card_icon' />
          </div>
          <h1>{critical}</h1>
        </div>

        {/* <div className='card'>
          <div className='card-inner'>
            <h3>Reports In The Past 7 Days</h3>
            <SlCalender className='card_icon' />
          </div>
          <h1>{past7Days}</h1>
        </div> */}

        <div className='card'>
          <div
            className='card-inner'
            onClick={() => navigate("/damage_reports?filter=new")}
          >
            <h3>Reports in the Past 7 Days</h3>
            <SlCalender className='card_icon' />
          </div>
          <h1>{past7Days}</h1>
        </div>

          <div className='card'>
          <div
            className='card-inner'
            onClick={() => navigate("/damage_reports?filter=categories")}
          >
            <h3>Reports by Category</h3>
            <MdCategory className='card_icon' />
          </div>
          <h1>{chartData.reduce((total, item) => total + item.count, 0)}</h1>
        </div>


      </div>

      {/* Bar Chart */}
      <h1>DAMAGE OVERVIEW</h1>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Damage Reports">
            {chartData.map((entry, index) => {
              let color = "#8884d8";
              switch (entry.damageType) {
                case 'Potholes': color = "#FF6B6B"; break;
                case 'Cracks': color = '#6BFF6B'; break;
                case 'Surface Damage': color = "#6B6BFF"; break;
                case 'Other': color = "#FFD166"; break;
                default: break;
              }
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart */}
      <div className="severity-pie-chart" style={{ marginBottom: "30px" ,marginTop:"20px",fontSize:"20px"}}>
        <h2>REPORTS BY SEVERITY</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={severityData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name} (${value})`}
            >
              {severityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
        
     
    </main>
  );
};

export default Home;