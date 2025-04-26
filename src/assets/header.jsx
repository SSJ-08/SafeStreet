// import React, { useState } from 'react';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch, BsX, BsThreeDotsVertical } from 'react-icons/bs';

// function Header({ OpenSidebar }) {
//   const [showIcons, setShowIcons] = useState(false);

//   return (
//     <header className='header'>

        
//         <div className='header-left'>
//             <BsSearch className='icon'/>
//             <input type='text' placeholder='Search'/><br/>

//         </div>
//         <div className='header-right desktop-icons'>
//         <BsFillBellFill className='icon' />
//         <BsFillEnvelopeFill className='icon' />
//         <BsPersonCircle className='icon' />
//       </div>
      
//       {/* Mobile menu button and dropdown */}
//       <div className='mobile-menu'>
//         <button className='mobile-menu-button' onClick={() => setShowIcons(!showIcons)}>
//           {showIcons ? <BsThreeDotsVertical className='icon' /> : <BsThreeDotsVertical className='icon' />}
//         </button>
        
        
//         {showIcons && (
//           <div className='mobile-icons-dropdown'>
//             <BsFillBellFill className='icon' />
//             <BsFillEnvelopeFill className='icon' />
//             <BsPersonCircle className='icon' />
//           </div>
//         )}
//       </div>
//     </header>        
//     )
// }
// export default Header;









// import React, { useState } from 'react';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsThreeDotsVertical, BsSearch } from 'react-icons/bs';

// function Header({ OpenSidebar }) {
//   const [showIcons, setShowIcons] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const handleLogout = () => {
//     // handle logout logic here
//     console.log("Logging out...");
//   };

//   return (
//     <header className='header'>
//       <div className='header-left'>
//         <BsSearch className='icon'/>
//         <input type='text' placeholder='Search'/>
//       </div>

//       <div className='header-right desktop-icons'>
//         <BsFillBellFill className='icon' />
//         <BsFillEnvelopeFill className='icon' />
        
//         <div className='profile-container'>
//           <BsPersonCircle 
//             className='icon profile-icon' 
//             onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
//           />

//           {showProfileDropdown && (
//             <div className='dropdown-card'>
//               <p className='dropdown-name'>Hello, YourName</p>
//               <button onClick={handleLogout} className='logout-btn'>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className='mobile-menu'>
//         <button className='mobile-menu-button' onClick={() => setShowIcons(!showIcons)}>
//           <BsThreeDotsVertical className='icon' />
//         </button>

//         {showIcons && (
//           <div className='mobile-icons-dropdown'>
//             <BsFillBellFill className='icon' />
//             <BsFillEnvelopeFill className='icon' />
//             <BsPersonCircle className='icon' />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsThreeDotsVertical,
  BsSearch
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [showIcons, setShowIcons] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Get the user's email from localStorage
    const email = localStorage.getItem("userEmail");

    if (email) {
      // Call your backend API to get the user's name using the stored email
      fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserName(data.name); // Set the user's name in state
        })
        .catch((err) => console.error("Failed to fetch user data", err));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear the email from localStorage
    setUserName(null); // Clear the user data from state
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <header className='header'>
      <div className='header-left'>
        <BsSearch className='icon' />
        <input type='text' placeholder='Search' />
      </div>

      <div className='header-right desktop-icons'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />

        <div className='profile-container'>
          <BsPersonCircle
            className='icon profile-icon'
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          />

          {showProfileDropdown && (
            <div className='dropdown-card'>
              <p className='dropdown-name'>Hello, {userName || 'User'}</p>
              <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className='mobile-menu'>
        <button
          className='mobile-menu-button'
          onClick={() => setShowIcons(!showIcons)}
        >
          <BsThreeDotsVertical className='icon' />
        </button>

        {showIcons && (
          <div className='mobile-icons-dropdown'>
            <BsFillBellFill className='icon' />
            <BsFillEnvelopeFill className='icon' />
            <BsPersonCircle className='icon' />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;