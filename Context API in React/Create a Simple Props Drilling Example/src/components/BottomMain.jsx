import React from 'react';
import BottomMainRight from './BottomMainRight';

const BottomMain = ({ userName }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h4>BottomMain Component</h4>
      <BottomMainRight userName={userName} />
    </div>
  );
};

export default BottomMain;
