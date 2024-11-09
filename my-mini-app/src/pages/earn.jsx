// src/pages/Earn.jsx
import React from "react";

function Earn() {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      {" "}
      {/* Menambahkan background untuk tes */}
      <header className="bg-black p-4 flex justify-between items-center">
        <a href="#" className="text-blue-500 flex items-center">
          <i className="fas fa-arrow-left mr-2"></i>
          Check the footprint map
        </a>
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <i className="fas fa-arrow-right"></i>
        </button>
      </header>
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold text-white">Earn PAWS</h1>{" "}
        {/* Menambahkan text warna putih */}
        <h2 className="text-xl font-bold mt-2 text-white">
          GET REWARDS <span className="font-normal">FOR COMPLETING QUESTS</span>
        </h2>
        <div className="flex mt-4 space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Limited
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
            In-game{" "}
            <span className="bg-gray-600 text-white px-2 py-1 rounded-full ml-1">
              5
            </span>
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
            Partners{" "}
            <span className="bg-gray-600 text-white px-2 py-1 rounded-full ml-1">
              1
            </span>
          </button>
        </div>
        <div className="bg-gray-900 p-4 mt-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gray-800 p-2 rounded-full mr-4">
              <i className="fas fa-paw text-white"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Check TG updates</h3>
              <p className="text-gray-500">+1,000 PAWS</p>
            </div>
          </div>
          <i className="fas fa-check text-white"></i>
        </div>
      </main>
      <footer className="bg-gray-900 p-4 flex justify-around">
        <a href="#" className="flex flex-col items-center text-gray-400">
          <i className="fas fa-home text-2xl"></i>
          <span>Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400">
          <i className="fas fa-trophy text-2xl"></i>
          <span>Leaderboard</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400">
          <i className="fas fa-user-friends text-2xl"></i>
          <span>Friends</span>
        </a>
        <a href="#" className="flex flex-col items-center text-blue-500">
          <i className="fas fa-clipboard-list text-2xl"></i>
          <span>Earn</span>
        </a>
      </footer>
    </div>
  );
}

export default Earn;
