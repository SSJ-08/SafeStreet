// // import React, { useState } from 'react';
// // import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch, BsX, BsThreeDotsVertical } from 'react-icons/bs';

// // function Header({ OpenSidebar }) {
// //   const [showIcons, setShowIcons] = useState(false);

// //   return (
// //     <header className='header'>

        
// //         <div className='header-left'>
// //             <BsSearch className='icon'/>
// //             <input type='text' placeholder='Search'/><br/>

// //         </div>
// //         <div className='header-right desktop-icons'>
// //         <BsFillBellFill className='icon' />
// //         <BsFillEnvelopeFill className='icon' />
// //         <BsPersonCircle className='icon' />
// //       </div>
      
// //       {/* Mobile menu button and dropdown */}
// //       <div className='mobile-menu'>
// //         <button className='mobile-menu-button' onClick={() => setShowIcons(!showIcons)}>
// //           {showIcons ? <BsThreeDotsVertical className='icon' /> : <BsThreeDotsVertical className='icon' />}
// //         </button>
        
        
// //         {showIcons && (
// //           <div className='mobile-icons-dropdown'>
// //             <BsFillBellFill className='icon' />
// //             <BsFillEnvelopeFill className='icon' />
// //             <BsPersonCircle className='icon' />
// //           </div>
// //         )}
// //       </div>
// //     </header>        
// //     )
// // }
// // export default Header;









// // import React, { useState } from 'react';
// // import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsThreeDotsVertical, BsSearch } from 'react-icons/bs';

// // function Header({ OpenSidebar }) {
// //   const [showIcons, setShowIcons] = useState(false);
// //   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

// //   const handleLogout = () => {
// //     // handle logout logic here
// //     console.log("Logging out...");
// //   };

// //   return (
// //     <header className='header'>
// //       <div className='header-left'>
// //         <BsSearch className='icon'/>
// //         <input type='text' placeholder='Search'/>
// //       </div>

// //       <div className='header-right desktop-icons'>
// //         <BsFillBellFill className='icon' />
// //         <BsFillEnvelopeFill className='icon' />
        
// //         <div className='profile-container'>
// //           <BsPersonCircle 
// //             className='icon profile-icon' 
// //             onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
// //           />

// //           {showProfileDropdown && (
// //             <div className='dropdown-card'>
// //               <p className='dropdown-name'>Hello, YourName</p>
// //               <button onClick={handleLogout} className='logout-btn'>Logout</button>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       <div className='mobile-menu'>
// //         <button className='mobile-menu-button' onClick={() => setShowIcons(!showIcons)}>
// //           <BsThreeDotsVertical className='icon' />
// //         </button>

// //         {showIcons && (
// //           <div className='mobile-icons-dropdown'>
// //             <BsFillBellFill className='icon' />
// //             <BsFillEnvelopeFill className='icon' />
// //             <BsPersonCircle className='icon' />
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;
// // import React, { useState, useEffect } from 'react';
// // import {
// //   BsFillBellFill,
// //   BsFillEnvelopeFill,
// //   BsPersonCircle,
// //   BsThreeDotsVertical,
// //   BsSearch
// // } from 'react-icons/bs';

// // function Header({ OpenSidebar }) {
// //   const [showIcons, setShowIcons] = useState(false);
// //   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
// //   const [userName, setUserName] = useState(null);

// //   useEffect(() => {
// //     // Get the user's email from localStorage
// //     const email = localStorage.getItem("userEmail");

// //     if (email) {
// //       // Call your backend API to get the user's name using the stored email
// //       fetch("http://localhost:5000/api/user", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ email }),
// //       })
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setUserName(data.name); // Set the user's name in state
// //         })
// //         .catch((err) => console.error("Failed to fetch user data", err));
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("userEmail"); // Clear the email from localStorage
// //     setUserName(null); // Clear the user data from state
// //     window.location.href = "/"; // Redirect to login page
// //   };

// //   return (
// //     <header className='header'>
// //       <div className='header-left'>
// //         <BsSearch className='icon' />
// //         <input type='text' placeholder='Search' />
// //       </div>

// //       <div className='header-right desktop-icons'>
// //         <BsFillBellFill className='icon' />
// //         <BsFillEnvelopeFill className='icon' />

// //          {/* MAIL ICON */}
// //          <div 
// //           className='mail-container' 
// //           onClick={() => navigate('/EmailHistory')}  
// //         >
// //           <BsFillEnvelopeFill className='icon' />
// //         </div>

// //         <div className='profile-container'>
// //           <BsPersonCircle
// //             className='icon profile-icon'
// //             onClick={() => setShowProfileDropdown(!showProfileDropdown)}
// //           />

// //           {showProfileDropdown && (
// //             <div className='dropdown-card'>
// //               <p className='dropdown-name'>Hello, {userName || 'User'}</p>
// //               <button onClick={handleLogout} className='logout-btn'>Logout</button>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       <div className='mobile-menu'>
// //         <button
// //           className='mobile-menu-button'
// //           onClick={() => setShowIcons(!showIcons)}
// //         >
// //           <BsThreeDotsVertical className='icon' />
// //         </button>

// //         {showIcons && (
// //           <div className='mobile-icons-dropdown'>
// //             <BsFillBellFill className='icon' />
// //             <BsFillEnvelopeFill className='icon' />
// //             <BsPersonCircle className='icon' />
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;




// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom'; 
// // import {
// //   BsFillBellFill,
// //   BsFillEnvelopeFill,
// //   BsPersonCircle,
// //   BsThreeDotsVertical,
// //   BsSearch
// // } from 'react-icons/bs';

// // function Header({ OpenSidebar }) {
// //   const navigate = useNavigate(); 
// //   const [showIcons, setShowIcons] = useState(false);
// //   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
// //   const [userName, setUserName] = useState(null);
// //   const [userEmail, setUserEmail] = useState(null);

// //   useEffect(() => {
// //     const email = localStorage.getItem("userEmail");
// //     setUserEmail(officialEmail);

// //     if (officialEmail) {
// //       fetch("http://localhost:5000/api/user", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       })
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setUserName(data.name);
// //         })
// //         .catch((err) => console.error("Failed to fetch user data", err));
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("userEmail");
// //     setUserName(null);
// //     setUserEmail(null);
// //     window.location.href = "/";
// //   };

// //   return (
// //     <header className='header'>
// //       <div className='header-left'>
// //         <BsSearch className='icon' />
// //         <input type='text' placeholder='Search' />
// //       </div>

// //       <div 
// //       className='header-right desktop-icons'>
// //         <BsFillBellFill className='icon' onClick={()=>navigate('/queries')} />

// //         {/* MAIL ICON */}
// //         <div 
// //           className='mail-container' 
// //           onClick={() => navigate('/EmailHistory')}  
// //         >
// //           <BsFillEnvelopeFill className='icon' />
// //         </div>

// //         {/* PROFILE */}
// //         <div className='profile-container'>
// //           <BsPersonCircle
// //             className='icon profile-icon'
// //             onClick={() => setShowProfileDropdown(!showProfileDropdown)}
// //           />

// //           {showProfileDropdown && (
// //             <div className='dropdown-card'>
// //               <p className='dropdown-name'>Hello, {userName || 'User'}</p>
// //               <p className='dropdown-email'>{userEmail || 'Please login'}</p>
// //               <button onClick={handleLogout} className='logout-btn'>Logout</button>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       <div className='mobile-menu'>
// //         <button
// //           className='mobile-menu-button'
// //           onClick={() => setShowIcons(!showIcons)}
// //         >
// //           <BsThreeDotsVertical className='icon' />
// //         </button>

// //         {showIcons && (
// //           <div className='mobile-icons-dropdown'>
// //             <BsFillBellFill className='icon' />
            
// //             {/* Optional: make mobile envelope clickable too */}
// //             <BsFillEnvelopeFill 
// //               className='icon' 
// //               onClick={() => navigate('/EmailHistory')}
// //             />
            
// //             <BsPersonCircle className='icon' />
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsThreeDotsVertical,
//   BsSearch
// } from 'react-icons/bs';

// function Header({ OpenSidebar }) {
//   const navigate = useNavigate(); 
//   const [showIcons, setShowIcons] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [userName, setUserName] = useState(null);
//   const [officialEmail, setOfficialEmail] = useState(null);

//   useEffect(() => {
//     const email = localStorage.getItem("officialEmail");
//     setOfficialEmail(email);

//     if (email) {
//       fetch("http://localhost:5000/api/user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.name) {
//             setUserName(data.name);
//           } else {
//             console.error("No user name found for this email");
//           }
//         })
//         .catch((err) => console.error("Failed to fetch user data", err));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("officialEmail");
//     setUserName(null);
//     setOfficialEmail(null);
//     window.location.href = "/";
//   };

//   return (
//     <header className='header'>
//       <div className='header-left'>
//         <BsSearch className='icon' />
//         <input type='text' placeholder='Search' />
//       </div>

//       <div className='header-right desktop-icons'>
//         <BsFillBellFill className='icon' onClick={() => navigate('/queries')} />

//         {/* MAIL ICON */}
//         <div 
//           className='mail-container' 
//           onClick={() => navigate('/EmailHistory')}  
//         >
//           <BsFillEnvelopeFill className='icon' />
//         </div>

//         {/* PROFILE */}
//         <div className='profile-container'>
//           <BsPersonCircle
//             className='icon profile-icon'
//             onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//           />

//           {showProfileDropdown && (
//             <div className='dropdown-card'>
//               <p className='dropdown-name'>Hello, {userName || 'User'}</p>
//               <p className='dropdown-email'>{officialEmail || 'Please login'}</p>
//               <button onClick={handleLogout} className='logout-btn'>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className='mobile-menu'>
//         <button
//           className='mobile-menu-button'
//           onClick={() => setShowIcons(!showIcons)}
//         >
//           <BsThreeDotsVertical className='icon' />
//         </button>

//         {showIcons && (
//           <div className='mobile-icons-dropdown'>
//             <BsFillBellFill className='icon' onClick={() => navigate('/queries')} />
//             <BsFillEnvelopeFill className='icon' onClick={() => navigate('/EmailHistory')} />
//             <BsPersonCircle 
//               className='icon' 
//               onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
//             />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsThreeDotsVertical,
//   BsSearch
// } from 'react-icons/bs';

// function Header({ OpenSidebar }) {
//   const navigate = useNavigate(); 
//   const [showIcons, setShowIcons] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [officialEmail, setOfficialEmail] = useState("");

//   useEffect(() => {
//     const email = localStorage.getItem("officialEmail");
//     setOfficialEmail(email);

//     if (!email) {
//       navigate("/login"); // Redirect if not logged in
//       return;
//     }

//     // Fetch user details
//     fetch("http://localhost:5000/api/user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ officialEmail: email }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.name) {
//           setUserName(data.name);
//         } else {
//           console.error("No user name found for this email");
//         }
//       })
//       .catch((err) => console.error("Failed to fetch user data", err));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("officialEmail");
//     setUserName("");
//     setOfficialEmail("");
//     navigate("/login"); // Use navigate for consistency
//   };

//   return (
//     <header className='header'>
//       <div className='header-left'>
//         <BsSearch className='icon' />
//         <input type='text' placeholder='Search' />
//       </div>

//       <div className='header-right desktop-icons'>
//         <BsFillBellFill className='icon' onClick={() => navigate('/queries')} />

//         {/* MAIL ICON */}
//         <div 
//           className='mail-container' 
//           onClick={() => navigate('/EmailHistory')}  
//         >
//           <BsFillEnvelopeFill className='icon' />
//         </div>

//         {/* PROFILE */}
//         <div className='profile-container'>
//           <BsPersonCircle
//             className='icon profile-icon'
//             onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//           />

//           {showProfileDropdown && (
//             <div className='dropdown-card'>
//               <p className='dropdown-name'>Hello, {userName || 'User'}</p>
//               <p className='dropdown-email'>{officialEmail || 'Please login'}</p>
//               <button onClick={handleLogout} className='logout-btn'>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className='mobile-menu'>
//         <button
//           className='mobile-menu-button'
//           onClick={() => setShowIcons(!showIcons)}
//         >
//           <BsThreeDotsVertical className='icon' />
//         </button>

//         {showIcons && (
//           <div className='mobile-icons-dropdown'>
//             <BsFillBellFill className='icon' onClick={() => navigate('/queries')} />
//             <BsFillEnvelopeFill className='icon' onClick={() => navigate('/EmailHistory')} />
//             <BsPersonCircle 
//               className='icon' 
//               onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
//             />
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
  BsSearch
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  const [showIcons, setShowIcons] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in

  useEffect(() => {
    const email = localStorage.getItem('officialEmail');
    setOfficialEmail(email);

    if (!email) {
      navigate('/login'); // Redirect if not logged in
      return;
    }

    // Fetch user details
    fetch('http://localhost:5000/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ officialEmail: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setUserName(data.name);
          setIsLoggedIn(true); // User is logged in
        } else {
          console.error('No user name found for this email');
        }
      })
      .catch((err) => console.error('Failed to fetch user data', err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('officialEmail');
    setUserName('');
    setOfficialEmail('');
    setIsLoggedIn(false); // Update logged-in state
    navigate('/login'); // Use navigate for consistency
  };

  return (
    <header className="header">
      <div className="header-left">
        <BsSearch className="icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-right desktop-icons">
        <BsFillBellFill className="icon" onClick={() => navigate('/queries')} />

        {/* MAIL ICON */}
        <div className="mail-container" onClick={() => navigate('/EmailHistory')}>
          <BsFillEnvelopeFill className="icon" />
        </div>

        {/* PROFILE */}
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
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <button
          className="mobile-menu-button"
          onClick={() => setShowIcons(!showIcons)}
        >
          <BsThreeDotsVertical className="icon" />
        </button>

        {showIcons && (
          <div className="mobile-icons-dropdown">
            <BsFillBellFill className="icon" onClick={() => navigate('/queries')} />
            <BsFillEnvelopeFill className="icon" onClick={() => navigate('/EmailHistory')} />
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
