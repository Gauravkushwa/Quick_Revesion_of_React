import React, { useState } from 'react';
import Main from './components/Main';

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <Main userName={userName} />
    </div>
  );
};

export default App;
