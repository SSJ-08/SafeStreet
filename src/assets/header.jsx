
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsThreeDotsVertical, BsSearch } from 'react-icons/bs';

// function Header({ setSearchQuery }) { // Receive setSearchQuery as a prop
//   const navigate = useNavigate();
//   const [showIcons, setShowIcons] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [officialEmail, setOfficialEmail] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const email = localStorage.getItem('officialEmail');
//     setOfficialEmail(email);

//     if (!email) {
//       navigate('/login');
//       return;
//     }

//     fetch('http://localhost:8000/api/user', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.name) {
//           setUserName(data.name);
//           setIsLoggedIn(true);
//         } else {
//           console.error('No user name found for this email');
//         }
//       })
//       .catch((err) => console.error('Failed to fetch user data', err));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('officialEmail');
//     setUserName('');
//     setOfficialEmail('');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value); // Update searchQuery state in parent
//   };

//   return (
//     <header className="header">
//       <div className="header-left">
//         <BsSearch className="icon" />
//         <input 
//           type="text" 
//           placeholder="Search" 
//           onChange={handleSearchChange}  // Handle search query change
//         />
//       </div>

//       <div className="header-right desktop-icons">
//         <div className="notification-container">
//           <BsFillBellFill className="icon" onClick={handleBellClick} />
//           {notificationMessage && (
//             <div className="notification-message">
//               <p>{notificationMessage}</p>
//               <p className="timestamp">{reportTimestamp}</p>
//             </div>
//           )}
//         </div>

//         <div className="mail-container" onClick={() => navigate('/EmailHistory')}>
//           <BsFillEnvelopeFill className="icon" />
//         </div>

//         <div className="profile-container">
//           <BsPersonCircle
//             className="icon profile-icon"
//             onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//           />
//           {showProfileDropdown && (
//             <div className="dropdown-card">
//               {isLoggedIn ? (
//                 <>
//                   <p className="dropdown-name">Hello, {userName || 'User'}</p>
//                   <p className="dropdown-email">{officialEmail || 'Email not available'}</p>
//                 </>
//               ) : (
//                 <p className="dropdown-name">Please log in</p>
//               )}
//               {isLoggedIn && <button onClick={handleLogout} className="logout-btn">Logout</button>}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="mobile-menu">
//         <button className="mobile-menu-button" onClick={() => setShowIcons(!showIcons)}>
//           <BsThreeDotsVertical className="icon" />
//         </button>
//         {showIcons && (
//           <div className="mobile-icons-dropdown">
//             <BsFillBellFill className="icon" onClick={() => navigate('/queries')} />
//             <BsFillEnvelopeFill className="icon" onClick={() => navigate('/EmailHistory')} />
//             <BsPersonCircle className="icon" onClick={() => setShowProfileDropdown(!showProfileDropdown)} />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsThreeDotsVertical,
  BsSearch,
} from 'react-icons/bs';

function Header({ setSearchQuery }) {
  const navigate = useNavigate();
  const [showIcons, setShowIcons] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Notification state
  const [hasNewReport, setHasNewReport] = useState(false);
  const [newReportTime, setNewReportTime] = useState('');
  const [showNotificationMessage, setShowNotificationMessage] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('officialEmail');
    setOfficialEmail(email);

    if (!email) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:8000/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setUserName(data.name);
          setIsLoggedIn(true);
        } else {
          console.error('No user name found for this email');
        }
      })
      .catch((err) => console.error('Failed to fetch user data', err));
  }, [navigate]);

  // Polling for new damage reports every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8000/api/reports/latest') // Replace with actual endpoint
        .then((res) => res.json())
        .then((data) => {
          if (data.hasNew) {
            setHasNewReport(true);
            setNewReportTime(new Date(data.latestReport.date).toLocaleString());
          }
        })
        .catch((err) => console.error('Failed to fetch latest report', err));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('officialEmail');
    setUserName('');
    setOfficialEmail('');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

 const handleBellClick = () => {
  setHasNewReport(false); // Remove red dot
  navigate('/notifications');
};


  return (
    <header className="header">
      <div className="header-left">
        <BsSearch className="icon" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
        />
      </div>

      <div className="header-right desktop-icons">
        <div className="notification-container">
          <BsFillBellFill className="icon" onClick={handleBellClick} />
          {hasNewReport && <span className="notification-badge"></span>}
        </div>

        <div
          className="mail-container"
          onClick={() => navigate('/EmailHistory')}
        >
          <BsFillEnvelopeFill className="icon" />
        </div>

        <div className="profile-container">
          <BsPersonCircle
            className="icon profile-icon"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          />
          {showProfileDropdown && (
            <div className="dropdown-card">
              {isLoggedIn ? (
                <>
                  <p className="dropdown-name">Hello, {userName || 'User'}</p>
                  <p className="dropdown-email">{officialEmail || 'Email not available'}</p>
                </>
              ) : (
                <p className="dropdown-name">Please log in</p>
              )}
              {isLoggedIn && (
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mobile-menu">
        <button
          className="mobile-menu-button"
          onClick={() => setShowIcons(!showIcons)}
        >
          <BsThreeDotsVertical className="icon" />
        </button>
        {showIcons && (
          <div className="mobile-icons-dropdown">
            <BsFillBellFill className="icon" onClick={handleBellClick} />
            <BsFillEnvelopeFill
              className="icon"
              onClick={() => navigate('/EmailHistory')}
            />
            <BsPersonCircle
              className="icon"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
