import React from 'react';
import './Sidebar.css'; // Pour les styles
import { FaHome, FaCog } from 'react-icons/fa';

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
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Mon Entreprise</div>
      <ul className="sidebar-menu">
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <a href={item.link} className="sidebar-link">
              {item.icon}
              <span className="sidebar-title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
