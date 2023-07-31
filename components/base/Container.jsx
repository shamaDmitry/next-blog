import React from 'react';

const Container = ({ children }) => {
  return (
    <section className="container flex-1 max-w-screen-lg py-3">
      {children}
    </section>
  );
}

export default Container;
