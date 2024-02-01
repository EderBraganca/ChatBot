import React, { useState } from 'react'
import { Container } from './Header.js'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../SideBar/SideBar.jsx'
import Chat from '../Chat/Chat.jsx'

const Header = () => {
  const [chat, setFullChat] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const menuChat = () => {
    setFullChat(prevChat => !prevChat); 
    setSidebar(!sidebar);
  }
  
  return (
    <Container>
      <FaBars onClick={menuChat} />
      {chat && <Chat active={() => setFullChat(chat)} />}
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header