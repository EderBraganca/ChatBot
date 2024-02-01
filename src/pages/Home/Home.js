import React, { useState } from 'react';
import Chat from '../../components/Chat/Chat.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import Header from '../../components/Header/Header.jsx';
import './Home.css';

const Home = () => {
  const [active, setIsSidebarOpen] = useState(false);
  const [activeChat, setIsHideChat] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!active);
    setIsHideChat(!activeChat);
  };  

  const toggleTheme = () => {
    console.log("toggle theme");
  };


  return (
    <div>
      <Header onSidebarToggle={toggleSidebar} />
      <SideBar active={active} toggleSidebar={toggleSidebar} />
      <Chat active={activeChat} themeToggle={toggleTheme}/>
    </div>
  );
};

export default Home;
