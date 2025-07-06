import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#eee', padding: '10px' }}>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
