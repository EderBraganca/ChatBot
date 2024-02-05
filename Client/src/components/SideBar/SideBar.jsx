import React from 'react'
import { Container, Content } from './SideBar.js'
import './SideBarItem.jsx'
import { FaHouseUser, FaUniversity  } from "react-icons/fa"
import { IoMdSchool } from "react-icons/io"
import SideBarItem from './SideBarItem.jsx'


const SideBar = ({ active }) => {
  return (
    <Container sidebar={active}>
      <Content>
        <a href="https://www.ufop.br/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
          <SideBarItem Icon={FaUniversity} Text="Site da UFOP" />
        </a>
        <a href="https://www.minhaufop.ufop.br" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
          <SideBarItem Icon={FaHouseUser} Text="Minha UFOP" />
        </a>        
        <a href="https://moodlepresencial.ufop.br" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
          <SideBarItem Icon={IoMdSchool} Text="Moodle UFOP" />
        </a>
      </Content>
    </Container>
  )
}

export default SideBar