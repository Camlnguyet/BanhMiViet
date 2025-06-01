import React from 'react';
import './Sidebar.css';

const menuItemsTop = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "🛒", label: "Orders" },
  { icon: "📦", label: "Products" },
  { icon: "👥", label: "Customers" },
  { icon: "📄", label: "Reports" },
  { icon: "💲", label: "Discounts" },
];

const menuItemsBottom = [
  { icon: "🔗", label: "Integrations" },
  { icon: "❓", label: "Help" },
  { icon: "⚙️", label: "Settings" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">🟧 BanhMyViet</div>
      <ul className="menu">
        {menuItemsTop.map((item, index) => (
          <li key={index} className={item.active ? "active" : ""}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="menu">
        {menuItemsBottom.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
