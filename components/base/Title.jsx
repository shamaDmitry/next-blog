import React from 'react';

const Title = ({ children }) => {
  return (
    <h1 className="mb-4 text-xl font-bold capitalize">
      {children}
    </h1>
  );
}

export default Title;
