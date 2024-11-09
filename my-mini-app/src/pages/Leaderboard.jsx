import React, { useState, useEffect } from "react";

const LeaderboardItem = ({ rank, name, paws, id, isTop }) => {
  return (
    <div
      className={`bg-${
        isTop ? "yellow-500" : "gray-800"
      } text-white p-4 rounded-lg flex justify-between items-center mb-2`}
    >
      <div className="flex items-center">
        <i className="fas fa-paw text-2xl mr-2"></i>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-gray-500">{paws} PAWS</div>
        </div>
      </div>
      <div className="text-gray-500">{`#${id}`}</div>
    </div>
  );
};

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  // Fetch leaderboard data from a server or an API
  useEffect(() => {
    // Simulating an API request
    setTimeout(() => {
      setLeaderboardData([
        { rank: 1, name: "imGet", paws: 69993345, id: 9172179 },
        { rank: 2, name: "Pishnahad_Sup", paws: 57252887, id: 8273127 },
        { rank: 3, name: "Yuasdh", paws: 14250, id: 9723792 },
      ]);
      setTotalUsers(28998268); // Simulating a total users count
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 bg-black text-white">
        <div className="flex items-center">
          <span className="text-xl font-bold">PAWS</span>
          <i className="fas fa-check-circle text-blue-500 ml-2"></i>
        </div>
        <i className="fas fa-ellipsis-v"></i>
      </header>

      {/* Footprint Map Section */}
      <div className="w-full bg-black text-white p-4 flex items-center justify-between">
        <span>Check the footprint map</span>
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full p-4 bg-black text-white">
        <div className="text-center">
          <i className="fas fa-trophy text-6xl text-yellow-500"></i>
          <h1 className="text-2xl font-bold mt-2">Leaderboard</h1>
        </div>

        <div className="w-full text-center mt-4">
          <span className="text-gray-400">Total</span>
          <span className="text-white font-bold">{totalUsers} users</span>
        </div>

        {/* Leaderboard List */}
        <div className="w-full mt-4">
          {leaderboardData.length > 0 ? (
            leaderboardData.map((user, index) => (
              <LeaderboardItem
                key={user.id}
                rank={user.rank}
                name={user.name}
                paws={user.paws}
                id={user.id}
                isTop={index < 3}
              />
            ))
          ) : (
            <div className="text-white text-center">Loading leaderboard...</div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white p-4 flex justify-around">
        <div className="flex flex-col items-center">
          <i className="fas fa-home text-2xl"></i>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-trophy text-2xl text-blue-500"></i>
          <span className="text-xs">Leaderboard</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-user-friends text-2xl"></i>
          <span className="text-xs">Friends</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-coins text-2xl"></i>
          <span className="text-xs">Earn</span>
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;
