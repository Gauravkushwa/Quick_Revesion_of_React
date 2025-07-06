import React from 'react';
import BottomMain from './BottomMain';

const Bottom = ({ userName }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3>Bottom Component</h3>
      <BottomMain userName={userName} />
    </div>
  );
};

export default Bottom;
