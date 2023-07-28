import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container max-w-screen-lg py-3">
      {children}
    </div>
  );
}

export default Container;
