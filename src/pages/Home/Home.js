import React, { useState } from 'react';
import Chat from '../../components/Chat/Chat.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import Header from '../../components/Header/Header.jsx';
import './Home.css';

const Home = ({ toggleTheme }) => {
  const [active, setIsSidebarOpen] = useState(true);
  const [activeChat, setIsHideChat] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!active);
    setIsHideChat(!activeChat);
  };

  return (
    <div>
      <Header onSidebarToggle={toggleSidebar} themeToggle={toggleTheme}/>
      <SideBar active={active} toggleSidebar={toggleSidebar} />
      <Chat active={activeChat}  />
    </div>
  );
};

export default Home;
