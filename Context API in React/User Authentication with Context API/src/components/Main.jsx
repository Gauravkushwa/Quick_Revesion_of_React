import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ marginBottom: '20px' }}>
      <h2>{isLoggedIn ? 'You are logged in!' : 'You are not logged in.'}</h2>
    </main>
  );
};

export default Main;
