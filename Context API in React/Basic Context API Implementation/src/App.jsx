import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import NestedComponent from './components/NestedComponent';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#333' : '#f9f9f9',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s',
  };

  return (
    <div style={appStyle}>
      <h1>Context API Theme Example</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <NestedComponent />
    </div>
  );
};

export default App;
