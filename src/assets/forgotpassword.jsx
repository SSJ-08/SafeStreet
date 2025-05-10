// import React from 'react';
// const ForgotPassword = () => {
//   return (
//     <div className='forgotpwd-container'>
//     <div className='forgotpwd'>
//       <div className='title'>
//         <h1>Forgot Password</h1>
//         <div className='inputs'>UserName: </div>
//           <input type='text' placeholder='Enter username'/><br/>
//         <div className='inputs'>New Password: </div>
//           <input type='password' placeholder='Enter new password'/>
//           <button className="btn">Update password!</button>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // importing eye icons

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='forgotpwd-container'>
      <div className='forgotpwd'>
        <div className='title'>
          <h1>Forgot Password</h1>

          <div className='inputs'>Username:</div>
          <input type='text' placeholder='Enter username' /><br />

          <div className='inputs'>New Password:</div>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter new password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ paddingRight: '40px' }} // Make space for icon
            />
            <div
              onClick={handleTogglePassword}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '20px',
                color: '#fff' , 
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button className="btn" style={{ marginTop: '20px' }}>
            Update Password!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
