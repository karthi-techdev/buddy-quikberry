import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import {
  faHouse,
  faPenToSquare,
  faImage,
  faSignOutAlt,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const location = useLocation();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  useEffect(() => {
    if (isLogoutModalOpen) {
      setShowModal(true);
    }
  }, [isLogoutModalOpen]);

  return (
    <>
      <button onClick={() => setMobileOpen(!isMobileOpen)} className="md:hidden fixed top-4 left-4 z-50 text-white p-2 cursor-pointer">
        <FontAwesomeIcon icon={isMobileOpen ? faTimes : faBars} className="text-xl" />
      </button>

      <div className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-[#0d1525] text-white p-4 space-y-4 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="space-y-2 pt-10 md:pt-0">
          <MenuItem icon={faHouse} label="Home" to="/" active={location.pathname === '/'} />
          <MenuItem icon={faPenToSquare} label="Post" to="/post" active={location.pathname === '/post'} />
          <MenuItem icon={faImage} label="Photos" to="/photo" active={location.pathname === '/photo'} />
        </div>
        <div className="mt-auto">
          <button onClick={() => setLogoutModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 w-full text-sm font-medium text-white bg-red-600 cursor-pointer rounded-xl hover:bg-red-700 transition-all duration-300">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-90 z-50 transition-opacity duration-300 ease-out">
          <div className={`bg-white p-6 rounded-lg shadow-lg w-[300px] transform transition-all duration-500 ease-out ${showModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h3 className="text-lg text-black font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-between">
              <button onClick={() => setLogoutModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer">
                Cancel
              </button>
              <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer" >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MenuItem = ({ icon, label, to, active }) => {
  return (
    <Link to={to} className="block group">
      <div className={`flex items-center space-x-3 px-3 py-4 rounded-xl transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#1e3a8a] group-hover:to-[#2563eb] group-hover:shadow-lg group-hover:scale-[1.03] ${active ? 'bg-[#1a2d49]' : 'bg-transparent'}`}>
        <FontAwesomeIcon icon={icon} className="text-lg text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-white">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SideBar;
