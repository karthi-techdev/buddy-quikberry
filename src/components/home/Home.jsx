import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faClipboardList } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../assets/img/profile-img.jpg';
const Home = () => {
  return (
    <div className="text-white p-4 space-y-6 pb-20 bg-[#0F172A]">
      <div className="bg-gradient-to-r from-[#1c2b45] to-[#2e3e60] p-6 rounded-2xl shadow flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, Karthi!</h1>
          <p className="text-gray-400 text-sm">Here's what’s happening in your world today.</p>
        </div>
        <img src={profileImg} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white object-cover"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1c2b45] p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Friends</h2>
          <p className="text-gray-400 text-sm mt-1">128 total connections</p>
        </div>
        <div className="bg-[#1c2b45] p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Photos</h2>
          <p className="text-gray-400 text-sm mt-1">56 new this month</p>
        </div>
        <div className="bg-[#1c2b45] p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-400 text-sm mt-1">3 unread messages</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#1c2b45] p-4 rounded-xl shadow col-span-2">
          <h3 className="text-xl font-semibold mb-3">Recent Messages</h3>
          <div className="space-y-3">
            {['Sanjay', 'Kishore', 'Ajai'].map((name, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <img src={profileImg} alt={name} className="w-10 h-10 rounded-full object-cover"/>
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-gray-400">"Hey, how's it going?"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1c2b45] p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Notifications</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><FontAwesomeIcon icon={faBell} className="text-white-500 text-sm" /> Sanjay liked your photo.</li>
            <li><FontAwesomeIcon icon={faBell} className="text-white-500 text-sm" /> You have a new friend request.</li>
            <li><FontAwesomeIcon icon={faBell} className="text-white-500 text-sm" /> Kumar mentioned you in a comment.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#1c2b45] p-4 rounded-xl shadow col-span-2">
          <h3 className="text-xl font-semibold mb-3">Recent Activity</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><FontAwesomeIcon icon={faClipboardList} className="text-white-500 text-sm" /> You posted a new photo.</li>
            <li><FontAwesomeIcon icon={faClipboardList} className="text-white-500 text-sm" /> Kishore commented on your post.</li>
            <li><FontAwesomeIcon icon={faClipboardList} className="text-white-500 text-sm" /> You updated your bio.</li>
          </ul>
        </div>

        <div className="bg-[#1c2b45] p-4 rounded-xl shadow mb-50">
          <h3 className="text-xl font-semibold mb-3">Friend List</h3>
          <div className="space-y-3">
            {['Sanjay', 'Kishore', 'Ajai'].map((friend, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <img src={profileImg} alt={friend} className="w-8 h-8 rounded-full object-cover"/>
                <span className="text-sm">{friend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
