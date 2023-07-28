"use client"

import { useState } from "react";

const Footer = () => {
  const [date,] = useState(new Date());

  return (
    <footer className="py-4 mt-auto text-sm border-t text-slate-900 border-t-gray-200">
      <div className="container">
        &copy; {date.getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
