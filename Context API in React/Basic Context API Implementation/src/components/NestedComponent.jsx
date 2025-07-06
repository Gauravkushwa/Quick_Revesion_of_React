import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import DeepNestedComponent from './DeepNestedComponent';

const NestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === 'light' ? '#e2e8f0' : '#555',
    padding: '15px',
    marginTop: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={boxStyle}>
      <h3>Nested Component</h3>
      <DeepNestedComponent />
    </div>
  );
};

export default NestedComponent;
