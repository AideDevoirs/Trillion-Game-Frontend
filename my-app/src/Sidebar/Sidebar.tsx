import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaCog, FaBars, FaTimes } from 'react-icons/fa';

interface SidebarItem {
  title: string;
  icon?: React.ReactNode;
  link: string;
}

const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", icon: <FaHome />, link: "/dashboard" },
  { title: "Settings", icon: <FaCog />, link: "/settings" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">TG</div>
        <ul className="sidebar-menu">
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <a href={item.link} className="sidebar-link">
                {item.icon}
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
