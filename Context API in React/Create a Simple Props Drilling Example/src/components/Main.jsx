import React from 'react';
import Bottom from './Bottom';

const Main = ({ userName }) => {
  return (
    <div>
      <h2>Main Component</h2>
      <Bottom userName={userName} />
    </div>
  );
};

export default Main;
