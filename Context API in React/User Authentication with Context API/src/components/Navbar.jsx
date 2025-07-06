import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;
