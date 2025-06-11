import React from 'react';
import './Topbar.css';
import avatar from '../assets/img/avatar.jpg';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1>Dashboard</h1>
      </div>
      <div className="topbar-right">
        <input type="text" placeholder="Search stock, order, etc" className="search-input" />
        <div className="topbar-icons">
          <span className="icon">💬</span>
          <span className="icon">🔔</span>
        </div>
        <div className="topbar-user">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <div>
            <div className="username">Admin</div>
            <div className="role">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;