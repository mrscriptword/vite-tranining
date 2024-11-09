// src/pages/InviteFriends.jsx
import React from "react";

const InviteFriends = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black text-white">
        <div className="flex items-center">
          <span className="font-bold text-lg">PAWS</span>
          <i className="fas fa-check-circle text-blue-500 ml-2"></i>
        </div>
        <i className="fas fa-ellipsis-v"></i>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="flex items-center justify-between bg-gray-900 p-2 rounded-md mb-4">
          <span>Check the footprint map</span>
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Invite Section */}
        <div className="bg-gray-800 p-4 rounded-md space-y-4">
          <h1 className="text-xl font-bold mb-2">INVITE FRIENDS</h1>
          <p className="text-gray-400">
            <span className="font-bold text-white">SHARE</span> YOUR INVITATION
            LINK & <span className="font-bold text-white">GET 10%</span> OF
            FRIEND'S POINTS
          </p>

          <div className="bg-gray-900 p-4 rounded-md flex flex-col items-center justify-center mb-4">
            <img
              src="https://placehold.co/100x100"
              alt="Two paw prints, one white and one gray"
              className="mb-2 rounded-full"
            />
            <p className="text-gray-400">There is nothing else.</p>
          </div>

          {/* Invitation Link */}
          <div className="bg-gray-900 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                className="bg-gray-800 text-white p-2 rounded-md w-3/4"
                value="https://paws.com/invite/yourlink"
                readOnly
              />
              <button className="bg-blue-500 text-white p-2 rounded-md ml-2">
                <i className="fas fa-copy"></i> Copy
              </button>
            </div>
          </div>

          {/* Invite Button */}
          <button className="bg-blue-500 text-white w-full py-2 rounded-md">
            Invite
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-4 flex justify-around">
        <div className="flex flex-col items-center">
          <i className="fas fa-home text-white"></i>
          <span className="text-white text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-trophy text-white"></i>
          <span className="text-white text-sm">Leaderboard</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-users text-blue-500"></i>
          <span className="text-blue-500 text-sm">Friends</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-coins text-white"></i>
          <span className="text-white text-sm">Earn</span>
        </div>
      </footer>
    </div>
  );
};

export default InviteFriends;
