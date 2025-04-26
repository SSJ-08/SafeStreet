import React from 'react';
const ForgotPassword = () => {
  return (
    <div className='forgotpwd-container'>
    <div className='forgotpwd'>
      <div className='title'>
        <h1>Forgot Password</h1>
        <div className='inputs'>UserName: </div>
          <input type='text' placeholder='Enter username'/><br/>
        <div className='inputs'>New Password: </div>
          <input type='password' placeholder='Enter new password'/>
          <button className="btn">Update password!</button>

      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
