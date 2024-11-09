import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Mengimpor komponen-komponen halaman
import Home from "./pages/Home.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Friends from "./pages/InviteFriends.jsx";
import Earn from "./pages/earn.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-4">
          <div className="text-xl font-bold">
            PAWS <i className="fas fa-check-circle text-blue-500"></i>
          </div>
          <i className="fas fa-ellipsis-v text-xl"></i>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-around w-full bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex flex-col items-center">
            <Link to="/" className="text-white">
              <i className="fas fa-home text-xl"></i>
              <span>Home</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/leaderboard" className="text-white">
              <i className="fas fa-trophy text-xl"></i>
              <span>Leaderboard</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/friends" className="text-white">
              <i className="fas fa-user-friends text-xl"></i>
              <span>Friends</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/earn" className="text-white">
              <i className="fas fa-coins text-xl"></i>
              <span>Earn</span>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow w-full bg-gray-900 p-4 rounded-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/earn" element={<Earn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
