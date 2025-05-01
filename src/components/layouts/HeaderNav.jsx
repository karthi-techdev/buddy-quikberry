import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../assets/img/profile-img.jpg';

const HeaderNav = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between z-40 bg-[#121d2f] p-3 text-white gap-3 w-full">
      <div className="flex items-center text-xl font-semibold space-x-1 w-full md:w-auto justify-center md:justify-start">
        <div className="text-white-500 text-3xl">Buddy.</div>
      </div>

      <div className="flex-grow w-full md:max-w-md md:mx-8 order-3 md:order-none">
        <input type="text"  placeholder="Search Friends" className="w-full px-4 py-2 bg-[#1c2b45] text-sm text-white rounded-md outline-none placeholder-gray-400"/>
      </div>

      <div className="flex items-center justify-between md:justify-end space-x-5 w-full md:w-auto order-2 md:order-none">
        <button className="text-lg hover:text-gray-300">
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <div className="relative">
          <button className="text-lg hover:text-gray-300">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
            6
          </span>
        </div>

        <button className="text-lg hover:text-gray-300">
          <FontAwesomeIcon icon={faCommentDots} />
        </button>

        <img src={profileImg} alt="Profile" className="w-8 h-8 rounded-full object-cover"/>
      </div>

    </div>
  );
};

export default HeaderNav;