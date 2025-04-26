import React from 'react';
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill, BsFillBellFill} from 'react-icons/bs'
import { TbReportSearch } from "react-icons/tb";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { AiFillAlert } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdCategory } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate = useNavigate();
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
        </main>       
        )
}

   

export default Home
