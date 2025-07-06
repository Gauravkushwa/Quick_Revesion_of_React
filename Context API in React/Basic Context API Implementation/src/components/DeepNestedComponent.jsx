import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DeepNestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const innerBox = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#777',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '4px',
  };

  return (
    <div style={innerBox}>
      <p>This is a deeply nested component using the {theme} theme.</p>
    </div>
  );
};

export default DeepNestedComponent;
