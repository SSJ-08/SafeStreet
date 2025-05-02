import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill, BsFillBellFill} from 'react-icons/bs'
import { TbReportSearch } from "react-icons/tb";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { AiFillAlert } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdCategory } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid ,Cell} from 'recharts';

const Home=()=>{
    const navigate = useNavigate();
    // This is mock data; replace with API or props if available
    const [reports, setReports] = useState([
        { damageType: 'Potholes', count: 12 },
        { damageType: 'Cracks', count: 19 },
        { damageType: 'Surface Damage', count: 3 },
        { damageType: 'Other', count: 5 }
      ]);
      
      

// useEffect(() => {
//     axios.get('/api/reports')  // Replace with actual endpoint
//         .then(response => {
//             const data = response.data;

//             // Aggregating data by damageType for 'Pending' reports
//             const damageTypeCounts = data
//                 .filter(report => report.status === 'Pending')
//                 .reduce((acc, report) => {
//                     const type = report.damageType || 'Unknown';  
//                     acc[type] = (acc[type] || 0) + 1;
//                     return acc;
//                 }, {});

//             // Formatting data for the chart
//             const chartData = Object.entries(damageTypeCounts).map(([type, count]) => ({
//                 damageType: type,
//                 count
//             }));

//             setReports(chartData);  // Save to state
//         })
//         .catch(error => {
//             console.error('Error fetching reports:', error);
//         });
// }, []);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>
    
            <div className='main-cards'>
                <div className='card'>
                <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=all")}>
                    <h3>Total Reports</h3>
                    <TbReportSearch className='card_icon'/>
                </div>
                <h1>130</h1>
                </div>
    
                <div className='card'>
                <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=pending")}>
                    <h3>Pending Reports</h3>
                    <FaRegHourglassHalf className='card_icon'/>
                </div>
                <h1>42</h1>
                </div>
    
                <div className='card'>
                <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=resolved")}>
                    <h3>Resolved Reports</h3>
                    <TiTick className='card_icon'/>
                </div>
                <h1>75</h1>
                </div>
    
                <div className='card'>
                <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=critical")}>
                    <h3>Critical Issues</h3>
                    <AiFillAlert className='card_icon'/>
                </div>
                <h1>42</h1>
                </div>   
    
                 <div className='card'>
                <div className='card-inner' onClick={()=>navigate("/damage_reports?filter=new")}>
                    <h3>Reports In The Past 7 Days</h3>
                    <SlCalender className='card_icon'/>
                </div>
                <h1>42</h1>
                </div> 
    
                <div className='card'>
                <div className='card-inner'>
                    <h3>Reports By Category</h3>
                    <MdCategory className='card_icon'/>
                </div>
                <h1>42</h1>
                </div> 
            </div>
            <div>
            </div>
            {/* <div className="damage-container">
                <h1 className="chart-title">Pending Reports by Damage Type</h1>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={reports}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#ff6b6b" name="Pending Reports" />
                    </BarChart>
                </ResponsiveContainer>
            </div> */}
            <h1>DAMAGE OVERVIEW</h1>
            <ResponsiveContainer width="100%" height={350}>
            <BarChart data={reports}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="damageType" tick={{ fill: '#333' }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar className='bar' dataKey="count" name="Pending Reports">
                {reports.map((entry, index) => {
                    let color = "#8884d8"; // default fallback
                    switch (entry.damageType) {
                    case 'Potholes':
                        color = "#FF6B6B";
                        break;
                    case 'Cracks':
                        color = '#6BFF6B';
                        break;
                    case 'Surface Damage':
                        color ="#6B6BFF";
                        break;
                    case 'Other':
                        color = "#FFD166";
                        break;
                    }
                    return <Cell key={'cell-${index}'} fill={color} />;
                })}
                </Bar>
            </BarChart>
            </ResponsiveContainer>


        </main>       
        )
}

   

export default Home