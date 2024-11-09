// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">PAWS</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/leaderboard" className="text-white">
          Leaderboard
        </Link>
        <Link to="/friends" className="text-white">
          Friends
        </Link>
        <Link to="/earn" className="text-white">
          Earn
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
