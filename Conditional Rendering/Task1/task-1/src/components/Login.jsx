import React, { useState } from 'react';

function LoginLogout() {
  // State to track user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler for login/logout button
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default LoginLogout;
