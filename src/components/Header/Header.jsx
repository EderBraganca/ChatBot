import React from 'react'
import { Container } from './Header.js'
import { FaBars , FaAdjust } from 'react-icons/fa'

const Header = ({ onSidebarToggle }, { themeToggle} ) => {
  return (
    <Container>
      <FaBars onClick={onSidebarToggle} />
      <FaAdjust onClick={themeToggle} />
    </Container>
  )
}

export default Header