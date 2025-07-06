import React from 'react';

const BottomMainRight = ({ userName }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h5>BottomMainRight Component</h5>
      <p><strong>Hello, {userName || "Guest"}!</strong></p>
    </div>
  );
};

export default BottomMainRight;
